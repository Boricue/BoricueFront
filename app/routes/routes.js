// HOMEPAGE //

import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/acerca', (req, res) => {
    res.render('acerca');
});

router.get('/contactanos', (req, res) => {
    res.render('contactanos');
});

router.get('/preguntas', (req, res) => {
    res.render('preguntas');
});

router.get('/servicios', (req, res) => {
    res.render('servicios');
});

//DASHBOARD//

router.get('/DashHome', (req, res) => {
    res.render('dashHome');
});

export default router;
