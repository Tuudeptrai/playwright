import { Locator, Page } from "@playwright/test";

export class ErrorAndNotLoadingInProdPage {
    page : Page;
    domain: String;
    oneitem: Locator;
    commissionTab: Locator;
    Estimator: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.oneitem = page.locator('tbody>tr');
        this.commissionTab = page.locator('button[role="tab"]:has-text("Commissions")');
        this.Estimator = page.locator('[placeholder="Estimator (non-commissioned)"]');
   }

    async gotoGetJobCompletionSummaries() {
        await this.page.goto(
            `https://${this.domain}/customers/_LinxHQ/08d98e27-7b52-4be8-87ff-d2d9cffd2229/jobs/14ea3022-5f8f-4d04-98ac-adab008ba464/information`
          );
    }
    
    async checkDateTimeText() {
        
    }
}

    