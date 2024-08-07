// passportConfig.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel.js";
import generateTokens from "./generateTokens.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "428237007011-i5tjsbbfmr5va8uqrc6o0dth36dg19dl.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const data = profile._json;
      const newUser = {
        firstName: data.given_name,
        lastName: data.family_name,
        picture: data.picture,
        phone: "",
        address: "",
        email: data.email,
        googleId: data.sub,
      };
      try {
        const userExist = await User.findOne({ email: data.email });

        if (userExist) {
          done(null, userExist);
        } else {
          const user = await User.create(newUser);

          if (user) {
            done(null, user);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

export default passport;
