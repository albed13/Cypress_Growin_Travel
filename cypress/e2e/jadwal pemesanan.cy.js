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

    //jadwal pemesanan
    cy.get('#dropcalendar > .nav > :nth-child(1) > .nav-link').click()
    cy.get('.fc-prev-button').click()
    cy.get('.fc-prev-button').click()
    cy.get('.fc-prev-button').click()
    cy.get('.fc-next-button').click()
    cy.get('.fc-next-button').click()
    cy.get('.fc-next-button').click()
    cy.get('.fc-day-tue > .fc-daygrid-day-frame > .fc-daygrid-day-events > .fc-daygrid-event-harness > .fc-daygrid-event').click()
    cy.get(':nth-child(1) > .fc-day-thu > .fc-daygrid-day-frame > .fc-daygrid-day-events > .fc-daygrid-event-harness > .fc-daygrid-event').click()
    cy.get('[style="top: 0px; left: 0px; right: -183.792px;"] > .fc-daygrid-event').click()
})
})