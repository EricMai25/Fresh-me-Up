const controller= require('../controllers/controller');
const router = require('express').Router();

router.get('/suit' , controller.Suit.get);

router.get('/pant' , controller.Pant.get);

router.get('/shoe' , controller.Shoe.get);

router.get('/shirt' , controller.Shirt.get);

router.get('/watch' , controller.Watch.get);



// router.post('/suit' , controller.Suit.post);

// router.post('/pant' , controller.Pant.post);

// router.post('/shoe' , controller.Shoe.post);

// router.post('/shirt' , controller.Shirt.post);

// router.post('/watch' , controller.Watch.post);



// router.delte('/suit' , controller.Suit.delte);

// router.delte('/pant' , controller.Pant.delte);

// router.delte('/shoe' , controller.Shoe.delte);

// router.delte('/shirt' , controller.Shirt.delte);

// router.delte('/watch' , controller.Watch.delte);

module.exports = router;