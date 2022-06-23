import {login} from './pages/login_page';
import 'cypress-file-upload';

const login_page= new login;
let url='https://trytestingthis.netlify.app/index.html'
let username='test';
let password='test';
const fixtureFile = 'photo.jpeg';

// another website
// http://automationpractice.com/index.php

describe('login',()=>{
        it('log in',()=>{
            login_page.visit(url)
            login_page.userName(username);
            login_page.password(password)  
            login_page.submit()
            cy.url().should('contain','ogin.html?uname=test&pwd=test')


            cy.contains('here').click()
            cy.url().should('contain','/index.html')

            //alert
            // cy.get('.pop-up-alert > button').click()

            //input
            cy.get('#fname').type('judith')
            cy.get('#fname').should('have.value','judith')
            cy.get('#lname').type('lobo')
            cy.get('#lname').should('have.value','lobo')

            //radio button
            cy.get('#female').click()

            //select dropdown
            cy.get('#option').select('Option 2')
            cy.get('#option').should('contain','Option 2')

            //multi select dropdown
            cy.get('[name="Optionwithcheck[]"]').select(['Option 2','Option 3'])
            // cy.get('[name="Optionwithcheck[]"]').should('contain',['Option 2','Option 3'])
            // cy.get('[name="option 2"]',{timeout : 6*1000}).should('have.value', 'Option 2')
            // .invoke('val')
            // .should('deep.equal', ['Option 2','Option 3'])
            // cy.get('#owc > [value="option 2"]').should('contains', 'selected')
            // cy.get('[name="Optionwithcheck[]"]').select(['Option 2','Option 3'])
            // cy.get('[name="Optionwithcheck[]"]',{timeout : 6*1000}).should('contains.value', ['Option 2','Option 3'])

            //checkbox
            cy.get('[name="option2"]').check()
            cy.get('[name="option2"]').should('be.checked').and('have.value', 'Option 2')
            // cy.get('[name="option2"]').contains('attr','checked')


            //start typing 
            // cy.get('#datalists').select('Chocolate')

           //color picker 
            cy.get('input[type=color]')
            .invoke('val', '#ff0000')
            .trigger('change')
            cy.get('input[type=color]').should('have.value','#ff0000')

            //date picker 

         
           
            // cy.get('#day')
            cy.get('#day').type('2020-12-02') 
            //validate  if date is added date
            cy.get('#day').invoke('val').then((text) => {
                expect('2020-12-02').to.equal(text);
            });


            // range
            cy.get('#a')
            .invoke('val', 20)
            .trigger('change')
            cy.get('output').invoke('val',20)
            cy.get('output').should('have.value',20) 
            
            
            //file
            // For me the easier way to do this is using this cypress file upload package

            // Install it:
            
            // npm install --save-dev cypress-file-upload
            // Then add this line to your project's cypress/support/commands.js:
            
            // import 'cypress-file-upload';
            // Now you can do:
            
            // const fixtureFile = 'photo.png';
            // cy.get('[data-cy="file-input"]').attachFile(fixtureFile);
            // photo.png must be in cypress/fixtures/
            cy.get('#myfile').attachFile(fixtureFile);
            // cy.get('#myfile').should('contain','photo.jpeg');

            //input number
            // cy.get('#quantity')
            cy.get('#quantity').type(10).trigger('change')
            cy.get('#quantity').should('have.value',10)

            //textarea 
            cy.get('textarea').clear()
            cy.get('textarea').type('I am testing with cypress')
            cy.get('textarea').should('have.value','I am testing with cypress')
             
            // cy.get('.btn').click()
            // cy.go('back')
            
                
        })
})


describe('Mouse Over feature', () => {
    it('Click on Sign up', () => {
        cy.visit('https://book.spicejet.com/')
        //mouseover
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
        cy.url().should('include', '/Register')
        cy.contains(' SpiceClub Member Registration').should('be.visible')
    })
    it('Click on Login', () => {
        cy.visit('https://book.spicejet.com/')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Member Login').click()
    })

    it('Add To Cart test', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('.cross').click()
        cy.wait(3000)
            // cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('.shopping_cart a').contains('Cart').trigger('mouseover')
        cy.get('#button_order_cart').click()
        cy.url().should('include', 'controller=order')
    })
    
    it('Aotomation Ecom Search test', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress')
        cy.get('.ac_results').find('li').contains('T-shirts').click()
    })
})


describe('more testing',()=>{
    it.only('more testing',()=>{
        cy.visit('http://automationpractice.com/index.php')
        // cy.get('.bx-next').click()
        // cy.wait(1000)
        // cy.get('.bx-prev').click()
        // cy.scrollTo('bottom')
        // cy.get('.blockcategories_footer > h4').contains('Categories')
        // cy.scrollTo('top')
        cy.get('.login').click()
        cy.get('#email_create').type('guest@test.com')
        cy.get('#SubmitCreate > span').click()
        cy.wait(6000)
        cy.get('#id_gender2').click()
        cy.get('#customer_firstname').type('test')
        cy.get('#customer_lastname').type('guest')
        cy.wait(1000)
        cy.get('#email').type('guest@test.com')
        // cy.get('#email').
        cy.get('#passwd').type('Password@1')
        cy.get('#firstname').type('test')
        cy.get('#lastname').type('test')
        cy.get('#company').type('Test Company')
        cy.get('#address1').type('my street next to this street , #1234 P.O box number,Test Company,')
        cy.get('#address2').type('#427/2 my building , 27unit ')
        cy.get('#city').type('New york')
        
    })
})




