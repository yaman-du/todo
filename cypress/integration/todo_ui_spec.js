describe("UI tests for Todo app", () => {
    it("visit starting page for app", () => {
        cy.visit("http://localhost:8080/todo")

        // cy.contains("edit")

        // cy.url().should("include", "/todo/edit")

        cy.get("#inputTodo").type("Ny task2").should("have.value", "Ny task2")
        cy.get("#inputTodoDay").type("Sunday").should("have.value", "Sunday")
        cy.get("#inputTodoWho").type("Yamandu{enter}").should("have.value", "Yamandu")
        // cy.get("#btn").click()
        cy.contains("Delete").each(() =>{
            cy.contains("Delete").last().click()
        })
    })
    // it("should add an todo item and then delete it", () =>{


    // })
})