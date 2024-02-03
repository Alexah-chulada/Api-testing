import express from 'express';

const router =express.Router ();

router.post('/register', (req, res) => {
    res.status(201).json ({
       message: "product route is working" 
    });
});

export default router;