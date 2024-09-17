describe('Must log in with a valid username', () => {
    
    it('Should display an error message when logging in with invalid credentials', () => {
        cy.visit('')
        cy.get(selectorsList.usernameField).type(userData.userSucess.username)
        cy.get(selectorsList.passwordField).type(userData.userSucess.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.sectionTitleNewTransaction).contains('Everyone')
        cy.get("[data-test='main']").should('be.visible')
    });
});