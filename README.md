# A React real time update in different browser instances using websockets

[![Build Status](https://travis-ci.org/jseto/real-time-update-todo.svg?branch=master)](https://travis-ci.org/jseto/real-time-update-todo) [![Maintainability](https://api.codeclimate.com/v1/badges/aaba262edf31d561db59/maintainability)](https://codeclimate.com/github/jseto/real-time-update-todo/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/aaba262edf31d561db59/test_coverage)](https://codeclimate.com/github/jseto/real-time-update-todo/test_coverage)
[![dependencies Status](https://david-dm.org/jseto/real-time-update-todo/status.svg)](https://david-dm.org/jseto/real-time-update-todo) [![devDependencies Status](https://david-dm.org/jseto/real-time-update-todo/dev-status.svg)](https://david-dm.org/jseto/real-time-update-todo?type=dev)

## Code description

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

This project uses [Travis](https://travis.com) for continuous integration (CI) and deploys it at [AWS](https://aws.amazon.com). You can see a live website for this application [here](http://real-time-update-todo.eu-west-2.elasticbeanstalk.com)
