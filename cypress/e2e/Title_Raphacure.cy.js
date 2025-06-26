

describe('Rapha Title', () => {
  it('Verify title-positive', () => {
    cy.visit("https://raphacure.com/");
    cy.title().should('eq', 'RaphaCure: Digital Healthcare & Wellness in India');
  });

  it('Verify title-negative', () => {
    cy.visit("https://raphacure.com/");
    cy.title().should('not.eq', 'RaphaCure - Comprehensive ');
  });
});