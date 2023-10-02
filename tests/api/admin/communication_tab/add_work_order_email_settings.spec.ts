import { expect, test } from "@core/fixtures";
import { AddWorkOrderEmailSettingPage } from "@api/admin/communication_tab/add_work_order_email_settings";
  
 
  test("@Web  add this field to the API GET Work Order Form for the Contracts & Forms tab @TC_2637_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const AIQOCPAGE = new AddWorkOrderEmailSettingPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await AIQOCPAGE.getToken(request); 
    const res = await request.get(`https://${AIQOCPAGE.maindomain}` + "/Company/00f6f619-e2ae-4642-b2c5-c674240963f9/Communications/QuoteEmailSettings", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + AIQOCPAGE.tokenLogin
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
  test("@Web  add this field to the API PUT Work Order Form for the Contracts & Forms tab @TC_2637_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const AIQOCPAGE = new AddWorkOrderEmailSettingPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await AIQOCPAGE.getToken(request); 
    const res = await request.put(`https://${AIQOCPAGE.maindomain}` + "/Company/00f6f619-e2ae-4642-b2c5-c674240963f9/Communications/QuoteEmailSettings", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + AIQOCPAGE.tokenLogin
            }, data:{
              "senderEmail": "tuuvv.uit@gmail.com",
              "quoteEmailSubject": "testing",
              "quoteEmailBody": "hello there",
              "invoiceEmailSubject": "hai",
              "invoiceEmailBody": "alo",
              "workOrderEmailSubject": "alo ha",
              "workOrderEmailBody": "hoho"
            }

        }); //200,201,
        await expect(res.status()).toBe(200);
      
  });
 
