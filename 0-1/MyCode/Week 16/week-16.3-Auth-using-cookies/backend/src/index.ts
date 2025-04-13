import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";

const JWT_Secret = "test123";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // do db validations, fetch id of user from db
  const token = jwt.sign(
    {
      id: 1,
    },
    JWT_Secret
  );
  res.cookie("token", token);
  // will put the cookie in the set-cookie header
  res.send("Logged in!");
});

app.get("/user", (req, res) => {
  const token = req.cookies.token;
  const decoded = jwt.verify(token, JWT_Secret) as JwtPayload;
  // Get email of the user from the database
  res.send({
    userId: decoded.id,
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  // res.cookie("token", "") both are same clear or set an empty token
  // set-cookie => token => ""
  res.json({
    message: "Logged out!",
  });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"))
})

app.listen(3000);