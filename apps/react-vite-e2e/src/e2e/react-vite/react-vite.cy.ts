describe('react-vite: ReactVite component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactvite--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactVite!');
    });
});
