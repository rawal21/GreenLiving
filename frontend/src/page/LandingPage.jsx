import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <header className="bg-success text-white py-3">
        <nav className="container navbar navbar-expand-lg">
          <a className="navbar-brand fw-bold" href="#">
            Green Living Guide
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/dashboard">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">Calculate Your Carbon Footprint</h1>
          <p className="lead text-muted mb-4">
            Discover your environmental impact and get personalized, eco-friendly recommendations to help you live a greener life.
          </p>
          <Link to="/auth" className="btn btn-success btn-lg px-4">
            Get Started
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-success text-white py-3 mt-auto">
        <div className="container text-center">
          © 2024 Green Living Guide. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// import React from 'react';
// import { Link } from 'react-router-dom';


// const LandingPage = () => {
//     return (
//         <div>
//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container">
//                     <a className="navbar-brand" href="#">Green Living Guide</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Hero Section */}
//             <header className="bg-light text-center py-5">
//                 <div className="container">
//                     <h1 className="display-4">Track Your Carbon Footprint</h1>
//                     <p className="lead">Take small steps towards a greener tomorrow. Calculate, track, and reduce your carbon emissions.</p>
//                     <Link href="/auth" className="btn btn-primary btn-lg">Let's Start</Link>
//                 </div>
//             </header>

//             {/* Features Section */}
//             <section id="features" className="py-5">
//                 <div className="container">
//                     <h2 className="text-center mb-4">Why Use Our App?</h2>
//                     <div className="row">
//                         <div className="col-md-4 text-center">
//                             <i className="bi bi-bar-chart-fill fs-1 text-primary"></i>
//                             <h4 className="mt-3">Track Your Impact</h4>
//                             <p>Understand your carbon footprint with easy-to-use tools.</p>
//                         </div>
//                         <div className="col-md-4 text-center">
//                             <i className="bi bi-lightbulb-fill fs-1 text-success"></i>
//                             <h4 className="mt-3">Eco-Friendly Tips</h4>
//                             <p>Get personalized recommendations to reduce your emissions.</p>
//                         </div>
//                         <div className="col-md-4 text-center">
//                             <i className="bi bi-person-fill fs-1 text-info"></i>
//                             <h4 className="mt-3">User Dashboard</h4>
//                             <p>Track your progress and view your history effortlessly.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="bg-dark text-white text-center py-3">
//                 <p>&copy; 2024 Green Living Guide. All rights reserved.</p>
//                 <a href="#privacy" className="text-white mx-2">Privacy Policy</a>
//                 <a href="#terms" className="text-white mx-2">Terms of Service</a>
//             </footer>
//         </div>
//     );
// };

// export default LandingPage;
