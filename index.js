const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const userRouter = require("./routers/userManager");
const videoRouter = require("./routers/videoManager");
const utilRouter = require("./routers/utils");

const cors = require("cors");
app.use(cors({ origin: ["http://localhost:4200"] }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/video", videoRouter);
app.use("/util", utilRouter);
app.use(express.static("./uploads"));

app.get("/home", (req, res) => {
  console.log("recieve request");
  res.send("Welcome Home Sweet Home");
});
app.listen(port, () => {
  console.log("server started " + port);
});
