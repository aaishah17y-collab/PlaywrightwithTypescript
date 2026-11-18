import {test, expect} from '@playwright/test';

test('Day4-Checkbox', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator('#checkboxes input').first();
    const checkbox2 = page.locator('#checkboxes input').last();

await checkbox1.check();
await expect(checkbox1).toBeChecked();
 

await checkbox2.uncheck();
await expect(checkbox2).not.toBeChecked();

});

