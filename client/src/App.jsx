import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import {Toaster} from 'react-hot-toast'
import Enquiry from "./pages/Enquiry";
import Apartment from "./pages/Apartment";
function App() {
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



{/* <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />}/>
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter> */}