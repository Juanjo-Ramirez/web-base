import { Link } from 'react-router-dom';


export function Navigation() {
    return (
        <div>
            <Link to="/">Hero</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/social-links">Social Links</Link>
            <Link to="/map">Map</Link>
            <Link to="/about">About</Link>
        </div>
    );
};
