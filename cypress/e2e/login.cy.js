describe('Login flow correct credentials', () => {
  beforeEach(()=>{
    cy.visit("http://localhost:5173/")
  })

  it("should display login form", () => {
    cy.get('form').should('be.visible');
  });

  it("should login with valid credentials login form", () => {
    cy.get("input[type='email']").type("teste155@gmail.com");
    cy.get("input[type='password']").type("Guilherme@333");
    cy.get("button[type='submit']").click();
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  });
})

describe("Login flow invalid credentials", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display login form", () => {
    cy.get("form").should("be.visible");
  });

  it("should login with invalid credentials", () => {
    cy.get("input[type='email']").type("teste1555@gmail.com");
    cy.get("input[type='password']").type("Guilherme@333");
    cy.get("button[type='submit']").click();
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  });
});