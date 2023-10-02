import { expect, test } from "@core/fixtures";
import { AddInvoiceQuoteWorkOrderPage  } from "../../../../page/ui/customer/attachments_tab/add_invoice_quote_work_order_card";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const LOGINPAGE =   new Login(page, conf.suiteConf.domain);
    const AIQOPAGE = new AddInvoiceQuoteWorkOrderPage (page, conf.suiteConf.domain);
    
    await LOGINPAGE.with(conf.suiteConf.username, conf.suiteConf.password);

    await AIQOPAGE.gotoAddInvoiceQuoteWorkOrderPage();
  });
  test("@Web Add invoice quote card is exist @TC_2630_1 ", async ({
    page,
    conf,
  }) => {
    const AIQOPAGE = new AddInvoiceQuoteWorkOrderPage (page, conf.suiteConf.domain);
    await expect(AIQOPAGE.invoiceQuoteWorkLabel).toBeVisible();
  });
  test("@Web Add invoice quote card is collapsable @TC_2630_2 ", async ({
    page,
    conf,
  }) => {
    const AIQOPAGE = new AddInvoiceQuoteWorkOrderPage (page, conf.suiteConf.domain);
    await AIQOPAGE.invoiceQuoteWorkLabel.click();
    await expect(AIQOPAGE.documentTypeLabel).not.toBeVisible();
    await AIQOPAGE.invoiceQuoteWorkLabel.click();
    await expect(AIQOPAGE.documentTypeLabel).toBeVisible();
  });
  test("@Web Dropdown jobandress should be work @TC_2630_3 ", async ({
    page,
    conf,
  }) => {
    const AIQOPAGE = new AddInvoiceQuoteWorkOrderPage (page, conf.suiteConf.domain);
    let before = await (AIQOPAGE.row).count();
    await AIQOPAGE.jobsiteAndressDropdown.selectOption('0f9e0079-a475-4d8f-8dfc-86c2120a1584');
    let after = await (AIQOPAGE.row).count();
    await expect(before != after ).toBeTruthy();
  });
  test("@Web toggle Invoice should be work @TC_2630_4 ", async ({
    page,
    conf,
  }) => {
    const AIQOPAGE = new AddInvoiceQuoteWorkOrderPage (page, conf.suiteConf.domain);
    let before = await (AIQOPAGE.row).count();
    await AIQOPAGE.invoiceBtn.click();
    let after = await (AIQOPAGE.row).count();
    await expect(before != after ).toBeTruthy();
  });
  test.only("@Web check if  Next button work well' @TC_2630_5 ", async ({
    page,
    conf,
  }) => {
    const AIQOPAGE = new AddInvoiceQuoteWorkOrderPage(page, conf.suiteConf.domain);
    await AIQOPAGE.page1.click();
    await AIQOPAGE.next.click();
    await page.waitForTimeout(3000);
    let element = await AIQOPAGE.page2;
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "rgb(236, 239, 241)").toBeTruthy();
  });
  test.only("@Web check if Previous button work well' @TC_2630_6 ", async ({
    page,
    conf,
  }) => {
    const AIQOPAGE = new AddInvoiceQuoteWorkOrderPage(page, conf.suiteConf.domain);
    await AIQOPAGE.page2.click();
    await AIQOPAGE.previous.click();
    await page.waitForTimeout(3000);
    let element = await AIQOPAGE.page1;
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "rgb(236, 239, 241)").toBeTruthy();
  });
  test.only("@Web check if panigation number button work well' @TC_2630_7 ", async ({
    page,
    conf,
  }) => {
    const AIQOPAGE = new AddInvoiceQuoteWorkOrderPage(page, conf.suiteConf.domain);
    await AIQOPAGE.page1.click();
    let element = await AIQOPAGE.page1;
    await page.waitForTimeout(3000);
    let color = await element.evaluate((el) => {
        return window.getComputedStyle(el).getPropertyValue('background-color');
    });
    console.log(color);
    await expect(color == "rgb(236, 239, 241)").toBeTruthy();
  });