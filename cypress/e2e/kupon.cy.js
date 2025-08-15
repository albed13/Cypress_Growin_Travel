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
    

    //masuk menu kupon 
    cy.get('#preloader', { timeout: 20000 }).should('not.be.visible');
    cy.get(':nth-child(13) > .nav-link').click();
    cy.get('.btn').click()
    cy.get('#coupon_name').type('Test')
    cy.get('#coupon_code').type('eydnfi')
    cy.get('#coupon_quota').type('34')
    cy.get('#daterange').click(); 
    cy.get('[aria-label="August 4, 2025"]').click();
    cy.get('.flatpickr-day[aria-label="August 14, 2025"]').click();
    cy.get('#discount_percent').type('50')
    cy.get('input[type="file"]', { timeout: 10000 })
    .selectFile('cypress/fixtures/aladin.png', { force: true });
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm', { timeout: 10000 }).should('be.visible').click(); 

    // //pencarian
    cy.get('#searchName').type('test', { delay: 500 });
    cy.get('#searchName').clear();
    cy.get('#couponStatusDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item', { timeout: 30000 }).click()
    cy.get('#couponStatusDropdown').click()
    cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item', { timeout: 30000 }).click()
    cy.get('#couponTypeDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item', { timeout: 30000 }).click()
    cy.get('#couponTypeDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item', { timeout: 30000 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item', { timeout: 30000 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(4) > .dropdown-item', { timeout: 30000 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(5) > .dropdown-item', { timeout: 30000 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(6) > .dropdown-item', { timeout: 30000 }).click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(4) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item', { timeout: 30000 }).click()

    // edit kupon
    cy.get(':nth-child(1) > :nth-child(8) > .list-unstyled').click()
    cy.get('#typeDropdown').click()
    cy.get(':nth-child(1) > .dropdown-item').click()
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //hapus kupon
    cy.get(':nth-child(1) > :nth-child(8) > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
     
})
})