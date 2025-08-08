import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseVisible, setResponseVisible] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send formData to a server here.
    setFormData({ name: "", email: "", message: "" });
    setResponseVisible(true);
    setTimeout(() => setResponseVisible(false), 4000);
  };

  return (
    <>
      <header>
        <h1>Explore World</h1>
        <nav>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Discover Your Next Adventure</h2>
        <p>Find amazing places to travel and create unforgettable memories</p>
      </section>

      <main>
        <section id="destinations" className="destinations">
          <h3>Popular Destinations</h3>
          <div className="cards">
            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80"
                alt="Paris"
              />
              <div className="card-body">
                <h4>Paris, France</h4>
                <p>The city of lights and love, with iconic landmarks and world-class cuisine.</p>
              </div>
            </article>

            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                alt="Maldives"
              />
              <div className="card-body">
                <h4>Maldives</h4>
                <p>Crystal-clear waters, stunning coral reefs, and luxurious resorts.</p>
              </div>
            </article>

            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1549887534-8835d9abd7f9?auto=format&fit=crop&w=600&q=80"
                alt="Kyoto"
              />
              <div className="card-body">
                <h4>Kyoto, Japan</h4>
                <p>Traditional temples, beautiful gardens, and rich cultural heritage.</p>
              </div>
            </article>

            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=600&q=80"
                alt="Grand Canyon"
              />
              <div className="card-body">
                <h4>Grand Canyon, USA</h4>
                <p>Epic natural landscapes and breathtaking hiking trails.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit} id="contactForm">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here"
              required
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">Send Message</button>
          </form>
          {responseVisible && (
            <p style={{ color: "green", marginTop: "1rem" }}>Thank you for contacting us!</p>
          )}
        </section>
      </main>

      <footer>&copy; 2025 Explore World. All rights reserved.</footer>
    </>
  );
}

export default App;
