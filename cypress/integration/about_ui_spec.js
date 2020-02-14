describe("about page", () => {
    it("should load about page", () => {
        cy.visit("http://localhost:8080/")

        cy.cpontain("about").click()

        cy.url().should("include", "/about")

        cy.contain("This todo app wasa created by Yamandu")
    })
})