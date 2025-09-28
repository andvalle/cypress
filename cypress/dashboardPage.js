import menuPage from './menuPage'

const menuPageList = new menuPage()

// Define uma classe chamada "dashPage" para organizar seletores e métodos da página de Dashboard
class dashPage {

    // Método que retorna um objeto com todos os seletores da página
    selectorList(){
        const seletoresDashPage = {
            checkPage: ".orangehrm-dashboard-grid", // Seletor que identifica se a página do Dashboard carregou
            firstName: "[name='firstName']", // Campo de texto para o primeiro nome
            middleName: "[name='middleName']", // Campo de texto para o nome do meio
            lastName: "[placeholder='Last Name']", // Campo de texto para o último nome
            genericField: ".oxd-input--active", // Campos genéricos de input (usado com .eq para selecionar um específico)
            dataField: "[placeholder='yyyy-dd-mm']", // Campo de data
            selectArrow: ".oxd-select-text--arrow", // Ícone de seta para dropdowns
            dateCloseButton: ".--close", // Botão para fechar o seletor de data
            saveButton: "[type='submit']", // Botão de salvar
            toastButton: ".oxd-toast", // Mensagem de confirmação (toast)
            tabIndex: "[tabindex='0']" // Elemento com tabindex, seleciona o pais e o sexo.
        }
       return seletoresDashPage // Retorna todos os seletores
    }
    
    // Método para validar que o usuário está no Dashboard e acessar o menu "My Info"
    checkDashBoard(){
        cy.location('pathname').should('equal' , '/web/index.php/dashboard/index') 
        // Confirma que a URL contém o caminho do Dashboard

        cy.get(this.selectorList().checkPage) 
        // Valida que o elemento principal do Dashboard existe

        menuPageList.accessMyinfo()
        // cy.get(this.selectorList().myinfoButton).click()
        // Clica no botão "My Info" para abrir a página de informações do usuário
    }

    // Método para preencher e enviar o formulário "My Info"
    insertForm(){
        // Limpa e insere valores nos campos de nome
        cy.get(this.selectorList().firstName).clear().type("TestName")
        cy.get(this.selectorList().middleName).clear().type("MiddleNameTest")
        cy.get(this.selectorList().lastName).clear().type("LastNameTest")

        // Preenche campos genéricos usando índices para selecionar a posição correta
        cy.get(this.selectorList().genericField).eq(3).clear().type("2223334445") 
        cy.get(this.selectorList().genericField).eq(4).clear().type("432122")
        cy.get(this.selectorList().genericField).eq(5).clear().type("4354335675489")

        // Preenche o campo de data
        cy.get(this.selectorList().dataField).eq(0).clear().type("2025-12-31")
        cy.get(this.selectorList().dateCloseButton).click() // Fecha o calendário

        // Salva as informações
        cy.get(this.selectorList().saveButton).eq(0).click()

        // Valida que apareceu a mensagem de sucesso
        cy.get('.oxd-toast').should('contain', "Successfully Updated")

        // Interage com abas adicionais usando tabindex e cliques forçados
        cy.get(this.selectorList().tabIndex).eq(0).click({force:true})
        cy.get(':nth-child(4) > span').click({force:true})

        cy.get(this.selectorList().tabIndex).eq(1).click({force:true})
        cy.get(':nth-child(3) > span').click({force:true})
    }
    
}

// Exporta a classe para ser usada em outros arquivos de teste
export default dashPage
