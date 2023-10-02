import { expect, test } from "@core/fixtures";
import { GetJobCompletionSummaries } from "../../../../page/api/job/list_completion/get_job_completion_summaries";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    const gJCSPage = new GetJobCompletionSummaries(page, conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);
  });
  test("@Web the Estimator time of response must less than 1.2 second  @TC_2911_1 ", async ({
    page,
    conf,
  }) => {
    const gJCSPage = new GetJobCompletionSummaries(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${gJCSPage.domain}/employees/today-route`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy() ;
   });
 
