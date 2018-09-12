# ReactReduxAppAboutVotingnCommenting
An react and redux app about voting and commenting on posts and comments

# commits
# on 9/11
- move sorting inside the render function of the PostList.
- added react router
- added category filter functionality.
- Fix navigation issue and add propTypes Validation to components.

# on 9/5
- add momentjs, fix sort and sort field functionality.
- fix the typo and organize the format.
- added increasepostscore and decreasepostscore.
- add score component and manage the state in redux store.
- change vote score using api.


# on 9/4
- added sort order function, fix sort order redux bindings.
- display hour date for each post.

# on 9/2
- backend server.
- used command to create a react app called frontend and added the server side code to the backend folder.
- create basic actions, connect basics, use of provider, create store, fetch
- use select for CategoryList, add PostList component, fetch post method, add key to the category items, getPost and receivePost action creators.
- added to render simple list of posts.
- have separate reducers.
- Simplify mapStateToProps, add the rest of the post field, add sort by the field.
- sort results, set default sort method as voteScore descending, add sortReducer and action DEFINE_SORT_ORDER.

# note updated on 9/11
- The reducer must be the pure functions.
return one and same result if the same args are passed in.
Depended solely on the args that passed into it.
Do not produce side effect.

- Inside of the reducer, we create a switch statement (or if/else statements) to match the type property of the action. Then we return a new, updated state.
- A reducer receives the current state and an action that was dispatched, then decides how to transform the current state into a brand new state based on the action it received.
- Plain objects aren't very portable, so in order to make actions more portable and easy to test, they’re usually wrapped in functions called "action creators". These actions aren’t modifying the state themselves; instead, they’re just specifying that some event occurred which should update the state.
- Actions in Redux are JavaScript objects that you set up to describe any event in your application that should update your application’s state.
- Actions: These actions are payloads of information that you set up to describe any event in the application that should update that application’s state.
Actions are JavaScript objects that describe any event that should update the application’s state. These objects must have a property in order to distinguish the specific type of action that occurred.

# note updated on 9/2
- redux-thunk
applyMiddleware\
A user clicks a button in the component to render an index page. This component calls a thunk action creator that returns a function\
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
