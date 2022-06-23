export class login{

     username_id='#uname';
     password_id='#pwd';
     submit_id='[type="submit"]';


    visit(url){
        cy.visit(url)
    }
   
    userName(name){
        cy.get(this.username_id).type(name)
    }
    password(pass){
        cy.get(this.password_id).type(pass)
    }
    submit(){
        cy.get(this.submit_id).click()  
    }
}