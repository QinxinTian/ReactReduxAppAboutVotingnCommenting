# ReactReduxAppAboutVotingnCommenting
An react and redux app about voting and commenting on posts and comments

# note updated on 9/2
- redux-thunk
applyMiddleware\
A user clicks a button in the component to render an index page. This component calls a thunk action creator that returns a function:\
```
API request occurs -> API request is resolved -> thunk middleware invokes the function with dispatch() -> action is dispatched.
```
```
npm install --save react-redux
```
```
import { connect } from ‘react-redux’;
```
connect() is a function that makes it possible for a component to get both state and dispatch from the Redux store
```
connect(mapStateToProps, mapDispatchToProps)(MyComponent)
mapStateToProps(state, [ownProps])
```
“If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props.”
- MapDispatchToProps: allows us to bind dispatch to your action creators before they ever hit your component.
```
import { Provider } from ‘react-redux’
```
"In some cases, you want to pass data through the component tree without having to pass the props down manually at every level. You can do this directly in React with the powerful 'context' API”: It provides the store globally to all-subcomponents."
reducer creates the initial state of the application and stores in the store.\

reducer - functions, pass two args: current state always will be returned, action that is being dispatched.\

action -> copy the existing data, modify the copy and return the updated copy.\

A reducer receives the current state and an action that was dispatched, then decides how to transform the current state into a brand new state based on the action it received.
