# Github Weekday Commit Averages

A web application that, given the name of a Github repository, displays the weekday with the highest average number of commits in the past year using the Github API.

## Installation

```bash
npm install
```

## Run

Run the following commands to build the webpack bundle and start the server:


```python
npm run react-dev
npm start
```
Navigate to [localhost:3000](localhost:3000) to view the application.

## Design
This application is built in React and uses an Express server to serve up the static files which include a bundle built with Webpack and Babel. The two main components are the `InputForm` and `Results` components. 

`InputForm` is a form in which the user enters the Github username of the user who owns the repository and the name of the repository. When submitted, the component uses Axios to perform a GET request to the Github API. It then parses the commit dates out of the results, filters out any commits that happened more than one year ago, and passes the data onto its child `Results` component. If the GET request responds with an error, or the repository has had no commits within the last year, the component will pass on an error message to the `Results` component.

`Results` is a component that receives an array of data (commit dates) as props and saves it to its state. It then separates the dates by weekday, calculates the average number of commits for each weekday, and displays the weekday with the highest average as well as the average itself. The component also receives the avatar url of the repository's user and displays that on the screen.