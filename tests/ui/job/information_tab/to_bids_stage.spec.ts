import { expect, test } from "@core/fixtures";
import { ToBidsStagePage } from "../../../../page/ui/job/information_tab/to_bids_stage";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new LoginAPI(page,conf.suiteConf.domain);
    const TBDPAGE = new ToBidsStagePage(page, conf.suiteConf.domain);
    
    let arrRes = await LOGINPAGE.getToken(request);
    await LOGINPAGE.loginPypass(arrRes);

    await TBDPAGE.gotoToBidsStagePage();
  });
  test("@Web The stage select box should have option 'To Bid' @TC_2690_1 ", async ({
    page,
    conf,
  }) => {
    const TBDPAGE = new ToBidsStagePage(page, conf.suiteConf.domain);
    await expect(TBDPAGE.selectField).toContainText("To Bid");
  });
 
  
