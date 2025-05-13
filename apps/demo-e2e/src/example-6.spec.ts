import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(15_000);

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('has title 2', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(15_000);

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('has title 3', async ({ page }) => {
  await page.goto('/');

  await page.waitForTimeout(15_000);

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
