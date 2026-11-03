import { test } from '@playwright/test';
import { LoginPage1 } from '../pages/LoginPage1';

test('Login with POM-My Code', async ({ page }) => {
    const loginPage = new LoginPage1(page);
    await loginPage.goto();
    await loginPage.Login('student', 'Password123');
    await loginPage.verifyLogingSuccess();
});