import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import MapResponsive from "./components/Map/MapResponsive";
import Schedules from "./components/Schedules/Schedules";
import GlobalStyle from './globalStyle'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <Map />
      <Contacts />
      <Schedules />
      <MapResponsive />
      <Footer />
      <GlobalStyle/>
    </div>
  );
}

export default App;
