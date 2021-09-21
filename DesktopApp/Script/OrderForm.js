function Data()
{
  TestedApps.Orders.Run();
  Project.Variables.ContactInfo.Reset();
  for(; !Project.Variables.ContactInfo.IsEOF();)
  {
    Aliases.Orders.MainForm.MainMenu.Click("Orders|New order...");
    Aliases.Orders.OrderForm.Group.ProductNames.ClickItem("FamilyAlbum");
    Aliases.Orders.OrderForm.Group.Quantity.wValue = 10;
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.Discount, "wText", cmpEqual, "15%");
    Aliases.Orders.OrderForm.Group.Customer.SetText(Project.Variables.ContactInfo.Value("Customer"));
    Aliases.Orders.OrderForm.Group.Street.SetText(Project.Variables.ContactInfo.Value("Street"));
    Aliases.Orders.OrderForm.Group.City.SetText(Project.Variables.ContactInfo.Value("City"));
    Aliases.Orders.OrderForm.Group.State.SetText(Project.Variables.ContactInfo.Value("State"));
    Aliases.Orders.OrderForm.Group.Zip.SetText(Project.Variables.ContactInfo.Value("Zip Code"));
    Aliases.Orders.OrderForm.Group.MasterCard.ClickButton();
    Aliases.Orders.OrderForm.Group.CardNo.SetText("5154785214525412");
    aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.CardNo, "TextLength", cmpEqual, 16);
    Aliases.Orders.OrderForm.Group.ExpDate.wDate = Project.Variables.ContactInfo.Value("ExpDate");
    Aliases.Orders.OrderForm.ButtonOK.ClickButton();
    Project.Variables.ContactInfo.Next();
  }
  Aliases.Orders.MainForm.Close();
  Aliases.Orders.dlgConfirmation.btnNo.ClickButton();
}