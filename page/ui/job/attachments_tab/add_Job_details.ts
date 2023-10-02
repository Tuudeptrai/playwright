import { Locator, Page } from "@playwright/test";

export class AddJobDetailsPage {
    page : Page;
    domain: String;
    warningSpan: Locator;
    jobDetails: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.jobDetails = page.locator('text=Job Details');
    }

    async gotoAddJobDetailsPage() {
        await this.page.goto(
            `https://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/jobs/97835d2a-4387-11ed-96e9-02660356b3f0/attachments`
          );
    }
   
}

    