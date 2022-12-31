"use strict";
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log(err));
