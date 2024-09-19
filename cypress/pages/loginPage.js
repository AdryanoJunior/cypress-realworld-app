class LoginPage {
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

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage