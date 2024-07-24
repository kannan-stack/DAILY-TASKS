var express = require ("express")
var { buildSchema } = require ("graphql")
var { createHandler } = require("graphql-http/lib/use/express")

var schema =buildSchema(`

    type Query {
        quote : String ,
        random: Float!,
        roll :[Int]
    }
`)

var root={
    quote(){
        return Math.random > 0.5 ? "Take it easy" : "Be cool"
    },
    random(){
        return Math.random
    },
    roll(){
        return [1,2,3]
    }
}

var app = express()
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)
app.listen(4000)