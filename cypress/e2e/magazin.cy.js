describe('Магазин', function () {

it('Магазин', function () {
    cy.visit('https://testqastudio.me/');
    cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper');
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('#menu-top > .menu-item-home > a').click();
    cy.get('.post-11337 > .product-inner > .product-thumbnail > .product-loop__buttons > .button').click();
    cy.get('.checkout').click();
    cy.get('#billing_first_name').type('Камила');
    cy.get('#billing_last_name').type('Абдуллаева');
    cy.get('#billing_address_1').type('Проспект Мира 2');
    cy.get('#billing_city').type('Калининград');
    cy.get('#billing_state').type('Калининградская область');
    cy.get('#billing_postcode').type(236001);
    cy.get('#billing_phone').type('+79689556707');
    cy.get('#billing_email').type('kamka3640@gmail.com');
    cy.get('#place_order').click();



 })
})