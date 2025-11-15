import mongoose from "mongoose";
import dotenv from "dotenv";
import Visitor from "./models/visitorModel.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const seedVisitors = async () => {
  try {
    await Visitor.deleteMany();

    await Visitor.insertMany([
      {
        name: "Demo Visitor 1",
        email: "demo1@test.com",
        phone: "9999999991",
        purpose: "Meeting"
      },
      {
        name: "Demo Visitor 2",
        email: "demo2@test.com",
        phone: "9999999992",
        purpose: "Delivery"
      }
    ]);

    console.log("Seed data added!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedVisitors();
