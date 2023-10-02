
import { Locator, Page } from "@playwright/test";

export class InvoiceNotShowPage {
    page : Page;
    domain: String;
    invoiceBtn: Locator;
    invoiceTab: Locator;
   
    constructor(page : Page,domain: String) {
        this.page =page;
        this.domain=domain;
        this.invoiceBtn = page.locator('button:has-text("Quote/Invoice")');
        this.invoiceTab = page.locator('button:has-text("Generate PDF")');
    }

    async gotoInvoiceNotShowPage() {
        await this.page.goto(
            `http://${this.domain}/customers/__quangd%C4%91/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/jobs/4f098a1a-dbcc-4761-8b59-d4251d9b7aad/information`
          );
    }
   
}

    