import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./routing/Routing";
import Footer from './components/footer';
import Header from "./components/header";

const App = () => (
	<Router basename={ '/pl/' }>
        <Header />
        <main>
            <Routing />
        </main>
        <Footer />
	</Router>
)

export default App;
