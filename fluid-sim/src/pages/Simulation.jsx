import { Link } from 'react-router';

function Simulation(){
    return(
        <div className="container">
            <h1>Fluid Simulation</h1>

            <p>Welcome to the simulation!</p>

            <Link to="/" className="button">
                &larr; Go to Home
            </Link>
        </div>
    )
}

export default Simulation;