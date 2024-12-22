/**
 * Calculate carbon footprint based on user inputs.
 * @param {Object} data - User input data.
 * @param {number} data.transport - Transportation (km/month).
 * @param {number} data.energy - Energy consumption (kWh/month).
 * @param {string} data.diet - Type of diet (omnivore, vegetarian, vegan).
 * @returns {number} - Estimated carbon footprint in kg CO2 per month.
 */
const calculateCarbonFootprint = (data) => {
  const { transport, energy, diet } = data;

  // Base emission factors (can be customized or fetched dynamically)
  const transportFactor = 0.21; // kg CO2 per km
  const energyFactor = 0.43;    // kg CO2 per kWh

  let dietFactor = 0;
  switch (diet) {
    case 'omnivore':
      dietFactor = 2.5; // kg CO2 per day
      break;
    case 'vegetarian':
      dietFactor = 1.7; // kg CO2 per day
      break;
    case 'vegan':
      dietFactor = 1.0; // kg CO2 per day
      break;
    default:
      dietFactor = 0;
  }

  // Monthly emissions
  const transportEmissions = transport * transportFactor;
  const energyEmissions = energy * energyFactor;
  const dietEmissions = dietFactor * 30; // Approx 30 days in a month

  return transportEmissions + energyEmissions + dietEmissions;
};

module.exports = calculateCarbonFootprint;
