1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map,filter,reduce

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - actions are functions that are invoked to pass along payloads of data that get sent from your app to the store and are the only source of information for the store.

reducers - reducers specify how the state will change in response to actions. When they are called, they capture information and inject it into the state.

store - store is the place where all of your state lives in a redux application. Store is known as a single source of truth because it holds our entire state tree and acts as a 'master state' for the application, allowing us to send state down as needed.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global and can be accessed throughout various components that are set up within a Redux application. This is useful when components are utilizing the same information, like when a username is displayed in multiple components. Component state is localized to the component, and is more useful for storing component-specific information, like when an individual form component needs to store its respective input field values.

1.  What is middleware?
Middleware is used to capture an action that is triggered from the view state and implement some sort of change using that action before it passes the action to the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`redux-thunk` is middleware that allows us to set up asynchronous actions within Redux, which is synchronous by nature. It allows us to implement promises within our action creators so that actions can be triggered asynchronously, like when data is being retrieved from a server. 

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()()
