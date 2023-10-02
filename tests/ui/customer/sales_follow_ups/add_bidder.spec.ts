import { expect, test } from "@core/fixtures";
import { AddBidderPage } from "../../../../page/ui/customer/sales_follow_ups/add_bidder";
import { LoginAPI } from "@core/loginAPI";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const TBDPAGE = new AddBidderPage(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);

    await TBDPAGE.gotoAddBidderPage();
  });
  test("@Web The sale follow up should have text 'Created by' @TC_2700_1 ", async ({
    page,
    conf,
  }) => {
    const TBDPAGE = new AddBidderPage(page, conf.suiteConf.domain);
    await expect(TBDPAGE.addBidder.first()).toBeVisible();
  });
 
  
