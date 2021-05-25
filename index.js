const nodemailer = require("nodemailer");
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // allow URLencoded data
app.use(express.json({ limit: "50MB" })); // allow URLencoded data

app.post("/api/contact", (req, res) => {
  const name = req.body["name"];
  const email = req.body["email"];
  const message = req.body["message"];

  let mailOptions = {
    from: "ljm1400@gmail.com",
    to: "ljm1400@aol.com",
    subject: `Contact form from ${name}`,
    text: `You have received a message from ${name}.\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ status: 500, msg: error });
    } else {
      res.json({ status: 100, msg: "Success" });
    }
  });
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on ${port}`);
});
