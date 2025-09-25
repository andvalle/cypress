import dashboardPage from '../dashboardPage'
import userData from '../fixtures/users/userData.json'
import loginPage from '../loginPage'

const login = new loginPage()
const dashboardCheck = new dashboardPage()

describe('Orange HRM Testes ', () => {
  // const selectorList = {
  //   checkPage: ".orangehrm-dashboard-grid",
  //   myinfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  //   firstName: "[name='firstName']",
  //   middleName: "[name='middleName']",
  //   lastName: "[placeholder='Last Name']",
  //   genericField: ".oxd-input--active",
  //   dataField: "[placeholder='yyyy-dd-mm']",
  //   selectArrow: ".oxd-select-text--arrow",
  //   dateCloseButton: ".--close",
  //   saveButton: "[type='submit']",
  //   toastButton: ".oxd-toast",
  //   tabIndex: "[tabindex='0']"
    })

it.only('User info update - check ', () => {
   // visita a página de login
   login.loginIt()
   // insere o login e senha
   login.loginSucess(userData.userSuccess.loginSucess,userData.userSuccess.passSucess)
   // checa se está na pagina de dashboard
   dashboardCheck.checkDashBoard()
   //acessa o myinfo da pagina de dashboard e insere o formulário
   dashboardCheck.insertForm()
 
})
  // it('Login Sucess', () => {
  //   cy.visit('/auth/login')
  //   cy.get(selectorList.usernameField).type(userData.userSuccess.loginSucess)
  //   cy.get(selectorList.passwordField).type(userData.userSuccess.passSucess)
  //   cy.get(selectorList.loginButton).click()
  //   cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
  //   cy.get(selectorList.checkPage)
    
  // })

//   it('Login Fail', () => {
//     cy.visit('/auth/login')
//     cy.get(selectorList.usernameField).type(userData.userFail.loginFail)
//     cy.get(selectorList.passwordField).type(userData.userFail.passFail)
//     cy.get(selectorList.loginButton).click()
//     cy.get(selectorList.wrongCredentialAlert)
//   })
// })