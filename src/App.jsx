import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { AppRouter } from "./app/AppRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </>
  );
}

export default App;
