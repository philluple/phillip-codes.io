import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import './Home.css'; // Import the CSS file
import './App.css';
import './index.css'; // Import global styles

function App() {
  return (
    <Layout>
      <div className="mid-section">
          <div className="large-name">Phillip Le</div>
          <div className="description"> MY AIM IS TO CREATE BEAUTIFUL, EFFECTIVE, AND RESPONSIBLE SOFTWARE SOLUTIONS. BASED IN NEW YORK AND LOS ANGELES.</div>
          <div className="contact">LE.PHILLIP@COLUMBIA.ED</div>
      </div>
    </Layout>
  )

}
export default App;
