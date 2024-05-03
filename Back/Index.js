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
}`