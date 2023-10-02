import { expect, test } from "@core/fixtures";
import { MoveAddButtonPage  } from "../../../../page/ui/customer/attachments_tab/move_add_btn";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE =   new Login(page, conf.suiteConf.domain);
    const MABPAGE = new MoveAddButtonPage (page, conf.suiteConf.domain);
    
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await MABPAGE.gotoMoveAddButtonPage();
  });
  test("@Web Add file button move to panel @TC_2642_1 ", async ({
    page,
    conf,
  }) => {
    const MABPAGE = new MoveAddButtonPage (page, conf.suiteConf.domain);
    await MABPAGE.addFileBtn.click();
    await expect(MABPAGE.uploadPopup).toBeVisible();
  });