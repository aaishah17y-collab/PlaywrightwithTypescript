import {test,expect} from '@playwright/test';

test('Iframe',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/iframe');

const frame=page.frameLocator('#mce_0_ifr');

const editor =frame.locator('#tinymce');
await editor.click();
await editor.press('Control+A');
await editor.press('Backspace');
await editor.fill('Hello I am learning Playwright');
await expect(editor).toHaveText('Hello I am learning Playwright');

});