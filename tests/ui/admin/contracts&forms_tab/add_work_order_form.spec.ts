import { expect, test } from "@core/fixtures";
import { AddWorkOrderFormPage } from "../../../../page/ui/admin/contracts&forms_tab/add_work_order_form";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new LoginAPI(page,conf.suiteConf.domain);
    const AWOFPAGE = new AddWorkOrderFormPage(page, conf.suiteConf.domain);
    
    let arrRes = await LOGINPAGE.getToken(request);
    await LOGINPAGE.loginPypass(arrRes);

    await AWOFPAGE.gotoAddWorkOrderFormPage();
  });
  test("@Web Check if Information Card can collapsible @TC_2639_1 ", async ({
    page,
    conf,
  }) => {
    const AWOFPAGE = new AddWorkOrderFormPage(page, conf.suiteConf.domain);
    await AWOFPAGE.workOrderForm.click();
    await expect(AWOFPAGE.additionalVerbiageLabel).not.toBeVisible();
    await AWOFPAGE.workOrderForm.click();
    await expect(AWOFPAGE.additionalVerbiageLabel).toBeVisible();
    
  });
  test("@Web Update the fields in the API on save  @TC_2639_2 ", async ({
    page,
    conf,
  }) => {
    const AWOFPAGE = new AddWorkOrderFormPage(page, conf.suiteConf.domain);
   
    await AWOFPAGE.textarea.first().fill("- Extra Charges:May apply where there is smoke residue, excessive interior ladder work, exterior obstacles, excessive furniture moving, test tuu");
    await page.waitForTimeout(5000);
    await AWOFPAGE.saveBtn.click();
    await page.waitForTimeout(5000);
    await expect(AWOFPAGE.textarea.first()).toContainText("test tuu");
    
  });
  test.only("@Web Create the 'View Form' button @TC_2639_3 ", async ({
    page,
    conf,
  }) => {
    const AWOFPAGE = new AddWorkOrderFormPage(page, conf.suiteConf.domain);
    await expect(AWOFPAGE.viewFormBtn).toContainText("View Form");
    
  });