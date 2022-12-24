const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const dataMock = () => {
    return [
        {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            name: 'New Balance 574 Vintage Brights',
            link: 'NewBalance574VintageBrights',
            price: 650,
            modelNumber: 'MT574',
            image: {
                small: '/img/goods/small/NewBalance574VintageBrights.png',
                big: '/img/goods/big/NewBalance574VintageBrights.png',
            },
        },
        {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            name: 'New Balance Made in UK 920 Chinese New Year',
            link: 'NewBalanceMadeinUK920ChineseNewYear',
            price: 1200,
            modelNumber: 'MT920',
            image: {
                small: '/img/goods/small/NewBalanceMadeinUK920ChineseNewYear.png',
                big: '/img/goods/big/NewBalanceMadeinUK920ChineseNewYear.png',
            },
        },
        {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            name: 'New Balance 373 Modern Classics',
            link: 'NewBalance373ModernClassics',
            price: 800,
            modelNumber: 'MT373',
            image: {
                small: '/img/goods/small/NewBalance373ModernClassics.png',
                big: '/img/goods/big/NewBalance373ModernClassics.png',
            },
        },
        {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            name: 'New Balance Made in UK 670 Chinese New Year',
            link: 'NewBalanceMadeinUK670ChineseNewYear',
            price: 780,
            modelNumber: 'MT670',
            image: {
                small: '/img/goods/small/NewBalanceMadeinUK670ChineseNewYear.png',
                big: '/img/goods/big/NewBalanceMadeinUK670ChineseNewYear.png',
            },
        },
        {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            name: 'New Balance X-Racer Utility',
            link: 'NewBalanceX-RacerUtility',
            price: 1000,
            modelNumber: 'MTX550',
            image: {
                small: '/img/goods/small/NewBalanceX-RacerUtility.png',
                big: '/img/goods/big/NewBalanceX-RacerUtility.png',
            },
        },
        {
            id: Math.floor(Math.random() * (999999999 - 100000000) + 100000000),
            name: 'New Balance 5740 Think Colorfully',
            link: 'NewBalance5740ThinkColorfully',
            price: 940,
            modelNumber: 'MT5740',
            image: {
                small: '/img/goods/small/NewBalance5740ThinkColorfully.png',
                big: '/img/goods/big/NewBalance5740ThinkColorfully.png',
            },
        },
    ]
}

const data = dataMock()

router.get('/', (req, res) => res.json(data))

module.exports = router;