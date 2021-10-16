import "./App.css";
import { ChakraUIProvider } from "./contexts/chakraui";
import { Router } from "./contexts/router";

function App() {
  return (
    <ChakraUIProvider>
      <Router></Router>
    </ChakraUIProvider>
  );
}

export default App;
