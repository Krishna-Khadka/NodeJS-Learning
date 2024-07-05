const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const teacherRoutes = require('./routes/teacherRoutes.js');
const Teacher = require('./models/Teacher.js');

passport.use(new LocalStrategy(async (USERNAME, password, done) => {
    // authentication logic 
    try {
        console.log('Received Credentials:', USERNAME, password);
        const user = await Teacher.findOne({ username: USERNAME });
        if (!user)
            return done(null, false, { message: 'Incorrect username.' });

        // const isPasswordMatch = user.password === password ? true : false;
        const isPasswordMatch = await user.comparePassword(password);
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password.' });
        }
    } catch (error) {
        return done(error);
    }
}))

module.exports = passport;