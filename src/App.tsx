import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TransactionsPage from "./pages/TransactionsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Routes>
    </>
  );
}

export default App;
