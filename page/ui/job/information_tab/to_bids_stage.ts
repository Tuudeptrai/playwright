import { Locator, Page } from "@playwright/test";

export class ToBidsStagePage{
    page : Page;
    domain: String;
    selectField: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.selectField = page.locator('select[name="jobStage"]');
    }

    async gotoToBidsStagePage() {
        await this.page.goto(
            `https://${this.domain}/customers/Elise%20Ruegsegger/08d9dce3-a2e8-4002-877f-ff2c37534bee/jobs/6ec0cb42-f2d9-46c2-89bd-f769889f890e/completed`
          );
    }
   
}

    