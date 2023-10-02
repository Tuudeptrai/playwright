import { expect, test } from "@core/fixtures";
import { NameWithSlashPage  } from "../../../../page/ui/customer/manage/name_with_slash";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE =   new Login(page, conf.suiteConf.domain);
    const CJBCPAGE = new NameWithSlashPage (page, conf.suiteConf.domain);
    
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await CJBCPAGE.gotoNameWithSlashPage();
  });
  test("@Web Should not require line for saving the job @TC_2898_1 ", async ({
    page,
    conf,
  }) => {
    const CJBCPAGE = new NameWithSlashPage (page, conf.suiteConf.domain);
  
    await CJBCPAGE.quangSlashTuu.click();
    await expect(page).toHaveURL('https://squadware-dev-ui.azurewebsites.net/customers/__quang%2Ftuutest/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/information');

  });