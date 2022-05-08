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

function App() {
    let [user, setUserInfo] = useState({
        accessToken: '',
        email: '',
        password: ''
    })

    const onLogin = (authData) => {
        setUserInfo(authData)
    }

    const onLogout = (username) => {

    }

    return (
        <AuthContext.Provider value={''}>
        <div className="App">
            <div id="container">
                <Header {...user}/>
                <main id="site-content">
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/create' element={<Create/>}/>
                        <Route path='/login' element={<Login onLogin={onLogin}/>}/>
                        <Route path='/my-pets' element={<MyPets/>}/>
                        <Route path='/register' element={<Register/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </div>
        </AuthContext.Provider>
    );
}

export default App;
