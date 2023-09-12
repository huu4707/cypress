
describe('Visit a page', () => {
  it('Visit the samples page', () => {
    cy.visit('https://example.cypress.io');
    cy.url().should('include', '/')
  })
})