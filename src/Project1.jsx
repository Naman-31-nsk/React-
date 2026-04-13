import React from "react";

// Card Component
function Card({ title, description, image }) {
  return (
    <div style={{
      width: "250px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      margin: "15px",
      textAlign: "center"
    }}>
      <img 
        src={image} 
        alt={title} 
        style={{ width: "100%", height: "150px", objectFit: "cover" }} 
      />
      <div style={{ padding: "15px" }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// Project1 Component
function Project1() {
  return (
    <div>
      <h2>🛍️ Card Project</h2>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Card
          title="Nike Shoes"
          description="Comfortable and stylish running shoes."
          image="https://codeyogi.io/nike_1.jpg"
        />

        <Card
          title="Casual Sneakers"
          description="Perfect for everyday wear."
          image="https://codeyogi.io/nike_2.jpeg"
        />

        <Card
          title="Sports Shoes"
          description="Best for gym and workouts."
          image="https://codeyogi.io/nike_3.jpg"
        />
      </div>
    </div>
  );
}

export default Project1;
