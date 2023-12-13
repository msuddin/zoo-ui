# Zoo UI

## Description

This project is divided into 4 parts:
- [Zoo Data API](https://github.com/msuddin/zoo-data-api) (Java Rest API) -> Talks to Zoo Elastic Search
- [Zoo Elastic Search](https://github.com/msuddin/zoo-elastic-search) (dockerized Elasticsearch instance)
- [Zoo Search API](https://github.com/msuddin/zoo-search-api) (Java Rest API) -> Pulls from Zoo Elastic Search
- [Zoo UI](https://github.com/msuddin/zoo-ui) (React APP) -> Pulls data from Zoo Search API

Zoo UI is a React App that talks to Zoo Search API.
It then displays the data on the React UI.

## Instructions

To run the React App (from command line):

```
npm start
```

To run tests (from the command line):

```
npm test
```

## Learning Outcomes

Here are the learning outcomes of this project. 

- [x] Build a simple React App that talks to Zoo Search API
- [ ] To be able to search for data using a text input field and buttons (submit, clear)
- [ ] To write tests using Playbook
- [ ] More to follow