# Storefront API Tester
This node js application uses mocha & chai to test the rest API service


## Prerequisites
* Node.js (10.*) LTS

## Setup
In command line run the following
```
npm install
```
## Test reporter
To change test reporters go to `test/mocha.opts`
More reporter options at https://mochajs.org/#reporters
```
--reporter mocha-allure-reporter
or
--reporter spec
```

## Run tests
```
npm test
```

## Generate html report
```
npm run report
```