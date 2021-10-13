
describe('Login', () => {
  it('Open form', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(4000)
	cy.get('[id="login-modal-button"]').click()
	cy.get('[id="email"]').clear().type('jekir94599@stvbz.com')
	cy.get('[id="password"]').clear().type('Test123!')
	cy.get('[id="login-submit"]').click()
  cy.contains('SIGN OUT').should('be.visible')
  })
})
