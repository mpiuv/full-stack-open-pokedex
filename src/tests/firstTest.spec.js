// eslint-disable-next-line no-unused-vars
import { test, expect } from '@playwright/test'
//const { test, describe, expect, beforeEach } = require('@playwright/test')

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:8080/')
    const element1 = await page.locator('text=ivysaur')
    await element1.waitFor({ state: 'visible' })
    await expect(element1).toBeVisible()
    const element = await page.locator('text=Pokémon and Pokémon character names are trademarks of Nintendo.')
    await element.waitFor({ state: 'visible' })
    await expect(element).toBeVisible()
  })
})