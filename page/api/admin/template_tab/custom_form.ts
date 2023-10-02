import { expect, Page ,APIRequestContext} from "@playwright/test";

export class CustomeFormAPIPage {
    page : Page;
    authdomain: String;
    maindomain: String;
    userdomain: String;
    tokenLogin: String;
    status: number;
    resjson: JSON;
    idcreated: String;
   
    constructor(page : Page,authdomain: String, maindomain: String, userdomain: String) {
        this.page=page;
        this.authdomain=authdomain;
        this.maindomain=maindomain;
        this.userdomain=userdomain;
        this.tokenLogin = "";
        this.status = 0;
        this.resjson;
    }

     /**
     * Get access token
     * @returns token
     */
    async getToken(request: APIRequestContext) {
        const res = await request.post(`https://${this.authdomain}/sign-in`, {
                data: { username: "tuuvv.uit@gmail.com", password: "123456" },
                headers: {
                    'accept': "*/*",
                    'Content-Type': 'application/json'
                },
            }) //200,201,
        const resjson = await res.json();
        this.tokenLogin = resjson.token;
    }
    
}

    