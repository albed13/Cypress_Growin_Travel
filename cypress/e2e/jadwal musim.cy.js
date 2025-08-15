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

    //menu kalender
    cy.get('#preloader', { timeout: 20000 }).should('not.be.visible');
    cy.get(':nth-child(9) > .collapsed').click()

    //jadwal musim
    cy.get('#dropcalendar > .nav > :nth-child(2) > .nav-link').click()

    //tambah jadwal musim
    cy.get('.btn').click()
    cy.get('#season_description').type('Musin Semi')
    cy.get('#season_date_range').click()
    cy.get('[aria-label="August 20, 2025"]').click()
    cy.get('[aria-label="August 28, 2025"]').click()
    cy.get('.d-flex > .btn').click()
    cy.get('.swal2-confirm').click()

    //pencarian
    cy.wait(1000);
    cy.get('#searchName').type('Musim Semi')
    cy.get('#searchName').clear()

    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('#season_date_range').click()
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > [aria-label="August 29, 2025"]').click()
    cy.get('.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > [aria-label="September 6, 2025"]').click()
    cy.get('.d-flex > .btn').click()
    cy.get('.swal2-confirm').click()

    //hapus
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
         
})
})