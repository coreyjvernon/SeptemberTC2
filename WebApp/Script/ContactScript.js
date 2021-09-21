function Contact()
{
  Browsers.Item(btChrome).Navigate("https://smartstore.alertsite.com/");
  Project.Variables.ContactInfo.Reset();
  for(; !Project.Variables.ContactInfo.IsEOF();)
  {
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    Aliases.browser.pageContactus.Wait();
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText(Project.Variables.ContactInfo.Value("Name"));
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourEmail.SetText(Project.Variables.ContactInfo.Value("Email"));
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.ContactInfo.Value("Inquiry"));
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    Aliases.browser.pageContactus.Wait();
    aqObject.CheckProperty(Aliases.browser.pageContactus.sectionContent.panelYourEnquiryHasBeen, "Exists", cmpEqual, true);
    Project.Variables.ContactInfo.Next();
  }
  Aliases.browser.pageContactus.header.link.imageYourStoreName.Click();
  Aliases.browser.BrowserWindow.Close();
}