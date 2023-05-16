describe('Successful loads index locally', () => {
  it('loads', () => {
    cy.visit("http://localhost:3000/");

    // check home page title
    cy.get(
      'h1[class*="gap-12"][class*="px-4"][class*="py-10"][class*="text-5xl"][class*="font-semibold"]'
    )
      .should("contain", "Dan's")
      .and("contain", "Broadway Show")
      .and("contain", "Checkout Page");

  })
})

describe("Fills out form", () => {
  it("Successful Fills out form", () => {
    cy.visit("http://localhost:3000/");

    cy.get(
      ":nth-child(1) > .flex > .css-b62m3t-container > .border > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer"
    )
      .click()
      .get("#react-select-3-option-0")
      .click();

    cy.get(".font-sans > div").contains("$247.03");
    cy.get(".font-Roboto.flex > .text-sm").contains("$200 x 1");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)"
    ).contains("$44.08 x 1");

    cy.get(
      ":nth-child(2) > .flex > .css-b62m3t-container > .border > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer"
    )
      .click()
      .get("#react-select-5-option-1")
      .click();

    cy.get(".font-sans > div").contains("$491.11");
    cy.get(".font-Roboto.flex > .text-sm").contains("$200 x 2");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)"
    ).contains("$44.08 x 2");

    cy.get(".mt-6 > .h-12").type("Test Test");

    cy.get(".input_text.mt-8 > .h-12").type("0000000000000000");
    cy.get(".input_text.mt-8 > .fa-check");

    cy.get(".h-80 > .flex > :nth-child(1) > .h-12").type("1222002");
    cy.get(":nth-child(1) > .fa-check");

    cy.get(".h-80 > .flex > :nth-child(2) > .h-12").type("123");
    cy.get(".h-80 > .flex > :nth-child(2) > .fa-check");

    cy.get(".ring-2").click();
    cy.get(".h-10 > p").click();
  });

  



  
});
describe("test", () => {
  it("Successful fills out form after validations are shown", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".h-10 > p").click();
    // error messages
    cy.get(".w-full > :nth-child(1) > .absolute");
    cy.get(".mt-6 > .right-2");
    cy.get(".input_text.mt-8 > .right-2");
    cy.get(".h-80 > .flex > :nth-child(1) > .right-2");
    cy.get(".h-80 > .flex > :nth-child(2) > .right-2");

    cy.get(".css-15lsz6c-indicatorContainer")
      .click()
      .get("#react-select-3-option-0")
      .click();

    cy.get(".font-sans > div").contains("$247.03");
    cy.get(".font-Roboto.flex > .text-sm").contains("$200 x 1");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)"
    ).contains("$44.08 x 1");

    cy.get(
      ":nth-child(2) > .flex > .css-b62m3t-container > .border > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer"
    )
      .click()
      .get("#react-select-5-option-1")
      .click();

    cy.get(".font-sans > div").contains("$491.11");
    cy.get(".font-Roboto.flex > .text-sm").contains("$200 x 2");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)"
    ).contains("$44.08 x 2");

    cy.get(".mt-6 > .h-12").type("Test Test");

    cy.get(".input_text.mt-8 > .h-12").type("0000000000000000");
    cy.get(".input_text.mt-8 > .fa-check");

    cy.get(".h-80 > .flex > :nth-child(1) > .h-12").type("1222002");
    cy.get(":nth-child(1) > .fa-check");

    cy.get(".h-80 > .flex > :nth-child(2) > .h-12").type("123");
    cy.get(".h-80 > .flex > :nth-child(2) > .fa-check");

    cy.get(".ring-2").click();
    cy.get(".h-10 > p").click();
  });
})


describe("Order details tests", () => {
  it("Successful updates order details", () => {
    cy.visit("http://localhost:3000/");

    cy.get(
      ":nth-child(1) > .flex > .css-b62m3t-container > .border > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer"
    )
      .click()
      .get("#react-select-3-option-0")
      .click();

    cy.get(".font-sans > div").contains("$247.03");
    cy.get(".font-Roboto.flex > .text-sm").contains("$200 x 1");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)"
    ).contains("$44.08 x 1");

    cy.get(
      ":nth-child(2) > .flex > .css-b62m3t-container > .border > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer"
    )
      .click()
      .get("#react-select-5-option-1")
      .click();

    cy.get(".font-sans > div").contains("$491.11");
    cy.get(".font-Roboto.flex > .text-sm").contains("$200 x 2");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)"
    ).contains("$44.08 x 2");
  });

  it("Successful resets order details", () => {
    cy.visit("http://localhost:3000/");

    cy.get(
      ":nth-child(1) > .flex > .css-b62m3t-container > .border > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer"
    )
      .click()
      .get("#react-select-3-option-0")
      .click();

    cy.get(".font-sans > div").contains("$247.03");
    cy.get(".font-Roboto.flex > .text-sm").contains("$200 x 1");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)"
    ).contains("$44.08 x 1");

    cy.get(
      ":nth-child(2) > .flex > .css-b62m3t-container > .border > .css-1hb7zxy-IndicatorsContainer > .css-1xc3v61-indicatorContainer"
    )
      .click()
      .get("#react-select-5-option-1")
      .click();

    cy.get(".font-sans > div").contains("$491.11");
    cy.get(".font-Roboto.flex > .text-sm").contains("$200 x 2");
    cy.get(
      ":nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1)"
    ).contains("$44.08 x 2");

    cy.get("a").click();
    cy.get(".font-sans > div").contains("...");
    cy.get(".font-Roboto.flex > .text-sm").contains("...");
  });
});