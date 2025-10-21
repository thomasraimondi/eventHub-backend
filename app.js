const express = require("express");
const app = express();
const usersRouter = require("./routers/usersRouter");
const eventsRouter = require("./routers/eventsRouter");
const authRouter = require("./routers/authRouter");

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/events", eventsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
