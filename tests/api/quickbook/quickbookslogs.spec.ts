import { expect, test } from "@core/fixtures";
import { QuickBookLogPage } from "../../../page/api/quickbook/quickbookslogs";

  
 
  test("@Web Create API endpoint for displaying quickbooks logs. @TC_2643_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const QBLPAGE = new QuickBookLogPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await QBLPAGE.getToken(request); 
    const res = await request.get(`https://${QBLPAGE.maindomain}` + "/Logs/quickbooks", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + QBLPAGE.tokenLogin
            },
            params: {
                Days: 2,
                PageNumber: 1,
                PageSize: 10
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
 
