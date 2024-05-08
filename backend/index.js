const express = require("express");
const userModel = require("./model/userModel");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const mongodbSession = require("connect-mongodb-session")(session);
require("dotenv").config();

//constants
const app = express();
const PORT = process.env.PORT;
const store = new mongodbSession({
  uri: 'mongodb+srv://pavannavde:12345@cluster0.ohji7jw.mongodb.net/CustomerDB',
  collection: "sessions",
});

//mongodb connection
mongoose
  .connect('mongodb+srv://pavannavde:12345@cluster0.ohji7jw.mongodb.net/CustomerDB')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors({
    origin:["https://customer-application-frontend.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);


app.get("/", (req, res) => {
   res.send("Hello World");
});

//register route
app.post("/register", async (req, res) => {
  const { mobile, state, district, pincode } = req.body;
  console.log(req.body);
  try {
    //checking user already exixts or not
    const mob = await userModel.findOne({ mobile });
    if (mob) {
      return res.json({ status: 400, message: "User already exists" });
    }

    //data validation
    if (!mobile || !state || !district || !pincode) {
      return res.json({ status: 400, message: "All fields are required" });
    }
    if (mobile.length != 10) {
      return res.json({
        status: 400,
        message: "Mobile number must be 10 digits",
      });
    }
    if (pincode.length != 6) {
      return res.json({ status: 400, message: "Pincode must be 6 digits" });
    }

    //create user in db
    const userObj = new userModel({
      mobile,
      state,
      district,
      pincode,
    });
    const user = await userObj.save();

    //session based Auth
    req.session.isAuth = true;
    req.session.user = {
      userID: user._id,
    };
    res.json({ status: 200, message: "success", data: user });
  } catch (err) {
    console.log(err);
    res.json({ status: 500, message: " Database error" });
  }
});

//post personal data
app.post("/personalDetail",(req, res) => {
  const { fullname, gender, ageOrdob } = req.body;
  if (!fullname || !gender || !ageOrdob) {
    return res.json({ status: 400, message: "All fields are required" });
  }
  res.json({ status: 200, message: "success" });
});

//login
app.post("/login", async (req, res) => {
  const { mobile } = req.body;
  try {
    const user = await userModel.findOne({ mobile });
    if (!user) {
      return res.json({ status: 400, message: "User not found, Please register as new user" });
    }
    req.session.isAuth = true;
    req.session.user = {
      userID: user._id,
    };
    res.json({ status: 200, message: "success", data: user });
  } catch (err) {
    console.log(err);
    res.json({ status: 500, message: "Internal server error" });
  }
});



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
