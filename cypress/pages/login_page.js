class LoginPage{
    //seletores ou Elementos
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';

    //Ações
    typeUsername(username){
        cy.get(this.txtUsername).type(username);
    }

    typePassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickLogin(){
        cy.get(this.btnLogin).click();
    }

    //Funcionalidades

    realizeLogin(username,password){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
}

export default LoginPage;