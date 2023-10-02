import { expect, test } from "@core/fixtures";
import { AddJobDetailsPage } from "../../../../page/ui/job/attachments_tab/add_Job_details";
import { Login } from "@ui/login";




  test.beforeEach(async ({ page, conf,request }) => {
    const login = new Login(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);
    const bCSPage = new AddJobDetailsPage(page, conf.suiteConf.domain);
    await bCSPage.gotoAddJobDetailsPage();
     
  });
  test.only("@Web add job details panel @TC_2914_1 ", async ({
    page,
    conf,
  }) => {
    const bCSPage = new AddJobDetailsPage(page, conf.suiteConf.domain);
    await expect(bCSPage.jobDetails).toBeVisible();

});
 