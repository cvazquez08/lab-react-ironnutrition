import React, {Component, Fragment} from 'react';
import foods from './foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood'


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

    console.log(foodItem);
    console.log(foodsCopy)
    
    this.setState({
      foods: foodsCopy
    })
  }


  render() { 


    return ( 
      <Fragment>
        <h1>IronNutrition</h1>
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