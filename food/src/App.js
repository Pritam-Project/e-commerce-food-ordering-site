import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Contactus from './components/Contactus'
import DesignerLogin from './components/d_Login_Hooks'
import Registration from './components/d_Registration_Hooks'
import forgetpass from './components/d_Forgot_password'
import deglogout from './components/d_Logout'
import userlogin from './components/UserLogin_Hooks'
import userregistration from './components/User_Registration_Hooks'
import userforgetpass from './components/U_Forgot_password'
import userresetpass from './components/U_Reset_Password'
import userotpcheck from './components/U_OTPCheck_Hooks'
import display_catagory_prod from './components/displayProductsUserAfterLogin';
import adminlogin from './components/adminLogin';
import  admin_display_all_prod from "./components/adminAfterLoginHomepage";
import admin_add_poster from './components/adminAddNewPoster';
import admin_update_poster from './components/adminUpdatePoster';
import adminorderlist from './components/orderlist';
import display_retro_poster from './components/Poster_Display';
import retro_poster_request from './components/RequestPoster_Hooks';
import Status_poster from './components/Status_Poster';
//import Registration from './components/Registration_Hooks';
//import DesignerRegistration from './components/DesignerRegistration'
//import UserLogin from './components/UserLogin_Hooks';
//import UserAfterLogin from './components/UserAfterLogin'
//import UpdateProfile from './components/UpdateProfile_Hooks'
import aboutus from './components/AboutUs';
//import ContactUs from './components/ContactUs';
import NoMatch from './components/NoMatch';
import PostComment from './components/comment_hooks';
import DisplayAllBlog from './components/displayall_hooks';
import designernewpass from './components/d_NewPassword';
import designeraddprod from './components/addposter';
import Deg_displayAllPoster from './components/display_poster';
// import cart from './components/cartProducts';
import cart from './components/CartProductOperation';
import wishlist from './components/wishlist'
//import AdminLogin from './components/AdminLogin_Hooks';
//import AdminAfterLogin from './components/AdminAfterLogin';
//import Delete from './components/Delete_Hooks';
//import DisplayAll from './components/DisplayAll_Hooks'
//import Search from './components/Search_Hooks'
//import ManageEmp from './components/ManageEmp_Hooks'
//import Logout from './components/Logout'
import PayNow from './components/paynow';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contactus" component={Contactus} />
          <Route exact path="/post" component={PostComment} />
          <Route exact path="/displayall" component={DisplayAllBlog} />
          <Route exact path="/designerlogin" component={DesignerLogin} />
          <Route exact path="/designerreg" component={Registration} />
          <Route exact path="/forgot_Pass" component={forgetpass} />
         
          <Route exact path="/designerlogout" component={deglogout} />
          <Route path ="/paynow" exact component = {PayNow}/> 
          <Route exact path="/newpassword" component={designernewpass} />
          <Route path="/reg" component={userregistration} />
          <Route path="/login" component={userlogin} />
          <Route path="/otpcheck" component={userotpcheck} />
         
          <Route path="/U_forgot_Pass" component={userforgetpass}/>
          <Route path="/reset_Pass" component={userresetpass}/>
          <Route path="/aboutus" component={aboutus}/>
          <Route path="/degaddprod" component={designeraddprod}/>
          <Route path="/degdisplayall" component={Deg_displayAllPoster}/>
          <Route path="/display_catagory_prod" component={display_catagory_prod}/>
          <Route path="/cart" component={cart}/>
          <Route path="/wishlist" component={wishlist}/>
          <Route path="/adminlogin" component={adminlogin}/>
          <Route path="/admin_display_all_prod" component={admin_display_all_prod}/>
          <Route path="/adminAddPoster" component={admin_add_poster}/>
          <Route path="/adminUpdatePoster" component={admin_update_poster}/>
          <Route path="/admin_orderList" component={adminorderlist}/>
          <Route path="/display_retro" component={display_retro_poster}/>
          <Route path="/request_retro" component={retro_poster_request}/>
          <Route path="/admin_retro_status" component={Status_poster}/>
          {/*<Route path="/reg" component={Registration} />
          <Route path="/designerreg" component={DesignerRegistration} />
          <Route path="/designerlogin" component={DesignerLogin} />
          <Route path="/designerafterlogin" component={DesignerAfterLogin} />
          <Route path="/login" component={UserLogin} />
          <Route path="/userafterlogin" component={UserAfterLogin} />
          <Route path="/updateprofile" component={UpdateProfile} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/adminafterlogin" component={AdminAfterLogin} />
          <Route path="/displayall" component={DisplayAll} />
          <Route path="/delete" component={Delete} />
          <Route path="/search" component={Search} />
          <Route path="/manageemp" component={ManageEmp} />
          <Route path="/logout" component={Logout} />*/}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
