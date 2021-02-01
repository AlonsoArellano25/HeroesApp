import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        //history.replace('/');
        const lasthPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login,
            payload: {
                name: 'Alonso'
            }
        })

        history.replace(lasthPath);
    }
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
