import { expect, test } from "@core/fixtures";
import { CopyJobButtonChangesPage } from "../../../../page/ui/job/information_tab/copy_job_button_changes";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE = new Login(page, conf.suiteConf.domain);
    const CJBCPAGE = new CopyJobButtonChangesPage(page, conf.suiteConf.domain);
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await CJBCPAGE.gotoCopyJobButtonChangesPage();
  });
  test("@Web click shedulejob button then highlight the jobs @TC_2763_1 ", async ({
    page,
    conf,
  }) => {
    const CJBCPAGE = new CopyJobButtonChangesPage(page, conf.suiteConf.domain);
    await CJBCPAGE.copyScheduleBtn.first().click();
    await CJBCPAGE.copyScheduleBtn.last().click();
    await CJBCPAGE.scheduleJobBtn.click();
    await page.waitForTimeout(8000);
    
    await CJBCPAGE.jobSpan.nth(20).dragTo(CJBCPAGE.crollView, 0,0);
    const rows = await CJBCPAGE.jobSpan;
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
 
 
