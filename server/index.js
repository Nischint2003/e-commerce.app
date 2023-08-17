//Import from packages
const express = require("express");
const mongoose = require("mongoose");

//Import from other files
const authRouter = require("./routes/auth");

//init
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://nischintdash2003:nilesh123456@cluster0.hvhh0xp.mongodb.net/?retryWrites=true&w=majority";
//middleware
app.use(express.json());
app.use(authRouter);

//connections
mongoose.connect(DB).then(() => {
    console.log('connection Successful');
}).catch((e) => {
    console.log(e);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT} `);
});