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

    //menu ulasan
    cy.get('#preloader', { timeout: 20000 }).should('not.be.visible'); 
    cy.get(':nth-child(14) > .nav-link').click()

    //pencarian nama
    cy.get('#searchName', {timeout: 10000}).type('Liburan')
    cy.get('#searchName').clear()
    cy.get('#searchName', {timeout: 10000}).type('Trip')
    cy.get('#searchName').clear()

    //pencarian rating
    cy.get('#ratingFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#ratingFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#ratingFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    cy.get('#ratingFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    cy.get('#ratingFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(7) > .dropdown-item').click()
    cy.get('#ratingFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //pencarian urutan
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(6) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //pencarian paket wisata
    cy.get('#PackageTypeFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#PackageTypeFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').click()

    //aksi
    cy.get(':nth-child(1) > :nth-child(5) > .list-unstyled > .me-2 > a > .feather').click()
    cy.wait(5000);
    cy.get('#kembali').click()


         
})
})