import React, {Component, Fragment} from 'react';
import foods from './foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood'
import Searchfood from './SearchFood';
import SearchFood from './SearchFood';


class DisplayFoods extends Component {
  constructor(){
    super()
      this.state = {
        foods
      }
    
  }

  addFood(foodItem){
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(foodItem);

    
    this.setState({
      foods: foodsCopy
    })
  }

  searchBar = (event, item) => {

    const foodsCopy = [...this.state.foods];

    let filtered = foodsCopy.filter(food =>  food.name.toLowerCase().includes(item.toLowerCase()))
    
    this.setState({
      foods: filtered
    })
  }

  render() { 


    return ( 
      <Fragment>
        <h1>IronNutrition</h1>
        <SearchFood searchBar={this.searchBar}/>
      <AddFood addNewFood = { foodItem => this.addFood(foodItem)}/>
        {this.state.foods.map((eachFood, index) => {
              return (
               <FoodBox key={index} foods={eachFood}/>
              );
            })}

      </Fragment>
     );
  }
}
 
export default DisplayFoods;