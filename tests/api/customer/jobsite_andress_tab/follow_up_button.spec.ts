import { expect, test } from "@core/fixtures";
import { FollowUpButtonPage } from "../../../../page/api/customer/jobsite_andress_tab/follow_up_button";

  
  test("@Web update followup  api must work well. @TC_2722_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new FollowUpButtonPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await FUBPAGE.getToken(request); 
    const res = await request.post(`https://${FUBPAGE.custdomain}` + "/Job/AddJobsiteAddressFollowUp", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + FUBPAGE.tokenLogin
        },
        data: {
            "customerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "jobsiteAddressId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "jobId": "00660782-407e-48e0-bdd0-2fe42ee1f5af",
            "followUpDate": "2022-09-28T06:54:10.865Z",
            "note": "string"
          }

    }); //200,201,

    const resjson = await res.json();
    console.log(resjson);
    await expect(res.status()).toBe(200);
       
  });
  test("@Web get job adress api must work well. @TC_2722_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new FollowUpButtonPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await FUBPAGE.getToken(request); 
    const res = await request.get(`https://${FUBPAGE.custdomain}` + "/Job/Address", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + FUBPAGE.tokenLogin
            },
            params: {
                CustomerId: "00172367-f34a-454a-a21b-2cf5ee6337ac"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
       
  });
 