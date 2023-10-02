import { expect, test } from "@core/fixtures";
import { CustomeristPage } from "../../../page/api/customer/customer_list";

  
  test("@Web paging should work @TC_2932_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new CustomeristPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.custdomain}` + "/list", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                pageNumber:24,
                pageSize:64
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
 