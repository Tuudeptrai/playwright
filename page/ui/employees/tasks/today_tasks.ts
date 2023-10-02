import { Locator, Page } from "@playwright/test";

export class TodayTasksPage {
    page : Page;
    domain: String;
    taskMenu: Locator;
    taskToday: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.taskMenu = page.locator('//div[contains(text(),"Employees")]/../../following-sibling::div/descendant::ul/li[3]/descendant::span[1]');
        this.taskToday = page.locator( '//*[@id="content"]/div/div/div[2]/div/div[1]/span');
    }

    async gotoTodayTasksPage() {
        await this.page.goto(
            `http://${this.domain}/employees/tasks`
          );
    }
   
}

    