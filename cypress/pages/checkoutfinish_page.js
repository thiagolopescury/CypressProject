class CheckoutFinishPage{

    //seletores ou elementos

    btnFinish = '[data-test="finish"]';

    //açoes

    clickFinish(){
        cy.get(this.btnFinish).click();
    }

    //Funcionalidades

    realizeClickFinish(){
        this.clickFinish();
    }


}
export default CheckoutFinishPage;