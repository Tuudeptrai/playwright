import { expect, test } from "@core/fixtures";
import { CustomeFormAPIPage } from "../../../../page/api/admin/template_tab/custom_form";

    let idcreated: String;
  test("@Web create template by add new template API @TC_2786_1 ", async ({
    page,
    conf,
    request,
  }) => {
    const mRPage = new CustomeFormAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    
    await mRPage.getToken(request);
    const res = await request.post(`https://${mRPage.maindomain}` + "/CustomForm/AddTemplate", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + mRPage.tokenLogin
        }, data:{
            // "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "customFormTypeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            "formName": "test tuu 1",
            "description": "test tuu 1",
            "customFormQuestions": [
              {
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "customerCustomFormId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "customFormControlTypeId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "question": "string",
                "answer": {
                  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  "customerCustomFormId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  "customFormQuestionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                  "answer": "string"
                }
              }
            ]
          }
    }); //200,201,

    const resjson = await res.json();
    console.log("333333", resjson["id"]);
    await expect(res.status()).toBe(200);
    idcreated = resjson["id"];
  });
  
  test("@Web active form by API @TC_2786_2 ", async ({
    page,
    conf,
    request,
  }) => {
    const mRPage = new CustomeFormAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    
    await mRPage.getToken(request);
    const res = await request.put(`https://${mRPage.maindomain}` + "/CustomForm/Active/" +idcreated, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + mRPage.tokenLogin
        }
    }); //200,201,
    await expect(res.status()).toBe(200);

  });
  test("@Web delete form by API @TC_2786_3 ", async ({
    page,
    conf,
    request,
  }) => {
    const mRPage = new CustomeFormAPIPage(page, conf.suiteConf.authdomain,  conf.suiteConf.maindomain, conf.suiteConf.userdomain);
    
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
 
