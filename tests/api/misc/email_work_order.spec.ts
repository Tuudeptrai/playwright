import { expect, test } from "@core/fixtures";
import { EmailWorkOrderPage } from "@api/misc/email_work_order";
import fs from "fs";
import path from "path";



  test("@Web  Able to send a Work Order emai with GET email Work Order  for the Contracts & Forms tab @TC_2640_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const AIQOCPAGE = new EmailWorkOrderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await AIQOCPAGE.getToken(request); 
    const res = await request.get(`https://${AIQOCPAGE.maindomain}` + "/Job/00660782-407e-48e0-bdd0-2fe42ee1f5af/GetEstimateEmail", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + AIQOCPAGE.tokenLogin
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
  test("@Web  Able to send a Work Order email with PUT email Work Order  for the Contracts & Forms tab @TC_2640_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const AIQOCPAGE = new EmailWorkOrderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await AIQOCPAGE.getToken(request); 
    const file = path.resolve("data-test/", "certificate.jpg");
    const image = fs.readFileSync(file);
    const res = await request.post(`https://${AIQOCPAGE.maindomain}` + "/Job/070e4c89-9b7c-4614-a79b-641b7122c504/SendEstimateEmail", {
      headers: {
        "Accept": "*/*",
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + AIQOCPAGE.tokenLogin
      },
      multipart: {
        "File": "https://dev.azure.com/SquadWareOne/squadware-automation/_git/squadware-automation?path=data-test/certificate.jpg&version=GC426dc3db9a3160cb8ef1f8279430cac6b43e79c2&_a=contents",
        "ToEmail": "tuuvv.uit@gmail.com",
        "BccEmail": "tuuvv@linxhq.com",
        "Subject": "testing",
      },
    
    }); //200,201,
    await expect(res.status()).toBe(200);
});
 
