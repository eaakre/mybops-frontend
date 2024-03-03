import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import PreviewModal from "../PreviewModal/PreviewModal.js";
import { useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.js";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState("");

  const handlePreviewModal = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main onCardClick={handlePreviewModal} />
        </Route>
      </Switch>

      <Footer />

      {activeModal === "preview" && (
        <PreviewModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
