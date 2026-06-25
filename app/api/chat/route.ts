import { streamText, generateText, convertToModelMessages } from "ai"
import { NextRequest } from "next/server"
import { primaryModel, fallbackModel, MODEL_NAMES } from "@/lib/ai/providers"
import { PORTFOLIO_ASSISTANT_PROMPT } from "@/lib/ai/portfolio-assistant-prompt"

export const runtime = "edge"
export const maxDuration = 30

const MAX_TURNS = 16
const MAX_INPUT_CHARS = 1500

async function isPrimaryAvailable(): Promise<boolean> {
  try {
    await generateText({
      model: primaryModel,
      messages: [{ role: "user", content: "hi" }],
      maxOutputTokens: 1,
    })
    return true
  } catch {
    return false
  }
}

export async function POST(request: NextRequest) {
  const { messages } = await request.json()

  if (Array.isArray(messages) && messages.length > MAX_TURNS) {
    return new Response(
      JSON.stringify({
        error:
          "Per approfondire conviene parlarne di persona: scrivimi dalla pagina contatti o a contact@fabiodelli.com.",
      }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    )
  }

  const lastUser = Array.isArray(messages)
    ? [...messages].reverse().find((m: { role: string }) => m.role === "user")
    : null
  const lastText =
    (lastUser as { parts?: { type: string; text?: string }[] })?.parts
      ?.filter((p) => p.type === "text")
      .map((p) => p.text ?? "")
      .join("") ?? ""
  if (lastText.length > MAX_INPUT_CHARS) {
    return new Response(
      JSON.stringify({ error: "Messaggio troppo lungo, prova a sintetizzare." }),
      { status: 413, headers: { "Content-Type": "application/json" } }
    )
  }

  const primaryOk = await isPrimaryAvailable()
  const activeModel = primaryOk ? primaryModel : fallbackModel
  const modelName = primaryOk ? MODEL_NAMES.primary : MODEL_NAMES.fallback

  const coreMessages = await convertToModelMessages(messages)

  const result = streamText({
    model: activeModel,
    system: PORTFOLIO_ASSISTANT_PROMPT,
    messages: coreMessages,
    maxOutputTokens: 768,
    temperature: 0.6,
  })

  return result.toUIMessageStreamResponse({
    headers: { "x-model-used": modelName },
  })
}
