import { Locator, Page } from "@playwright/test";

export class AddWorkOrderFormPage {
    page : Page;
    domain: String;
    workOrderForm: Locator;
    additionalVerbiageLabel: Locator;
    textarea: Locator;
    saveBtn: Locator;
    viewFormBtn: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.workOrderForm = page.locator('text = Work Order Form');
        this.additionalVerbiageLabel = page.locator('//span[contains(text(),"Work Order Form")]/../../following-sibling::div/descendant::label');
        this.textarea = page.locator('//span[contains(text(),"Work Order Form")]/../../following-sibling::div/descendant::textarea');
        this.viewFormBtn = page.locator('//span[contains(text(),"Work Order Form")]/../../following-sibling::div/descendant::button');
        this.saveBtn = page.locator('button:has-text("Save")');
       
    }

    async gotoAddWorkOrderFormPage() {
        await this.page.goto(
            `https://${this.domain}/admin/Tester%20mr/81c248aa-bb76-4b5c-97b8-3b59419e97d3/contractsandforms`
          );
    }
}

    