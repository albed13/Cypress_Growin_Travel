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
    
    //menu daftar barang tambahan
    cy.get('#preloader', { timeout: 10000 }).should('not.be.visible');
    cy.get(':nth-child(3) > .collapsed').click()

    //daftar barang tambahan
    cy.get('#additional-services > .nav > :nth-child(1) > .nav-link').click()
    cy.get('.btn').click()
    cy.get('#additional_name').type('Sepatu Sneakers')
    cy.get('#categoryDropdown').click()
    cy.get(':nth-child(2) > .dropdown-item').click()
    cy.get('input[type=file]').eq(1)
    .selectFile('cypress/fixtures/sepatu.jpg', { force: true })
    cy.get('input[type=file]').eq(0)
    .selectFile('cypress/fixtures/sepatu.jpg', { force: true })
    cy.get('input[type=file]').eq(0)
    .selectFile('cypress/fixtures/sepatu2.jpg', { force: true })
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //pencarian
    cy.get('#searchName').type('Sepatu Sneakers', { delay: 500 })
    cy.get('#searchName').clear()
    cy.get('#AdditionalCategoryFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item', { delay: 500 }).click()
    cy.get('#AdditionalCategoryFilterDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item', { delay: 500 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item', { delay: 500 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item', { delay: 500 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item', { delay: 500 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item', { delay: 500 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item', { delay: 500 }).click()

    //edit
    // cy.get(':nth-child(2) > .text-center > .list-unstyled > .me-2 > a > .feather').click()
    // // cy.get(':nth-child(3) > .text-center > .list-unstyled > .me-2 > a > .feather').click()
    // cy.get('#categoryDropdown').click()

    //hapus
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
    

    



})
})