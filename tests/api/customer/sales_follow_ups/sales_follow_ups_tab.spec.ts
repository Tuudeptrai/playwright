import { expect, test } from "@core/fixtures";
import { SaleFollowUpsTabsPage } from "../../../../page/api/customer/sales_follow_ups/sales_follow_ups_tab";

  
  test("@Web Upcoming SalesFollowUp Tab API should work @TC_2696_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new SaleFollowUpsTabsPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/Job/UpcomingSalesFollowUpTab", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
  test("@Web PastDue SalesFollowUp Tab API should work @TC_2696_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new SaleFollowUpsTabsPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/Job/PastDueSalesFollowUpTab", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
  test("@Web History SalesFollowUp Tab API should work @TC_2696_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const pIPage = new SaleFollowUpsTabsPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pIPage.getToken(request); 
    const res = await request.get(`https://${pIPage.maindomain}` + "/Job/HistorySalesFollowUpTab", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pIPage.tokenLogin
            },
            params: {
                pageNumber:1,
                pageSize:24
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
  });
  
