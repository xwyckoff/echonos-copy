const router = require('express').Router();

const { User } = require('../../models');

router.post('/', async(req, res) => {
    try {
        const { username, password, firstName, lastName } = req.body;
        const newUser = await User.create(
            {
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            }
        )

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.firstName = userData.firstName;
            req.session.lastName = userData.lastName;
            req.session.logged_in = true;
        })

        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
})