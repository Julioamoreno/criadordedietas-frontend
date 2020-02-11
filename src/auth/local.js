const localStrategy = require('passport-local');
const User = require('../model/user');

module.exports = (passport) => {
    passport.serializeUser((user, cb) => {
        return cb(null, user._id);
    });

    passport.deserializeUser((id, cb) => {
        User
            .findById(id)
            .then(user => cb(null, user))
            .catch(err => cb(err, {}));
    });

    passport.use('local-signup', new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, username, password, cb) {
        User
            .findOne({username: username})
            .then((userExist) => {
                if (!userExist) {
                    let user = new User(req.body);
    
                    user.password = user.genHash(user.password);
                    
                    return user
                                .save()
                                .then((user) => {
                                    return cb(null, user);
                                })
                                .catch((err) => {
                                    console.log(err);
                                    return
                                });
                }
                return cb(null, false);
            })
            .catch((err) => { 
                return cb(err, false);
            })
    }
    ));

    passport.use('local-signin', new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
        function(req, username, password, cb){
            User
                .findOne({username})
                .then((user) => {
                    if(!user) {
                        return cb(null, false);
                    }

                    user.autorization(password, (err, result) => {
                        if(!result || err) {
                            return cb(null, false);
                        }
                        return cb(null, user);
                    })

                })
        }
    ))
}
