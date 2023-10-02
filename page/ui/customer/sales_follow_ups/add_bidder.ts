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
            `https://${this.domain}/customers/salefollowups`
          );
    }
   
}

    