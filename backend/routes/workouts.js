const express = require('express');

// create an instance of router
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

module.exports = router;