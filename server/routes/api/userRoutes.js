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
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({where: { username: req.body.username }});

        if(!user) {
            res.status(400).json({message: 'Incorrect email or password.'});
            return;
        }

        const validPassword = User.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password.' });
            return;
        }
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.firstName = userData.firstName;
            req.session.lastName = userData.lastName;
            req.session.logged_in = true;

            res.json('Logged in successfully.');
        })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', async (req, res) => {
    try {
        if(req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).end();
            })
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(400).json(err); 
    }
})

module.exports(router);