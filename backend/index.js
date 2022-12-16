const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

app.use("/api/planner", require("./routes/plannerRoutes"));

app.listen(port, () => console.log(`server started on port ${port}`));
