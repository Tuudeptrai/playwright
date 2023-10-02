import { Locator, Page } from "@playwright/test";

export class JobHintWidePage {
    page : Page;
    domain: String;
    boxwitdh: number;
    toolTip: Locator;
    oneJob: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;
        this.toolTip = page.locator('text=Description:');
        this.oneJob = page.locator("p[class='MuiTypography-root-170 MuiTypography-body1-172'] span:nth-child(1)");
    }

    async gotoJobHintWidePage() {
        await this.page.goto(
            `https://${this.domain}/schedules/routes/2022-08-28`
          );
    }
    
}

    