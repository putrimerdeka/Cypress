const stuff = Product.getProduct_tank(),
const zoe = Product.getProdInfo()

describe('Product test suite', () => {
    beforeEach(() => {
        Navigation.visitHomepage(),
        Navigation.visitTank(),
        cy.clearAllSessionStorage(),
        cy.clearAllCookies(),
    })

    it('Verifikasi tanpa login dapat menampilkan judul dan gambar produk', () => {
        Navigation.visitHomepage();
        cy.get(stuff).should('contain', 'Zoe').click();
        cy.wait(1000);
        cy.get(hero).should('contain', 'Zoe');
      })
})