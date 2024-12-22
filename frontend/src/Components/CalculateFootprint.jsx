
import React, { useState } from 'react';
import axios from 'axios';
import { useCarbonFootprint } from "../api/CarbonFootprintContext";
import { useNavigate } from 'react-router-dom';

const CalculateFootprint = () => {
    const { carbonFootprintData, setCarbonFootprintData } = useCarbonFootprint();
    const [formData, setFormData] = useState({
        transport: '',
        energy: '',
        diet: '',
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // Send the input data to the backend's calculate route
            const response = await axios.post('http://localhost:3000/api/carbon/calculate', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            const { carbonFootprint } = response.data;

            // Fetch recommendations based on the carbon footprint
            const recResponse = await axios.get(
                `http://localhost:3000/api/recommendations?footprint=${carbonFootprint}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            // Update context with the calculated footprint and recommendations
            setCarbonFootprintData({
                transport: formData.transport,
                energy: formData.energy,
                diet: formData.diet,
                carbonFootprint,
                recommendations: recResponse.data,
            });
           
           navigate("/Dashboard") 

        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="container mt-5">
            <h1>Calculate Your Carbon Footprint</h1>
            <p className="lead">Enter your details to calculate your carbon footprint and get eco-friendly recommendations.</p>

            <form onSubmit={handleSubmit} className="mb-5">
                <div className="mb-3">
                    <label htmlFor="transport" className="form-label">Transportation (km/day)</label>
                    <input
                        type="number"
                        id="transport"
                        name="transport"
                        className="form-control"
                        value={formData.transport}
                        onChange={handleChange}
                        placeholder="kg CO2 per km"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="energy" className="form-label">Energy Consumption (kWh/day)</label>
                    <input
                        type="number"
                        id="energy"
                        name="energy"
                        className="form-control"
                        value={formData.energy}
                        onChange={handleChange}
                        placeholder="kg CO2 per km"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="diet" className="form-label">Diet (Omnivore, Vegetarian, Vegan)</label>
                    <select
                        id="diet"
                        name="diet"
                        className="form-control"
                        value={formData.diet}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="omnivore">Meat-based</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Calculate</button>
            </form>

            {/* Display Errors */}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

export default CalculateFootprint;
