const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

router.get('/test', (req,res) => res.send('Book route testing!'));

router.get('/', (req,res)=>{
    Book.find()
        .then(books => res.json(books))
        .catch(err=> res.status(404).json({nobooksfound: 'No Books found'}));
});

router.get('/:id', (req,res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({nobooksfound: 'No Book Found'}));
});

router.post('/', (req,res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'Book Added Successfully '}))
        .catch(err => res.status(400).json({error: 'Unable to add this book'}));
});

router.put('/:id', (req,res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({msg : 'Updated Successfully' }))
        .catch(err => res.status(400).json({error : 'Unabe to update the Database' }));
});

router.delete('/:id', (req,res) =>{
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({msg: 'Book entry deleted successfully'}))
        .catch(err => res.status(404).json({error: 'No such a book'}));
});

module.exports = router;