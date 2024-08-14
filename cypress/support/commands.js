Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Stephanie')
    cy.get('#lastName').type('Leal')
    cy.get('#email').type('steph@exemplo.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})