const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

module.exports = (app, config) => {
    //Configure handlebars
    app.engine('.hbs', handlebars({
        extname: '.hbs',
        defaultLayout: 'layout',
        layoutsDir: './views/layouts/'
    }))
    app.set('view engine', '.hbs')

    //Configure middleware for parsing form data.
    app.use(bodyParser.urlencoded({ extended: true }))

    //Configure middleware for cookies and session.
    app.use(cookieParser())
    app.use(session({ secret: 'S3cr3t', saveUninitialized: false, resave: false }))
    app.use(passport.initialize())
    app.use(passport.session())

    app.use((req, res, next) => {
        if (req.user) {
            res.locals.user = req.user
        }
        next()
    })

    //Configure "public" folder.
    app.use((req, res, next) => {
        if (req.url.startsWith('/public')) {
            req.url = req.url.replace('/public', '')
        }

        next()
    }, express.static(path.normalize(path.join(config.rootPath, 'public'))))
}