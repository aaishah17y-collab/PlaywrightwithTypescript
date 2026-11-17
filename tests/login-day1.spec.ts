import {test , expect } from '@playwright/test';
import { LoginPage1} from '../pages/LoginPage1';


test('Day 1 - Locators practice', async ({ page}) =>{

    const loginPage = new LoginPage1(page);
    await loginPage.goto();
    await loginPage.Login('standard_user', 'secret_sauce');
    await loginPage.verifyLogingSuccess();





})


