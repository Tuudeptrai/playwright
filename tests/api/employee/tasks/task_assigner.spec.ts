import { expect, test } from "@core/fixtures";
import { TaskAssignerePage } from "../../../../page/api/employee/tasks/task_assigner";

  
  test("@Web get Tasks Todays api must work well. @TC_2940_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new TaskAssignerePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
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
    let emptySame = false;
    await expect(res.status()).toBe(200);
    for (let i = 0; i < await resjson.length;i++) {
        if(resjson[i]["data"].assigner ==resjson[i]["data"].assignee){
            emptySame = true;
        }

    }
    await expect(emptySame).toBeFalsy();
       
  });
  test("@Web get Tasks Upcoming api must work well. @TC_2940_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new TaskAssignerePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
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
    console.log(resjson); let emptySame = false;
    await expect(res.status()).toBe(200);
    for (let i = 0; i < await resjson.length;i++) {
        if(resjson[i]["data"].assigner ==resjson[i]["data"].assignee){
            emptySame = true;
        }

    }
    await expect(emptySame).toBeFalsy();
       
  });
  test("@Web get Tasks Completed api must work well. @TC_2940_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const FUBPAGE = new TaskAssignerePage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
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
    console.log(resjson); let emptySame = false;
    await expect(res.status()).toBe(200);
    for (let i = 0; i < await resjson.length;i++) {
        if(resjson[i]["data"].assigner ==resjson[i]["data"].assignee){
            emptySame = true;
        }

    }
    await expect(emptySame).toBeFalsy();
       
  });
 