import { test, expect } from '@playwright/test';

test('Home Page DemoBlaze', async ({ page }) => {
  // Navigate to DemoBlaze homepage
  await page.goto('https://www.demoblaze.com/index.html');

  // Verify page title
  const pageTitle = await page.title();
  console.log('Page title is:', pageTitle); 

  await expect(page).toHaveTitle('STORE');

  // Verify current URL
  const pageURL = page.url();
  console.log('Page URL is:', pageURL);   
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

  // Close page (optional)
  await page.close();
});
