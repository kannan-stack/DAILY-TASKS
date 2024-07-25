
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./_db.js";

import { typeDefs } from "./schema.js";


const resolvers= {
    Query:{
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
        review(_,args){
            return db.reviews.find((e)=> e.id === args.id)
        },
        game(_,args){
            return db.games.find((f)=>f.id===args.id)
        },
        author(_,args){
            return db.authors.find((g)=>g.id===args.id)
        }
    },
    Game:{
        reviews(parent){
            return db.reviews.filter((e)=>e.game_id === parent.id)
        }
    },
    Author:{
        reviews(parent){
            return db.reviews.filter((e)=>e.author_id === parent.id)
        }
    },
    Review:{
        author(parent){
            return db.authors.find((a)=>a.id===parent.author_id)
        },
        game(parent){
            return db.authors.find((a)=>a.id===parent.game_id)
        }
    },
    Mutation :{
        deleteGame(_,args){
            db.games=db.games.filter((e)=>e.id !== args.id)
            return db.games
        },
        addGame(_,args){
            let game={
                ...args.game,
                id : Math.floor(Math.random()*10000).toString()
            }
            db.games.push(game)
            return game
        }
    }

}


const server= new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer (server,{
    listen: { port :5000 }
})
console.log('Server is ready ',5000)
