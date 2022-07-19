import { Strategy as GoogleStrategy} from 'passport-google-oauth2';
import {config} from 'dotenv';
import passport from 'passport';
config();

const emails= ["proyectossomoscoders@gmail.com"];


passport.use(
  "auth-google",
  new GoogleStrategy(
    {
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    // passReqToCallback   : true
  },
  function(accessToken, refreshToken, profile, done) {
    const response = emails.includes(profile.emails[0].value);

    if (response){
        done(null, profile);
        } else {
            emails.push(profile.emails[0].value);
            done(null, profile);
        }
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));