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

    it('third', () => {
        cy.visit('/')
        cy.get('.menu-title').contains('Form').click();
        cy.get('a[title="Form Layouts"]').should('have.text','Form Layouts').click();

        // cara pertama
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // cara kedua
        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordLabelSecond)


                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })
        })
    })

    it('invoke command', () => {
        cy.visit('/')
        cy.get('.menu-title').contains('Form').click();
        cy.get('a[title="Form Layouts"]').should('have.text','Form Layouts').click();

        var email1 = "Email address"
        // cara 1
        cy.get('[for="exampleInputEmail1"]').should('contain', email1)

        // cara 2 (karna jQuery katanya)
        cy.get('[for="exampleInputEmail1"]').then( myLabel => {
            expect(myLabel.text()).to.eq(email1)
        })

        // cara 3 (cypress versi)
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.eq(email1)
        })

        // 4
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            .should('contains', 'checked')
    })

    it('assert property (after selecting date)', () => {
        cy.visit('/')
        cy.get('.menu-title').contains('Form').click();
        cy.get('a[title="Datepicker"]').should('have.text','Datepicker').click();

        // memilih date mundur
        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            cy.get('.appearance-filled').click()
            cy.get('.year-cell').contains('2017').click()
            cy.get('.month-cell').contains('Jan').click()
            cy.get('.day-cell').contains('15').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jan 15, 2017')
        })
    })

    it.only('radio button check and checked', () => {
        cy.visit('/')
        cy.get('.menu-title').contains('Form').click();
        cy.get('a[title="Form Layouts"]').should('have.text','Form Layouts').click();

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]')
    })
})