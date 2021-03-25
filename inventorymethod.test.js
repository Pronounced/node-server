const app = require("./index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const Inventory = require("./models/inventory.model.js");


const mongoose = require("mongoose");
const databaseName = "inventory_test";

beforeAll(async (done) => {   
  const url = `mongodb://localhost:27017/${databaseName}?authSource=admin`;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: "root",
    pass: "example",
  });

  done();
});

it("Should save user to database", async (done) => {
  const res = await request.post("/postcar").send({
    vin: "String_vin",
    year: 2020,
    make: "str_make",
    model: "srr_model",
    seller: "str_seller",
    color: "str_color",
    isApproved: true,
    image: "str_img",
  });

  expect(res.status).toBe(200);
  done();
});

it("Gets the test endpoint", async (done) => {
  // Sends GET Request to /test endpoint
  const res = await request.get("/test");
  
  expect(res.status).toBe(200);
  expect(res.body.message).toBe("pass!");
  // ...
  done();
});

// Cleans up database between each test
afterEach(async (done) => {
  await Inventory.deleteMany();
  done();
});

afterAll(async (done) => {
  // Closes the Mongoose connection
  await mongoose.connection.close();
  done();
});