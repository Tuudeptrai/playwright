import { Locator, Page } from "@playwright/test";

export class DeleteMessagePage {
    page : Page;
    domain: String;
    warningSpan: Locator;
    deleteBtn: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.deleteBtn = page.locator(`//span[contains(text(),"REMOVE")]/../following-sibling::button[2]/descendant::span[1]`);
        this.warningSpan = page.locator( '//span[contains(text(),"Warning")]/../../following-sibling::div/descendant::p/span');
    }

    async gotoDeleteMessagePage() {
        await this.page.goto(
            `https://${this.domain}/customers/expiringdocuments`
          );
    }
   
}

    