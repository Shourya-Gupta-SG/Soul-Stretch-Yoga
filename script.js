/* Reset and Base Styles */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  color: #222;
  scroll-behavior: smooth;
}

.dark-mode {
  background-color: #121212;
  color: #f5f5f5;
}

header {
  position: relative;
  text-align: center;
  background: url('assets/yoga-bg.jpg') no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}

.hero-text {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem 2rem;
  border-radius: 10px;
}

button,
input,
textarea {
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;
}

button {
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
  width: 100px;
}

button:hover {
  opacity: 0.9;
}

section {
  padding: 40px 20px;
  text-align: center;
}

.testimonial,
.class-card {
  background: white;
  padding: 1rem;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  display: inline-block;
  max-width: 300px;
  vertical-align: top;
}

.dark-mode .testimonial,
.dark-mode .class-card {
  background-color: #1e1e1e;
  color: #f5f5f5;
}

/* Toggle Icon */
#toggleMode {
  position: fixed;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;
}

/* Back to Top */
#backToTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 50%;
  font-size: 18px;
  display: none;
  z-index: 1000;
}

footer {
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
  background: #eee;
}

.dark-mode footer {
  background-color: #222;
}
