import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';


test('handle iframe and dropdown In playwright', async ({ page }) => {
    await page.goto('https://jqueryui.com/datepicker/', { timeout: 60000 });

    const iframe = page.frameLocator('.demo-frame');
    //hardcoded date
    // await iframe.locator('#datepicker').fill('12/25/2025');

    //dynamic date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('.ui-datepicker-today').click();

    //previous date
    // await iframe.locator('#datepicker').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="15"').click();


    //future date
    await iframe.locator('#datepicker').click();
    await iframe.locator('[title="Next"]').click();
    await iframe.locator('text="15"').click();
});