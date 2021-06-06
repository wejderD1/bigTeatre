const {Router} = require('express');
const router = Router();
const path = require("path");

const nav = [
    {
        title: "MAIN", link: "/"
    },
    {
        title: "ABOUT TEATRE", link: "#about"
    },
    {
        title: "OUR PERFORMANCES", link: "#performances"
    }, 
    {
        title: "MEACENAS", link: "#meacenas"
    }, 
    {
        title: "PARTNERS", link: "#partners"
    },
    {
        title: "CONTACTS", link: "#contacts"
    }
]

const logo = [
    "daily-s.svg",
    "food-network-3.svg",
    "grande-hay-uno-solo.svg",
    "ifa-1.svg",
    "jeanneau.svg",
    "vvv.svg"
]

// posts = ["/public/img/post1"]

router.get('/', (req, res) => {
    res.render('index', {
        title: 'MAIN',
        nav,
        posts: path.relative(__dirname, "../public/img/post1.jpg"),
        logo
    })
})

module.exports = router;