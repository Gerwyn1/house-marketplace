import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Signup,
  Signin,
  Profile,
  Offers,
  Explore,
  ForgotPassword,
} from "./pages";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path='/edit-listing/:listingId' element={<EditListing />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path='/contact/:landlordId' element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
