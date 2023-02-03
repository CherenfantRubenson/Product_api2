// import express, { response } from "express";
const products = require("./donne.json");
const express = require('express');
const { json } = require("express");
// const { json } = require("express");

const app = express();


app.use(
    (req, res, next) => {
        const allowPort = ['localhost:8000', 'localhost:9007']


        allowPort.forEach(el => {
            if (el === req.headers.origin) {
                res.set('Access-Control-Allow-Origin', req.headers.origin);
            } else {
                res.sendStatus(400)
            }

        });
        next();
    }
)

app.get("/", (req, res) => {
    res.send("Welcome to my  api")
})

app.get("/products", (request, response) => {
    return response.status(200).json(products)

})

app.get("/products/:id", (request, response) => {

    const id = parseInt(request.params.id);

    let product = products.products.filter(product => product.id === id);
    return response.status(200).send(product);


})

app.get("/brands", (request, response) => {

    const data = products.products
    const brandArray = [];

    data.map((el) => {
        brandArray.push(el.brand);

    })

    return response.status(200).send(brandArray);

    //let product=products.products.filter(p


    //return 



})

app.listen(3000);
