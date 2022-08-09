import React, { useEffect } from 'react';
import { LoginBox } from '../components';
const Home: React.FC = () => {

    return (
        <div>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Aripang Co. : Holy Boom !!!
            </a>
            <LoginBox/>
        </div>
    )
}

export default Home;