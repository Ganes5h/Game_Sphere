import React, { useState, useEffect } from "react";
import Bird from "./Bird";
import Obstacle from "./Obstacle";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const App = () => {
  const [birdY, setBirdY] = useState(250);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [obstacles, setObstacles] = useState([
    { left: 800, topHeight: 200, bottomHeight: 200 },
    { left: 1100, topHeight: 150, bottomHeight: 250 },
    { left: 1400, topHeight: 180, bottomHeight: 220 },
  ]); // Initial three obstacles
  const [score, setScore] = useState(0);
  const gravity = 0.5;
  const jump = -5; // Reduced jump height
  const minimumGap = 150; // Minimum gap between obstacles
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        console.log("Space bar pressed");
        if (!gameOver) {
          setBirdVelocity(jump);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameOver]);

  useEffect(() => {
    if (!gameOver) {
      const gameLoop = setInterval(() => {
        console.log("Bird velocity:", birdVelocity);
        setBirdY((prevY) => {
          const newY = prevY + birdVelocity;
          return newY < 0 ? 0 : newY;
        });
        setBirdVelocity((prevVelocity) => prevVelocity + gravity);

        setObstacles((prevObstacles) =>
          prevObstacles.map((obstacle) => ({
            ...obstacle,
            left: obstacle.left - 5,
          }))
        );

        if (obstacles[0].left < -60) {
          // Remove the passed obstacle
          setObstacles((prevObstacles) => {
            prevObstacles.shift(); // Remove the first obstacle
            const lastObstacle = prevObstacles[prevObstacles.length - 1];
            const newObstacle = {
              left: lastObstacle.left + 300, // Position new obstacle ahead
              topHeight: Math.floor(Math.random() * 200) + 50,
              bottomHeight: 500 - lastObstacle.topHeight - minimumGap,
            };
            return [...prevObstacles, newObstacle];
          });
        }

        if (
          obstacles.some(
            (obstacle) =>
              obstacle.left < 140 &&
              obstacle.left > 60 &&
              (birdY < obstacle.topHeight ||
                birdY > 500 - obstacle.bottomHeight)
          )
        ) {
          clearInterval(gameLoop);
          setGameOver(true);
          setTimeout(() => {
            MySwal.fire({
              icon: "error",
              title: "Oops...",
              text: "Game Over! Your score: " + score,
              showCancelButton: true,
              confirmButtonText: "Restart",
              cancelButtonText: "Quit",
            }).then((result) => {
              if (result.isConfirmed) {
                restartGame();
              } else {
                window.location.reload(); // Reload the page to quit
              }
            });
          }, 100); // Adjust delay time as needed
        }
      }, 20);

      return () => {
        clearInterval(gameLoop);
      };
    }
  }, [birdY, birdVelocity, obstacles, score, gameOver]);

  const restartGame = () => {
    setBirdY(250);
    setBirdVelocity(0);
    setObstacles([
      { left: 800, topHeight: 200, bottomHeight: 200 },
      { left: 1100, topHeight: 150, bottomHeight: 250 },
      { left: 1400, topHeight: 180, bottomHeight: 220 },
    ]); // Reset to initial three obstacles
    setScore(0);
    setGameOver(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "800px",
          height: "500px",
          backgroundColor: "skyblue",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <Bird birdY={birdY} />
        {obstacles.map((obstacle, index) => (
          <Obstacle
            key={index}
            left={obstacle.left}
            topHeight={obstacle.topHeight}
            bottomHeight={obstacle.bottomHeight}
          />
        ))}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "24px",
            color: "white",
          }}
        >
          Score: {score}
        </div>
      </div>
    </div>
  );
};

export default App;
