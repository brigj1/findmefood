# Find Me Food!

This app helps users find interesting food trucks and push carts in San Francisco. It shows search fields that lets the user filter out "uninteresting" records as fetched from San Francisco, CA's [Mobile Food Facility Permit](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data) system.

You can fetch the code from Brigham Johnson's [GitHub repo](https://github.com/brigj1/findmefood).

## Futures:

The "Find Me Food!" interface is functional but not elegant. (It needs styling.) Using a CSS Framework such as Bootstrap or Material UI would be an improvement. Using Functional CSS via Tachyons or Tailwind could help with maintainability if the project grows.

The Table tool from 'react-bootstrap/Table' was quick and easy to use. Table modules that are more elegant are available.

Tests would be nice. Much of the logic could be pushed into functions in hooks that would also facilitate testing.

Lookups by enumerated types would be great for Status and Facility Type. Internationalization tools like "react-i18next" are handy for stashing values for constants that can then be used in multiple places in the code. And of course using "react-i18next" would be a step towards showing the application in different languages.

"react-i18next" would also help normalize Status values as mixed-case terms rather than as the uppercase values (APPROVED, REQUESTED, EXPIRED, SUSPEND) that come from the API,

## Acknowledgements:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
