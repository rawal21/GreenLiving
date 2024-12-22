

// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Line, Pie } from 'react-chartjs-2'; // Import Pie instead of Bar
// // import 'chart.js/auto';
// // import axios from 'axios';
// // import { useCarbonFootprint } from "../api/CarbonFootprintContext";

// // const Dashboard = () => {
// //     const [historyData, setHistoryData] = useState([]);
// //     const [selectedDate, setSelectedDate] = useState('');
// //     const [footprintByDate, setFootprintByDate] = useState(null);
// //     const [insights, setInsights] = useState('');

// //     const { carbonFootprintData } = useCarbonFootprint();
// //     const { transport, energy, diet } = carbonFootprintData;

// //     useEffect(() => {
// //         const fetchHistory = async () => {
// //             try {
// //                 const response = await axios.get('http://localhost:3000/api/carbon/history', {
// //                     headers: {
// //                         Authorization: `Bearer ${localStorage.getItem('token')}`
// //                     }
// //                 });
// //                 setHistoryData(response.data.history);
// //                 calculateInsights(response.data.history);
// //             } catch (error) {
// //                 console.error('Error fetching history:', error);
// //             }
// //         };

// //         fetchHistory();
// //     }, []);

// //     const calculateInsights = (data) => {
// //         if (data.length > 1) {
// //             const firstFootprint = data[0].footprint;
// //             const latestFootprint = data[data.length - 1].footprint;
// //             const reduction = ((firstFootprint - latestFootprint) / firstFootprint) * 100;
// //             setInsights(`Your carbon footprint has ${reduction > 0 ? 'reduced' : 'increased'} by ${Math.abs(reduction).toFixed(2)}% since the first recorded entry.`);
// //         } else {
// //             setInsights('Insufficient data to calculate insights.');
// //         }
// //     };

// //     const handleDateChange = (e) => {
// //         setSelectedDate(e.target.value);
// //         const data = historyData.find((item) => item.date.startsWith(e.target.value));
// //         setFootprintByDate(data ? data.footprint : 'No data available');
// //     };

// //     const lineGraphData = {
// //         labels: historyData.map((entry) => new Date(entry.date).toLocaleDateString()),
// //         datasets: [
// //             {
// //                 label: 'Carbon Footprint (kg)',
// //                 data: historyData.map((entry) => entry.footprint),
// //                 borderColor: 'rgba(75, 192, 192, 1)',
// //                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
// //                 tension: 0.2
// //             }
// //         ]
// //     };

// //     const pieChartData = {
// //         labels: ['Transport', 'Energy', 'Diet'],
// //         datasets: [
// //             {
// //                 label: 'Carbon Footprint by Category',
// //                 data: [transport, energy, diet],
// //                 backgroundColor: [
// //                     'rgba(255, 99, 132, 0.6)',
// //                     'rgba(54, 162, 235, 0.6)',
// //                     'rgba(75, 192, 192, 0.6)'
// //                 ],
// //                 borderColor: [
// //                     'rgba(255, 99, 132, 1)',
// //                     'rgba(54, 162, 235, 1)',
// //                     'rgba(75, 192, 192, 1)'
// //                 ],
// //                 borderWidth: 1
// //             }
// //         ]
// //     };

// //     const graphOptions = {
// //         responsive: true,
// //         maintainAspectRatio: false, // Allows better responsiveness
// //         plugins: {
// //             legend: {
// //                 position: 'top',
// //             },
// //             tooltip: {
// //                 enabled: true,
// //             }
// //         },
// //         layout: {
// //             padding: {
// //                 top: 10,
// //                 bottom: 10,
// //                 left: 10,
// //                 right: 10,
// //             }
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             {/* Header */}
// //             <header className="mb-4 text-center">
// //                 <h1>Welcome to Your Dashboard</h1>
// //                 <p className="lead">Track your progress and explore recommendations to reduce your carbon footprint.</p>
// //             </header>

// //             {/* Insights Section */}
// //             <section className="mb-5">
// //                 <div className="card shadow">
// //                     <div className="card-body">
// //                         <h5 className="card-title">Insights</h5>
// //                         <p className="card-text">{insights}</p>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Today Footprint Calculation */}
// //             <section className="mb-5">
// //                 <div className="card shadow">
// //                     <div className="card-body">
// //                         <h5 className="card-title">Calculate Today's Footprint</h5>
// //                         <Link to="/calculate-footprint" className="btn btn-primary">Calculate Now</Link>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Graph Section */}
// //             <section className="mb-5">
// //                 <h3>Historical Data</h3>
// //                 <div className="card shadow p-3 mb-4" style={{ height: '400px' }}>
// //                     <Line data={lineGraphData} options={graphOptions} />
// //                 </div>

