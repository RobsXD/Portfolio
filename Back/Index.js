import { gql } from "apollo-server";

const persons = [
  {
    id: 1,
    name: "Roberto",
    age: 26,
    city: "Paris",
    phone: "1234567890",
  },
];

const typeDefs = gql`
type person {
    name: string!
    phone: strign
    street: string!
    city: string!
    id: ID!
}

type Query {
    personCount: Int!
    allPersons: [person]!
}
`

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons,
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
})
 
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})