describe('Limelight Yarn-Dyed Embroidered Shirt page', () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.visit('/products/limelight-yarn-dyed-embroidered-shirt');
  });

  it('renders all expected product features', () => {
    // Breadcrumb
    cy.log('Check breadcrumb navigation');
    cy.get('nav[aria-label="Breadcrumb"] ul.breadcrumb')
      .should('exist')
      .within(() => {
        cy.contains('li', 'Home').should('exist');
        cy.contains('li', "Women’s Shirts").should('exist');
        cy.contains('li', 'Limelight Yarn‑Dyed Embroidered Shirt').should('exist');
      });

    // Hero section
    cy.log('Verify hero section layout and content');
    cy.get('#product-hero')
      .should('be.visible')
      .invoke('css', 'grid-template-columns')
      .then((columns) => {
        expect(columns.split(' ').length).to.equal(2);
      });
    cy.get('#product-hero').within(() => {
      cy.get('.slick-slider').should('exist');
      cy.get('h1.playfair').should('have.text', 'Limelight Yarn‑Dyed Embroidered Shirt');
      cy.contains('.price', '$24.99').should('exist');
      cy.get('select').should('exist');
      cy.contains('button.btn-primary', 'Add to Cart').should('exist');
    });

    // Tabs
    const tabs = ['Description', 'Details', 'Reviews', 'Shipping'];
    cy.log('Validate tabs functionality');
    cy.get('.tabs [role="tab"]').should('have.length', 4);
    tabs.forEach((label) => {
      cy.contains('[role="tab"]', label)
        .click()
        .should('have.attr', 'aria-selected', 'true');
      cy.contains('[role="tabpanel"]', label).should('be.visible');
    });

    // FAQ accordion
    cy.log('Check FAQ accordion fonts and content');
    cy.get('.faq-accordion details').should('have.length', 4).each(($detail) => {
      cy.wrap($detail)
        .find('summary')
        .should('have.css', 'font-family')
        .and('match', /Playfair/);
      cy.wrap($detail)
        .find('p')
        .should('have.css', 'font-family')
        .and('match', /Lato/);
    });

    // PhotoSwipe gallery
    cy.log('Verify PhotoSwipe gallery anchors');
    cy.get('a[data-pswp-width][data-pswp-height]').should('have.length', 5);

    // Swiper carousel
    cy.log('Ensure related products carousel is initialized');
    cy.get('.related-products .swiper-container')
      .should('have.class', 'swiper-initialized')
      .within(() => {
        cy.get('.swiper-slide').its('length').should('be.gte', 1);
      });

    // Trust badges
    cy.log('Check trust badges row');
    cy.get('.badges .badge').should('have.length', 3).then(($badges) => {
      expect($badges.eq(0)).to.contain.text('Hand‑Embroidered');
      expect($badges.eq(1)).to.contain.text('Premium Yarn‑Dyed');
      expect($badges.eq(2)).to.contain.text('Easy Care');
    });

    // Size guide modal
    cy.log('Open and close size guide modal');
    cy.contains('a', 'View Size Guide').click();
    cy.get('#size-modal').should('be.visible').within(() => {
      const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
      sizes.forEach((size) => {
        cy.contains('th', size).should('exist');
      });
      cy.get('button.close').click();
    });
    cy.get('#size-modal').should('not.be.visible');

    // JSON-LD structured data
    cy.log('Validate structured data');
    cy.get('script[type="application/ld+json"]')
      .invoke('text')
      .then((text) => {
        const data = JSON.parse(text);
        expect(data['@type']).to.equal('Product');
        expect(data.name).to.equal('Limelight Yarn-Dyed Embroidered Shirt');
        expect(data.offers).to.include({price: '24.99', availability: 'http://schema.org/InStock'});
        expect(data.aggregateRating.ratingValue).to.exist;
        expect(data.aggregateRating.reviewCount).to.exist;
      });
  });
});
