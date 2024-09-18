import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; //styling for datepicker

export default class CreateExercises extends Component {
    constructor(props) {
        super(props);

        // this is undefined, until we bind it to this class (this needs to refer to this object)
        // strange, I wonder if C# or C++ take care of this binding under the hood since then the this method automatically refers to the current class instance.

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.state is how you create variables in react
        // when you update the state it automatically updates the page with new values

        // Create the ref
        this.userInput = React.createRef();

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    // react lifecycle method

    componentDidMount() {
        // set the state of the users array these are hard coded just now but will be read from the database later
        this.setState(
            {
                users: ['test user'],
                username: 'test user'
            })
    }
    onChangeUsername(e) {
        this.setState(
            {
                username: e.target.value
            });
    }

    onChangeDescription(e) {
        this.setState(
            {
                description: e.target.value
            });
    }

    onChangeDuration(e) {
        this.setState(
            {
                    duration: e.target.value
            });
    }


    onChangeDate(date) {
        this.setState(
            {
                    date: date
            });
    }

    onSubmit(e) {
        e.preventDefault();

        const exercises = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercises);

        window.location = '/';
    }

    render() {
        return (
            <div> {/*standard HTML form */}
                <h3>Create New Exercise Log</h3>
                {/* // call the this.onSubmit when user clicks the button */}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label> {/*thjs is a dropdown menu */}
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}> {/*when the user changes the selection */}
                            {/*// This is where we do something a little fancy. 
                                  The array of all users from MongoDB atlas database
                                  map allows us to return something from each element in the array */}
                            {
                                this.state.users.map(function (user) {
                                    /* for each array element we return an option which is a select box */
                                    /* fyi this is a Javascript comment, not a JSX one so I can use the regurlar Javascript comment code */
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div> {/* We have a datepicker component for the calander to appear.*/}
                            <DatePicker
                                selected={this.selected}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
                <p>You are on the Create Exercises component!</p>
            </div>
        )
    }
}