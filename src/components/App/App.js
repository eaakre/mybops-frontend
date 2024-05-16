import "./App.css";
import Header from "../Header/Header.js";
import About from "../About/About.js";
import Main from "../Main/Main.js";
import Error from "../Error/Error.js";
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
import { Redirect } from "react-router-dom/cjs/react-router-dom.min.js";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [activeTab, setActiveTab] = useState("tracks");
  const [time, setTime] = useState("medium");
  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ismenuIcon, setIsMenuIcon] = useState(true);
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

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

  // const handleCardLike = (id, isLiked) => {
  //   console.log(id);
  // };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
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
        setLoggedIn(true);
        localStorage.setItem("user", res.display_name);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const prevAccessToken = localStorage.getItem("access_token");
    if (prevAccessToken) {
      setIsLoading(true);
      handleAccessToken(prevAccessToken);
      setLoggedIn(true);
      spotify.getTopTracks(time).then((data) => {
        setTopTracks(data.items);
      });
      spotify
        .getTopArtists(time)
        .then((data) => {
          setTopArtists(data.items);
        })
        .then(() => {
          setIsLoading(false);
        });
    }
  }, [time]);

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
        {isLoading && <Preloader />}
        <Switch>
          <Route exact path="/about">
            <About
              onSigninModal={handleSigninModal}
              onSongsTab={handleSongsTab}
              onArtistsTab={handleArtistsTab}
            />
          </Route>
          <Route exact path="/">
            {/* Main landing page for everyone, logged in users will have additional routes */}
            {loggedIn ? (
              <Main
                onCardClick={handlePreviewModal}
                // onCardLike={handleCardLike}
                topTracks={topTracks}
                topArtists={topArtists}
                activeTab={activeTab}
                handleTime={handleTime}
                time={time}
              />
            ) : (
              <Redirect to="/about" />
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
          <Route exact path="/error">
            <Error />
          </Route>
          <Route render={() => <Redirect to={{ pathname: "/error" }} />} />
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
