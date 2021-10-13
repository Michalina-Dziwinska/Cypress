it('Not existing user', () => {
    cy.visit("link")
    cy.wait(2000)
	cy.get('[id="login-modal-button"]').click()
	cy.get('[id="email"]').clear().type('ydk123@cuoly.com')
	cy.get('[id="password"]').clear().type('Test123!')
	cy.get('[id="login-submit"]').click()
    cy.contains('Incorrect username or password.').should('be.visible')
  })

  it('Wrong password', () => {
    cy.visit("link")
    cy.wait(2000)
	cy.get('[id="login-modal-button"]').click()
	cy.get('[id="email"]').clear().type('jekir94599@stvbz.com')
	cy.get('[id="password"]').clear().type('Test000!')
	cy.get('[id="login-submit"]').click()
    cy.contains('Incorrect username or password.').should('be.visible')
  })
