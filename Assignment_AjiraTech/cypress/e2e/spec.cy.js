import LoginPage from '../support/PageObjects.js/LoginPage';

describe('Test scenario - Adding product to the cart', () => {
  const loginPage = new LoginPage();

  before(function () {
    cy.fixture('example').then(function (LoginData) {
      this.data = LoginData;
      cy.log(this.datadata);
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  it('Visitng the website - Login- with valid credentials', function () {
    cy.visit(Cypress.env('baseURL'));
    // cy.visit(Cypress.env('url'));

    cy.log(this.data);

    loginPage.btnProfile().click();

    loginPage.inputEmail().type(this.data.email);
    loginPage.inputPassword().type(this.data.password);
    loginPage.btnSubmit().click();

    cy.wait(10000);
  });
  it(`Selecting MEN's Category`, function () {
    // loginPage.hamIcon().click();
    // cy.wait(3000);
    loginPage.categoryMen().click({ force: true });
    cy.wait(2000);
    // loginPage.btnCloseHamIcon().click({ force: true });
  });
  it(`Selecting BEST Sellers category`, function () {
    cy.wait(2000);
    loginPage.bestSellers().click({ force: true });
  });
  it(`Selecting a product`, function () {
    cy.wait(2000);
    loginPage.selectProduct().click();
  });
  it(`Adding the product to cart`, function () {
    loginPage.btnAddToCart().click();
  });

  it.skip('Log out user', () => {
    loginPage.btnProfile().click({ force: true });
    loginPage.btnLogout().click();
  });
});
