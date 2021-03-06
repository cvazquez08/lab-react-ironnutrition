import React, { Component, Fragment } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      form: false,
      name: "",
      image: "",
      calories: ""
    };
  }

  toggleForm = bool => {
    this.setState({
      form: bool
    });
  }



  handleFormSubmit(event){
    event.preventDefault();
    this.props.addNewFood(this.state);

 
      this.setState({
       name: "",
       image: "",
       calories: "",
      })
    }
   

  onChangeHandler(event){
    let { name, value } = event.target;
    console.log(name,value)
    // input fields
    this.setState({ 
      [name]:value 
    })

    }

  render() {
    return (
      <Fragment>
        <button onClick={this.toggleForm.bind(null, true)}>Add new Food</button>
        <button onClick={this.toggleForm.bind(null, false)}>hide</button>
        {this.state.form && 
        <form onSubmit= { event => this.handleFormSubmit(event) }>
        <label>Name:</label>
        <input
        onChange={ event => this.onChangeHandler(event)}
        name="name"
        type="text"
        value={this.state.name}
        />
        <label>Calories:</label>
        <input
        onChange={ event => this.onChangeHandler(event)}
        name="calories"
        type="text"
        value={this.state.calories}
        />
        <label>Image url:</label>
        <input
        onChange={ event => this.onChangeHandler(event)}
        name="image"
        type="text"
        value={this.state.image}
        />
        <button >Add</button>
        </form>       
      }
      </Fragment>
    );
  }
}
export default AddFood;
