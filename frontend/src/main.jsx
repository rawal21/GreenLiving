import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CarbonFootprintProvider } from './api/CarbonFootprintContext';

ReactDOM.render(
    <CarbonFootprintProvider>
        <App />
    </CarbonFootprintProvider>,
    document.getElementById('root')
);
