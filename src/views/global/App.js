import "./App.css";
import Header from "../header/HeaderForm.js";
import Draggable from "../draggable/draggable.js";
import ListCategory from "../listCategory/listCategory.js";
import MidBanner from "../midBanner/midBanner.js";
import Sft from "../specialtiesForTreatment/specialtiesForTreatment.js";
import ContentField from "../content/contentField.js";
import RegisterService from "../registerService/registerService.js";
import StrongPoint from "../strongPoint/strongPoint.js";
import EnvironmentAround from "../environment/environmentAround.js";
import Footer from "../footer/footer.js";
// import Login from "../login/Login.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Draggable />
      <ListCategory />
      <MidBanner />
      <Sft />
      <ContentField />
      <RegisterService />
      <StrongPoint />
      <EnvironmentAround />
      <Footer />
    </div>
  );
}

export default App;
