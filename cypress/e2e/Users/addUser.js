
describe('Given the Users API', () => {
    context('When I send POST /Users', () => {
        it('The I should add one user to the list', () => {
            cy.request({ 
                method: 'POST', 
                url: '/usuarios',
                body:{
                  nome: "Jane Brown",
                  email: "jane.brown@qa.com.br",
                  password: "test12",
                  administrador: "true"
                }
                
             })
             .should((response) => {
                expect(response.status).to.eq(201)
                // expect(response.body.quantidade).to.eq(response.body.usuarios.length)
                // Cypress._.each(response.body.usuarios, (usuario) => {
                //     expect(usuario.email).to.not.be.null
                //     expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
                //   })

             });
        });
    });
}); 