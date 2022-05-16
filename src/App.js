import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import MyPets from "./components/MyPets/MyPets";
import Register from "./components/Register/Register";
import {useState} from 'react'
import { AuthContext } from './contexts/AuthContext'
import {Logout} from "./components/Logout/Logout";
import Details from "./components/Details/Details";

function App() {
    let [user, setUserInfo] = useState({
        accessToken: '',
        email: '',
        password: ''
    })

    const login = (authData) => {
        setUserInfo(authData)
    }

    return (
        <AuthContext.Provider value={{user, login}}>
        <div className="App">
            <div id="container">
                <Header />
                <main id="site-content">
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/create' element={<Create/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/logout' element={<Logout/>}/>
                        <Route path='/my-pets' element={<MyPets/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/details/:petId' element={<Details/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </div>
        </AuthContext.Provider>
    );
}

export default App;
