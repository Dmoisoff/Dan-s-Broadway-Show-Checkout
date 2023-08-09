
# Dan’s Broadway Show Checkout

A demo front end that allows users to select a Broadway show, enter basic billing information, and checkout. Built for coding challenge over the weekend.

Upon successful checkout, the user is alerted that the checkout has been completed.

To simulate calls to a payment service and a backend, I have added two console logs. One logs the billing information and the other logs platform-related information that would be sent to the backend.

## Tech Stack

**Client:** React, Typescript, TailwindCSS, React Hook Form, React Select
## Authors

- [@dmoisoff](https://www.github.com/Dmoisoff)


## Features

Light validation with error messages
 
- show selection check
- full name check
- credit card character length check
- expiration date character length check
- CVV character length check
- terms of service agreement check


## Screenshots


Default View

![Default View](https://i.imgur.com/L3pNgQpl.png)

Successful Submission

![Successful Submission](https://i.imgur.com/L078BZvl.png)

Validations

![Validations](https://i.imgur.com/HrubaPpl.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Dmoisoff/Dan-s-Broadway-Show-Checkout
```

Go to the project directory

```bash
  cd Dan-s-Broadway-Show-Checkout
```

Install dependencies

```bash
  npm install
```

Start the dev server

```bash
   npm run dev
```


## Running Tests

To run cypress.io tests,

Start the dev server

```bash
   npm run dev
```
Then in a seperate window start the test server

```bash
  npm run cypress-ui
```


