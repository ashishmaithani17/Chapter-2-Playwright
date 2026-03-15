// Import playwright module
import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

// Write a test
test('Mouse actions in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://www.google.com/search?q=tester+talk', { timeout: 60000 });
    // When the Playwright Inspector pops up, solve the Captcha in the browser window, 
    // then click the "Resume" button in the Inspector overlay to continue your test!
    await page.pause();
    // Left button click
    await page.getByRole('link', { name: 'Testers Talk' }).first().click({ button: 'left' });

    // Middle button click
    // await page.getByRole('link', { name : 'Playwright by Testers Talk☑️'}).first().click({ button :'middle'});

    // Right button click
    //await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).first().click({ button: 'right' });

    // Mouse hover
    // await page.getByLabel('Search by voice').hover();

    // Double click
    // await page.getByLabel('Search by voice').dblclick();
});