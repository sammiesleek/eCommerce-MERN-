// passportConfig.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "428237007011-i5tjsbbfmr5va8uqrc6o0dth36dg19dl.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      // Save user to the database or retrieve the user if already exists
      // User.findOne({ googleId: profile.id }, (err, user) => {
      //   if (err) return done(err);
      //   if (!user) {
      //     const newUser = new User({
      //       googleId: profile.id,
      //       displayName: profile.displayName,
      //       email: profile.emails[0].value,
      //       // Add other relevant user properties...
      //     });
      //     newUser.save((saveErr) => done(saveErr, newUser));
      //   } else {
      //     return done(err, user);
      //   }
      // });
    }
  )
);

export default passport;
