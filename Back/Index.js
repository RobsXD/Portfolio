import { ApolloServer, gql } from "apollo-server";

const persons = [
    {
      id: 1,
      name: "Roberto",
      age: 26,
      city: "Paris",
      phone: "1234567890",
    },
    {
      id: 2,
      name: "Juan",
      age: 35,
      city: "London",
      phone: "0987654321",
    },
    {
      id: 3,
      name: "Maria",
      age: 30,
      city: "Madrid",
      phone: "6789012345",
    },
    {
      id: 4,
      name: "Emily",
      age: 28,
      city: "New York",
      phone: "5678901234",
    },
    {
      id: 5,
      name: "Luis",
      age: 40,
      city: "Barcelona",
      phone: "3456789012",
    },
  ];
  

const typeDefs = gql`
  type Person {
    name: String!
    phone: String
    age: String!
    city: String!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
  }
`;

const resolvers = {
    Query: {
      personCount: () => persons.length, 
      allPersons: () => persons
    },
  };

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
}).catch((err) => console.log(err));