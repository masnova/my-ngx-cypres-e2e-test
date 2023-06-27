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

    it('second', () => {
        cy.visit('/')
        cy.get('.menu-title').contains('Form').click();
        cy.get('a[title="Form Layouts"]').should('have.text','Form Layouts').click();

        cy.get('#inputEmail3')
            .parents('form')
    })

    it.only('third', () => {
        cy.visit('/')
        cy.get('.menu-title').contains('Form').click();
        cy.get('a[title="Form Layouts"]').should('have.text','Form Layouts').click();

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')
        })
    })
})