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

    //menu fasilitas
    cy.get('#preloader', { timeout: 20000 }).should('not.be.visible');
    cy.get(':nth-child(4) > .collapsed').click()

    //ikon fasilitas
    cy.get('#amenities > .nav > :nth-child(2)').click()

    //tambah ikon fasilitas
    cy.get('.btn').click()
    cy.get('.input-group > .btn', { timeout: 10000 }).click()
    cy.get('#icon-search').type('Rumah')
    cy.get(':nth-child(1) > iconify-icon', { timeout: 20000 }).click()
    cy.get('#icon_name').type('Rumah')
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //pencarian
    cy.get('#searchName').type('Rumah', { timeout: 5000 })
    cy.get('#searchName').clear()
    cy.get('#searchName').type('Drink', { timeout: 5000 })
    cy.get('#searchName').clear()

    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > .me-2 > a > .feather').click()
    cy.get('.input-group > .btn').click({ timeout: 5000 })
    cy.get('#icon-grid > :nth-child(2) > iconify-icon').click({ timeout: 10000 })
    // cy.get('#icon_name').clear()
    cy.get('#icon_name').type('House')
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //hapus
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm', { timeout: 10000 }).click()


})
})