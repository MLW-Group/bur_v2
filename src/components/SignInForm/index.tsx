import { AppContext } from "@/context/app-context";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useContext } from "react";

function SignInForm() {
    const router = useRouter()

    const [state, setState] = React.useState({
        email: "",
        password: ""
    });
    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    };
    const handleOnSubmit = async (evt) => {
        evt.preventDefault();

        const { email, password } = state;
        try {
            const { data } = await axios.post(`https://bur-api.macwel.app/api/v1/auth/login`, {
                email,
                password,
            }, { withCredentials: true })
            localStorage.setItem('Token', data.accessToken)
            router.push(`/admin/panel`)

        } catch (error: any) {
            alert(`Ошибка авторизации: ${error.response.data.message}`);

        }
        for (const key in state) {
            setState({
                ...state,
                [key]: ""
            });
        }
    };

    return (
        <div className="form-container sign-in-container">
            <form className="form" onSubmit={handleOnSubmit}>
                <h1 className="h1">Sign in</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={state.email}
                    className="input"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input"
                    value={state.password}
                    onChange={handleChange}
                />
                <button className="button">Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;
