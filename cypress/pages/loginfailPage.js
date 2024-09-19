class LoginFailPage {
    selectorsList() {
        const selectors = {
           usernameField: "#username" ,
           passwordField: "#password" ,
           loginButton: "button" ,
           wrongCredentialAlert: "[role='alert']" ,
        }

        return selectors
    }

    acessLoginPage() {
        cy.visit('')
    }

    
    loginWithUserFail(username, password) {
       cy.get(this.selectorsList().usernameField).type(username)
       cy.get(this.selectorsList().passwordField).type(password)
       cy.get(this.selectorsList().loginButton).click()
    }

    wrongAlertPage() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginFailPage