import React from 'react'
import FormInput from '../../components/form-input/form-input.component'


class SignIn extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            email: "",
            password: ""
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SignIn