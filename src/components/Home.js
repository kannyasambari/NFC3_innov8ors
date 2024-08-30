import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import homebg from "../images/homebg.jpg";
import PetCard from "./PetCard"; // Import PetCard component
import ListAPet from "./ListAPet"; // Import ListAPet component

const Home = () => {
  const [view, setView] = useState("home"); // State to control which view to display

  const handleButtonClick = (view) => {
    setView(view);
  };

  const handleBackToHome = () => {
    setView("home");
  };

  return (
    <div id="home" style={styles.homeContainer}>
      {view === "home" && (
        <div style={styles.homeBackground}>
          <Container className="text-center" style={styles.textContainer}>
            <h1 className="tagline">
              <b>Love is a Four-Legged Word</b>
              <br />
              Find Your Perfect Match Here!
            </h1>
            <p className="subtitle">
            Swipe through a diverse selection of pets from countless shelters and rescues to find your new love and adopt with ease
            </p>
          </Container>
          <div style={styles.buttonContainer}>
            <Button
              className="animal-button"
              style={styles.squareButton}
              onClick={() => handleButtonClick("dogs")}
            >
              Dogs
            </Button>
            <Button
              className="animal-button"
              style={styles.squareButton}
              onClick={() => handleButtonClick("cats")}
            >
              Cats
            </Button>
            <Button
              className="animal-button"
              style={styles.squareButton}
              onClick={() => handleButtonClick("rabbits")}
            >
              Rabbits
            </Button>
            <Button
              className="animal-button"
              style={styles.squareButton}
              onClick={() => handleButtonClick("list-a-pet")}
            >
              List a Pet
            </Button>
          </div>
        </div>
      )}
      {view === "list-a-pet" && <ListAPet />}
      {view === "dogs" ||
      view === "cats" ||
      view === "rabbits" ||
      view === "other-animals" ? (
        <PetCard animalType={view} onBack={handleBackToHome} />
      ) : null}
    </div>
  );
};

const styles = {
  homeContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeBackground: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${homebg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
  },
  squareButton: {
    width: "150px",
    height: "150px",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "rgba(139, 87, 66, 0.7)", // Light brown with translucency
    borderColor: "rgba(139, 87, 66, 0.7)", // Matching border color
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    border: "2px solid", // Added border styling
    opacity: 0.9, // Make the button translucent
    transition: "all 0.3s ease", // Smooth transition for hover effect
  },
  squareButtonHover: {
    backgroundColor: "rgba(139, 87, 66, 1)", // Solid brown color on hover
    borderColor: "rgba(139, 87, 66, 1)", // Matching border color
    boxShadow: "0 0 10px rgba(139, 87, 66, 0.8)", // Glow effect
    opacity: 1, // Full opacity on hover
  }
};
export default Home;
