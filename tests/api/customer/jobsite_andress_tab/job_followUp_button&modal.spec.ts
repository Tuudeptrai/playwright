import { expect, test } from "@core/fixtures";
import { FollowUpButtonModalPage } from "../../../../page/api/customer/jobsite_andress_tab/job_followUp_button&modal";

  
  test("@Web get FollowUp Jobsite Address Selected Job  api must work well. @TC_2729_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new FollowUpButtonModalPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await FUBPAGE.getToken(request); 
    const res = await request.get(`https://${FUBPAGE.custdomain}` + "/Job/FollowUpJobsiteAddressSelectedJob", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + FUBPAGE.tokenLogin
        },
        params:{
            "customerId": "08d98e27-7b52-4be8-87ff-d2d9cffd2229",
            "jobsiteAddressId": "db86c292-c81b-4731-abd4-95229bd4bada",
            "jobId": "1aa057d2-41ab-4ea5-aaf7-eb13cc6e9e09"
          }

    }); //200,201,

    const resjson = await res.json();
    console.log(resjson);
    await expect(res.status()).toBe(200);
       
  });
  test("@Web post AddJobsite Address FollowUp api must work well. @TC_2729_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new FollowUpButtonModalPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await FUBPAGE.getToken(request); 
    const res = await request.post(`https://${FUBPAGE.custdomain}` + "/Job/AddJobsiteAddressFollowUp", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + FUBPAGE.tokenLogin
            },
            data: {
                "customerId": "08d98e27-7b52-4be8-87ff-d2d9cffd2229",
                "jobsiteAddressId": "db86c292-c81b-4731-abd4-95229bd4bada",
                "jobId": "1aa057d2-41ab-4ea5-aaf7-eb13cc6e9e09",
                "followUpDate": "2022-09-29T09:24:15.273Z",
                "note": "tuu test"
              }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
       
  });
 