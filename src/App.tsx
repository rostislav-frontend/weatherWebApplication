import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CurrencyWeather } from "./pages/CurrencyWeather";


const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        {/* основной контент */}
        <Routes>
          <Route path="/" element={<CurrencyWeather /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;