import { Page ,Locator,expect} from "@playwright/test";
export class LoginPage1{
    readonly page :Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly SubmitButton : Locator;
    readonly successMessage: Locator;
    readonly logoutLink :Locator ;
    constructor(page:Page){

        this.page=page;
        this.usernameInput=page.getByLabel('Username');
        this.passwordInput=page.getByLabel('Password');
        this.SubmitButton=page.getByRole('button', { name: 'Submit' });
        this.successMessage=page.getByText('Congratulations student. You successfully logged in!');
        this.logoutLink=page.getByRole('link', { name: 'Log Out' });
    }
    async goto(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async Login(userName:String,password:String){
        await this.usernameInput.fill('student');
        await this.passwordInput.fill('Password123');
        await this.SubmitButton.click();
    }

    async verifyLogingSuccess(){
        await expect(this.page).toHaveURL(/logged-in-successfully/);
        await expect(this.successMessage).toBeVisible();
    }


}