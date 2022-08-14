import { Routes, Route } from "react-router-dom";
import { CurrencyWeather } from "./components/CurrencyWeather";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


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