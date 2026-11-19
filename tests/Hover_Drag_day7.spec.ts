import { test, expect } from '@playwright/test';

//Part 1- Hover
test('Hover', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');
  await page.locator('.figure').first().hover();
  await expect (page.locator('.figcaption').first()).toContainText('user1');

  //Part 2-Drag and Drop

  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  const source = page.locator('#column-a');
  const target = page.locator('#column-b');
  await source.dragTo(target);
  await expect(source).toHaveText('B');
  await expect(target).toHaveText('A');


  
});
