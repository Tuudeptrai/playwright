import { Locator, Page ,expect} from "@playwright/test";

export class CreateJobeNotRequireLinePage {
    page : Page;
    domain: String;
    path: string;
    addJobBtn: Locator;
    deleteLineBtn: Locator;
    okBtn: Locator;
    saveBtn: Locator;
    successMessage: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.addJobBtn = page.locator('button:has-text("Add Job")').nth(0);
        this.deleteLineBtn = page.locator('text=​​​​ >> button').nth(2);
        this.okBtn = page.locator('button:has-text("OK")');
        this.saveBtn = page.locator('button:has-text("Save")').nth(0);
        this.successMessage = page.locator('text=Add successfully.');
        
    
    }

    async gotoCreateJobeNotRequireLinePage () {
        await this.page.goto(
            `http://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/job-addresses`
          );
    }
    
}

    