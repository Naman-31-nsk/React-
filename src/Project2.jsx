import { useState } from "react";

function Project2() {
  const items = ["Apple 🍎", "Banana 🍌", "Mango 🥭", "Orange 🍊"];
  const [selectedItem, setSelectedItem] = useState("");

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📋 List Project</h2>

      {/* List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item)}
            style={{
              padding: "10px",
              margin: "10px auto",
              width: "200px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: "#f9f9f9",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Show clicked item */}
      {selectedItem && (
        <h3>You clicked: {selectedItem}</h3>
      )}
    </div>
  );
}

export default Project2;
