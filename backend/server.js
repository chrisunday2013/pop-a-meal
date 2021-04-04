import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRouter.js";
import orderRouter from "./router/orderRouter.js";
var bodyParser = require('body-parser');


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/popAmeal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})


app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) =>{
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
})
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("Server is ready")
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` Server started at http://localhost:${port}`);
})
