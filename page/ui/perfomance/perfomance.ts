import { Locator, Page } from "@playwright/test";

export class perfomance{
    page : Page;
    domain: String;
    oneitem: Locator;
    commissionTab: Locator;
    Estimator: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
   }

    async gotoGetJobCompletionSummaries() {
        await this.page.goto(
            `https://${this.domain}/job-completion`
          );
    }
}

    