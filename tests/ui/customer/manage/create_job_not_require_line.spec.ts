import { expect, test } from "@core/fixtures";
import { CreateJobeNotRequireLinePage  } from "../../../../page/ui/customer//manage/create_job_not_require_line";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE =   new Login(page, conf.suiteConf.domain);
    const CJNRLPAGE = new CreateJobeNotRequireLinePage (page, conf.suiteConf.domain);
    
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await CJNRLPAGE.gotoCreateJobeNotRequireLinePage();
  });
  test("@Web Should not require line for saving the job @TC_2789_1 ", async ({
    page,
    conf,
  }) => {
    const CJNRLPAGE = new CreateJobeNotRequireLinePage (page, conf.suiteConf.domain);
    await CJNRLPAGE.addJobBtn.click();
    await CJNRLPAGE.deleteLineBtn.click();
    await CJNRLPAGE.okBtn.click();
    await CJNRLPAGE.saveBtn.click();
    await expect(CJNRLPAGE.successMessage).toBeVisible();
  });