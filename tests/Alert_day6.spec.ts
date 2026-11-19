import {test, expect} from '@playwright/test';

test('Day6-Alert',async({page})=> {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

page.once('dialog',dialog=>dialog.accept());
await page.getByRole('button',{name:'Click for JS Alert'}).click();
await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');


//Confirm alert

page.once('dialog',dialog=>dialog.dismiss());
await page.getByRole('button',{name:'Click for JS Confirm'}).click();
await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

//Prompt alert

page.once('dialog',dialog=>dialog.accept('Welcome'));
await page.getByRole('button',{name:'Click for JS Prompt'}).click();
await expect(page.locator('#result')).toHaveText('You entered: Welcome');


});