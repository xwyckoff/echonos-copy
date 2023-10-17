const router = require('express').Router();
const Part = require('../../models/Part');

//get all parts
router.get('/', async (req, res) => {
    try {
        let parts = await Part.findAll();

        if(!parts) {
            res.status(500).json('Internal server error!');
            return;
        }

        res.status(200).json(parts);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
