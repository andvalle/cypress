import userData from '../fixtures/users/userData.json'
import loginPage from '../loginPage'

const login = new loginPage()

describe('Orange HRM Testes ', () => {
  const selectorList = {
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    checkPage: ".orangehrm-dashboard-grid",
    myinfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstName: "[name='firstName']",
    middleName: "[name='middleName']",
    lastName: "[placeholder='Last Name']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    selectArrow: ".oxd-select-text--arrow",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
    toastButton: ".oxd-toast",
    tabIndex: "[tabindex='0']"
    }
it.only('User info update - check ', () => {
   login.loginIt()
   login.loginSucess(userData.userSuccess.loginSucess,userData.userSuccess.passSucess)
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorList.checkPage)
    cy.get(selectorList.myinfoButton).click()
    cy.get(selectorList.firstName).clear().type("TestName")
    cy.get(selectorList.middleName).clear().type("MiddleNameTest")
    cy.get(selectorList.lastName).clear().type("LastNameTest")
    cy.get(selectorList.genericField).eq(3).clear().type("2223334445")
    cy.get(selectorList.genericField).eq(4).clear().type("432122")
    cy.get(selectorList.genericField).eq(5).clear().type("4354335675489")
    cy.get(selectorList.dataField).eq(0).clear().type("2025-12-31")
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.saveButton).eq(0).click()
    cy.get('.oxd-toast').should('contain', "Successfully Updated")
    cy.get(selectorList.tabIndex).eq(0).click({force:true})
    cy.get(':nth-child(4) > span').click({force:true})
    cy.get(selectorList.tabIndex).eq(1).click({force:true})
    cy.get(':nth-child(3) > span').click({force:true})
    
})
  it('Login Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.loginSucess)
    cy.get(selectorList.passwordField).type(userData.userSuccess.passSucess)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorList.checkPage)
    
  })

  it('Login Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.loginFail)
    cy.get(selectorList.passwordField).type(userData.userFail.passFail)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})