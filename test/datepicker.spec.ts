import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';


test('handle iframe and dropdown In playwright', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/', { timeout: 60000 });

    const iframe = page.frameLocator('.demo-frame');

    await iframe.locator('#datepicker').fill('');



});