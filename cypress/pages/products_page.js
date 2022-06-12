class ProductsPage{
    //Elementos
    lblProducts = ".title"
    btnAddCart = '[data-test="add-to-cart-sauce-labs-backpack"]';
    btnCartLink = '.shopping_cart_link';




    //Ações
    verifyProducts(should){
        cy.get(this.lblProducts).should(should);
    }

    clickAddCart(){
        cy.get(this.btnAddCart).click();
    }

    clickGoToCheckout(){
        cy.get(this.btnCartLink).click();
    }

    //Funcionalidades
    verifyIfExistProduts(){
        this.verifyProducts("be.exist");
    }

    realizeClickCart(){
        this.clickAddCart();
    }

    realizeClickCartCheckout(){
        this.clickGoToCheckout();
    }

}
export default ProductsPage;