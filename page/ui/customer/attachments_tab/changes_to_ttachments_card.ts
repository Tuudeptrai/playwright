import { Locator, Page ,expect} from "@playwright/test";

export class ChangeToAttachmentsCardPage {
    page : Page;
    domain: String;
    path: string;
    attachmentPanel: Locator;
    textFieldOfTable: Locator;
    previous: Locator;
    next: Locator;
    page1: Locator;
    page2: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.attachmentPanel = page.locator('text=Attachments');
        this.textFieldOfTable = page.locator('text=Display to Field Techs');
        this.previous = page.locator('text=previous');
        this.next = page.locator('text=next');
        this.page1 = page.locator('[aria-label="Page 1"]');
        this.page1 = page.locator('[aria-label="Page 2"]');
        
    
    }

    async gotoChangeToAttachmentsCardPage() {
        await this.page.goto(
            `http://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/attachments`
          );
    }
    
}

    