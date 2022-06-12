class CartPage{

    //seletores ou elementos

    btnCheckout = '[data-test="checkout"]';

    //açoes

    clickCheckout(){
        cy.get(this.btnCheckout).click();
    }

    //Funcionalidades

    realizeClickCheckout(){
        this.clickCheckout();
    }


}
export default CartPage;