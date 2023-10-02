import { expect, test } from "@core/fixtures";
import { AddBidderPage } from "../../../../page/api/customer/sales_follow_ups/add_bidder";

  
  test("@Web check if FollowUpContact respone contain 'bidStage' @TC_2495_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const aBPage = new AddBidderPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain);
    await aBPage.checkAddJobStagePage(request)
    await expect(aBPage.status).toBe(200);
    await expect(aBPage.resjson).toBeDefined();
  });
