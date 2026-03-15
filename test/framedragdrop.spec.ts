import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';


test('handle iframe and dropdown In playwright', async ({ page }) => {
    await page.goto('https://jqueryui.com/droppable/', { timeout: 60000 });

    const iframe = page.frameLocator('.demo-frame');
    const draggable = iframe.locator('#draggable');
    const droppable = iframe.locator('#droppable');
    await draggable.dragTo(droppable);
    // await expect(droppable).toHaveText('Dropped!');



});
