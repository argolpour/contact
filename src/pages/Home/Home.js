import './Home.css'
import { Link } from 'react-router-dom';
import Contacts from './../../components/Contacts/Contacts';
const Home = () => {
             return (
        <div className="wrapper">
            <div className="home-header">
                <h4>Contact List</h4>
                <Link to="/create"> <button className="btn btn-primary">Add Contact</button></Link>
            </div>
        <Contacts/>
        </div>
    )
}

export default Home
