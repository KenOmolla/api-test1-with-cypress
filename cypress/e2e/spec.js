describe('empty spec', () => {
  it('passes', () => {
    cy.request('https://example.cypress.io')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
    
  })
})