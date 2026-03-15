import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';


test('Locators In playwright', async ({ page }) => {
  // go to url
  // await page.goto('https://github.com/ashishmaithani17', { timeout: 60000 });

  //get by role
  // await page.getByRole('link', { name: 'Sign in' }).click();


  // get by label
  //await page.getByLabel('Homepage', {exact : true}).first().click();

  //get by ALTattribute
  //await page.getByAltText('View ashishmaithani17\'s full-sized avatar',).click();


  //get by testid
  // await page.getByTestId('repositories').first().click();
  //

  // get by text
  // await page.getByText('Sign up').click();
  // await expect(page).toHaveURL('https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E&source=header')


  await page.goto('https://www.youtube.com/@testerstalk')
  await page.getByPlaceholder('Search').fill('Playwright')

});
