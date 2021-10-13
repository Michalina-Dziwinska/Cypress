describe('Registration with email confirmation', () => {
	let userEmail
  
	before(() => {
	  // get and check the test email only once before the tests
	  cy.task('getUserEmail').then((email) => {
		expect(email).to.be.a('string')
		userEmail = email
	  })
	})
  
	it('sends confirmation code', () => {

		cy.visit("https://husky-cognito.dvwf5uw58zw69.amplifyapp.com/")
		cy.wait(3000)
		cy.get('[id="register-modal-button"]').click()
		cy.get('[id="email"]').clear().type(userEmail)
        cy.get('[id="password"]').clear().type('Test123!')
		cy.get('[id="confirmPassword"]').click({force: true}).type('Test123!')
		cy.get('[id="register-submit"]').click()

		cy.wait(3000)

		cy.task('getLastEmail').its('html').then((html) => {
			var numberPattern = /\d+/g;
			const code = html.match( numberPattern ).join('')
			cy.log(code)

			cy.get('[id="code"]').clear().type(code)
			//cy.get('id="register-confirmation-submit"').click()
			cy.get('#register-submit').click()
			cy.contains('Congratulations').should('be.visible')
			cy.contains('Close').click()



  		
	
		
		
		})
	})
  })