class menuPage {
    selectorList(){
      const seletores = {
        myinfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
        directoryButton:"[href='/web/index.php/directory/viewDirectory']",
        maintenceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
        claimButton:"[href='/web/index.php/claim/viewClaimModule']",
        buzzButton:"[href='/web/index.php/buzz/viewBuzz']",
        recruitmentButton:"[href='/web/index.php/recruitment/viewRecruitmentModule']",
        timeButton:"[href='/web/index.php/time/viewTimeModule']",
        leaveButton:"[href='/web/index.php/leave/viewLeaveModule']",
        pimButton: "[href='/web/index.php/pim/viewPimModule']",
        adminButton:"[href='/web/index.php/admin/viewAdminModule']"
     } 
       
     return seletores
     } 
    
    accessMyinfo(){
        cy.get(this.selectorList().myinfoButton).click()
    }
    accessPerfomance(){
        cy.get(this.selectorList().performanceButton).click()
    }
    accessDirectory(){
        cy.get(this.selectorList().directoryButton).click()
    }
    accesMaintence(){
         cy.get(this.selectorList().maintenceButton).click()
    }
    accessClaim(){
        cy.get(this.selectorList().claimButton).click()
    }
    accesBuzz(){
        cy.get(this.selectorList().buzzButton).click()
    }
    recruitmentButton(){
        cy.get(this.selectorList().recruitmentButton).click()
    }
    timeButton(){
         cy.get(this.selectorList().timeButton).click()
    }
    leaveButton(){
         cy.get(this.selectorList().leaveButton).click()
    }
    pimButton(){
         cy.get(this.selectorList().leaveButton).click()
    }
    adminButton(){
         cy.get(this.selectorList().adminButton).click()
    }

} export default menuPage
