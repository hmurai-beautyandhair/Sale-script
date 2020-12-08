// import React, { Component, Fragment } from "react";
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import Home from "./components/home/Home";
// import Profile from "./components/profile/Profile";
// import actions from "./services/index";
// import GoogleAuth from "./components/auth/GoogleAuth";
// import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
// import LogOut from "./components/auth/LogOut";
// import Navbar from "./components/navbar/Navbar";
// import Draft from "./components/sales/Draft";
// import Sale from './components/sales/Sale'
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

// class App extends Component {
//   state = {};

//   async componentDidMount() {
//     let user = await actions.isLoggedIn();
//     this.setState({ ...user.data });
//     console.log("coolest ");
//   }

//   setUser = user => this.setState(user);

//   logOut = async () => {
//     let res = await actions.logOut();
//     this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
//   };

//   render() {
//     return (
//       <BrowserRouter>
//         <nav>
//           {this.state.email ? (
//             <Fragment>
//               <Navbar logout={this.logOut} />
//             </Fragment>
//           ) : (
//             <div className="container5">
//               <div class="panel panel-primary">
//                 <div className="firstPage">
//                   <img
//                     style={{ width: "fitContent", height: "90%" }}
//                     className="d-block w-100 carousel"
//                     src={require("../src/images/logo.png")}
//                   />
//                   <h1 id="lauchPad2">LaunchPad</h1>
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <div className="googleButtons">
//                   <p>
//                     {!this.state.email && (
//                       <GoogleAuth
//                         style={{ minWidth: "100%", background: "red" }}
//                         setUser={this.setUser}
//                       />
//                     )}
//                   </p>
//                   <p>
//                     {!this.state.email && (
//                       <GoogleAuthLogin setUser={this.setUser} />
//                     )}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </nav>
//         <Switch>
//           {this.state.email ? (
//             <Route exact path="/" render={props => <Home {...props} />} />
//           ) : (
//             ""
//           )}
//           {/* <Route
//             exact
//             path="/sign-up"
//             render={(props) => <SignUp {...props} setUser={this.setUser} />}
//           />
//           <Route
//             exact
//             path="/log-in"
//             render={(props) => <LogIn {...props} setUser={this.setUser} />}
//           /> */}
//           <Route
//             exact
//             path="/profile"
//             render={props => <Profile {...props} user={this.state} />}
//           />
//           <Route
//             exact
//             path="/draft"
//             render={props => <Draft {...props} user={this.state} />}
//           />
//           <Route
//             exact
//             path="/sales"
//             render={props => <Sale {...props} user={this.state} />}
//           />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }
// export default App;


// import React, {useState,  useEffect} from 'react';
// import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
// import Home from "./components/home/Home";
// import Profile from "./components/profile/Profile";
// import actions from "./services/index";
// import GoogleAuth from "./components/auth/GoogleAuth";
// import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
// import LogOut from "./components/auth/LogOut";
// import Navbar from "./components/navbar/Navbar";
// import Draft from "./components/sales/Draft";
// import Sale from './components/sales/Sale'
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
  
 
// export default function App() { 
//   const [state, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const state = await actions.isLoggedIn();
//       setData({ ...state.data });
//     };
//     fetchData();
//   }, []);

//   const setUser = (user) => setData(user);

//   const logOut = async () => {
//     let res = await actions.logOut();
// setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
//   };


