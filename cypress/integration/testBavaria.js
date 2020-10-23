const LOCATORS_BAVARIA = requiere('C:\Users\PC1\AutomationTestCypres\cypress\fixture\LOCATORS_BAVARIA');
const LOCATORS_TAP = requiere('C:\Users\PC1\AutomationTestCypres\cypress\fixture\LOCATORS_TAP');

describe("enter of legal age official website", () => {
  it("enter date of birth", function () {
    cy.visit("www.colaypola.com.co/");
    cy.get(LOCATORS_BAVARIA.year_two).type("1");
    cy.get(LOCATORS_BAVARIA.year_two).type("2");
    cy.get(LOCATORS_BAVARIA.year_three).type("3");
    cy.get(LOCATORS_BAVARIA.year_four).type("4");
    cy.get(LOCATORS_BAVARIA.month_one).type("1");
    cy.get(LOCATORS_BAVARIA.month_two).type("2");
    cy.get(LOCATORS_BAVARIA.day_one).type("3");
    cy.get(LOCATORS_BAVARIA.bnt_into).clik;
    cy.get(LLOCATORS_BAVARIA.quedo_como_lulo).should("be.visible");
  });

  it("enter minor age", function () {
    cy.visit("https://www.tapintoyourbeer.com/");
    cy.get(LOCATORS_TAP.select_idiom).clik;
    cy.get(LOCATORS_TAP.lenguaje_englishselect_idiom).clik;
    cy.get(LOCATORS_TAP.day_born).type("02");
    cy.get(LOCATORS_TAP.month_born).type("02");
    cy.get(LOCATORS_TAP.year_born).type("2018");
    cy.get(LOCATORS_TAP.btn_into).clik;
    cy.get(LOCATORS_TAP.message).should("be.visible");
  });
});
