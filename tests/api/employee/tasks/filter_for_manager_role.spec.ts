import { expect, test } from "@core/fixtures";
import { FilterForManagerRolePage } from "../../../../page/api/employee/tasks/filter_for_manager_role";

  
  test("@Web get Tasks Todays api must work well. @TC_2756_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new FilterForManagerRolePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await FUBPAGE.getToken(request); 
    const res = await request.get(`http://${FUBPAGE.maindomain}` + "/Tasks/TasksTodays", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + FUBPAGE.tokenLogin
        },
        params:{
            "assignedUserId": "",
            "pageNumber": 1,
            "pageSize": 24
          }

    }); //200,201,

    const resjson = await res.json();
    console.log(resjson);
    await expect(res.status()).toBe(200);
       
  });
  test("@Web get Tasks Upcoming api must work well. @TC_2756_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new FilterForManagerRolePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await FUBPAGE.getToken(request); 
    const res = await request.get(`http://${FUBPAGE.maindomain}` + "/Tasks/TasksUpcoming", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + FUBPAGE.tokenLogin
        },
        params:{
            "assignedUserId": "",
            "pageNumber": 1,
            "pageSize": 24
          }

    }); //200,201,

    const resjson = await res.json();
    console.log(resjson);
    await expect(res.status()).toBe(200);
       
  });
  test("@Web get Tasks Completed api must work well. @TC_2756_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new FilterForManagerRolePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await FUBPAGE.getToken(request); 
    const res = await request.get(`http://${FUBPAGE.maindomain}` + "/Tasks/TasksCompleted", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + FUBPAGE.tokenLogin
        },
        params:{
            "assignedUserId": "",
            "pageNumber": 1,
            "pageSize": 24
          }

    }); //200,201,

    const resjson = await res.json();
    console.log(resjson);
    await expect(res.status()).toBe(200);
       
  });
 