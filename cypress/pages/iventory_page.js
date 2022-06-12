class IventoryPage{

    //seletores ou elementos

    btnBack = '[data-test="back-to-products"]';

    //açoes

    clickBack(){
        cy.get(this.btnBack).click();
    }

    //Funcionalidades

    realizeClickBack(){
        this.clickBack();
    }


}
export default IventoryPage;