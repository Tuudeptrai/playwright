import { Locator, Page ,expect} from "@playwright/test";

export class MoveAddButtonPage {
    page : Page;
    domain: String;
    path: string;
    addFileBtn: Locator;
    uploadPopup: Locator;
   
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.addFileBtn = page.locator('text=File NameUploaded ByDate UploadedExpiration DateSize >> button');
        this.uploadPopup = page.locator('text=Drop files here or click...');
        
    
    }

    async gotoMoveAddButtonPage () {
        await this.page.goto(
            `http://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/attachments`
          );
    }
    
}

    