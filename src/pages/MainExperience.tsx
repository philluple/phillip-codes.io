// import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from './Layout';
// import '../css/Home.css'; // Import the CSS file
// import '../css/App.css';
// import '../css/index.css'; // Import global styles
// import React, { useEffect, useState } from 'react';

// function MainExperience() {
//     const [experiences, setExperiences] = useState([]);

//     useEffect(() => {
//         fetch('/data.json')
//             .then(response => response.json())
//             .then(data => setExperiences(data.experiences))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <Layout>
//             <div className="experience-container">
//                 {experiences.map((experience, index) => (
//                     <div key={index} className="experience">
//                         <h2>{experience.company}</h2>
//                         <h3>{experience.position}</h3>
//                         <p><strong>Duration:</strong> {experience.duration}</p>
//                         <p>{experience.description}</p>
//                         {experience.image && <img src={experience.image} alt={`${experience.company} logo`} />}
//                     </div>
//                 ))}
//             </div>
//         </Layout>
//     );
// }

// export default MainExperience;
