// https://docs.cypress.io/api/table-of-contents
describe("Widget", () => {
    it("should present header popover message when opened", () => {
        cy.visit("/");

        const popover = cy.getByTestId("popover")
        popover.click();

        cy.contains("Deixe seu feedback");
    });
});
