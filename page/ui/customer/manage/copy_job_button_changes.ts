import { Locator, Page } from "@playwright/test";

export class CopyJobButtonChangesPage {
    page : Page;
    domain: String;
    jobColab: Locator;
    scheduleSelectCheckBox: Locator;
    copyScheduleBtn: Locator;
    copySchedulePopupBtn: Locator;
    scheduleJobPopupBtn: Locator;
    jobSpan: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.jobColab = page.locator( '//*[@id="content"]/div/div[2]/div/div[3]/div[2]/div[1]');
        this.scheduleSelectCheckBox = page.locator('text=Scheduled02/25/20230$0.00 >> input[type="checkbox"]');
        this.copyScheduleBtn = page.locator('button:has-text("Copy & Schedule")');
        this.copySchedulePopupBtn = page.locator('div[role="presentation"] button:has-text("Copy & Schedule")');
        this.scheduleJobPopupBtn = page.locator('button:has-text("Schedule Job")');
        this.jobSpan = page.locator( '//div[contains(text(),"Jobs")]/following-sibling::div/descendant::p/..');
    }

    async gotoCopyJobButtonChangesPage() {
        await this.page.goto(
            `http://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/job-addresses`
          );
    }
   
}

    