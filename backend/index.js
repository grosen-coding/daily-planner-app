const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/planner", require("./routes/plannerRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
