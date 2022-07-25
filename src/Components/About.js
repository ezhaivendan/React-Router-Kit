import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import PumaComp from './Puma';

const About = ({match}) => {
    return (
        <>
            <section>
                <nav>
                    <ul>
                        <li>
                            <Link to={`${match.url}/nike`}>Nike Shoes</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/woodland`}>Woodland Shoes</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/puma`}>Puma Shoes</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <Route path={`${match.url}/nike`} render={() => <div>Nike shoes are in <a href="https://amazon.com/nikes">Amazon</a></div>} ></Route>
            <Route path={`${match.url}/woodland`} render={() => <div>Woodland shoes are in <a href="https://amazon.com/woodland">Amazon</a></div>} ></Route>
            <Route path={`${match.url}/puma`} component={PumaComp}></Route>
        </>
    )
};

export default About;