import { Query } from './QueryResolver.js'
import {Game} from './GameResolver.js'
import { Author } from './AuthorResolver.js'
import {Review} from './ReviewResolver.js'
import { Mutation } from './MutationResolver.js'


export const resolvers = {
    Query,
    Game,
    Author,
    Review,
    Mutation
}