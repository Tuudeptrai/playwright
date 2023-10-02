import { Locator, Page } from "@playwright/test";

export class AddBidderPage{
    page : Page;
    domain: String;
    addBidder: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.addBidder = page.locator('text=Created By:');
    }

    async gotoAddBidderPage() {
        await this.page.goto(
            `https://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/job-addresses`
          );
    }
   
}

    