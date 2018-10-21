const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//@Route GET api/items
//@desc GEt all Items
//@access public

router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1  })
    .then(items => res.json(items));
});


//@Route POST api/items
//@desc Create a post
//@access public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

//@Route DELETE api/items/:id
//@desc Delete an Item
//@access public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({success: false}));
    });





module.exports = router;