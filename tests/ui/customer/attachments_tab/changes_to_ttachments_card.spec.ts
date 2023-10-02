import { expect, test } from "@core/fixtures";
import { ChangeToAttachmentsCardPage  } from "../../../../page/ui/customer/attachments_tab/changes_to_ttachments_card";
import { LoginAPI } from "@core/loginAPI";

  test.beforeEach(async ({ page, conf,request }) => {
    const CTACPAGE = new ChangeToAttachmentsCardPage (page, conf.suiteConf.domain);
    const LOGINPAGE = new LoginAPI(page,conf.suiteConf.domain);
    
    let arrRes = await LOGINPAGE.getToken(request);
    await LOGINPAGE.loginPypass(arrRes);

    await CTACPAGE.gotoChangeToAttachmentsCardPage();
  });
  test("@Web Make the atachment card collasible @TC_2631_1 ", async ({
    page,
    conf,
  }) => {
    const CTACPAGE = new ChangeToAttachmentsCardPage (page, conf.suiteConf.domain);
    await CTACPAGE.attachmentPanel.first().click();
    await expect(CTACPAGE.textFieldOfTable).not.toBeVisible();
    await CTACPAGE.attachmentPanel.first().click();
    await expect(CTACPAGE.textFieldOfTable).toBeVisible();
  });
  test("@Web Add pagination to the Attachments card @TC_2631_2 ", async ({
    page,
    conf,
  }) => {
    const CTACPAGE = new ChangeToAttachmentsCardPage (page, conf.suiteConf.domain);
    await CTACPAGE.page1.first().click();
    await CTACPAGE.next.first().click();
    let element = await CTACPAGE.page2;
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "#134ADB").toBeTruthy();
  });