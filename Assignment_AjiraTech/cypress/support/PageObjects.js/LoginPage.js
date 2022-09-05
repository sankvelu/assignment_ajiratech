class LoginPage {
  btnProfile() {
    return cy.get('button > .inline-block');
  }
  btnLoginUser() {
    return cy.get('a').contains('Log In');
  }
  inputEmail() {
    return cy.get('input[type="email"]');
  }
  inputPassword() {
    return cy.get('input[type="password"]');
  }
  btnSubmit() {
    return cy.get('button[type="submit"]');
  }
  hamIcon() {
    return cy.get('ul[class="UserNav_list__izHGy"] li').eq(3);
  }
  categoryMen() {
    return cy.get('a').contains('Men');
  }
  btnCloseHamIcon() {
    return cy
      .get('div[class="Sidebar_sidebar__2rkFM"] div header button svg')
      .eq(0);
  }
  bestSellers() {
    return cy.get('li').contains('Bestsellers');
  }

  selectProduct() {
    return cy.get('div[class="ProductCard_header__1RX2E"]').eq(1);
  }

  btnAddToCart() {
    return cy.get('button[aria-label="Add to Cart"]');
  }
  btnLogout() {
    return cy.get(':nth-child(5) > .DropdownMenu_link__ii4yk');
  }
}
export default LoginPage;
