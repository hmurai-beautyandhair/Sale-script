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
import {AppProvider, Avatar, ActionList, Card, TextField, TextContainer, ContextualSaveBar, 
  FormLayout, Modal, Frame, Layout, Loading, Navigation, Page, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, Toast, TopBar, MediaCard, ButtonGroup, CalloutCard, PageActions, DisplayText, Stack} from '@shopify/polaris';
import {CartMajor,HomeMajor, OrdersMajor, MarketingMajor,  MonerisMajor, GamesConsoleMajor, JobsMajor, LockMajor, InventoryMajor} from '@shopify/polaris-icons';
import Draft from "./components/sales/Draft";
import Sale from "./components/sales/Sale";
import Home from './components/home/Home'
 import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

export default function FrameExample() {
  const defaultState = useRef({
    emailFieldValue: 'nnn',
    nameFieldValue: 'Beauty and Hair',
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
      name="LaunchPad"
      detail='Beauty&amp;Hair'
      initials="L"
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
    <Navigation location="/nav">
     
      <Navigation.Section
        separator
        title="Launch Pad"
        items={[
          {
            url: '/home',
            label: 'Home',
            icon: HomeMajor,
           
          },
          {
            url: '/sale',
            label: 'Sales',
            icon: CartMajor,
            onClick: toggleModalActive,
          },
          {
            url: '/inventory',
            label: 'Inventory',
            icon: InventoryMajor,
           
          },
          {
            url: '/marketing',
            label: 'Marketing',
            icon: MarketingMajor,
           
          },
          {
            url: '/new-hire',
            label: 'New Hire',
            icon: JobsMajor,
           
          },
          {
            url: '/accounting',
            label: 'Accounting',
            icon:  MonerisMajor,
           
          },
          {
            url: '/it',
            label: 'IT',
            icon:  GamesConsoleMajor,
           
          },
          {
           
            label: 'Log out',
            url: '/',
            icon: LockMajor,
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
                label="Title"
                value={nameFieldValue}
                onChange={handleNameFieldChange}
              />
              <TextField
                type="url"
                label="Link"
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

  const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;

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
        background: '#fff',
        backgroundLighter: '#F4F6F8',
        backgroundDarker: '#DFE3E8',
        border: '#C4CDD5',
        color: '#212B36',
      },
    },
    logo: {
      width: 250,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/2636/2774/files/b_h_lg.png?v=1607446236',
      contextualSaveBarSource:
        'https://cdn.shopify.com/s/files/1/2636/2774/files/b_h_lg.png?v=1607446236',
      url: '/',
      accessibilityLabel: 'Beauty and Hair',
    },
  };

  return (
    <div>
   
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
 {state.email ? (

        <Frame
          topBar={topBarMarkup}
          navigation={navigationMarkup}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
          skipToContentTarget={skipToContentRef.current}
        >
          {contextualSaveBarMarkup}
          {loadingMarkup}
        
          {toastMarkup}
          {modalMarkup}
          <BrowserRouter>
        
        <Switch>
       
         <div style={{padding: 0, margin: 0}}>
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
            path="/sale"
            render={props => <Sale {...props} user={state} />}
          /> </div> 
            
        
        </Switch>
      </BrowserRouter>
        </Frame>) : (


        <Page
  narrowWidth

>
  <center><Card  sectioned >
    <div style={{paddingTop: '2em'}}></div>
  <img
          className="d-block w-100 carousel"
          src={require("../src/images/logo.png")}
        />
       <div style={{  fontWeight: '100', color: '#212b36'}}><DisplayText size="large">LAUCH PAD</DisplayText></div>
       {/* <Stack distribution="fillEvenly"> */}
       <div style={{paddingTop: '5em'}}></div>
       <center>
  {!state.email && (
         <GoogleAuthLogin setUser={setUser} />
       )}
{!state.email && (
         <GoogleAuth
           style={{ minWidth: "100%", background: "red" }}
           setUser={setUser}
         />
         
       )}
</center>
{/* </Stack> */}
  </Card>
  </center>
</Page>




)}
       
      </AppProvider>
    </div>
   
         </div> 
       
  );
}
