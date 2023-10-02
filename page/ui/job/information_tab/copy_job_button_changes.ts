import { Locator, Page } from "@playwright/test";

export class CopyJobButtonChangesPage {
    page : Page;
    domain: String;
    scheduleJobBtn: Locator;
    copyScheduleBtn: Locator;
    jobSpan: Locator;
    crollView: Locator;
   
    constructor(page : Page,domain: String) {
        this.page =page;
        this.domain=domain;
        this.scheduleJobBtn = page.locator('button:has-text("Schedule Job")');
        this.copyScheduleBtn = page.locator( 'button:has-text("Copy & Schedule")');
        this.jobSpan = page.locator( '//div[contains(text(),"Jobs")]/following-sibling::div/descendant::p/..');
        this.crollView = page.locator( '//div[contains(text(),"Jobs")]/following-sibling::div/descendant::p/../../..');
    }

    async gotoCopyJobButtonChangesPage() {
        await this.page.goto(
            `http://${this.domain}/customers/33%20North/2ffe13c2-7230-4721-95fe-c041b6e21b1c/jobs/db70a927-4b97-49eb-b820-430c5bc56f7b/completed`
          );
    }
   
}

    