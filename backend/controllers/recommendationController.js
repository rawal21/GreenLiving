const Recommendation = require('../models/Recommendation');

// Get recommendations based on user's carbon footprint
const getRecommendations = async (req, res) => {
  const { footprint } = req.query; // Carbon footprint from query params

  
  console.log(req.query);

  if (!footprint) {
    return res.status(400).json({ message: 'Carbon footprint value is required' });
  }

  try {
    // Fetch recommendations matching the user's footprint range
    const recommendations = await Recommendation.find({
      minFootprint: { $lte: footprint  },
      maxFootprint: { $gte: footprint },
    });

    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRecommendations,
};
