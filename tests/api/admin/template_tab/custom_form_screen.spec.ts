import { expect, test } from "@core/fixtures";
import { CustomFormScreenAPIPage } from "../../../../page/api/admin/template_tab/custom_form_screen";

    let idcreated: String;
  test("@Web get controltype  API @TC_2788_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const mRPage = new CustomFormScreenAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    
    await mRPage.getToken(request);
    const res = await request.get(`https://${mRPage.maindomain}` + "/CustomForm/CustomFormControlTypes", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + mRPage.tokenLogin
        }
    }); //200,201,

    const resjson = await res.json();
    console.log("333333", resjson["id"]);
    await expect(res.status()).toBe(200);
    idcreated = resjson["id"];
  });
  
  test("@Web save form by API @TC_2786_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const mRPage = new CustomFormScreenAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    
    await mRPage.getToken(request);
    const res = await request.post(`https://${mRPage.maindomain}` + "/CustomForm/AddTemplate/" , {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + mRPage.tokenLogin
        },data:{
          "FormName": "",
          "Description": "",
          "CustomFormQuestions": [
            {
              "CustomFormControlTypeId": "2529a809-04c7-45d6-b895-46d209360625",
              "Question": "",
              "Answer": {
                "answer": "{\"rows\":\"3\",\"columns\":\"2\"}"
              }
            }
          ]
        }
    }); //200,201,
    await expect(res.status()).toBe(200);

  });
  test("@Web review form by API @TC_2786_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const mRPage = new CustomFormScreenAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    
    await mRPage.getToken(request);
    const res = await request.delete(`https://${mRPage.maindomain}` + "/CustomForm/" + idcreated, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + mRPage.tokenLogin
        }
    }); //200,201,
    console.log(idcreated);
    await expect(res.status()).toBe(200);

  });
 
