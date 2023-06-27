describe('First', () => {
    it('first test case', () => {
        cy.visit('/')
        cy.get('.menu-title').contains('Form').click();
        cy.get('a[title="Form Layouts"]').should('have.text','Form Layouts').click();

        // by tag name
        cy.get('input')

        // by ID
        cy.get('#inputEmail1')

        // by class
        cy.get('.input-full-width')

        // by attribute name
        cy.get('[placeholder]')

        // by attribute name and value
        cy.get('[placeholder="Email"]')

        // by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by tag name and attribute with value
        cy.get('input[placeholder="Email"]')

        // 
    })

    it.only('second', () => {
        cy.visit('/')
        cy.get('.menu-title').contains('Form').click();
        cy.get('a[title="Form Layouts"]').should('have.text','Form Layouts').click();

        cy.get('#inputEmail3')
            .parents('form')
    })
})