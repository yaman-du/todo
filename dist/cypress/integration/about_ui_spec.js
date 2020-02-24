"use strict";

describe("about page", function () {
        it("should load about page", function () {
                cy.visit("http://localhost:8080/");

                cy.cpontain("about").click();

                cy.url().should("include", "/about");

                cy.contain("This todo app wasa created by Yamandu");
        });
});