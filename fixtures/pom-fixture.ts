import{test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

 type PomFixtureType = {

    loginPage:LoginPage;
 }
export const test = baseTest.extend<PomFixtureType>({
    loginPage:async({page},use)=>{
        const loginPageObj =new LoginPage(page);
        await use(loginPageObj);
        

}}
)
