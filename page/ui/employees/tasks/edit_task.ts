import { Locator, Page } from "@playwright/test";

export class EditTaskPage {
    page : Page;
    domain: String;
    employeesDropdown: Locator;
    taskRow: Locator;
    datePicker: Locator;
    datePickerHour: Locator;
    datePickerMimute: Locator;
    datePickerDate: Locator;
    okBtn: Locator;
    completeBtn: Locator;
    saveBtn: Locator;
    completeMessage: Locator;
    successMessage: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.employeesDropdown = page.locator(`select[name="AssignedUserId"]`);//.selectOption('251c26ba-7504-4d0d-9d1c-c26a04275be7');
        this.taskRow = page.locator(`td:nth-child(3)`);//10/19/2022
        this.datePicker = page.locator(`text=Due DateDue Date >> button`);
        this.datePickerDate = page.locator(`button:has-text("30")`);
        this.datePickerHour = page.locator(`button:has-text("12")`);
        this.datePickerMimute = page.locator(`button:has-text("30")`);
        this.okBtn = page.locator(`button:has-text("OK")`);
        this.saveBtn = page.locator(`button:has-text("Save")`);
        this.completeBtn = page.locator(`button:has-text("Complete")`);
        this.successMessage = page.locator('text=Save successfully!')
        this.completeMessage = page.locator('text=Update successfully.')
    }

    async gotoEditTaskPage() {
        await this.page.goto(
            `https://${this.domain}/employees/tasks`
          );
    }
    
}

    