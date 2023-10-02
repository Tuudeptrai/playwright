import { Locator, Page } from "@playwright/test";

export class UpdateTaxGroupPage {
    page : Page;
    domain: String;
    warningSpan: Locator;
    removeBtn: Locator;
    editBtn: Locator;
    andressDropdown: Locator;
    newAndressOption: Locator;
    taxGroupDropdown: Locator;
    zipTf: Locator;
    fullnameTf: Locator;
    emailTf: Locator;
    phoneTf: Locator;
    saveBtn: Locator;
    messageUpdated: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.removeBtn = page.locator('button:has-text("REMOVE")');
        this.messageUpdated = page.locator('text=Update successfully.');
        this.editBtn = page.locator('text=TC_2922 >> path');
        this.saveBtn = page.locator('button:has-text("Save")');
        this.zipTf = page.locator('input[name="zipCode"]');
        this.fullnameTf = page.locator('text=Full NameFull Name >> input[name="name"]');
        this.emailTf = page.locator('input[name="email"]');
        this.phoneTf = page.locator('input[name="phone"]');
        this.andressDropdown = page.locator('text=Address1Address1 >> input[type="text"]');//fill('103 a')
        this.taxGroupDropdown = page.locator('select[name="taxGroupId"]');//selectOption('9964207b-c9ba-4a7f-b057-b36813ab67fd')
        this.newAndressOption = page.locator('text=103 Route 103 A, New London, NH 03257');
    }

    async gotoUpdateTaxGroupPage() {
        await this.page.goto(
            `https://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/job-addresses`
          );
    }
   
}

    