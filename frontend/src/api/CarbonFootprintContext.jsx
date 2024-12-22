import React, { createContext, useContext, useState } from 'react';

const CarbonFootprintContext = createContext();

export const CarbonFootprintProvider = ({ children }) => {
    const [carbonFootprintData, setCarbonFootprintData] = useState({
        transport: '',
        energy: '',
        diet: '',
        carbonFootprint: null,
        recommendations: [],
    });

    return (
        <CarbonFootprintContext.Provider value={{ carbonFootprintData, setCarbonFootprintData }}>
            {children}
        </CarbonFootprintContext.Provider>
    );
};

export const useCarbonFootprint = () => useContext(CarbonFootprintContext);
