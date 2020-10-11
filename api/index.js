const { Router } = require('express');

const router = Router();
router.use('/products', require('./products'));
router.use('/', (req, res) => {
    res.status(200).send('ok');
});

module.exports = router;