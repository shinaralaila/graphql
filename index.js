
// import {express} from 'express';
// import { graphqlHTTP } from 'express-graphql';
// import { graphql } from 'graphql';
// // import {resolvers} from './resolvers'
// import {schema} from './schema'

const express=require('express')
const {graphqlHTTP}=require('express-graphql')
const resolvers=require('./resolvers')
const schema=require('./schema')
const app=express();
 app.get('/',(req,res)=>{
    res.send("Graphql")
 })

//  const root={lco:()=> console.log("LearnCodeOnline.in")}
const root=resolvers;
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

 app.listen(3000,()=>{
    console.log("server on 3000")
 })