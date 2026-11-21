import{test, expect } from '@playwright/test';
import path from 'path';


test('Dropdown Upload', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  const filePath = path.join(__dirname, '../utils/Dummy.txt');
  await page.locator('#file-upload').setInputFiles(filePath);
  await page.locator('#file-submit').click();
  await expect(page.locator('h3')).toHaveText('File Uploaded!');


  



});