describe('nextjs-app: One component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=one--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to One!');
    });
});
