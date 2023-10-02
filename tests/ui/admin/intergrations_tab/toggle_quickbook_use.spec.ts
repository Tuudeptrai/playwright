import { expect, test } from "@core/fixtures";
import { ToggleQuickbookUse } from "../../../../page/ui/admin/intergrations_tab/toggle_quickbook_use";
import { DB } from "../../../../src/core/utils/database";



test("@Web quickbookuse is update database @TC_3086_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const db = new DB();
    const lRSPage = new ToggleQuickbookUse(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain,conf.suiteConf.custdomain);
    await lRSPage.getToken(request);
        const resfalse = await request.get(`https://${lRSPage.maindomain}` + "/Company/81c248aa-bb76-4b5c-97b8-3b59419e97d3/UseQuickbooksOnline?useQuickbooksOnline=false" , {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + lRSPage.tokenLogin
            }
        }); //200,201,
        await expect(resfalse.status()).toBe(200);
        // let flag = db.query("SELECT * FROM `Company` where id = '81c248aa-bb76-4b5c-97b8-3b59419e97d3'")
        // console.log(flag)
        // await expect(flag).toBeFalsy();

        // const restrue = await request.get(`https://${lRSPage.maindomain}` + "/Company/81c248aa-bb76-4b5c-97b8-3b59419e97d3/UseQuickbooksOnline?useQuickbooksOnline=true" , {
        //     headers: {
        //         "Content-Type": "application/json; charset=utf-8",
        //         "Authorization": "Bearer " + lRSPage.tokenLogin
        //     }
        // }); //200,201,
      
        // db_flag = await db.connectDb("SELECT `UseQuickbooksOnline`  FROM `Company` where id = '81c248aa-bb76-4b5c-97b8-3b59419e97d3'");
        // await expect(db_flag).toBeTruthy();

  });
