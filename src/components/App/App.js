import "./App.css";
import Header from "../Header/Header.js";
import About from "../About/About.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import LoginModal from "../LoginModal/LoginModal.js";
import Preloader from "../Preloader/Preloader.js";
import PreviewModal from "../PreviewModal/PreviewModal.js";
import ConfirmModal from "../ConfirmModal/ConfirmModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.js";
import { getAccessToken } from "../../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismenuIcon, setIsMenuIcon] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleIcon();
  };

  const toggleIcon = () => {
    setIsMenuIcon(!ismenuIcon);
  };

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleSigninModal = () => {
    setActiveModal("signin");
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handlePreviewModal = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleConfirmModal = () => {
    setActiveModal("confirm");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSongsTab = () => {
    setActiveTab("songs");
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handleArtistsTab = () => {
    setActiveTab("artists");
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handleProfileTab = () => {
    setActiveTab("profile");
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handleCardLike = (id, isLiked) => {
    console.log(id);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleAccessToken = () => {
    getAccessToken().then((data) => {
      console.log(data);
    });
  };

  return (
    <CurrentUserContext.Provider
      value={{
        loggedIn,
      }}
    >
      <div className="App">
        <Header
          onSongsTab={handleSongsTab}
          onArtistsTab={handleArtistsTab}
          onProfileTab={handleProfileTab}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          ismenuIcon={ismenuIcon}
          onSignupModal={handleSignupModal}
          onSigninModal={handleSigninModal}
          loggedIn={loggedIn}
        />
        {/* <Preloader /> */}
        <Switch>
          <Route exact path="/">
            {/* Main landing page for everyone, logged in users will have additional routes */}
            <About
              onSigninModal={handleSigninModal}
              onSongsTab={handleSongsTab}
              onArtistsTab={handleArtistsTab}
            />
          </Route>
          <ProtectedRoute loggedIn={loggedIn}>
            <Main
              onCardClick={handlePreviewModal}
              onCardLike={handleCardLike}
              onConfirmModal={handleConfirmModal}
              activeTab={activeTab}
            />
          </ProtectedRoute>
        </Switch>
        {/* <button onClick={handleAccessToken}>Click</button> */}

        <Footer />

        {activeModal === "preview" && (
          <PreviewModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
          />
        )}

        {activeModal === "signup" && (
          <RegisterModal onClose={handleCloseModal} />
        )}
        {activeModal === "signin" && (
          <LoginModal handleLogin={handleLogin} onClose={handleCloseModal} />
        )}
        {activeModal === "confirm" && (
          <ConfirmModal
            handleLogout={handleLogout}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
