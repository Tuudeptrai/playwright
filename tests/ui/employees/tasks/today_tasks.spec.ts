import { expect, test } from "@core/fixtures";
import { TodayTasksPage } from "../../../../page/ui/employees/tasks/today_tasks";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new Login(page, conf.suiteConf.domain);
    const TTPAGE = new TodayTasksPage(page, conf.suiteConf.domain);
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await TTPAGE.gotoTodayTasksPage();
  });
  test("@Web number task of today equal to number task in left menu @TC_2746_1 ", async ({
    page,
    conf,
  }) => {
    const TTPAGE = new TodayTasksPage(page, conf.suiteConf.domain);
    await page.waitForSelector("tr");
    let numMenu = await TTPAGE.taskMenu.textContent();
    console.log("nummenu:",numMenu);
    numMenu = numMenu.substring(
        numMenu.indexOf("(") + 1, 
        numMenu.lastIndexOf(")")
    );
    console.log("nummenu:",numMenu);
    let numToday = await TTPAGE.taskToday.textContent();
    numToday = numToday.substring(
        numToday.indexOf("(") + 1, 
        numToday.lastIndexOf(")")
    );
    console.log("numToday:",numToday);
    await expect(numMenu == numToday).toBeTruthy();
    
  });
 
 
