import * as authService from '../../services/authService'
import {useNavigate} from "react-router-dom";


const Login = ({
                   onLogin
               }) => {
    let navigate = useNavigate()

    function onLoginHandler(e) {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let email = formData.get('email')
        let password = formData.get('password')

        try {
            authService.login(email, password).then(res => {
                onLogin(res)
            })
            navigate('/')
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" action="/login" method="POST" onSubmit={onLoginHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login"/>
                </fieldset>
            </form>
        </section>
    )
}

export default Login