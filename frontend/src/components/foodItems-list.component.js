import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Food = props => (
  <tr>
    <td>{props.food.username}</td>
    <td>{props.food.foodItem}</td>
    <td>{props.food.calorie}</td>
    <td>{props.food.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.food._id}>edit</Link> | <a href="/" onClick={() => { props.deleteFoodItem(props.food._id) }}>delete</a>
    </td>
  </tr>
)

export default class FoodItemsList extends Component {
  constructor(props) {
    super(props);

    this.deleteFoodItem = this.deleteFoodItem.bind(this)

    this.state = {foodItems: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/foodItems/')
      .then(response => {
        this.setState({ foodItems: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteFoodItem(id) {
    axios.delete('http://localhost:5000/foodItems/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      foodItems: this.state.foodItems.filter(el => el._id !== id)
    })
  }

  foodList() {
    return this.state.foodItems.map(currentfood => {
      return <Food food={currentfood} deleteFoodItem={this.deleteFoodItem} key={currentfood._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Food Items</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Food Items</th>
              <th>Calories</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.foodList() }
          </tbody>
        </table>
      </div>
    )
  }
}