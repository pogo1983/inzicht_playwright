import {InzichtSettings} from '/GIT/Inzicht3_playwright/POM/InzichtSettings/';

// @ts-check
const { test, expect } = require('@playwright/test/InzichtTest');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://04-inzicht2.imfint.local/#/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(inzicht2);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});