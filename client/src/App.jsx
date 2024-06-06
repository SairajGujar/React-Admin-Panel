import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import {Toaster} from 'react-hot-toast'
import Enquiry from "./pages/Enquiry";
import Apartment from "./pages/Apartment";
import {Cloudinary} from "@cloudinary/url-gen";
function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dw2tw7bor'
    }
  });

  return (
    <>
    <div><Toaster/></div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Auth/>}/>
            <Route path="enquiry">
              <Route index element={<Enquiry/>}/>
              <Route path="apartment">
                <Route index element={<Apartment/>}/>
                <Route path=":section" element={<Apartment/>}/>
              </Route>
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


