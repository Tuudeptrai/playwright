import { Locator, Page ,expect} from "@playwright/test";

export class AddInvoiceQuoteWorkOrderPage {
    page : Page;
    domain: String;
    path: string;
    invoiceQuoteWorkLabel: Locator;
    jobsiteAddressLabel: Locator;
    documentTypeLabel: Locator;
    invoiceBtn: Locator;
    allBtn: Locator;
    quoteBtn: Locator;
    workOrderBtn: Locator;
    row: Locator;
    jobsiteAndressDropdown: Locator;
    previous: Locator;
    next: Locator;
    page1: Locator;
    page2: Locator;
    constructor(page : Page,domain: String) {
        this.page=page;
        this.domain=domain;   
        this.invoiceQuoteWorkLabel = page.locator('text=Quote/Invoice/Work Order');
        this.jobsiteAddressLabel = page.locator('text=Jobsite Address');
        this.documentTypeLabel = page.locator('text=Document Type');
        this.invoiceBtn = page.locator('button:has-text("INVOICE")');
        this.allBtn = page.locator('button:has-text("ALL")');
        this.quoteBtn = page.locator('button:has-text("QUOTE")');
        this.workOrderBtn = page.locator('button:has-text("WORK ORDER")');
        this.row = page.locator('td');
        this.jobsiteAndressDropdown = page.locator('//label[contains(text(),"Jobsite Address")]/following-sibling::div/descendant::select');
        this.previous = page.locator('text=previous');
        this.next = page.locator('text=next');
        this.page1 = page.locator(`//li/a[contains(text(),"1")][1]`);
        this.page2 = page.locator(`//li/a[contains(text(),"2")][1]`);
    
    }

    async gotoAddInvoiceQuoteWorkOrderPage () {
        await this.page.goto(
            `http://${this.domain}/customers/__quangdđ/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/attachments`
          );
    }
    
}

    