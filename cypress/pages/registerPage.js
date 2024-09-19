import { faker } from '@faker-js/faker'

class RegisterPage {
    selectorsList() {
        const selectors = {
            registerButton: "[href='/signup']",
            firstNameField: "#firstName" ,
            lastNameField: "#lastName" ,
            registerUsernameField: "#username" ,
            registerPasswordField: "#password" ,
            confirmationPasswordField: "#confirmPassword" ,
            signUpButtonSubmit: "[data-test='signup-submit']"
        }
        return selectors
    }

    acessRegisterPage() {
        cy.visit('')
        cy.get(this.selectorsList().registerButton).click()
    }

    creatingUser() {
        cy.get(this.selectorsList().firstNameField).type(faker.person.firstName())
        cy.get(this.selectorsList().lastNameField).type(faker.person.lastName())
        cy.get(this.selectorsList().registerUsernameField).type(faker.person.bio())
        cy.get(this.selectorsList().registerPasswordField).type('Testing')
        cy.get(this.selectorsList().confirmationPasswordField).type('Testing')
    }

    buttonRegister() {
        cy.get(this.selectorsList().signUpButtonSubmit).click()
    }
}

export default RegisterPage