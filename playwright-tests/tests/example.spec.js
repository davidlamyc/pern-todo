// @ts-check
const { test, expect } = require('@playwright/test');
const { v4: uuidv4 } = require('uuid');

test('create todo', async ({ page }, testInfo) => {
  await page.goto('localhost:3000');

  await expect(page).toHaveTitle(/React App/);

  const uuid = uuidv4();

  await page.getByRole('textbox').fill(uuid);
  await page.getByText('Add').click();

  await expect(page.getByRole('cell', { name: uuid })).toBeVisible({ timeout: 10000 });

  // await page.waitForTimeout(3000);

  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
});