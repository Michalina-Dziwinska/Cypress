it('Email validation - without @', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(2000)
    cy.get('[id="register-modal-button"').click()
    cy.get('[id="email"]').clear().type('ydk999cuoly.com')
    cy.get('[id="password"]').clear().type('Test999!')
    cy.get('[id="confirmPassword"]').click({force: true}).type('Test999!')
    cy.get('[id="register-submit"]').click()
    cy.contains('Email does not fulfill specified conditions').should('be.visible')
 
  })

  it('Email validation - without .', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(2000)
    cy.get('[id="register-modal-button"').click()
    cy.get('[id="email"]').clear().type('ydk999@cuolycom')
    cy.get('[id="password"]').clear().type('Test999!')
    cy.get('[id="confirmPassword"]').click({force: true}).type('Test999!')
    cy.get('[id="register-submit"]').click()
    cy.contains('Email does not fulfill specified conditions').should('be.visible')
 
  })

  it('Password validation - too short', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(2000)
    cy.get('[id="register-modal-button"').click()
    cy.get('[id="email"]').clear().type('ydk999@cuoly.com')
    cy.get('[id="password"]').clear().type('Test')
    cy.get('[id="confirmPassword"]').click({force: true}).type('Test')
    cy.get('[id="register-submit"]').click()
    cy.contains('Password must be at least 6 characters, contain numbers, uppercase, lowercase and special characters.').should('be.visible')
 
  })

  it('Password validation - without number', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(2000)
    cy.get('[id="register-modal-button"').click()
    cy.get('[id="email"]').clear().type('ydk999@cuoly.com')
    cy.get('[id="password"]').clear().type('Testtest!')
    cy.get('[id="confirmPassword"]').click({force: true}).type('Testtest!')
    cy.get('[id="register-submit"]').click()
    cy.contains('Password must be at least 6 characters, contain numbers, uppercase, lowercase and special characters.').should('be.visible')
 
  })

  it('Password validation - without special char', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(2000)
    cy.get('[id="register-modal-button"').click()
    cy.get('[id="email"]').clear().type('ydk999@cuoly.com')
    cy.get('[id="password"]').clear().type('Test999')
    cy.get('[id="confirmPassword"]').click({force: true}).type('Test999')
    cy.get('[id="register-submit"]').click()
    cy.contains('Password must be at least 6 characters, contain numbers, uppercase, lowercase and special characters.').should('be.visible')
 
  })

  it('Password validation - without uppercase', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(2000)
    cy.get('[id="register-modal-button"').click()
    cy.get('[id="email"]').clear().type('ydk999@cuoly.com')
    cy.get('[id="password"]').clear().type('test999!')
    cy.get('[id="confirmPassword"]').click({force: true}).type('test999!')
    cy.get('[id="register-submit"]').click()
    cy.contains('Password must be at least 6 characters, contain numbers, uppercase, lowercase and special characters.').should('be.visible')
 
  })

  it('Password validation - without lowercase', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(2000)
    cy.get('[id="register-modal-button"').click()
    cy.get('[id="email"]').clear().type('ydk999@cuoly.com')
    cy.get('[id="password"]').clear().type('TEST999!')
    cy.get('[id="confirmPassword"]').click({force: true}).type('TEST999!')
    cy.get('[id="register-submit"]').click()
    cy.contains('Password must be at least 6 characters, contain numbers, uppercase, lowercase and special characters.').should('be.visible')
 
  })

  it('Confirm password validation - different confirm password', () => {
    cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
    cy.wait(2000)
    cy.get('[id="register-modal-button"').click()
    cy.get('[id="email"]').clear().type('ydk999@cuoly.com')
    cy.get('[id="password"]').clear().type('Test999!')
    cy.get('[id="confirmPassword"]').click({force: true}).type('Ttt999!')
    cy.get('[id="register-submit"]').click()
    cy.contains('Password confirmation must be the same as password').should('be.visible')
 
  })