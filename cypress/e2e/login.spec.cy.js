describe('Login - Sucess', () => {

  const selectorsList = {
    usernameField: "#username" ,
    passwordField: "#password" ,
    loginButton: "button" ,
    wrongCredentialAlert: "[role='alert']"
  }

  const userData = {
    userSucess: {
      username: 'Dina20' ,
      password: 's3cret'
    },
    UserFail: {
      username: 'Test' ,
      password: 'Test'
    }
  }

  it('Must log in with a valid username', () => {
    cy.visit('')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get("[data-test='main']").should('be.visible')
  })

 it('Trying to log in with invalid credentials', () => {
    cy.visit('')
    cy.get(selectorsList.usernameField).type(userData.UserFail.username)
    cy.get(selectorsList.passwordField).type(userData.UserFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
 }); 
})