// //                 <h3>Footprint by Category</h3>
// //                 <div className="card shadow p-3" style={{ height: '400px' }}>
// //                     <Pie data={pieChartData} options={graphOptions} />
// //                 </div>
// //             </section>

// //             {/* Footprint by Date */}
// //             <section className="mb-5">
// //                 <h3>Check Footprint by Date</h3>
// //                 <div className="card shadow p-3">
// //                     <label htmlFor="datePicker" className="form-label">Select Date:</label>
// //                     <input
// //                         type="date"
// //                         id="datePicker"
// //                         className="form-control mb-3"
// //                         value={selectedDate}
// //                         onChange={handleDateChange}
// //                     />
// //                     {footprintByDate && (
// //                         <p className="mt-3">Footprint for {selectedDate}: {footprintByDate} kg</p>
// //                     )}
// //                 </div>
// //             </section>

// //             {/* Recommendations Section */}
// //             <section className="mb-5">
// //                 <div className="card shadow">
// //                     <div className="card-body">
// //                         <h5 className="card-title">Recommendations</h5>
// //                         <p className="card-text">Discover personalized suggestions to reduce your emissions.</p>
// //                         <Link to="/recommendations" className="btn btn-success">Explore Tips</Link>
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // };

// // export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Line, Pie } from 'react-chartjs-2'; // Import Pie instead of Bar
// import 'chart.js/auto';
// import axios from 'axios';
// import { useCarbonFootprint } from "../api/CarbonFootprintContext";

// const Dashboard = () => {
//     const [historyData, setHistoryData] = useState([]);
//     const [selectedDate, setSelectedDate] = useState('');
//     const [footprintByDate, setFootprintByDate] = useState(null);
//     const [insights, setInsights] = useState('');

//     const { carbonFootprintData } = useCarbonFootprint();
//     const { transport, energy, diet } = carbonFootprintData;

//     useEffect(() => {
//         const fetchHistory = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/api/carbon/history', {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('token')}`
//                     }
//                 });
//                 setHistoryData(response.data.history);
//                 calculateInsights(response.data.history);
//             } catch (error) {
//                 console.error('Error fetching history:', error);
//             }
//         };

//         fetchHistory();
//     }, []);

//     const calculateInsights = (data) => {
//         if (data.length > 1) {
//             const firstFootprint = data[0].footprint;
//             const latestFootprint = data[data.length - 1].footprint;
//             const reduction = ((firstFootprint - latestFootprint) / firstFootprint) * 100;
//             setInsights(`Your carbon footprint has ${reduction > 0 ? 'reduced' : 'increased'} by ${Math.abs(reduction).toFixed(2)}% since the first recorded entry.`);
//         } else {
//             setInsights('Insufficient data to calculate insights.');
//         }
//     };

//     const handleDateChange = (e) => {
//         setSelectedDate(e.target.value);
//         const data = historyData.find((item) => item.date.startsWith(e.target.value));
//         setFootprintByDate(data ? data.footprint : 'No data available');
//     };

//     const lineGraphData = {
//         labels: historyData.map((entry) => new Date(entry.date).toLocaleDateString()),
//         datasets: [
//             {
//                 label: 'Carbon Footprint (kg)',
//                 data: historyData.map((entry) => entry.footprint),
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 tension: 0.2
//             }
//         ]
//     };

//     const pieChartData = {
//         labels: ['Transport', 'Energy', 'Diet'],
//         datasets: [
//             {
//                 label: 'Carbon Footprint by Category',
//                 data: [transport, energy, diet],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.6)',
//                     'rgba(54, 162, 235, 0.6)',
//                     'rgba(75, 192, 192, 0.6)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(75, 192, 192, 1)'
//                 ],
//                 borderWidth: 1
//             }
//         ]
//     };

