import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getCategories,
  getPosts,
  changeSortOrder,
  ASCENDING_ORDER,
  DESCENDING_ORDER
} from '../actions'
import CategoryList from './CategoryList';
import PostList from './PostList';
import './App.css'
 class App extends Component {
   componentWillMount() {
     console.log("props", this.props);
     this.props.getAllCategories();
    this.props.getPosts('this.props.sort');
  }
  onSortFieldChanged = (event) => {
   const { sort } = this.props;
   const newSort = {
     field: event.target.value,
     order: sort.order
   };
   this.props.changeSortOrder(newSort);
   this.props.getPosts(newSort);
 }
   render() {
    /*console.log("render...")
    const { categories } = this.props;
    */
    const { categories, posts, order } = this.props;
    return (
      <div>
        <h2>Posts order</h2>
        <select value={sort.field} onChange={this.onSortFieldChanged}>
          <option value="voteScore">Votes</option>
          <option value="timestamp">Timestamp</option>
          </select>
          &nbsp;
          <select value={sort.order} onChange={this.onSortOrderChanged}>
            <option value={ASCENDING_ORDER}>Ascending</option>
            <option value={DESCENDING_ORDER}>Descending</option>
          </select>
          </div>
       </div>
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
      }
    }
  }
