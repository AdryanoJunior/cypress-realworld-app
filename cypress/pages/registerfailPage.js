class RegisterFailPage {
    selectorsList() {
        const selectors = {
            registerButton: "[data-test='signup']" ,
            signUpLogo: ".SignUpForm-logo" ,
            firstNameErrorText: "#firstName-helper-text" ,
            lastNameField: "#lastName" ,
            lastNameErrorText: "#lastName-helper-text" ,
            registerUsernameField: "#username" ,
            usernameErrorText: "#username-helper-text" ,
            registerPasswordField: "#password" ,
            passwordErrorText: "#password-helper-text" ,
            confirmationPasswordField: "#confirmPassword" ,
            confirmPasswordErrorText: "#confirmPassword-helper-text"
        }
        return selectors
    }

    accessRegisterPage() {
        cy.visit('')
        cy.get(this.selectorsList().registerButton).click()
    }

    errorMessagesPage() {
        cy.get(this.selectorsList().signUpLogo).click()
        cy.get(this.selectorsList().firstNameErrorText).contains('First Name is required')
        cy.get(this.selectorsList().lastNameField).click()
        cy.get(this.selectorsList().signUpLogo).click()
        cy.get(this.selectorsList().lastNameErrorText).contains('Last Name is required')
        cy.get(this.selectorsList().registerUsernameField).click()
        cy.get(this.selectorsList().signUpLogo).click()
        cy.get(this.selectorsList().usernameErrorText).contains('Username is required')
        cy.get(this.selectorsList().registerPasswordField).click()
        cy.get(this.selectorsList().signUpLogo).click()
        cy.get(this.selectorsList().passwordErrorText).contains('Enter your password')
        cy.get(this.selectorsList().confirmationPasswordField).click()
        cy.get(this.selectorsList().signUpLogo).click()
        cy.get(this.selectorsList().confirmPasswordErrorText).contains('Confirm your password')
    }
}

export default RegisterFailPage