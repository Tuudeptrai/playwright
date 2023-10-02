import { expect, test } from "@core/fixtures";
import { QuickBookNotShowPage } from "../../../page/api/quickbook/quickbooks_user_not_show_employee";

  
 
  test("@Web quickbook user not list in employee manage screen @TC_2891_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const QBLPAGE = new QuickBookNotShowPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await QBLPAGE.getToken(request); 
    const res = await request.get(`https://${QBLPAGE.userdomain}` + "/list", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + QBLPAGE.tokenLogin
            }, params:{
                "pageSize": 10000,
                "pageNumber": 1
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
        let checkquickbooks = false;
        for (let i = 0; i < resjson["users"].length -1; i++) {
            console.log(resjson["users"][i].userName);
            if(resjson["users"][i].userName.includes("quickbooks_") == true){
                checkquickbooks = true;
            }
        }
       await expect(checkquickbooks).toBeFalsy();
  });
 
