import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url)
    cy.dataCy('greeting')
})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})