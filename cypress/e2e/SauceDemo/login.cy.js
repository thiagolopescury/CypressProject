import LoginPage from '../../pages/login_page';
import ProductsPage from '../../pages/products_page';
import CartPage from '../../pages/cart_page';
import CheckoutPage from '../../pages/Checkout_page';
import CheckoutFinishPage from '../../pages/checkoutfinish_page';
import IventoryPage from '../../pages/iventory_page';

var loginPage = new LoginPage();
var productsPage = new ProductsPage();
var cartPage = new CartPage();
var checkoutPage = new CheckoutPage();
var checkoutFinishPage = new CheckoutFinishPage();
var iventoryPage = new IventoryPage();


describe("Funcionalidade de login",()=>{
    it("Login com sucesso", ()=>{
        cy.visit("https://www.saucedemo.com/");

        loginPage.realizeLogin("standard_user", "secret_sauce");

        productsPage.verifyIfExistProduts();

        productsPage.realizeClickCart();

        productsPage.realizeClickCartCheckout();

        cartPage.realizeClickCheckout();

        checkoutPage.realizeCheckout("Thiago", "Lopes", "33000030");

        checkoutFinishPage.realizeClickFinish();

        iventoryPage.realizeClickBack();

    });

    

});