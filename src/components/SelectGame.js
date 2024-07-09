import React, { useState, useEffect } from "react";
import "./SelectGame.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const NewRegister = () => {
  const [isTicTacToeActive, setIsTicTacToeActive] = useState(false);

  useEffect(() => {
    if (isTicTacToeActive) {
      document.body.style.backgroundColor = "#222";
      console.log("added");
    } else {
      console.log("not");
      document.body.style.backgroundColor = ""; // Reset to default or another color if needed
    }

    // Cleanup function to reset background color when component unmounts
    return () => {
      document.body.style.backgroundColor = ""; // Reset to default or another color if needed
    };
  }, [isTicTacToeActive]);

  const handleTicTacToeClick = () => {
    setIsTicTacToeActive(true);
  };

  return (
    <>
      <div>
        <Box display="flex" justifyContent="flex-end">
          <Box
            width="100%"
            height="50px"
            display="flex"
            alignItems="center"
            justifyContent="end"
            padding="10px"
            position="absolute"
            zIndex={100}
            top="10px"
            left="0"
          >
            <Link to="/">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  marginTop: "15px",
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                <HomeIcon />
              </Button>
            </Link>
            <Link to="/developers">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  marginTop: "15px",
                  marginLeft: "8px",
                  width: "180px",
                  backgroundColor: "white",
                  color: "black",
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Developers
              </Button>
            </Link>
          </Box>
        </Box>
      </div>
      <section>
        <div className="login-box" style={{ width: "600px", padding: "20px" }}>
          <form>
            <h2>Choose Your Favourite Game and Start Playing</h2>
            <Link to="/snake">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 6,
                  height: "40px",
                  borderRadius: "20px",
                  backgroundColor: "#1C8ADB",
                }}
              >
                Snake Game
              </Button>
            </Link>
            <Link to="/tic">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 6,
                  height: "40px",
                  borderRadius: "20px",
                  backgroundColor: "#1C8ADB",
                }}
                onClick={handleTicTacToeClick}
              >
                Tic Tac Toe
              </Button>
            </Link>
            <Link to="/flappy">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 6,
                  height: "40px",
                  borderRadius: "20px",
                  backgroundColor: "#1C8ADB",
                }}
              >
                Flappy Bird Game
              </Button>
            </Link>
            <Link to="/dice">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 6,
                  height: "40px",
                  borderRadius: "20px",
                  backgroundColor: "#1C8ADB",
                }}
              >
                Dice Game
              </Button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewRegister;
