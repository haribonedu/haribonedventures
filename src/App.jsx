import { RouterProvider } from "react-router-dom";
import router from "./router";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
		<Header />
		<RouterProvider router={router} />
	</div>
  );
}

export default App;
