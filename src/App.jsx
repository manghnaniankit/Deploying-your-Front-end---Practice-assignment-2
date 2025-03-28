import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>My Contact Information</h1>
      </header>
      <main>
        <section className="contact-card">
          <h2>John Doe</h2>
          <div className="contact-details">
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Location:</strong> San Francisco, CA</p>
          </div>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} - All rights reserved</p>
      </footer>
    </div>
  )
}

export default App