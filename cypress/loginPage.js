class loginPage {
        selectorList(){
            const seletores = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"
            }
        return seletores
        }

        loginSucess(username, password) {
            cy.get(this.selectorList().usernameField).type(username)
            cy.get(this.selectorList().passwordField).type(password)
            cy.get(this.selectorList().loginButton).click()
        }

        loginIt(){
            cy.visit('/auth/login')
        }     
}
  export default loginPage
