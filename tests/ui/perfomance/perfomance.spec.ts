import { expect, test } from "@core/fixtures";
import { perfomance } from "../../../page/ui/perfomance/perfomance";
import { LoginAPI } from "@core/loginAPI";
import { Login } from "@ui/login";

  test.beforeEach(async ({page, conf, request }) => {
    const loginPage = new LoginAPI(page,conf.suiteConf.domain);
    let arrRes = await loginPage.getToken(request);
    await loginPage.loginPypass(arrRes);
  });
  test("Load page login must less than 1.2 second @TC_2759_1 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      await login.with(conf.suiteConf.username, conf.suiteConf.password)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();
   });
   test("Load page dashboard must less than 1.2 second @TC_2759_2 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/dashboard`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();
   });
   test("Load page log hours must less than 1.2 second @TC_2759_3 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/employees/log-hours/2022-12-20`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();
   });
   test("Load page payroll must less than 1.2 second @TC_2759_4 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/employees/payroll-list?start=undefined&end=undefined`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();
   });

   test("Load page today route must less than 1.2 second @TC_2759_5 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/employees/today-route`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();
   });
   test("Load page customers information must less than 1.2 second @TC_2759_6 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/customers/__quangaaa/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/information`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();

   });
   test("Load page customers jobs information must less than 1.2 second @TC_2759_7 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/customers/__quangaaa/08da10f9-cf66-4ed2-8ef5-15f547f1e9e9/jobs/4b5b36f7-3c4d-4a29-8d29-cd3f1aa48713/information`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();

   });

   test("Load page duplicate must less than 1.2 second @TC_2759_8 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/customers/duplicate`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();

   });

   test("Load page Super admin multi company users must less than 1.2 second @TC_2759_9 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/super-admin/multi-company-users`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();

   });

   test("Load page companies users must less than 1.2 second @TC_2759_10 ", async ({
    page,
    conf,
  }) => {
    const login = new Login(page, conf.suiteConf.domain);
    const [request] = await Promise.all([
      page.waitForEvent('requestfinished'),
      page.goto( `https://${conf.suiteConf.domain}/super-admin/companies`)
    ]);
    console.log( await request.timing());
    let res = await request.timing();
    await expect(res.responseEnd <= 1200).toBeTruthy();

   });