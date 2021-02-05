import React, { Component } from 'react';
//import our service
import JeopardyService from '../../jeopardyService';
import Display from './display';


class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      formData: '',
      data: {},
      score: 0
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  //Keeps input field as a controlled component
  handleChange = (event) => {
    console.log(event,this.state.formData, 'event?')
    let formData = this.state.formData;
    formData = event.target.value;
    this.setState({formData});
  }
  //Checks if input matches answer, resets question, adds or removes points, and rests inputs field.
  testAnswer = (data) => {
    if (this.state.formData === data.answer){
      this.setState({
        score: this.state.score + data.value,
        formData: ''
      });

    }else{
      this.setState({
        score: this.state.score - data.value,
        formData: ''
      })
    }
    this.getNewQuestion()
  }
  //display the results on the screen
  render() {
    if (this.state.data){
    return (
    <div>
      <Display data={this.state.data[0]} score={this.state.score} testAnswer={() => this.testAnswer(this.state.data[0])} handleChange={this.handleChange} formData={this.state.formData} />
    </div>
    )}
  }
}
export default Jeopardy;