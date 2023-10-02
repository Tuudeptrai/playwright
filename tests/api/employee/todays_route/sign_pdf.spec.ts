import { expect, test } from "@core/fixtures";
import { SigPDFPage } from "../../../../page/api/employee/todays_route/sign_pdf";

  
  test("@Web hit aplly all and aplly once signature will load to PDF @TC_2737_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new SigPDFPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await FUBPAGE.getToken(request); 
    const res = await request.get(`http://${FUBPAGE.custdomain}` + "/Document/signatures", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + FUBPAGE.tokenLogin
        },
        params:{
           "jobId":"4856437c-617c-11ed-96e9-02660356b3f0"
       }

    }); //200,201,
   
    const resjson = await res.json();
    console.log("aray json:", resjson);
    await expect(res.status()).toBe(200);
   
       
  });
 
 