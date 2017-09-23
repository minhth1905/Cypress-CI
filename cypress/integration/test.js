describe('THEMMOI_BN', function() {

  it("login", function() {
    cy.visit("http://52.187.8.102/signin")
    cy.get('input[name=email]').type('doctor_10@gmail.com')
    cy.get('input[name=password]').type('Methadone@2017{enter}')
  })
})
