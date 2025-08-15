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
    cy.get('#preloader', { timeout: 20000 }).should('not.be.visible');
    cy.get(':nth-child(5) > .collapsed').click()

    //daftar destinasi
    cy.get('#destinasi > .nav > :nth-child(1) > .nav-link').click()

    //tambah daftar destinasi
    cy.get('.btn').click()
    cy.get('#destination_name').type('Gunung Lawu')
    cy.get('#provinceDropdown').click()
    cy.get('#searchProvince').type('Jawa Tengah')
    cy.get(':nth-child(14) > .dropdown-item', { timeout: 10000 }).click()
    cy.get('#citiesDropdown').click()
    cy.get('#searchCity', { timeout: 10000 }).type('Karanganyar')
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(14) > .dropdown-item').click()
      // Isi CKEditor 5 
    cy.window().then((win) => {
      const ckEditorInstance = win.document
        .querySelector('.ck-restricted-editing_mode_standard')
        ?.ckeditorInstance;

      if (ckEditorInstance) {
        ckEditorInstance.setData('<p>Gunung Lawu adalah gunung api aktif tipe strato yang terletak di perbatasan Jawa Tengah dan Jawa Timur, Indonesia.</p>');
      } else {
        throw new Error('CKEditor instance not found');
      }
    });
      //foto
    cy.get('input[type="file"]', { timeout: 10000 }).eq(1)
    .selectFile('cypress/fixtures/lawu.jpg', { force: true });
    cy.get('input[type="file"]', { timeout: 10000 }).eq(1)
    .selectFile('cypress/fixtures/lawu2.jpg', { force: true });
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //pencarian nama
    cy.get('#searchName', { timeout: 20000 }).type('Gunung Lawu')
    cy.get('#searchName').clear()

    //pencarian provinsi
    cy.get('#province_nameDropdown').click()
    cy.get('.px-3 > .form-control').type('Jawa Tengah')
    cy.get('.px-3 > .form-control').clear()
    cy.get('#province_nameDropdown').click()

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
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(7) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(8) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(9) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(10) > .dropdown-item').click()
    cy.get('#sortFilterDropdown').click()
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()

    //edit
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(2) > a > .feather').click()
    cy.get('input[type="file"]', { timeout: 10000 }).eq(1)
    .selectFile('cypress/fixtures/lawu3.jpg', { force: true });
    cy.get('#submitButton').click()
    cy.get('.swal2-confirm').click()

    //hapus
    cy.get(':nth-child(1) > .text-center > .list-unstyled > :nth-child(3) > a > .feather').click()
    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()

})
})