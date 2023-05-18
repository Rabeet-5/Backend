const express = require('express')

// const server = require('http')

// const startServer = server.createServer((res, req) => {
//     console.log('Server started')
// })

// startServer.listen(4000)

const route = express.Router()

route.get('/', (req, res) => {
    res.send('Data got Succesfully')
})

route.get('/:id', (res, req) => {
    res.send('Data Got by id successully')
})

route.post('/:id', (res, req) => {
    res.send('Data posted with id')
})

route.put('/:id', (res, req) => {
    res.send('Data Edited Successfully')
})

route.delete('/:id', (res, req) => {
    res.send('Data Deleted')
})

module.exports = route;