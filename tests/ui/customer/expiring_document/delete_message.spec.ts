import { expect, test } from "@core/fixtures";
import { DeleteMessagePage } from "../../../../page/ui/customer/expiring_document/delete_message";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new LoginAPI(page,conf.suiteConf.domain);
    const DMPAGE = new DeleteMessagePage(page, conf.suiteConf.domain);
    
    let arrRes = await LOGINPAGE.getToken(request);
    await LOGINPAGE.loginPypass(arrRes);

    await DMPAGE.gotoDeleteMessagePage();
  });
  
  test("@Web The the message of remove should be contain 'Are you sure you want to delete [name of doc]'  @TC_2807_1 ", async ({
    page,
    conf,
  }) => {
    const DMPAGE = new DeleteMessagePage(page, conf.suiteConf.domain);
    await DMPAGE.deleteBtn.first().click();
    await expect(DMPAGE.warningSpan).toContainText('Are you sure you want to delete');
  });