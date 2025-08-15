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

    //menu infomasi
    cy.get('#preloader', { timeout: 20000 }).should('not.be.visible');
    cy.get(':nth-child(19) > .collapsed').click()

    //kategori informasi
    cy.get('#informations > .nav > :nth-child(2) > .nav-link').click()

    //tambah kategori informasi
    cy.get('.btn').click()
    cy.get('#information_type_name').type('Trik Packings')
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //pencarian
    cy.get('#searchName', { timeout: 10000 }).type('Trik Packing')
    cy.get('#searchName').clear()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown-item').click()

    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > .me-2 > a > .feather').click()
    cy.get('#information_type_name').clear()
    cy.get('#information_type_name').type('Packing')
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //hapus
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()

})
})