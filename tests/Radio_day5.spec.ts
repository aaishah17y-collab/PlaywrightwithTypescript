import { test,expect} from '@playwright/test';

test('Day5-RadioButton', async({page})=>{

    await page.goto('https://demoqa.com/radio-button');
   await page.locator('label[for="yesRadio"]').click();
   await expect(page.locator('p.mt-3')).toHaveText('You have selected Yes');
   //await page.locator('label[for="impressiveRadio"]').click();
   //await expect(page.locator('p.mt-3')).toHaveText('You have selected Impressive');
});
