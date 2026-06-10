/**
 * Cattura screenshot da URL remoti e li ottimizza in WebP.
 * Esecuzione manuale: node scripts/capture.mjs
 * Gli scatti vengono committati in public/shots/.
 */

import { chromium } from 'playwright'
import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../public/shots')

const MAX_KB = 200
const QUALITY = 82

async function shot(page, url, file, width, height) {
  console.log(`  → ${url} (${width}×${height})`)
  await page.setViewportSize({ width, height })
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
  await page.waitForTimeout(1200)
  const png = await page.screenshot({ type: 'png', fullPage: false })
  const webp = await sharp(png)
    .resize(width, height, { fit: 'cover' })
    .webp({ quality: QUALITY })
    .toBuffer()
  const kb = Math.round(webp.length / 1024)
  const out = `${OUT}/${file}`
  writeFileSync(out, webp)
  console.log(`     ✓ ${file} — ${kb}KB`)
  if (kb > MAX_KB) console.warn(`     ⚠ supera ${MAX_KB}KB — considera quality inferiore`)
}

async function main() {
  console.log('Avvio Playwright Chromium…')
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // Villa Levante
  await shot(page, 'https://villa-levante-demo.vercel.app', 'villa-levante-desktop.webp', 1440, 900)
  await shot(page, 'https://villa-levante-demo.vercel.app', 'villa-levante-mobile.webp', 390, 844)

  // Villa Levante — prova ad aprire la chat
  try {
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.goto('https://villa-levante-demo.vercel.app', { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(1200)
    const launcher = await page.$('[data-chat-launcher], button[aria-label*="chat"], button[aria-label*="Chat"], .chat-launcher')
    if (launcher) {
      await launcher.click()
      await page.waitForTimeout(1800)
      const png = await page.screenshot({ type: 'png', fullPage: false })
      const webp = await sharp(png).webp({ quality: QUALITY }).toBuffer()
      writeFileSync(`${OUT}/villa-levante-chat.webp`, webp)
      console.log(`     ✓ villa-levante-chat.webp — ${Math.round(webp.length / 1024)}KB`)
    } else {
      console.log('     ℹ launcher chat non trovato — villa-levante-chat.webp saltato')
    }
  } catch (e) {
    console.log(`     ℹ chat screenshot saltato: ${e.message}`)
  }

  // Softale
  await shot(page, 'https://softale.app', 'softale-desktop.webp', 1440, 900)

  await browser.close()
  console.log('\nFatto. Committa public/shots/ nel repo.')
}

main().catch((e) => { console.error(e); process.exit(1) })
