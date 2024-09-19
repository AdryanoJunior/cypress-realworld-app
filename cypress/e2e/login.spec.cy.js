import { faker } from '@faker-js/faker'
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'

describe('Login - Sucess', () => {

  const loginPage = new LoginPage()

  const selectorsList = {
    usernameField: "#username" ,
    passwordField: "#password" ,
    loginButton: "button" ,
    sectionTitleNewTransaction: "[data-test='nav-public-tab']" ,
    wrongCredentialAlert: "[role='alert']" ,
    registerButton: "[data-test='signup']" ,
    firstNameField: "#firstName" ,
    lastNameField: "#lastName" ,
    registerUsernameField: "#username" ,
    registerPasswordField: "#password" ,
    confirmationPasswordField: "#confirmPassword" ,
    signUpButtonSubmit: '[data-test="signup-submit"]' ,
    signUpLogo: ".SignUpForm-logo" ,
    firstNameErrorText: "#firstName-helper-text" ,
    lastNameErrorText: "#lastName-helper-text" ,
    usernameErrorText: "#username-helper-text" ,
    passwordErrorText: "#password-helper-text" ,
    confirmPasswordErrorText: "#confirmPassword-helper-text"
    
  }

  it.only('Must log in with a valid username', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    //cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    //cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    //cy.get(selectorsList.loginButton).click()
    //cy.get(selectorsList.sectionTitleNewTransaction).contains('Everyone')
    //cy.get("[data-test='main']").should('be.visible')
  })

 it('Trying to log in with invalid credentials', () => {
    cy.visit('')
    cy.get(selectorsList.usernameField).type(userData.UserFail.username)
    cy.get(selectorsList.passwordField).type(userData.UserFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
 }); 

 it('Successful new user registration', () => {
    cy.visit('')
    cy.get(selectorsList.registerButton).click()
    cy.get(selectorsList.firstNameField).type(faker.person.firstName())
    cy.get(selectorsList.lastNameField).type(faker.person.lastName())
    cy.get(selectorsList.usernameField).type('TestingQA')
    cy.get(selectorsList.registerPasswordField).type('Testing')
    cy.get(selectorsList.confirmationPasswordField).type('Testing')
    cy.get(selectorsList.signUpButtonSubmit).click()
    cy.get("main").should('be.visible')
   
 });

 it('Should display error messages when trying to register a new user without filling in all mandatory information', () => {
     cy.visit('')
     cy.get(selectorsList.registerButton).click()
     cy.get(selectorsList.signUpLogo).click()
     cy.get(selectorsList.firstNameErrorText).contains('First Name is required')
     cy.get(selectorsList.lastNameField).click()
     cy.get(selectorsList.signUpLogo).click()
     cy.get(selectorsList.lastNameErrorText).contains('Last Name is required')
     cy.get(selectorsList.registerUsernameField).click()
     cy.get(selectorsList.signUpLogo).click()
     cy.get(selectorsList.usernameErrorText).contains('Username is required')
     cy.get(selectorsList.registerPasswordField).click()
     cy.get(selectorsList.signUpLogo).click()
     cy.get(selectorsList.passwordErrorText).contains('Enter your password')
     cy.get(selectorsList.confirmationPasswordField).click()
     cy.get(selectorsList.signUpLogo).click()
     cy.get(selectorsList.confirmPasswordErrorText).contains('Confirm your password')
 });
})