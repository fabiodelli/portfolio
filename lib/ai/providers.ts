import { anthropic } from "@ai-sdk/anthropic"
import { openai } from "@ai-sdk/openai"

export const primaryModel = anthropic("claude-haiku-4-5-20251001")
export const fallbackModel = openai("gpt-4o-mini")

export const MODEL_NAMES = {
  primary: "claude-haiku-4-5",
  fallback: "gpt-4o-mini",
} as const
