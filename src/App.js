import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import DataProvider from "./context/DataProvider";

import Confessions from "./components/MakeConfession/Confessions";
import AboutUs from "./components/UI/AboutUs";
function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <Confessions />
      </DataProvider>
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
