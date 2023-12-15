import store from "@store/index";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<ToastContainer autoClose={3000} position="bottom-left" limit={3} />
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	);
};

export default App;
