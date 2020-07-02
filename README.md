# Elmdux
Tinkering is the main aim here. This is a test ground for some functional patterns with a sensible flow direction which is close to unidirectional.
First step was to take jsx and get that running without React.
It's a pretty naive conversion, but it seems to work with basic usecases.
While I don't current have a plan for the data to display, I want a flow where I have two main types of data. 
The application state, information about the state of the application: has a mode changed? e.g. readOnly. has the model updated?
These are the changes which are relayed to the views / components directly, rather than in a top down manner from the viewport (we don't have the shadow dom and we don't want a rigid parent child relationship in the view, so we can move components from one place to another without causing wiring up issues).
The other data is a model which represents what we want to edit / transform. This can be loaded into the app converted into our model, edited and saved.
The model is used to determine the edit components, but the model and UI are totally separate.
So, actions are fired from the UI, and passed a payload (e.g. what has changed). The actions know how to ask the upper most level of the model to process an action and pass the payload.
The model changes with the payload passed and returns success or fail. The actions then update things like undo redo and the application state based on success or fail.

That's the plan, now all I need to do is build it and see why it's wrong :)

### Full Disclosure
Very early stages of development and I'm not realistically expecting anyone else to ever use or care about this.
