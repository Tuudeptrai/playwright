import { expect, test } from "@core/fixtures";
import { EditTaskPage } from "../../../../page/ui/employees/tasks/edit_task";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const ETPAGE = new EditTaskPage(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);

    await ETPAGE.gotoEditTaskPage();
  });
  test("@Web edit task should be successfull' @TC_2753_1 ", async ({
    page,
    conf,
  }) => {
    const ETPAGE = new EditTaskPage(page, conf.suiteConf.domain);
    await ETPAGE.employeesDropdown.selectOption('251c26ba-7504-4d0d-9d1c-c26a04275be7');
    await page.waitForTimeout(5000);
    await ETPAGE.taskRow.first().click();
    await ETPAGE.datePicker.click();
    await ETPAGE.datePickerDate.last().click();
    await ETPAGE.datePickerHour.last().click();
    await ETPAGE.datePickerMimute.last().click();
    await ETPAGE.okBtn.click();
    await ETPAGE.saveBtn.click();
    await expect(ETPAGE.successMessage).toBeVisible();


  });
  test("@Web complete task should be successfull' @TC_2753_1 ", async ({
    page,
    conf,
  }) => {
    const ETPAGE = new EditTaskPage(page, conf.suiteConf.domain);
    await ETPAGE.employeesDropdown.selectOption('251c26ba-7504-4d0d-9d1c-c26a04275be7');
    await page.waitForTimeout(5000);
    await ETPAGE.taskRow.first().click();
    await ETPAGE.completeBtn.click();
   
    await expect(ETPAGE.completeMessage).toBeVisible();


  });
