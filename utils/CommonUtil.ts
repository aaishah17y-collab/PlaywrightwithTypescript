 
import { test, expect } from "@playwright/test";
// @ts-ignore — crypto-js typings are not installed in this project.

import CryptoJS from "crypto-js";
import process from "process";
export default class CommonUtil{

    private secretkey : string ;

    constructor(){

       // this.secretkey = process.env.SECRET_KEY ? process.env.SECRET_KEY :"";
        if(process.env.SECRET_KEY){

        this.secretkey = process.env.SECRET_KEY;

    }
    else
        { throw new Error("Please provide secret key while starting execution.")
    }}
    


    public encryptData(data :string){
               const encryptedData = CryptoJS.AES.encrypt(data, this.secretkey).toString();
      console.log(encryptedData);
      return encryptedData;
    }
public decryptData(encData: string){

    const decryptedData = CryptoJS.AES.decrypt(encData , this.secretkey).toString(CryptoJS.enc.UTF8);
return decryptedData;
}
}
