// here ! means that this is a required field and we need 2 ! because it expects array and the data inside array
export const typeDefs = `#graphql
    type Game{
        id:ID!,
        title: String!,
        platform:[String!]! 
        reviews:[Review!]
    }
    type Review{
        id:ID!,
        rating: Int!
        content:String!
        game: Game!
        author: Author!
    }
    type Author{
        id:ID!
        name: String!
        verified: Boolean!
        reviews:[Review!]
    }
    type Query{
        reviews:[Review]
        review(id:ID!):Review
        authors:[Author]
        author(id:ID!):Author
        games:[Game]
        game(id:ID!):Game
    }
    type Mutation{
        deleteGame(id: ID!):[Game]
        addGame(game: AddGameInput!): Game
        updateGame(id: ID!,edits: EditGameInput!): Game
        addAuthor(author:AddAuthorInput): Author
        addReview(review: AddReviewInput): Review
    }
    input AddGameInput{
        title: String!
        platform:[String!]!
    }
    input EditGameInput{
        title: String
        platform:[String!]
    }
    input AddAuthorInput{
        name: String!
        verified:String!
    }
    input AddReviewInput{
        rating: Int!
        content:String!
        game:Int!
        author: Int!
    }

`