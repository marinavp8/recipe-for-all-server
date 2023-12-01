const router = require("express").Router()

const Comment = require('../models/Comments.model')

router.post('/', (req, res, next) => {

    const { comment } = req.body

    Comment
        .create({ comment })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})

// router.post('/edit', (req, res, next) => {

//     const { comment } = req.body

//     Comment
//         .findByIdAndUpdate({ comment })
//         .then(() => res.sendStatus(201))
//         .catch(err => next(err))


// })


module.exports = router