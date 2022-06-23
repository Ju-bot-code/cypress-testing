/// <reference types="cypress" />



//basic stuff
    describe('basic-test',()=>{
        it('testing',()=>{
            cy.visit('https://netninja.dev/')

            //  checks if the page contains the text 
            cy.contains('Black-Belt')
            
            //checks if the text exists and also asserts that it should exist 
            cy.contains('Black-Belt').should('exist')

            //gets class and selectors 
            cy.get('div[class=navbar__header]')

            //should exist 
            cy.get('div[class=navbar__header]').should('exist');

            //should not exist
            cy.get('div[class=blabla]').should('not.exist');

            //custom attributes
            cy.get('[data-featured-product-type=Course]')

            // click
            cy.get('div[class=navbar__header]>a').click();

            //will fail , 1st should have exaclty what 2nd has and not more
            // cy.contains('Black-Belt Your Coding Skills').should('have.text','Black-Belt ')

            // will set the viewport to the given value
            cy.viewport(1280,729);
            cy.viewport('samsung-note9')

        })

    })
//end of basic stuff


//responsive testing    

    //desktop testing suit
    describe('desktop testing',()=>{
        it('tests',()=>{
            cy.viewport(1280,720)
        })
    })

    //mobile testing suit
    describe('mobile testing',()=>{
        it('tests',()=>{
            cy.viewport('samsung-s10')
        })
    })

//responsive testing end    


//testing login page
describe('testing login page',()=>{
    it('login test',()=>{
        //fetched the sign up url
        cy.visit('https://sso.teachable.com/secure/925908/identity/sign_up/with_email')

        //find the link to login and click it 
        cy.contains('Login').click()

        //log or comments 
        cy.url().then(value =>{
            cy.log('the current url is ', value);
        })

        // checking if this text exists in the page 
        cy.contains('Need an account?').should('exist')

        //looking for forgot password link  and clicking it 
        cy.contains('Forgot Password').click()

        //fetch the current url and check if it includes /forgot_password in the url
        cy.url().should('include','/forgot_password')

        //got back to login page from forgot password
        cy.go('back')

        cy.get('[data-testid=login-button]').click()

        cy.contains('Your email or password is incorrect.').should('exist')
       
    })
})
//testing login page end


// type into login feild

describe('typing into input feilds',()=>{

    //to have the basic set up for each  it() suites
    beforeEach(()=>{
        cy.visit('https://sso.teachable.com/secure/925908/identity/login')
        cy.viewport('macbook-11')
    })
    it('typing',()=>{

        //visit the page
       

        //check theres no error before 
        cy.contains('Your email or password is incorrect.').should('not.exist');

        //type wrong email 
        cy.get('[id=email]').type('admin');

        //type wrong password
        cy.get('[id=password]').type('password');

        //click on sign in
        cy.get('[data-testid="login-button"]').click();

        //check for error 
        cy.contains('Your email or password is incorrect.').should('exist');
    })
})

// type into login feild end


// // login in 


// describe('login in',()=>{
//     it('login',()=>{
//         cy.visit('https://sso.teachable.com/secure/925908/identity/login');
//         cy.get('[id=email]').type();
//         cy.get('[id=password]').type();
//         cy.get('[data-testid="login-button"]').click()
//     })
// })



// const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikp1ZGl0aCIsIl9pZCI6IjYxYTg4NmYzZjQxZjczMDAwOTEyZWJjYyIsIm5hbWUiOiJKdWRpdGggbG9ibyIsImlhdCI6MTYzODQzNDU0NywiZXhwIjoxNjQzNjE4NTQ3fQ.Ln-8rMZBuNSwbROwyhc45f9iYnuS1zBdOwZQhzP2wGI";


// describe('login to code Damn',()=>{

//     before(()=>{
//         cy.then(()=>{
//             window.localStorage.setItem('__auth__token',token)
//         })
//     })
//     beforeEach(()=>{
//         cy.viewport(1280,780)
//         cy.visit('www.codedamn.com')
//     })

//     it('login',()=>{

//        cy.contains('Dashboard')

//     })
// })

// //login end



//testing my projects

describe('my projects',()=>{
    it('test',()=>{
        cy.visit(' http://localhost:3000');
        cy.wait(1000)
        cy.contains('charizard',{timeout : 4*1000}).click()
        cy.get('[id=searchWrap] > [id=search]').type('charizard');
        cy.get('[href="/drop"]').click();
        // cy.contains("down").click();

        // cy.contains('mewtwo')
        // cy.debug();
        // cy.debug();
        // cy.go('back')
    })
})

//testing my projects end




// // how to work with the terminal
// describe('how to work with terminal',()=>{

//     it('typing out comand in the terminal' ,()=>{

//         //type('{ctrl}{c}') the {ctrl} is how u enter the commands in the terminal
//         cy.get('[data-testid=xterm]').type('{ctrl}{c}').type('cd my-app{enter}');

//         //alternate
//         const filename =Math.random();
//         cy.get('data-testod=xterm').type('{ctrl}{c}').type(`cd ${filename}{enter}`);


//         //to right click
//         cy.contains(`${filename}{enter}`).rightclick();
//     })

// })
// // how to work with the terminal end


//find can be used to find child element 
//cy.get('data-testod=xterm').find('[id=hello]')


//assertions


//should() (inplisit assertion)

//cy.should('contains','hello world');
//should have 
//cy.should('have.class','bg-pink-400');
//should be 
//cy.should('be.enabled')
//should equal 
//cy.get('#form').invoke('attr','id').should('equal','form');

//and()   (inplisit assertion)
//cy.get('#form').should('contains','hello world').and('have.class','bg-pink-400')


//expect()  (Excplisit assertion)
//let name ='judith'
//cy.except(judith).to.be.equal('judith)

//let value=true;
//cy.except(value).to.be.true


//assert() (Excplisit assertion)
//let num =5;
//cy.assest(num,5,'not eqaual(meaasge in case of and error )')

// describe('object Model',()=>{
//     it.only('test object model',()=>{
        
//     })
// })