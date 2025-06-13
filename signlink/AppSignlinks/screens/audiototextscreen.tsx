import React, { useState } from "react";

const audiototext = () => {
  const [hoveredStars, setHoveredStars] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false,
  });

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f2f2f2",
    },
    card: {
      width: "220px",
      background: "white",
      borderRadius: "10px",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    title: {
      fontWeight: "bold",
      fontSize: "18px",
      padding: "16px 0",
    },
    orangeSection: {
      backgroundColor: "#e65100",
      padding: "20px 10px 40px 10px",
    },
    whiteBox: {
      width: "100%",
      height: "60px",
      backgroundColor: "white",
      borderRadius: "6px",
      marginBottom: "20px",
    },
    starsRow: {
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "10px",
    },
    star: (hovered = false, color = "#e0e0e0") => ({
      fontSize: "20px",
      color,
      transition: "transform 0.2s, text-shadow 0.2s",
      transform: hovered ? "scale(1.2)" : "scale(1)",
      textShadow: hovered ? "0 0 5px #fff" : "none",
      cursor: "pointer",
    }),
    blackBar: {
      backgroundColor: "black",
      padding: "8px",
      display: "flex",
      justifyContent: "space-around",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.title}>SIGNLINK</div>

        <div style={styles.orangeSection}>
          <div style={styles.whiteBox}></div>
          <div style={styles.starsRow}>
            <span
              style={styles.star(hoveredStars.topLeft)}
              onMouseEnter={() => setHoveredStars({ ...hoveredStars, topLeft: true })}
              onMouseLeave={() => setHoveredStars({ ...hoveredStars, topLeft: false })}
            >
              &#9733;
            </span>
            <span
              style={styles.star(hoveredStars.topRight)}
              onMouseEnter={() => setHoveredStars({ ...hoveredStars, topRight: true })}
              onMouseLeave={() => setHoveredStars({ ...hoveredStars, topRight: false })}
            >
              &#9733;
            </span>
          </div>
        </div>

        <div style={styles.blackBar}>
          <span
            style={styles.star(hoveredStars.bottomLeft, "white")}
            onMouseEnter={() => setHoveredStars({ ...hoveredStars, bottomLeft: true })}
            onMouseLeave={() => setHoveredStars({ ...hoveredStars, bottomLeft: false })}
          >
            &#9733;
          </span>
          <span
            style={styles.star(hoveredStars.bottomRight, "white")}
            onMouseEnter={() => setHoveredStars({ ...hoveredStars, bottomRight: true })}
            onMouseLeave={() => setHoveredStars({ ...hoveredStars, bottomRight: false })}
          >
            &#9733;
          </span>
        </div>
      </div>
    </div>
  );
};

export default audiototext;
