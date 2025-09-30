import dashboardPage from '../dashboardPage'
import userData from '../fixtures/users/userData.json'
import loginPage from '../loginPage'

const login = new loginPage()
const dashboardCheck = new dashboardPage()

describe('LOGIN - Orange HRM Testes ', () => {


it('User info update - check ', () => {
   // visita a página de login
   login.loginIt()
   //login para acessar a pagina
   login.loginUser(userData.userSuccess.loginSucess,userData.userSuccess.passSucess)
   //checa se está na pagina de dash
   dashboardCheck.checkDashBoard()
 })
 
  it('Login Fail', () => {
   login.loginIt()
   login.loginUser(userData.userFail.loginFail, userData.userFail.passFail)
   login.checkInvalidLogin()
   })
})