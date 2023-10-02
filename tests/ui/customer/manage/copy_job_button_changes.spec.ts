import { expect, test } from "@core/fixtures";
import { CopyJobButtonChangesPage  } from "../../../../page/ui/customer//manage/copy_job_button_changes";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE =   new Login(page, conf.suiteConf.domain);
    const CJBCPAGE = new CopyJobButtonChangesPage (page, conf.suiteConf.domain);
    
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await CJBCPAGE.gotoCopyJobButtonChangesPage();
  });
  test("@Web Should not require line for saving the job @TC_2760_1 ", async ({
    page,
    conf,
  }) => {
    const CJBCPAGE = new CopyJobButtonChangesPage (page, conf.suiteConf.domain);
  
    await CJBCPAGE.jobColab.click();
    await CJBCPAGE.scheduleSelectCheckBox.click();
    await CJBCPAGE.copyScheduleBtn.click();
    await CJBCPAGE.copySchedulePopupBtn.click();
    await CJBCPAGE.scheduleJobPopupBtn.click();
    await page.waitForTimeout(8000);
    const rows = await CJBCPAGE.jobSpan;
    console.log("count:", rows.count());
    let highlight = false;
    for (let i = 0; i < await rows.count(); i++) {
        let element = await rows.nth(i);
    
        let color = await element.evaluate((el) => {
            
            return window.getComputedStyle(el).getPropertyValue('background-color');
        });
        console.log("mau:", color);
        if( color == "rgb(76, 175, 80)"){
            highlight = true;
        }
    }
    
    await expect(highlight).toBeTruthy();
  });