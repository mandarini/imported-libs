describe('react-rollup: ReactRollup component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactrollup--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactRollup!');
    });
});
