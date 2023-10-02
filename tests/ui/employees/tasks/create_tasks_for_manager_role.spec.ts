import { expect, test } from "@core/fixtures";
import { CreateTasksForManagerRolePage } from "../../../../page/ui/employees/tasks/create_tasks_for_manager_role";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new Login(page, conf.suiteConf.domain);
    const CTFMRPAGE = new CreateTasksForManagerRolePage(page, conf.suiteConf.domain);
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await CTFMRPAGE.gotoCreateTasksForManagerRolePage();
  });
  test("@Web task shouble be created and saved successfully @TC_2752_1 ", async ({
    page,
    conf,
  }) => {
    const CTFMRPAGE = new CreateTasksForManagerRolePage(page, conf.suiteConf.domain);
    await CTFMRPAGE.greenPlusBtn.first().click();
    await page.waitForTimeout(5000);
    await CTFMRPAGE.assignedUserIdDropdown.last().selectOption('251c26ba-7504-4d0d-9d1c-c26a04275be7');
    await CTFMRPAGE.textareaDescription.fill('tuu test');
    await page.waitForTimeout(5000);
    await CTFMRPAGE.urgencyDropdown.last().selectOption('df07a01f-ce87-4f6d-b73e-5795ecf07eec');
    await CTFMRPAGE.datepicker.fill("2000-05-20");
    await page.waitForTimeout(5000);
    await CTFMRPAGE.datepicker.fill("08-28-2022");
    await page.waitForTimeout(5000);
    
    await CTFMRPAGE.saveBtn.click();
    await expect(CTFMRPAGE.popupSuccess).toBeVisible();
    
  });
 
 
