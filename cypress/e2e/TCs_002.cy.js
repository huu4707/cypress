
describe('Test environment Variables', () => {
  it('TCS env prod', () => {
    console.log('Cypress.env(\'mode\')', Cypress.env('mode'))
    if (Cypress.env('mode') === 'prod') {
        expect('https://api.example.com').to.have.string(Cypress.env('api'))
    } else {
    }
  })
})