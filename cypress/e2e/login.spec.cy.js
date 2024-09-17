import { faker } from '@faker-js/faker'
import userData from '../fixtures/user-data.json'

describe('Login - Sucess', () => {

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
    signupButton: '[data-test="signup-submit"]'
  }

  it('Must log in with a valid username', () => {
    cy.visit('')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.sectionTitleNewTransaction).contains('Everyone')
    cy.get("[data-test='main']").should('be.visible')
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
    cy.get(selectorsList.signupButton).click()
    cy.get("main").should('be.visible')
   
 });
})