import {useState, useEffect} from "react";
import {getAll} from "../../services/authService";
import PetCard from "../petCard/petCard";
const Dashboard = () => {
    let [pets, setPets] = useState([])

    useEffect(() => {
        getAll().then(data => {
            setPets(data)
        })
    }, [])


    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            {pets && pets.length > 0?
                <ul className="other-pets-list">
                    {pets.map(x => <PetCard key={x._id} pet={x}/>)}
                </ul>
                :<p className="no-pets">No pets in database!</p>

            }
        </section>
    )
}

export default Dashboard