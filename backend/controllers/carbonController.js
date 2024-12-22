const calculateCarbonFootprint = require('../utils/carbonCalculator');
const History = require('../models/History');

/**
 * Calculate, save, and return user's carbon footprint
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
exports.getCarbonFootprint = async (req, res) => {
  const { transport, energy, diet } = req.body;

  // Validate input
  if (transport === undefined || energy === undefined || !diet) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Calculate carbon footprint
    const carbonFootprint = calculateCarbonFootprint({ transport, energy, diet });

    // Save the result in the history collection
    const newHistory = new History({
      userId: req.user._id, // Assuming the user ID is added to the request via middleware
      footprint: carbonFootprint,
      date: Date.now(),
    });

    await newHistory.save();

    // Return the calculated footprint
    res.status(200).json({
      message: 'Carbon footprint calculated and saved successfully',
      carbonFootprint,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getHistory = async (req, res) => {
  try {
    // Fetch history for the logged-in user, sorted by date (most recent first)
    const history = await History.find({ userId: req.user._id }).sort({ date: -1 });

    if (!history.length) {
      return res.status(404).json({ message: 'No history found for the user' });
    }

    res.status(200).json({
      message: 'History fetched successfully',
      history,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};