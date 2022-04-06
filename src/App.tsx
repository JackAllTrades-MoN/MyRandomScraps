import './App.css';
import { Footer } from './footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState<string|null>(null);
  const select = (name: string) => {
    return () => setSelected(name)
  };
  const classNameOf = (name: string) => {
    return (selected === name)?"menu-item selected":"menu-item"
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='title-logo'>My Random Scraps</div>
        <nav>
          <Link className={classNameOf("home")} to="/" onClick={select("home")}>Home</Link>
          <Link className={classNameOf("techA")} to="/?filter=techA" onClick={select("techA")}>Tech-Articles</Link>
          <Link className={classNameOf("softwares")} to="/?filter=softwares" onClick={select("softwares")}>Softwares</Link>
          <Link className={classNameOf("illustrations")} to="/?filter=illustrations" onClick={select("illustrations")}>Illustrations</Link>
          <Link className={classNameOf("links")} to="/?filter=links" onClick={select("links")}>Links</Link>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
