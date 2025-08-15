Cypress.on('uncaught:exception', (err, runnable) => {
    // Agar error 'year' atau 'F is not defined' tidak membuat test gagal
    return false;
  });
describe('Login Growin Travel', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (
            err.message.includes('fs is not defined') ||
            err.message.includes('Identifier \'year\' has already been declared')
          ) {
            return false
          }
          
        })

it('should login with valid credentials', () => {
    cy.visit('https://growintravel.com/login');
    //login
    cy.get('#login-form > :nth-child(1) > input', { timeout: 10000 }).type('admin123@gmail.com');
    cy.get('#login-password').type('Admin@123')
    cy.get('#login-btn').click()
    cy.get('.swal2-confirm').click()

    //menu pemesanan
    cy.get('#preloader', { timeout: 10000 }).should('not.be.visible');
    cy.get(':nth-child(8) > .nav-link').click()

    //pencarian musim
    cy.get('#seasonFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#seasonFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#seasonFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //pencarian tanggal
    cy.get('#bookingDateFilterDropdown').click()
    cy.get('#daterange').click()
    cy.get('[aria-label="August 12, 2025"]').click()
    cy.get('[aria-label="August 21, 2025"]').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //pencarian kategori
    cy.get('#packageCategoryFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#packageCategoryFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#packageCategoryFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //pencarian status
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    cy.get('#statusFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //pencarian urutan
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()



})
})