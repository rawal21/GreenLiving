const mongoose = require('mongoose');
const Recommendation = require('./models/Recommendation'); // Adjust path based on your project structure
require("dotenv").config();

const MONGO_URL =  process.env.MONGO_URL;

// Predefined static data
const recommendations = [
  {
    title: "Switch to Renewable Energy",
    description: "Consider installing solar panels or switching to a green energy provider to reduce your carbon footprint.",
    category: "Energy",
    minFootprint: 2000,
    maxFootprint: 5000
  },
  {
    title: "Use Energy-Efficient Appliances",
    description: "Upgrade to energy-efficient appliances like refrigerators, air conditioners, and washing machines.",
    category: "Energy",
    minFootprint: 1000,
    maxFootprint: 3000
  },
  {
    title: "Use Public Transportation",
    description: "Reduce your carbon emissions by using public transport, carpooling, or cycling instead of driving.",
    category: "Transportation",
    minFootprint: 1500,
    maxFootprint: 4000
  },
  {
    title: "Adopt a Plant-Based Diet",
    description: "Eating less meat and more plant-based foods can significantly lower your carbon footprint.",
    category: "Food",
    minFootprint: 1000,
    maxFootprint: 3000
  },
  {
    title: "Compost Organic Waste",
    description: "Composting organic waste reduces landfill emissions and enriches the soil.",
    category: "Waste",
    minFootprint: 500,
    maxFootprint: 2000
  },
  {
    title: "Reduce Food Waste",
    description: "Plan meals carefully to avoid wasting food and lower your impact on the environment.",
    category: "Food",
    minFootprint: 500,
    maxFootprint: 2500
  },
  {
    title: "Recycle and Reuse",
    description: "Recycle paper, plastic, and other waste materials to reduce waste sent to landfills.",
    category: "Waste",
    minFootprint: 1000,
    maxFootprint: 4000
  }
];

// Function to seed data
const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');

    // Delete existing recommendations (optional)
    await Recommendation.deleteMany();
    console.log('Existing recommendations deleted.');

    // Insert new recommendations
    await Recommendation.insertMany(recommendations);
    console.log('Recommendations seeded successfully.');

    // Disconnect from the database
    mongoose.connection.close();
    console.log('MongoDB connection closed.');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

// Execute the seed function
seedData();
