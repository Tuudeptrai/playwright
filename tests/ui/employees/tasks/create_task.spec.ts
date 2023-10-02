import { expect, test } from "@core/fixtures";
import { CreateTasksPage  } from "../../../../page/ui/employees/tasks/create_task";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const CJBCPAGE = new CreateTasksPage (page, conf.suiteConf.domain);
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await CJBCPAGE.gotoCreateTasksPage();
  }); test("@Web task shouble be created and saved successfully @TC_2750_1 ", async ({
    page,
    conf,
  }) => {
    const CTFMRPAGE = new CreateTasksPage(page, conf.suiteConf.domain);
    await CTFMRPAGE.greenPlusBtn.first().click();
    await page.waitForTimeout(5000);
    await CTFMRPAGE.textareaDescription.fill('tuu test');
    await page.waitForTimeout(5000);
    await CTFMRPAGE.urgencyDropdown.last().selectOption('df07a01f-ce87-4f6d-b73e-5795ecf07eec');
    await CTFMRPAGE.datepicker.fill("2000-05-20");
    await page.waitForTimeout(5000);
    await CTFMRPAGE.datepicker.fill("07-11-2022 6:30 PM");
    await page.waitForTimeout(5000);
    
    await CTFMRPAGE.saveBtn.click();
    await expect(CTFMRPAGE.popupSuccess).toBeVisible();
    
  });
 