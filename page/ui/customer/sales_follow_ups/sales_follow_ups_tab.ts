import { Locator, Page } from "@playwright/test";

export class SaleFollowUpsTabPage{
    page : Page;
    domain: String;
    saleFollowUpsTab: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.saleFollowUpsTab = page.locator('button[role="tab"]:has-text("Sales Follow Ups")');
    }

    async gotoSaleFollowUpsTabPage() {
        await this.page.goto(
            `http://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/sales-follow-ups`
          );
    }
   
}

    