import { test, expect } from '@playwright/test';

test('check Playwright homepage title and URL', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL('https://playwright.dev/');
});
