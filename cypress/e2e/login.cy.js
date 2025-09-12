import userData from '../fixtures/users/userData.json'


describe('Orange HRM Testes ', () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert: "[role='alert']",
    checkPage: ".orangehrm-dashboard-grid"
  }

  
  it('Login Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.loginSucess)
    cy.get(selectorList.passwordField).type(userData.userSuccess.passSucess)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorList.checkPage)
    
  })

  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.loginFail)
    cy.get(selectorList.passwordField).type(userData.userFail.passFail)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})