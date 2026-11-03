import { Page, Locator } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.usernameInput=page.getByRole('textbox', { name: 'Username' });
        this.passwordInput=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Login' });
    
    
    }
    /**To open URL browser */
    async gotoOrganeHRM(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    /**@param username and password */


   async loginOrganeHRM(userName:String ,password:String){
        await this.usernameInput.fill('Admin');
        await this.passwordInput.fill('admin123');
        this.loginButton.click();

    }





    



}  