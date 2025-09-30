import dashboardPage from '../dashboardPage'
import userData from '../fixtures/users/userData.json'
import loginPage from '../loginPage'

const login = new loginPage()
const dashboardCheck = new dashboardPage()
const Chance = require('chance');
const chance = new Chance();

describe('USER - Orange HRM Testes ', () => {
  
it('User info update - check ', () => {
   // visita a página de login
   login.loginIt()
   //login para acessar a pagina
   login.loginUser(userData.userSuccess.loginSucess,userData.userSuccess.passSucess)
   // insere o login e senha
   //login.loginSucess(userData.userSuccess.loginSucess,userData.userSuccess.passSucess)
   // checa se está na pagina de dashboard
   dashboardCheck.checkDashBoard()
   //acessa o myinfo da pagina de dashboard e insere o formulário
   dashboardCheck.insertName(chance.first(), chance.last(), chance.string())
   dashboardCheck.insertCad("1234567","222444","2345678")
   dashboardCheck.insertDate("1995-03-01")
   dashboardCheck.insertComboBox()
   dashboardCheck.saveButton()
 
})
 


})