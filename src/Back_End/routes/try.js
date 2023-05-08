const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router =express.Router()
const app = express();
app.use(cors());
app.use(bodyParser.json());

router.post("/try", (req, res) => {
  const { email, password } = req.body;

  // Perform backend validation here
  if (email === "example@mail.com" && password === "password123") {
    res.send({ message: "Login successful" });
  } else {
    res.status(401).send({ message: "Invalid credentials" });
  }
});

module.exports=router