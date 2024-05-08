import "./App.css";
import Header from "../Header/Header.js";
import About from "../About/About.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer.js";
import LoginModal from "../LoginModal/LoginModal.js";
import PostSigninHandler from "../PostSigninHandler/PostSigninHandler.js";
import Profile from "../Profile/Profile";
import Preloader from "../Preloader/Preloader.js";
import PreviewModal from "../PreviewModal/PreviewModal.js";
import ConfirmModal from "../ConfirmModal/ConfirmModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.js";
import * as spotify from "../../utils/spotify.js";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [activeTab, setActiveTab] = useState("tracks");
  const [time, setTime] = useState("medium");
  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismenuIcon, setIsMenuIcon] = useState(true);
  const [spotifyCode, setSpotifyCode] = useState("");
  const [topItems, setTopItems] = useState({});

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
    setActiveTab("tracks");
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

  const handleSpotifyCode = (code) => {
    setSpotifyCode(code);
  };

  const handleTime = (term) => {
    setTime(term);
  };

  const handleAccessToken = (token) => {
    return spotify
      .getCurrentUser(token)
      .then((res) => {
        setIsLoading(true);
        setCurrentUser({
          test: "test",
          display_name: res.display_name,
          email: res.email,
          followers: res.followers,
          href: res.href,
          id: res.id,
          images: res.images,
        });
        // setAccessToken(token);
        setLoggedIn(true);
        localStorage.setItem("user", res.display_name);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    handleSpotifyCode(code);
  }, [code]);

  useEffect(() => {
    console.log(topItems);
  }, [currentUser, topItems]);

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      spotify
        .getTopItems(activeTab, time)
        .then((data) => {
          setTopItems(data.items);
        })
        .then(() => {
          setIsLoading(false);
        });
    }
  }, [loggedIn, activeTab, time]);

  return (
    <CurrentUserContext.Provider
      value={{
        loggedIn,
        currentUser,
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
          activeTab={activeTab}
          loggedIn={loggedIn}
          code={code}
        />
        <p>{spotifyCode}</p>
        {isLoading && <Preloader />}
        <Switch>
          <Route exact path="/">
            {/* Main landing page for everyone, logged in users will have additional routes */}
            {loggedIn ? (
              <Main
                onCardClick={handlePreviewModal}
                onCardLike={handleCardLike}
                onConfirmModal={handleConfirmModal}
                topItems={topItems}
                activeTab={activeTab}
                handleTime={handleTime}
                time={time}
              />
            ) : (
              <About
                onSigninModal={handleSigninModal}
                onSongsTab={handleSongsTab}
                onArtistsTab={handleArtistsTab}
              />
            )}
          </Route>
          <ProtectedRoute exact path="/profile" loggedIn={loggedIn}>
            <section className="main__wrapper">
              <Profile onConfirmModal={handleConfirmModal} />
            </section>
          </ProtectedRoute>
          <Route exact path="/post-signin">
            <PostSigninHandler handleAccessToken={handleAccessToken} />
          </Route>
        </Switch>
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
