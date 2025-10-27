class MyInfoPage {
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input',
            dateField: "[placeholder='yyyy-dd-mm']",
            nationalityAndMaritalField: '.oxd-select-text--arrow',
            secondItemCombobox: ':nth-child(20) > span',
            thirdItemCombobox: ':nth-child(3) > span',
            dateCloseButton: '.--close',
            submitButton: "[type='submit']"
        }
        return selectors
    }
    fillPersonalDetails(firstName, lastName, middleName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(2).clear().type(middleName)
     }

     fillEmployeeDetails(employeeId, otherId, driversLicense, driversLicenseDate){
        cy.get(this.selectorsList().genericField).eq(5).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(8).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
     }

     fillStatus(){
        cy.get(this.selectorsList().nationalityAndMaritalField).eq(0).click({force:true})
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().nationalityAndMaritalField).eq(1).click({force:true})
        cy.get(this.selectorsList().thirdItemCombobox).click()
     }

     saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force:true})
        cy.get('.oxd-toast-close')
     }

}
export default MyInfoPage