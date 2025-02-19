const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./db/connection.js");
const dotenv = require("dotenv");
const Authrouter = require("./router/authRouter.js");
const MoviesRouter = require("./router/movieRouter.js");
const Seriesrouter = require("./router/seriesRouter.js");
const SubRouter = require("./router/subRouter.js");
const RazorPayRouter = require("./router/razorpayRoute.js");
const stripeRouter = require("./router/stripeRouter.js");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/auth", Authrouter);
app.use("/movies", MoviesRouter);
app.use("/series", Seriesrouter);
app.use("/sub", SubRouter);
app.use("/stripe", stripeRouter);
app.use("/rp", RazorPayRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const start = async () => {
  const port = process.env.PORT || 4000;
  await connectDB();
  app.listen(port, () => {
    console.log("Server is running on port: " + port);
  });
};

start();
