/* eslint-disable newline-per-chained-call */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Select,
  MenuItem,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import Joi from '@hapi/joi';
import { fillLeftover } from 'CLIENT_UTILS/fillLeftovers';
import Paper from 'COMPONENTS/Paper';


export default class CalorieIntakeForm extends Component {
  formValues = Joi.object().keys({
    calorieIntake: Joi.number().integer().min(0).max(2000),
    beverage: Joi.number().integer().min(0).max(5),
    numOfContainers: Joi.number().integer().min(1).max(11),
  });

  state = {
    beverageErr: false,
    beverageErrMsg: '',
    beverageInitRender: true,
    calorieIntake: '750',
    calorieIntakeErr: false,
    calorieIntakeErrMsg: '',
    leftOver: [],
    msgBad: 'You have exceeded your limit!!!',
    selectedIndex: 99,
    showMsg: false,
    numOfContainers: 0,
    numOfContainersErr: false,
    numOfContainersErrMsg: '',
    numOfContainersInitRender: true,
  }

  handleCalorieChange = (e) => {
    const { error, value } = Joi.validate({ calorieIntake: parseInt(e.target.value, 10) }, this.formValues);

    this.setState({
      calorieIntake: value.calorieIntake || 0,
      calorieIntakeErr: !!error,
      calorieIntakeErrMsg: 'Total Caffeine Intake should be between 0 and 2000mg.',
    });
  }

  handleBeverageSelect = (e) => {
    const { error, value } = Joi.validate({ beverage: parseInt(e.target.value, 10) }, this.formValues);

    this.setState({
      selectedIndex: value.beverage || 99,
      beverageErr: !!error,
      beverageErrMsg: 'Select a beverage.',
      beverageInitRender: false,
    });
  }

  handleConsumptionSelect = (e) => {
    const { error, value } = Joi.validate({ numOfContainers: parseInt(e.target.value, 10) }, this.formValues);

    this.setState({
      numOfContainers: value.numOfContainers || 0,
      numOfContainersErr: !!error,
      numOfContainersErrMsg: 'Select number of Containers consumed.',
      numOfContainersInitRender: false,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      selectedIndex,
      products,
      numOfContainers,
      calorieIntake,
    } = this.state;

    const selectedProduct = products[selectedIndex - 1] || {};
    const consumedCalories = (numOfContainers * selectedProduct.servings * selectedProduct.caffeinePerServing);
    const leftoverCalories = calorieIntake - consumedCalories;
    const drinksCanConsume = fillLeftover(products, leftoverCalories);

    this.setState({
      leftOver: drinksCanConsume,
      showMsg: true,
    });
  }

  getErrorMsgs = () => {
    const {
      calorieIntakeErr,
      calorieIntakeErrMsg,
      beverageErr,
      beverageErrMsg,
      numOfContainersErr,
      numOfContainersErrMsg,
    } = this.state;

    let errs = [];

    if (calorieIntakeErr) {
      errs.push(calorieIntakeErrMsg);
    }

    if (beverageErr) {
      errs.push(beverageErrMsg);
    }

    if (numOfContainersErr) {
      errs.push(numOfContainersErrMsg);
    }
    return errs;
  }

  messageGenerator = (msgs) => {
    return (
      <div>
        <p>You can still consume:</p>
        <ul>
          {msgs.map((msg, i) => {
            return <li key={i}>{msg.name}</li>;
          })}
        </ul>
      </div>
    );
  }

  renderResults = () => {
    const {
      showMsg,
      leftOver,
      msgBad,
    } = this.state;


    if (showMsg && leftOver.length === 0) {
      return <Paper msg={msgBad} />;
    } else if (showMsg && leftOver.length !== 0) {
      return <Paper msg={this.messageGenerator(leftOver)} />;
    }
  }

  render() {
    const {
      beverageErr,
      beverageErrMsg,
      beverageInitRender,
      calorieIntake,
      calorieIntakeErr,
      calorieIntakeErrMsg,
      selectedIndex,
      numOfContainers,
      numOfContainersErr,
      numOfContainersErrMsg,
      numOfContainersInitRender,
      showMsg,
    } = this.state;

    const {
      getProducts,
    } = this.props;
    return (
      <div style={{
        margin: '15px',
        textAlign: 'center',
      }}>
        <form onSubmit={this.handleSubmit}>
          <FormControl
            style={{ margin: '15px', minWidth: 120 }}
            align="center"
            error={calorieIntakeErr}
          >
            <InputLabel htmlFor="calorieIntake">Total Caffeine Intake:</InputLabel>
            <Input
              aria-describedby="calorIntakeHelper"
              id="calorieIntake"
              value={calorieIntake}
              onChange={this.handleCalorieChange}
              type="number"
            />
            {calorieIntakeErr && <FormHelperText id="calorIntakeHelper">{calorieIntakeErrMsg}</FormHelperText>}
          </FormControl>

          <FormControl style={{ margin: '15px', minWidth: 190 }} align="center" error={beverageErr}>
            <InputLabel htmlFor="beverageConsumed">Beverage:</InputLabel>
            <Select
              onChange={this.handleBeverageSelect}
              inputProps={{ 'aria-describedby': 'beverageConsumedHelper', 'id': 'beverageConsumed' }}
              value={selectedIndex}
            >
              <MenuItem value={99}>- Select Beverage -</MenuItem>
              {
                getProducts.map(({ name }, i) => {
                  return <MenuItem key={name} value={i + 1}>{name}</MenuItem>;
                })
              }
            </Select>
            {beverageErr && <FormHelperText id="beverageConsumedHelper">{beverageErrMsg}</FormHelperText>}
          </FormControl>

          <FormControl style={{ margin: '15px', minWidth: 200 }} align="center" error={numOfContainersErr}>
            <InputLabel htmlFor="drinksConsumed">Containers of Beverage:</InputLabel>
            <Select
              value={numOfContainers}
              onChange={this.handleConsumptionSelect}
              inputProps={{ 'aria-describedby': 'drinksConsumedHelper', 'id': 'drinksConsumed' }}
            >
              <MenuItem value={0}>- Select Containers Consumed -</MenuItem>
              {Array(10).fill().map((_, i) => <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>)}
            </Select>
            {numOfContainersErr && <FormHelperText id="drinksConsumedHelper">{numOfContainersErrMsg}</FormHelperText>}
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ margin: '15px' }}
            disabled={beverageInitRender || numOfContainersInitRender || this.getErrorMsgs().length > 0}
          >
            Submit
          </Button>
        </form>
        <div id="results">
          {showMsg && (!beverageInitRender && !numOfContainersInitRender) && (this.getErrorMsgs().length === 0) && this.renderResults()}
        </div>
      </div>
    );
  }
}

CalorieIntakeForm.propTypes = {
  getProducts: PropTypes.array,
};
CalorieIntakeForm.defaultProps = {
  getProducts: [],
};
