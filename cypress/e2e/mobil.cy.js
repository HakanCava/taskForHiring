describe('announcement test', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
      cy.viewport(700, 700);
    });
    it('announcement', () => {
      cy.visit('http://localhost:3000')
      cy.get("[data-test='add-me-btn']").contains("Add me")
      cy.get("[data-test='add-me-btn']").should("be.visible").click()
    })
  })