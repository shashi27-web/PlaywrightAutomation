// tests/example.spec.js
// @ts-check
import { test, expect } from '@playwright/test';

test('check Playwright homepage title and URL', async ({ page }) => {
  // Navigate to Playwright website
  await page.goto('https://playwright.dev/');

  // Assert page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Assert current URL
  await expect(page).toHaveURL('https://playwright.dev/');
});
