import { expect, test } from "@core/fixtures";
import { UpdateTaxGroupPage } from "../../../../page/ui/customer/job_andress/update_tax_group";
import { Login } from "@ui/login";

  test.beforeEach(async ({ page, conf,request }) => {
    const login = new Login(page, conf.suiteConf.domain);
    await login.with(conf.suiteConf.username, conf.suiteConf.password);
    const UTGPAGE = new UpdateTaxGroupPage(page, conf.suiteConf.domain);

    await UTGPAGE.gotoUpdateTaxGroupPage();
  });
  
  test("@Web user can update tax group with thought primary info  @TC_2922_1 ", async ({
    page,
    conf,
  }) => {
    const UTGPAGE = new UpdateTaxGroupPage(page, conf.suiteConf.domain);
    await UTGPAGE.editBtn.click();
    await UTGPAGE.andressDropdown.fill('103 a');
    await UTGPAGE.newAndressOption.click();
    await UTGPAGE.zipTf.fill('11111');

    await UTGPAGE.taxGroupDropdown.selectOption('9964207b-c9ba-4a7f-b057-b36813ab67fd');
    await UTGPAGE.fullnameTf.fill('');
    await UTGPAGE.emailTf.fill('');
    await UTGPAGE.phoneTf.fill('');
    await UTGPAGE.saveBtn.click();
    await expect(UTGPAGE.messageUpdated).toBeVisible();
  });