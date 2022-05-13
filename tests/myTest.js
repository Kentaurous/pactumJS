const { spec } = require('pactum');

it('get graphql query ', async () => {
    await spec()
        .get('https://swapi-graphql.netlify.app/.netlify/functions/index')
        .withGraphQLQuery(
            ` query Query {
                        allFilms {
                            films {
                                title
                                    }
                                 }
                               }`
        ).inspect()
        .expectStatus(200);
});
