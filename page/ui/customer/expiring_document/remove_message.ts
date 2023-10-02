import { Locator, Page } from "@playwright/test";

export class RemoveMessagePage {
    page : Page;
    domain: String;
    warningSpan: Locator;
    removeBtn: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.removeBtn = page.locator('button:has-text("REMOVE")');
        this.warningSpan = page.locator( '//span[contains(text(),"Warning")]/../../following-sibling::div/descendant::p/span');
    }

    async gotoRemoveMessagePage() {
        await this.page.goto(
            `https://${this.domain}/customers/expiringdocuments`
          );
    }
   
}

    