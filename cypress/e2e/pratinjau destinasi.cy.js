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

    //menu destinasi
    cy.get('#preloader', { timeout: 30000 }).should('not.be.visible');
    cy.get(':nth-child(5) > .collapsed').click()

    //pratinjau destinasi
    cy.get('#destinasi > .nav > :nth-child(2) > .nav-link').click()

    //tambah pratinjau destinasi
    cy.get('.btn').click()

})
})