const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const userRouter = require("./routers/userManager");
const videoRouter = require("./routers/videoManager");
const utilRouter = require("./routers/utils");

const cors = require("cors");
app.use(
  cors({
    origin: [
      "http://localhost:4200",
      "https://video-hosting-platform.herokuapp.com",
      "https://videoshare27.herokuapp.com"
    ],
  })
);
app.use(express.json());
app.use("/user", userRouter);
app.use("/video", videoRouter);
app.use("/util", utilRouter);
app.use(express.static("./uploads"));

app.get("/home", (req, res) => {
  console.log("recieve request");
  res.send("updated");
});
app.listen(port, () => {
  console.log("server started " + port);
});
