import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddFood extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeFoodItem = this.onChangeFoodItem.bind(this);
    this.onChangeCalories = this.onChangeCalories.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      foodItem: '',
      calorie: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeFoodItem(e) {
    this.setState({
      foodItem: e.target.value
    })
  }

  onChangeCalories(e) {
    this.setState({
      calorie: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const food = {
      username: this.state.username,
      foodItem: this.state.foodItem,
      calorie: this.state.calorie,
      date: this.state.date
    }

    console.log(food);

    axios.post('http://localhost:5000/foodItems/add', food)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Food Item Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Food Item: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.foodItem}
              onChange={this.onChangeFoodItem}
              />
        </div>
        <div className="form-group">
          <label>Calories (in Kcal): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.calorie}
              onChange={this.onChangeCalories}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Food Item Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}