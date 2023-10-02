import { expect, test } from "@core/fixtures";
import { accessSync } from "fs";
import { CallBtdSortByPage } from "../../../../page/api/customer/bids_to_do/call_btd_sortby";
  
 
  test("@Web  change call api shortby to sortby @TC_2892_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const pBPage = new CallBtdSortByPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await pBPage.getToken(request);
        const res = await request.get(`https://${pBPage.maindomain}` + "/api/Dashboard/BidsToDoToDay", {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + pBPage.tokenLogin
            },
            params:{
                "limit":0,
                "pageSize":24,
                "pageNumber":1,
                "sortBy":"companyName",
                "sortType": "asc",
                "date": "2022-10-30T17:00:00.000Z"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
  
 

