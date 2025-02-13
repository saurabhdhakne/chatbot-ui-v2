import { useState } from "react";
import "./App.css";
import { LoginPageLayout } from "./layouts/LoginPageLayout";
import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { DashboardPageLayout } from "./layouts/DashboardPageLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPageLayout><LoginPage /></LoginPageLayout>} />
        <Route path="/" element={<ProtectedRoute><DashboardPageLayout><Dashboard /></DashboardPageLayout></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
