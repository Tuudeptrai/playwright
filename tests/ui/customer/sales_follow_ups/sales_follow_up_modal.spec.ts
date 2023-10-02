import { expect, test } from "@core/fixtures";
import { SalesFollowUpModalPage } from "../../../../page/ui/customer/sales_follow_ups/sales_follow_up_modal";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const aJTPage = new SalesFollowUpModalPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await aJTPage.gotoSalesFollowUpModalPage();
  });
  test("@Web job adress dropdown selected and job dropdown not select' @TC_2730_1 ", async ({
    page,
    conf,
  }) => {
    const aJTPage = new SalesFollowUpModalPage(page, conf.suiteConf.domain);
    await aJTPage.addSaleFollowUpsBtn.first().click();
    await aJTPage.jobAddressDropdown.selectOption('0f9e0079-a475-4d8f-8dfc-86c2120a1584');
    await page.waitForTimeout(5000);
    await aJTPage.jobDropdown.selectOption('50d85dbc-1b9a-455a-b42a-73ebb21a5b83');
    await aJTPage.dateField.fill("08-28-2022");
    await aJTPage.noteField.fill("tựu test");
    await aJTPage.saveBtn.click();
    await expect(aJTPage.successMessage).toBeVisible();


  });
