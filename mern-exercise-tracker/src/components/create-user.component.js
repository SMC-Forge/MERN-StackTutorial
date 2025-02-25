import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        // this is undefined, until we bind it to this class (this needs to refer to this object)
        // strange, I wonder if C# or C++ take care of this binding under the hood since then the this method automatically refers to the current class instance.

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.state is how you create variables in react
        // when you update the state it automatically updates the page with new values

        // Create the ref
        this.userInput = React.createRef();

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e) {
        this.setState(
            {
                username: e.target.value
            });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        // send the submitted user data to the backend
        axios.post('http://localhost:5000/users/add',user).then(res => console.log(res.data));

        // reset the user to blank so they can enter another name
        this.setState(
            {
                username: ''
            }
        )
    }



    render() {
        return (
            < div > {/*standard HTML form */}
                < h3 > Create New User</h3 >
                < form onSubmit = {this.onSubmit} >
                <div className="form-group">
                    <label>Username: </label>
                    <input type = "text"
                    requiredclassName="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
                <div className="form-group">
                    <input type="submit" value = "Create Exercise Log" className="btn btn-primary" />
                </div>
                </div>
                </form>
                <p>You are on the create user component!</p>
            </div >
        )
    }
}