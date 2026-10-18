import { Link } from 'react-router';

function Home(){
    return(
        <div className="container">
            <h1>Fluid Sim</h1>

            <p>Welcome to my website!</p>

            <Link to="/simulation" className="button">
                Go to Simulation
            </Link>
        </div>
    )
}

export default Home;