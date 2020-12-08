// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import "./styles/style.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import "bootstrap/dist/css/bootstrap.min.css";

// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
// ReactDOM.render(<App />, document.getElementById("root"));

// serviceWorker.unregister();



// import React from 'react';
// import ReactDOM from 'react-dom';
// import '@shopify/polaris/dist/styles.css';
// import "./index.css";
// import "./styles/style.css";
// import {AppProvider} from '@shopify/polaris';
// import enTranslations from '@shopify/polaris/locales/en.json';
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

// import App from './App';

// function WrappedApp() {
//   return (
//     <AppProvider i18n={enTranslations}>
//       <App />
//     </AppProvider>
//   );
// }

// ReactDOM.render(<WrappedApp />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";


import App from "./App";
import "@shopify/polaris/dist/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));
