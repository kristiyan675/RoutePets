import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import MyPets from "./components/MyPets/MyPets";
import Register from "./components/Register/Register";
import {useEffect, useState} from 'react'
import * as authService from "./services/authService";

function App() {
    let [userInfo, setUserInfo] = useState({isAuthenticated: false, username: ''})

    useEffect(() => {
        let user = authService.getUser()
        setUserInfo({
                isAuthenticated: Boolean(user),
                username:  user
            })
    },[])

    const onLogin = (username) => {
        setUserInfo({
            isAuthenticated: true,
            username: username
        })
    }

    return (
        <div className="App">
            <div id="container">
                <Header {...userInfo}/>
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
    );
}

export default App;
