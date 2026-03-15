// Import playwright module
import { test, expect } from '@playwright/test';

// Write a test
test('Keyboard actions in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com');
    //USER ENTER KEYBOARD.
    await page.getByLabel('Search', { exact: true }).first().click();
    await page.getByLabel('Search', { exact: true }).first().fill('PLAYWRIGHT BY TESTER TALK');
    await page.getByLabel('Search', { exact: true }).first().press('Enter');

});