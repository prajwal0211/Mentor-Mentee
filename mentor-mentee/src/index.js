import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout.js";
import Login from "./components/Login/Login.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
// } from "react-router-dom";
import "./custom.scss";
import { ActiveSectionProvider } from "./ActiveSectionContext.js";
import MentorDashoboard from "./pages/DashBoard/MentorDashoboard.js";
import MenteeDashboard from "./pages/DashBoard/MenteeDashboard.js";
import SearchStudent from "./pages/PersonalDetails/MenteeDetails.js";
import Career from "./pages/Career/Career.js";
import Analysis from "./pages/Analysis/Analysis.js";
import MyCenteredForm from "./pages/PersonalDetails/CenteredForm";
import AcademicsPage from "./pages/PersonalDetails/AcademicsPage";
import Sheet from "./pages/PersonalDetails/Sheet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActiveSectionProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mentor">
            <Route path="" element={<Layout />}>
              <Route index path="dashboard" element={<MentorDashoboard />} />
              <Route path="search-details/*" element={<SearchStudent />}>
                <Route path="studentdetails/*" element={<MyCenteredForm />}>
                  <Route path="academics/*" element={<AcademicsPage />}>
                    <Route path="marksheet" element={<Sheet />} />
                  </Route>
                </Route>
              </Route>
              <Route path="analysis" element={<Analysis />} />
            </Route>
          </Route>
          <Route path="/mentee">
            <Route path="" element={<Layout />}>
              <Route index path="dashboard" element={<MenteeDashboard />} />
              <Route path="studentdetails/*" element={<MyCenteredForm />}>
                <Route path="academics/*" element={<AcademicsPage />}>
                  <Route path="marksheet" element={<Sheet />} />
                </Route>
              </Route>
              <Route path="analysis" element={<Analysis />} />
              <Route path="career" element={<Career />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ActiveSectionProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
