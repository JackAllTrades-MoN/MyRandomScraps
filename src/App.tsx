import './App.css';
import { Footer } from './footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from './api';

function App() {
  const [selected, setSelected] = useState<string|null>(null);
  const select = (name: string) => {
    return () => setSelected(name)
  };
  const classNameOf = (name: string) => {
    return (selected === name)?"menu-item selected":"menu-item"
  }
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    getCategories()
    .then(res => {
      const {data, status} = res;
      setCategories(data);
    })
  }, []);
  const toCamelCase = (words: string) => {
    return words.split("-")
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join("-")
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='title-logo'>My Random Scraps</div>
        <nav>
          <Link className={classNameOf("home")}
          to="/"
          onClick={select("home")}>
            Home
          </Link>
          {categories.map((category, idx) => {
            return (
              <Link
                key={idx}
                className={classNameOf(category)}
                to={`/?filter=${category}`}
                onClick={select(category)}
              >
                {toCamelCase(category)}
              </Link>
            )
          })}
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
