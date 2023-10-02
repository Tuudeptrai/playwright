import { expect, test } from "@core/fixtures";
import { AddExpirationDatePage } from "../../../../page/ui/customer/attachments_tab/add_expiration_date";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const aEDPage = new AddExpirationDatePage(page, conf.suiteConf.domain,conf.suiteConf.file.path0);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await aEDPage.gotoAddExpirationDatePage();
  });
  test("@Web check if DateExpiration Date is exist @TC_2780_1 ", async ({
    page,
    conf,
  }) => {
    const aEDPage = new AddExpirationDatePage(page, conf.suiteConf.domain,conf.suiteConf.file.path0);
    await aEDPage.addAttachmentsBtn.click();

    await expect(aEDPage.inputExpirationDate).toBeVisible();
  });
  