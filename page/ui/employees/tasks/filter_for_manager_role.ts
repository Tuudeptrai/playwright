import { Locator, Page } from "@playwright/test";

export class FilterForManagerRolePage {
    page : Page;
    domain: String;
    datepicker: Locator;
    assignedUserIdDropdown: Locator;
  
    popupSuccess: Locator;
    greenPlusBtn: Locator;
    textareaDescription: Locator;
    urgencyDropdown: Locator;
    saveBtn: Locator;
    rows: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.datepicker = page.locator( '[placeholder="MM\\/DD\\/YYYY"]');
        this.popupSuccess = page.locator('text=Save successfully!');
        this.greenPlusBtn = page.locator('tr > th > button');
        this.assignedUserIdDropdown = page.locator(`select[name="AssignedUserId"]`);
        this.textareaDescription = page.locator('textarea[name="Description"]');
        this.urgencyDropdown  = page.locator('select[name="status"]');
        this.saveBtn  = page.locator('button:has-text("Save")');
        this.rows  = page.locator('tr');

        
    }

    async gotoFilterForManagerRolePage() {
        await this.page.goto(
            `http://${this.domain}/employees/tasks`
          );
    }
   
}

    