import { expect, test } from "@core/fixtures";
import { InvoiceNotShowPage } from "../../../../page/ui/job/information_tab/not_view_invoice";
import { LoginAPI } from "@core/loginAPI";



  test.beforeEach(async ({ page, conf,request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);
    const bCSPage = new InvoiceNotShowPage(page, conf.suiteConf.domain);
    await bCSPage.gotoInvoiceNotShowPage();
     
  });
  test.only("@Web should show popup invoice when hit quote/invoice button @TC_2929_1 ", async ({
    page,
    conf,
  }) => {
    const bCSPage = new InvoiceNotShowPage(page, conf.suiteConf.domain);
    await bCSPage.invoiceBtn.click();
    await expect(bCSPage.invoiceTab).toBeVisible();

});
 