//     return (
      // <BrowserRouter>
      //   <nav>
      //     {state.email ? (
           
      //         <Navbar logout={logOut} />
           
      //     ) : (
            // <div className="container5">
            //   <div class="panel panel-primary">
            //     <div className="firstPage">
            //       <img
            //         style={{ width: "fitContent", height: "90%" }}
            //         className="d-block w-100 carousel"
            //         src={require("../src/images/logo.png")}
            //       />
            //       <h1 id="lauchPad2">LaunchPad</h1>
            //     </div>
            //     <br></br>
            //     <br></br>
            //     <div className="googleButtons">
            //       <p>
            //         {!state.email && (
            //           <GoogleAuth
            //             style={{ minWidth: "100%", background: "red" }}
            //             setUser={setUser}
            //           />
            //         )}
            //       </p>
            //       <p>
            //         {!state.email && (
            //           <GoogleAuthLogin setUser={setUser} />
            //         )}
            //       </p>
            //     </div>
            //   </div>
            // </div>
      //     )}
      //   </nav>
      //   <Switch>
      //     {state.email ? (
      //       <Route exact path="/" render={props => <Home {...props} />} />
      //     ) : (
      //       ""
      //     )}
      //     <Route
      //       exact
      //       path="/profile"
      //       render={props => <Profile {...props} user={state} />}
      //     />
      //     <Route
      //       exact
      //       path="/draft"
      //       render={props => <Draft {...props} user={state} />}
      //     />
      //     <Route
      //       exact
      //       path="/sales"
      //       render={props => <Sale {...props} user={state} />}
      //     />
      //   </Switch>
      // </BrowserRouter>
//     );

// }
import Profile from "./components/profile/Profile";
import actions from "./services/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import LogOut from "./components/auth/LogOut";




import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";


import React, {useCallback, useRef, useState, useEffect} from 'react';
import {AppProvider, Avatar, ActionList, Card, TextField, TextContainer, ContextualSaveBar, FormLayout, Modal, Frame, Layout, Loading, Navigation, Page, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, Toast, TopBar} from '@shopify/polaris';
import {ArrowLeftMinor, ConversationMinor, HomeMajor, OrdersMajor} from '@shopify/polaris-icons';
import Draft from "./components/sales/Draft";
import Sale from "./components/sales/Sale";
 import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

