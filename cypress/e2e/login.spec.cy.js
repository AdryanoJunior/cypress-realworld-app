import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import LoginFailPage from '../pages/loginfailPage'
import RegisterPage from '../pages/registerPage'
import RegisterFailPage from '../pages/registerfailPage'

describe('Real World App - Tests', () => {

  const loginPage = new LoginPage
  const loginFailPage = new LoginFailPage
  const registerPage = new RegisterPage
  const registerFailPage = new RegisterFailPage
  

  it('Must log in with a valid username', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

    loginPage.containsPage()
    
    loginPage.layoutVisible()
  })

 it('Trying to log in with invalid credentials', () => {
    loginFailPage.accessLoginPage()
    loginFailPage.loginWithUserFail(userData.UserFail.username, userData.UserFail.password)
    
    loginFailPage.wrongAlertPage()
    
 }); 

 it('Successful new user registration', () => {
  registerPage.accessRegisterPage()

  registerPage.creatingUser() 

  registerPage.buttonRegister()
  
   cy.get("main").should('be.visible')
   
 });

 it('Should display error messages when trying to register a new user without filling in all mandatory information', () => {
     registerFailPage.accessRegisterPage()
     registerFailPage.errorMessagesPage()
    
 });
})