//     const graphOptions = {
//         responsive: true,
//         maintainAspectRatio: false, // Allows better responsiveness
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             tooltip: {
//                 enabled: true,
//             }
//         },
//         layout: {
//             padding: {
//                 top: 10,
//                 bottom: 10,
//                 left: 10,
//                 right: 10,
//             }
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <header className="text-center mb-4">
//                 <h1>Dashboard</h1>
//             </header>

//             <div className="row">
//                 <div className="col-md-3">
//                     <div className="card text-center">
//                         <div className="card-body">
//                             <h5>Transport</h5>
//                             <p>{transport} kg</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="card text-center">
//                         <div className="card-body">
//                             <h5>Energy</h5>
//                             <p>{energy} kg</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//                     <div className="card text-center">
//                         <div className="card-body">
//                             <h5>Diet</h5>
//                             <p>{diet} kg</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3">
//     <div className="card text-center">
//         <div className="card-body">
//             <h5>Today's Footprint</h5>
//             <p>{(transport + energy + diet).toFixed(2)} kg</p>
//         </div>
//     </div>
// </div>

//             </div>

//             <div className="row mt-4">
//                 <div className="col-md-6">
//                     <h4>Weekly Footprint</h4>
//                     <div className="card p-3">
//                         <Line data={lineGraphData} options={graphOptions} />
//                     </div>
//                 </div>

//                 <div className="col-md-6">
//                     <h4>Footprint by Category</h4>
//                     <div className="card p-3">
//                         <Pie data={pieChartData} options={graphOptions} />
//                     </div>
//                 </div>
//             </div>

//             <div className="row mt-4">
//                 <div className="col">
//                     <h4>Insights</h4>
//                     <div className="card p-3">
//                         <p>{insights}</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="row mt-4">
//                 <div className="col">
//                     <h4>Check Footprint by Date</h4>
//                     <div className="card p-3">
//                         <input
//                             type="date"
//                             className="form-control"
//                             value={selectedDate}
//                             onChange={handleDateChange}
//                         />
//                         {footprintByDate && (
//                             <p className="mt-3">Footprint for {selectedDate}: {footprintByDate} kg</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { Line, Pie } from 'react-chartjs-2'; // Import Pie instead of Bar
import 'chart.js/auto';
import axios from 'axios';
import { useCarbonFootprint } from "../api/CarbonFootprintContext";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [historyData, setHistoryData] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [footprintByDate, setFootprintByDate] = useState(null);
    const [insights, setInsights] = useState('');

    const { carbonFootprintData } = useCarbonFootprint();
    const { transport, energy, diet , carbonFootprint } = carbonFootprintData;

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/carbon/history', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setHistoryData(response.data.history);
                calculateInsights(response.data.history);
            } catch (error) {
                console.error('Error fetching history:', error);
            }
        };

        fetchHistory();
    }, []);

    const calculateInsights = (data) => {
        if (data.length > 1) {
            const firstFootprint = data[0].footprint;
            const latestFootprint = data[data.length - 1].footprint;
            const reduction = ((firstFootprint - latestFootprint) / firstFootprint) * 100;
            setInsights(`Your carbon footprint has ${reduction > 0 ? 'reduced' : 'increased'} by ${Math.abs(reduction).toFixed(2)}% since the first recorded entry.`);
        } else {
            setInsights('Insufficient data to calculate insights.');
        }
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        const data = historyData.find((item) => item.date.startsWith(e.target.value));
        setFootprintByDate(data ? data.footprint : 'No data available');
    };

    const lineGraphData = {
        labels: historyData.map((entry) => new Date(entry.date).toLocaleDateString()),
        datasets: [
            {
                label: 'Carbon Footprint (kg)',
                data: historyData.map((entry) => entry.footprint),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.2
            }
        ]
    };

    const pieChartData = {
        labels: ['Transport', 'Energy', 'Diet'],
        datasets: [
            {
                label: 'Carbon Footprint by Category',
                data: [
                    Number(transport || 0), 
                    Number(energy || 0), 
                    Number(diet || 0)
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    const graphOptions = {
        responsive: true,
        maintainAspectRatio: false, // Allows better responsiveness
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            }
        },
        layout: {
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            }
        }
    };

    return (
        <div className="container mt-5">
            <header className="text-center mb-4">
                <h1>Dashboard</h1>
            </header>

            <div className="row">
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Transport</h5>
                            <p>{Number(transport || 0)} kg</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Energy</h5>
                            <p>{Number(energy || 0)} kg</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Diet</h5>
                            <p>{Number(diet || 0)} kg</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5>Today's Footprint</h5>
                            <p>{carbonFootprint} kg</p>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="row mt-4">
                <div className="col-md-6">
                    <h4>Weekly Footprint</h4>
                    <div className="card p-3">
                        <Line data={lineGraphData} options={graphOptions} />
                    </div>
                </div>

                <div className="col-md-6">
                    <h4>Footprint by Category</h4>
                    <div className="card p-3">
                        <Pie data={pieChartData} options={graphOptions} />
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h4>Insights</h4>
                    <div className="card p-3">
                        <p>{insights}</p>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h4>Check Footprint by Date</h4>
                    <div className="card p-3">
                        <input
                            type="date"
                            className="form-control"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        {footprintByDate && (
                            <p className="mt-3">Footprint for {selectedDate}: {footprintByDate} kg</p>
                        )}
                    </div>

                    <section className="mb-5">
               <div className="card shadow">
                    <div className="card-body">
                         <h5 className="card-title">Calculate Today's Footprint</h5>                    
    <Link to="/calculate-footprint" className="btn btn-primary">Calculate Now</Link>   
                  </div>
               </div>
             </section>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
