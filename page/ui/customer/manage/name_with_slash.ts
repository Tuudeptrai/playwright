import { Locator, Page ,expect} from "@playwright/test";

export class NameWithSlashPage {
    page : Page;
    domain: String;
    path: string;
    quangSlashTuu: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.quangSlashTuu = page.locator('text=__quang/tuutestContact: Stevie SteveAddress: 700 MarketParkersburg, LA 26101Emai').nth(0);
     
    }

    async gotoNameWithSlashPage () {
        await this.page.goto(
            `http://${this.domain}/customers/allcustomers`
          );
    }
    
}

    