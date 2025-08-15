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

    //menu galery
    cy.wait(4000);
    cy.get('#preloader', { timeout: 20000 }).should('not.be.visible');
    cy.get(':nth-child(18) > .nav-link').click()

    //tambah galery
    cy.wait(4000);
    cy.get('.ms-auto > .btn').click()
    cy.get('#destinationDropdown').click()
    cy.get(':nth-child(2) > .dropdown-item').click()
    cy.get('#gallery_video').type('https://www.youtube.com/watch?v=Ajl2FZT77lk')
    cy.get('input[type="file"]', { timeout: 10000 })
    .selectFile('cypress/fixtures/rinjani.jpg', { force: true });
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //pencarian
    cy.wait(4000);
    cy.get('#searchName', { timeout: 40000 }).type('Gunung Rinjani')
    cy.get('#searchName').clear()

    //edit
    cy.wait(4000);
    cy.get(':nth-child(1) > .card > .card-img-top > .dropdown', { timeout: 40000 }).click()
    cy.get(':nth-child(1) > .card > .card-img-top > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item', { timeout: 40000 }).click()
    cy.get('input[type="file"]', { timeout: 10000 })
    .selectFile('cypress/fixtures/rinjani2.jpg', { force: true });
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //hapus
    cy.wait(4000);
    cy.get(':nth-child(1) > .card > .card-img-top > .dropdown', { timeout: 40000 }).click()
    cy.get(':nth-child(1) > .card > .card-img-top > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()

    
         
})
})