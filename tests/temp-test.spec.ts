import {test} from '../fixtures/pom-fixture';
import CommonUtil from '../utils/CommonUtil';
test('Temp test',async({page, loginPage})=>{

    console.log(process.env.BASE_URL);
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);

    const commonUtilObj = new CommonUtil();
    commonUtilObj.encryptData('Admin');

    await loginPage.gotoOrganeHRM();
   await loginPage.loginOrganeHRM('Admin','admin123');

})