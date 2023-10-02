import { expect, test } from "@core/fixtures";
import { RemoveMessagePage } from "../../../../page/ui/customer/expiring_document/remove_message";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new LoginAPI(page,conf.suiteConf.domain);
    const RMPAGE = new RemoveMessagePage(page, conf.suiteConf.domain);
    
    let arrRes = await LOGINPAGE.getToken(request);
    await LOGINPAGE.loginPypass(arrRes);

    await RMPAGE.gotoRemoveMessagePage();
  });
  
  test("@Web The the message of remove should be contain 'Are you sure you want to stop renewing [name of doc]'  @TC_2806_1 ", async ({
    page,
    conf,
  }) => {
    const RMPAGE = new RemoveMessagePage(page, conf.suiteConf.domain);
    await RMPAGE.removeBtn.first().click();
    await expect(RMPAGE.warningSpan).toContainText('Are you sure you want to stop renewing');
  });