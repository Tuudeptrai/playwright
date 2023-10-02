import { expect, test } from "@core/fixtures";
import { LockHightedJobPage } from "../../../../page/ui/employees/schedule_tab/lock_highted_job";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new Login(page, conf.suiteConf.domain);
    const LHJPAGE = new LockHightedJobPage(page, conf.suiteConf.domain);
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await LHJPAGE.gotoLockHightedJobPage();
  });
  test("@Web task shouble be created and saved successfully @TC_2752_1 ", async ({
    page,
    conf,
  }) => {
    const LHJPAGE = new LockHightedJobPage(page, conf.suiteConf.domain);
    
    await expect(LHJPAGE.popupSuccess).toBeVisible();
    
  });
 
 
