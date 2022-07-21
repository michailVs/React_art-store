import React, { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/MyInput/MyInput'
import { AuthContext } from '../context'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = e => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', true)
    }
    return (
      <div className='login'>
          <div className="login__cont">
            <h1 className='login__title'>Сатраница для логина</h1>
            <form onSubmit={login}>
                <MyInput className="login__email" placeholder="Введите логине"/>
                <MyInput className="login__password" type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
          </div>
      </div>
    )
}

export default Login