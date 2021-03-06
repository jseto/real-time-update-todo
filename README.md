# A React real time update in different browser instances using websockets

[![Build Status](https://travis-ci.org/jseto/real-time-update-todo.svg?branch=master)](https://travis-ci.org/jseto/real-time-update-todo) [![Maintainability](https://api.codeclimate.com/v1/badges/ebfa35a032e002fa66b4/maintainability)](https://codeclimate.com/github/jseto/real-time-update-todo/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ebfa35a032e002fa66b4/test_coverage)](https://codeclimate.com/github/jseto/real-time-update-todo/test_coverage)
[![dependencies Status](https://david-dm.org/jseto/real-time-update-todo/status.svg)](https://david-dm.org/jseto/real-time-update-todo) [![devDependencies Status](https://david-dm.org/jseto/real-time-update-todo/dev-status.svg)](https://david-dm.org/jseto/real-time-update-todo?type=dev)

## Running a local copy

Before running a local copy you should install all dependencies by running the following command in a terminal console with Node installed:

`npm install`

To run a local server and check the application run the following command from a terminal session

`npm run dev`

Once the server is up and running, open your browser and point to [http://localhost:8080](http://localhost:8080)

## Unit Tests

The project has been developed using a TDD (Test Driven Developed) approach. The test use Jest and Enzyme library.
You can run the test issuing the following command in a terminal console:

`npm run test`

## Code description

You can find the full source code at [Github](https://github.com/jseto/real-time-update-todo)

### User interface

The main UI components are located in the ui-components folder. It is a standard
master-detail pattern with TaskMaster and TaskDetail components. The TaskMaster
component is a container for the TaskMaster and Redux actions interfaced with
react-redux library.

### Data

Data is managed though a Redux store. There are defined two actions for adding a
task and deleting a task. A third action is defined to retrieve data from the
server.

### Client side communications

The communication with the server is done using sockets and is managed by the
redux-saga middleware using generator functions to deal with asynchronous flows
inherent to socket programming.

### Server

The server has been developed using Express library sockets and Redux for data
management. The data is serialized and stored on a disk file using the custom
developed DataStreamer object and the custom StreamerMiddleware Redux middleware.

The Redux actions, reducers and store code is shared with the frontend code to
stay DRY (Don't Repeat Yourself) as major code is shared between the client and
the server. This also helps to be consistent in both sides.

## Code Quality monitoring

You can explore the project code quality and test coverage in [CodeClimate](https://codeclimate.com/github/jseto/real-time-update-todo)

## Continuous Integration

This project uses [Travis](https://travis.com) for continuous integration (CI) and deploys a Docker container on every master branch commit at [AWS](https://aws.amazon.com). You can see a live website for this application [here](http://real-time-update-todo.eu-west-2.elasticbeanstalk.com)
