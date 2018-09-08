import { equal } from 'assert'

describe('My first cypress test', function() {
    it('visits my page!', function() {
        cy.visit('http://localhost:8000/')

        cy.contains('Oskar Hulter')
        cy.contains('projects').click()
    })
})