export default function FrameExample() {
  const defaultState = useRef({
    emailFieldValue: 'dharma@jadedpixel.com',
    nameFieldValue: 'Jaded Pixel',
  });
  const skipToContentRef = useRef(null);

  const [toastActive, setToastActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const [state, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const state = await actions.isLoggedIn();
      setData({ ...state.data });
    };
    fetchData();
  }, []);

  const setUser = (user) => setData(user);

  const logOut = async () => {
    let res = await actions.logOut();
setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };

  const [nameFieldValue, setNameFieldValue] = useState(
    defaultState.current.nameFieldValue,
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultState.current.emailFieldValue,
  );
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue,
  );
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');

  const handleSubjectChange = useCallback(
    (value) => setSupportSubject(value),
    [],
  );
  const handleMessageChange = useCallback(
    (value) => setSupportMessage(value),
    [],
  );
  const handleDiscard = useCallback(() => {
    setEmailFieldValue(defaultState.current.emailFieldValue);
    setNameFieldValue(defaultState.current.nameFieldValue);
    setIsDirty(false);
  }, []);
  const handleSave = useCallback(() => {
    defaultState.current.nameFieldValue = nameFieldValue;
    defaultState.current.emailFieldValue = emailFieldValue;

    setIsDirty(false);
    setToastActive(true);
    setStoreName(defaultState.current.nameFieldValue);
  }, [emailFieldValue, nameFieldValue]);
  const handleNameFieldChange = useCallback((value) => {
    setNameFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleEmailFieldChange = useCallback((value) => {
    setEmailFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue('');
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    [],
  );
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    [],
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  const toggleIsLoading = useCallback(
    () => setIsLoading((isLoading) => !isLoading),
    [],
  );
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const userMenuActions = [
    {
      items: [{content: 'Community forums'}],
    },
  ];

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Dharma"
      detail={storeName}
      initials="D"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const searchResultsMarkup = (
    <Card>
      <ActionList
        items={[
          {content: 'Shopify help center'},
          {content: 'Community forums'},
        ]}
      />
    </Card>
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: 'Back to Shopify',
            icon: ArrowLeftMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Jaded Pixel App"
        items={[
          {
            url: '/draft',
            label: 'Dashboard',
            icon: HomeMajor,
            onClick: toggleIsLoading,
          },
          {
            url: '/sale',
            label: 'Jaded Pixel Orders',
            icon: OrdersMajor,
           
          },
          {
           
            label: 'Log out',
            icon: OrdersMajor,
            onClick: logOut,
           
          },
        ]}
        // action={{
        //   icon: ConversationMinor,
        //   accessibilityLabel: 'Contact support',
        //   onClick: toggleModalActive,
        // }}
      />
    </Navigation>
  );

  const loadingMarkup = isLoading ? <Loading /> : null;
  const skipToContentTarget = (
    <a id="SkipToContentTarget" ref={skipToContentRef} tabIndex={-1} />
  );

  const actualPageMarkup = (
    <Page title="Account">
      <Layout>
        {skipToContentTarget}
        <Layout.AnnotatedSection
          title="Account details"
          description="Jaded Pixel will use this as your account information."
        >
          <Card sectioned>
            <FormLayout>
              <TextField
                label="Full name"
                value={nameFieldValue}
                onChange={handleNameFieldChange}
              />
              <TextField
                type="email"
                label="Email"
                value={emailFieldValue}
                onChange={handleEmailFieldChange}
              />
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );

  const loadingPageMarkup = (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={9} />
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );

  const pageMarkup = isLoading ? <Draft/> : actualPageMarkup;

  const modalMarkup = (
    <Modal
      open={modalActive}
      onClose={toggleModalActive}
      title="Contact support"
      primaryAction={{
        content: 'Send',
        onAction: toggleModalActive,
      }}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Subject"
            value={supportSubject}
            onChange={handleSubjectChange}
          />
          <TextField
            label="Message"
            value={supportMessage}
            onChange={handleMessageChange}
            multiline
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );

  const theme = {
    colors: {
      topBar: {
        background: '#225062',
      },
    },
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    },
  };

  return (
    <div>
    {state.email ? (
    <div style={{height: '500px'}}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}',
            },
            ContextualSaveBar: {
              save: 'Save',
              discard: 'Discard',
            },
            TextField: {
              characterCount: '{count} characters',
            },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',

              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search',
              },
            },
            Modal: {
              iFrameTitle: 'body markup',
            },
            Frame: {
              skipToContent: 'Skip to content',
              Navigation: {
                closeMobileNavigationLabel: 'Close navigation',
              },
            },
          },
        }}
      >
        <Frame
          topBar={topBarMarkup}
          navigation={navigationMarkup}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
          skipToContentTarget={skipToContentRef.current}
        >
          {contextualSaveBarMarkup}
          {loadingMarkup}
          {pageMarkup}
          {toastMarkup}
          {modalMarkup}
          <BrowserRouter>
        
        <Switch>
       
         <div>
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} user={state} />}
          />
          <Route
            exact
            path="/draft"
            render={props => <Draft {...props} user={state} />}
          />
          <Route
            exact
            path="/sales"
            render={props => <Sale {...props} user={state} />}
          /> </div> 
            
        
        </Switch>
      </BrowserRouter>
        </Frame>
       
      </AppProvider>
    </div>) : (<div className="container5">
    <div class="panel panel-primary">
      <div className="firstPage">
        <img
          style={{ width: "fitContent", height: "90%" }}
          className="d-block w-100 carousel"
          src={require("../src/images/logo.png")}
        />
        <h1 id="lauchPad2">LaunchPad</h1>
      </div>
      <br></br>
      <br></br>
      <div className="googleButtons">
        <p>
          {!state.email && (
            <GoogleAuth
              style={{ minWidth: "100%", background: "red" }}
              setUser={setUser}
            />
          )}
        </p>
        <p>
          {!state.email && (
            <GoogleAuthLogin setUser={setUser} />
          )}
        </p>
      </div>
    </div>

  </div>)}
   
         </div> 
       
  );
}
