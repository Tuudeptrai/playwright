import { expect, test } from "@core/fixtures";
import { RouteSortOrderPage } from "../../../../page/api/Schedules/Calendar/route_sort_order";
  
 
  test("@Web  Sort the routes by range, shortest to longest @TC_2835_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const sCLPage = new RouteSortOrderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await sCLPage.getToken(request);
        const res = await request.get(`https://${sCLPage.maindomain}` + "/Route/list/2022/10", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + sCLPage.tokenLogin
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
 
  test("@Web  Sort the routes by range, shortest to longest @TC_2835_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const sCLPage = new RouteSortOrderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await sCLPage.getToken(request);
        const res = await request.get(`https://${sCLPage.maindomain}` + "/route/2022-09-25/list", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + sCLPage.tokenLogin
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });