describe('nglib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=onecomponent--primary'));
  it('should render the component', () => {
    cy.get('imported-libs-one').should('exist');
  });
});
