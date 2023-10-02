import { Locator, Page } from "@playwright/test";

export class SalesFollowUpModalPage {
    page : Page;
    domain: String;
    addSaleFollowUpsBtn: Locator;
    jobAddressDropdown: Locator;
    jobDropdown: Locator;
    dateField: Locator;
    noteField: Locator;
    saveBtn: Locator;
    successMessage: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.addSaleFollowUpsBtn = page.locator(`.MuiGrid-root > .MuiButtonBase-root`);
        this.jobAddressDropdown = page.locator(`//label[contains(text(),"Jobsite Address")]/following-sibling::div/descendant::select`);
        this.jobDropdown = page.locator(`//label[contains(text(),"Jobsite Address")]/../../following-sibling::div/descendant::select`);
        this.dateField = page.locator(``);//10/19/2022
        this.noteField = page.locator(`textarea[name="note"]`);
        this.saveBtn = page.locator(`button:has-text("Save")`);
        this.successMessage = page.locator("Save successfully!")
    }

    async gotoSalesFollowUpModalPage() {
        await this.page.goto(
            `https://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/sales-follow-ups`
          );
    }
    
}

    