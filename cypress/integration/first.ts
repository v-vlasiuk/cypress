describe('google search', () => {
    it('should work', () => {
        cy.visit('http://www.google.com');
        cy.dataCy('greeting')
        cy.get('#lst-ib').type('Hello world{enter}')
    });
});