const { realHover } = require("cypress-real-events/commands/realHover");



describe('quiz', function(){
   

    it(' case1', function(){
       cy.visit("http://automationpractice.com/index.php")
       cy.wait(5000)
       cy.get('[title="View my shopping cart"]').should('be.visible')
       cy.get('.ajax_cart_no_product').should('be.visible')
       cy.get('b').should('be.visible')

       

       
  

   
})


it(' case2', function(){
    cy.visit('https://www.techlistic.com/p/selenium-assignments.html')



    cy.wait(5000)

    cy.viewport(1124, 900)

    cy.wait(5000)




    /* ==== Generated with Cypress Studio ==== */


    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.overflowable-container > :nth-child(1) > .container > .tabs > :nth-child(2) > .dropdown > .dropbtn > .fa').click();
    cy.wait(5000)
    cy.get('.overflowable-container > .overflowable-contents > .container > .tabs > .overflowable-item:nth-child(2) > .dropdown > .dropbtn > .fa').realHover()
    cy.get('.overflowable-container > .overflowable-contents > .container > .tabs > .overflowable-item:nth-child(2) > .dropdown > .dropdown-content > a:nth-child(1)').invoke('text').then((text) => {
      cy.log(text)
      cy.wait(5000)
    
    })
    /* ==== End Cypress Studio ==== */
})
it(' case3', function(){
  cy.visit('https://ourworldindata.org/explorers/coronavirus-data-explorer')

cy.wait(8000)
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[data-test="accept"]').click()
  
  cy.get('[style="position: relative; clear: both;"] > svg').should('be.visible')
  cy.get(':nth-child(13) > polyline').realHover().then((text) => {
    cy.log(text)
    cy.wait(5000)
  
  })

  
  cy.get(':nth-child(13) > path').realHover()
  cy.wait(6000)
  cy.get(':nth-child(14) > path').realHover()
  cy.wait(6000)
  cy.get(':nth-child(12) > path').realHover()
  cy.wait(6000)
 cy.get(':nth-child(9) > path').realHover()
 cy.wait(6000)
 cy.get(':nth-child(11) > path').realHover()
 .each(($el, index) => {
  realHover()
})


 

  

  /* ==== End Cypress Studio ==== */
})

})


