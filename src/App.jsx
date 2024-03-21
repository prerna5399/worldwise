import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/FakeAuthContext";
import { CitiesProvider } from "./contexts/CitiesContext";

import ProtectedRoute from "./Pages/ProtectedRoute";
import CountryList from "./components/CountryList";
import PageNotFound from "./Pages/PageNotFound";
import CityList from "./components/CityList";
import AppLayout from "./Pages/AppLayout";
import Homepage from "./Pages/Homepage";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import City from "./components/City";
import Form from "./components/Form";
import Login from "./Pages/Login";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />}></Route>
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
