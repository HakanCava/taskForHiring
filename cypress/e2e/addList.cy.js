describe('announcement test', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1400, 1400);
  });
  it('announcement', () => {
    cy.visit('http://localhost:3000')
    cy.get("[data-test='add-list-btn']").contains("Add to the waiting list")
    cy.get("[data-test='add-list-btn']").should("be.visible").click()
  })
})