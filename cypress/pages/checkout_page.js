class CheckoutPage{
    //seletores ou Elementos
    txtFirstname = '[data-test="firstName"]';
    txtLastname = '[data-test="lastName"]';
    txtPostalcode = '[data-test="postalCode"]';
    btnContinueclick = '[data-test="continue"]';

    //Ações
    typeFirstname(firstname){
        cy.get(this.txtFirstname).type(firstname);
    }

    typeLastname(lastname){
        cy.get(this.txtLastname).type(lastname);
    }

    typePostalcode(postalcode){
        cy.get(this.txtPostalcode).type(postalcode);
    }

    clickContinue(){
        cy.get(this.btnContinueclick).click();
    }

    //Funcionalidades

    realizeCheckout(firstname,lastname,postalcode){
        this.typeFirstname(firstname);
        this.typeLastname(lastname);
        this.typePostalcode(postalcode);

        this.clickContinue();
    }
}

export default CheckoutPage;