import { expect, test } from "@core/fixtures";
import { AddInvoiceQuoteWorkOrderCardPage } from "@api/customer/attachments_tab/add_Invoice_quote_work_order_card";
  
 
  test("@Web  determine the most efficient way to load many documents. @TC_2629_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const AIQOCPAGE = new AddInvoiceQuoteWorkOrderCardPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain, conf.suiteConf.custdomain);
    await AIQOCPAGE.getToken(request); 
    const res = await request.get(`https://${AIQOCPAGE.custdomain}` + "/Document/pdf-sents", {
           headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + AIQOCPAGE.tokenLogin
            },
            params:{
                PageNumber: 1,
                PageSize: 10,
                AddressId: "5fcd61a5-db74-49ec-b180-72c28336296d"
            }

        }); //200,201,

        const resjson = await res.json();
        await expect(res.status()).toBe(200);
      
  });
 
