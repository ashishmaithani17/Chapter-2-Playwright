import { test, expect } from '@playwright/test';


test('How to handle Dropdowns In playwright', async ({ page }) => {

    await page.goto('https://www.facebook.com/reg/?entry_point=login&next=', { timeout: 60000 });
    await page.getByRole('textbox', { name: 'First name' }).fill('Ashish');
    await page.getByRole('textbox', { name: 'Surname', exact: true }).fill('Maithani');

    await page.getByLabel('Month').click();
    await page.getByRole('option', { name: 'Mar', exact: true }).click();
    await expect(page.getByLabel('Month')).toHaveText('March');
    await page.getByLabel('Day').click();
    await page.getByRole('option', { name: '14', exact: true }).click();

    await page.getByLabel('Year').click();
    await page.getByRole('option', { name: '1995', exact: true }).click();

});
