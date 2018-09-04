import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories, getPosts } from '../actions'
import CategoryList from './CategoryList';
import PostList from './PostList';
import './App.css'
 class App extends Component {
   componentWillMount() {
    //console.log("componentWillMount...")
    this.props.getAllCategories();
    this.props.getPosts('voteScore');
  }
   render() {
    /*console.log("render...")
    const { categories } = this.props;
    */
    const { categories, posts } = this.props.state;
    return (
      <div>
        <h2>Sort by</h2>
          <select>
            <option value="date" default>Date</option>
            <option value="votes">Votes</option>
          </select>
        </div>
         <div>
          <h2>Categories</h2>
          <CategoryList categories={categories} />
        </div>
         <div>
          <h2>Posts</h2>
          <div>
            <PostList posts={posts}/>
            </div>
          </div>
       </div>
    );
  }
}
 const mapStateToProps = (state) => {
  /*console.log("mapStateToProps - state:", state);*/
  return { state }
}
 const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: () => dispatch(getCategories()),
   getPosts: (sortBy) => dispatch(getPosts(sortBy)),
  }
}
