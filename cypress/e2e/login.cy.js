describe('Orange HRM Testes ', () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert: "[role='alert']",
    checkPage: ".orangehrm-dashboard-grid"
  }
 const userData = {
      loginSucess: "Admin",
      passSucess: "admin123",
      loginFail: "teste",
      passFail: "teste"
 }
  
  it('Login Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.loginSucess)
    cy.get(selectorList.passwordField).type(userData.passSucess)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorList.checkPage)
    
  })

  it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.loginFail)
    cy.get(selectorList.passwordField).type(userData.passFail)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})