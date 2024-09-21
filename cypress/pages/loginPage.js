class LoginPage {
    selectorsList() {
        const selectors = {
          usernameField: "#username" ,
          passwordField: "#password" ,
          loginButton: "button" ,
          wrongCredentialAlert: "[role='alert']" ,
          sectionTitleNewTransaction: "[data-test='nav-public-tab']" ,
        }

        return selectors
    }


    accessLoginPage() {
        cy.visit('')
    }

    loginWithUser(username, password) {
         cy.get(this.selectorsList().usernameField).type(username)
         cy.get(this.selectorsList().passwordField).type(password)
         cy.get(this.selectorsList().loginButton).click()
    }

    containsPage() {
        cy.get(this.selectorsList().sectionTitleNewTransaction).contains('Everyone')
    }

    layoutVisible() {
        cy.get("[data-test='main']").should('be.visible')
    }
    
}

export default LoginPage