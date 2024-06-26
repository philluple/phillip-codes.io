import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import '../css/Home.css'; // Import the CSS file
import '../css/App.css';
import '../css/index.css'; // Import global styles

function Home() {
    return (
        // <h1>In home</h1>
        <Layout>
            <div className="mid-section">
                <div className="large-name">Phillip Le</div>
                <div className="description"> MY AIM IS TO CREATE BEAUTIFUL, EFFECTIVE, AND RESPONSIBLE SOFTWARE SOLUTIONS. BASED IN NEW YORK AND LOS ANGELES.</div>
                <div className="contact">LE.PHILLIP@COLUMBIA.EDU</div>
            </div>

        </Layout>
    );
}

export default Home;
