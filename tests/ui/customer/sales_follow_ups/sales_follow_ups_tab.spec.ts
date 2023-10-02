import { expect, test } from "@core/fixtures";
import { SaleFollowUpsTabPage } from "../../../../page/ui/customer/sales_follow_ups/sales_follow_ups_tab";
import { LoginAPI } from "@core/loginAPI";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const TBDPAGE = new SaleFollowUpsTabPage(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);

    await TBDPAGE.gotoSaleFollowUpsTabPage();
  });
  test("@Web The sale follow up should have text 'Created by' @TC_2700_1 ", async ({
    page,
    conf,
  }) => {
    const TBDPAGE = new SaleFollowUpsTabPage(page, conf.suiteConf.domain);
    await expect(TBDPAGE.saleFollowUpsTab).toBeVisible();
  });
 
  
