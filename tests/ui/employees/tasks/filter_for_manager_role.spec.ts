import { expect, test } from "@core/fixtures";
import { FilterForManagerRolePage } from "../../../../page/ui/employees/tasks/filter_for_manager_role";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new Login(page, conf.suiteConf.domain);
    const FFMRPAGE = new FilterForManagerRolePage(page, conf.suiteConf.domain);
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await FFMRPAGE.gotoFilterForManagerRolePage();
  });
  test("@Web task shouble be created and saved successfully @TC_2755_1 ", async ({
    page,
    conf,
  }) => {
    const FFMRPAGE = new FilterForManagerRolePage(page, conf.suiteConf.domain);
    await page.waitForSelector("tr");
    let before = await (FFMRPAGE.rows).count();
    await FFMRPAGE.assignedUserIdDropdown.first().selectOption('251c26ba-7504-4d0d-9d1c-c26a04275be7');
    await page.waitForSelector("tr");
    let after = await (FFMRPAGE.rows).count();
    await expect(before != after ).toBeTruthy();
    
  });
 
 
