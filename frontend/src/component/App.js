import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  import Root from './Root';
  getCategories,
  getPosts,
  changeSortOrder,
  increasePostScore,
  decreasePostScore,
  setCategoryFilter

} from '../actions'
import Category from './Category';

import './App.css'
 class App extends Component {
   this.props.getPosts();
 }
   render() {
    /*console.log("render...")
    const { categories } = this.props;
    */
    const { posts, categories, setCategoryFilter, sort, changeSortOrderorder, increasePostScore, decreasePostScore, filter } = this.props;
    return (
      <Router>
      <div>
      <Route exact path="/:category/:post_id" render= { () => (
            <div>
            <h2>Posts detail</h2>
            </div>
          )} />
          <Route exact path="/:category" render={ ({ match }) => (
            <Category
              sort={sort}
              filter={match.params.category}
              posts={posts}
              changeOrderFunc={changeSortOrder}
              increasePostScoreFunc={increasePostScore}
              decreasePostScoreFunc={decreasePostScore}
            />
          )} />

          <Route exact path="/" render={ ({ match }) => (
            <Root
              sort={sort}
              changeOrderFunc={changeSortOrder}
              categories={categories}
              filterFunc={setCategoryFilter}
              posts={posts}
              filter={filter}
              increasePostScoreFunc={increasePostScore}
              decreasePostScoreFunc={decreasePostScore}
            />
          )} />
        </div>
      </Router>
    );
  }
}
 const mapStateToProps = (state) => {
  /*console.log("mapStateToProps - state:", state);*/
  return { ...state }
  const mapDispatchToProps = (dispatch) => {
    return {
      getAllCategories(){
        dispatch(getCategories())
      },
      getPosts(sortBy){
        dispatch(getPosts(sortBy))
      },
      changeSortOrder(sort){
        dispatch(changeSortOrder(sort))
      },
  increasePostScore(id){
    dispatch(increasePostScore(id));
  },
  decreasePostScore(id){
    dispatch(decreasePostScore(id));
  },
  setCategoryFilter(filter){
    dispatch(setCategoryFilter(filter));
      }
    }
  }
