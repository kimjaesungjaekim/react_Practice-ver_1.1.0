const express = require('express')
const app = exrpess()

const nunjucks = require('nunjucks')

app.set('view engine' , 'html')
nunjucks.configure('views',{
    express:app,
})