describe('searchbar testing',()=>{

    
  it('Searching doctor name (desktop view)', () => {
      cy.visit('https://raphacure.com');

      // Find the visible desktop search input and type
      cy.get('input[type="text"]')
         .filter(':visible')
         .first()
         .type('Naveen Gowda', { force: true });

      // Optional: verify the result popup
      cy.get('.search-popup', { timeout: 5000 })
         .should('be.visible')
         .and('contain', 'Naveen Gowda');
      cy.wait(2000);
   });
   it('Searching Test name (desktop view)', () => {
      cy.visit('https://raphacure.com');

      // Find the visible desktop search input and type
      cy.get('input[type="text"]')
         .filter(':visible')
         .first()
         .type('CT carotid angiogram', { force: true });

      // Optional: verify the result popup
      cy.get('.search-popup', { timeout: 5000 })
         .should('be.visible')
         .and('contain', 'CT carotid angiogram');

      cy.wait(2000);
   });

   it('Searching Hospital name (desktop view)', () => {
      cy.visit('https://raphacure.com');

      // Find the visible desktop search input and type
      cy.get('input[type="text"]')
         .filter(':visible')
         .first()
         .type('Narayana', { force: true });

      // Optional: verify the result popup
      cy.get('.search-popup', { timeout: 5000 })
         .should('be.visible')
         .and('contain', 'Narayana');
      cy.wait(2000);
   });
   it('Searching package name', () => {
      cy.visit('https://raphacure.com');

      // Find the visible desktop search input and type
      cy.get('input[type="text"]')
         .filter(':visible')
         .first()
         .type('Alcohol Risk', { force: true });

      // Optional: verify the result popup
      cy.get('.search-popup', { timeout: 5000 })
         .should('be.visible')
         .and('contain', 'Alcohol Risk');
      cy.wait(2000);
   });

    it('enter wrong search term', () => {
      cy.visit('https://raphacure.com');

      // Find the visible desktop search input and type
      cy.get('input[type="text"]')
         .filter(':visible')
         .first()
         .type('Invalid Search Term', { force: true });

      // Optional: verify the result popup
      cy.get('.search-popup', { timeout: 5000 })
         .should('be.visible')
         .and('contain', 'No result found for Invalid Search Term');
      cy.wait(2000);
   });

    it('closing search popup', () => {
      cy.visit('https://raphacure.com');

      // Find the visible desktop search input and type
      cy.get('input[type="text"]')
         .filter(':visible')
         .first()
         .type('test', { force: true });

      // Optional: verify the result popup
      cy.get('.search-popup', { timeout: 5000 })
         .should('be.visible')
         .and('contain', 'test');
      cy.xpath("//div[@class='search-heading-text-div']//button")
      .should('be.visible')
      .click();
      cy.wait(2000);
      
   });



 })
