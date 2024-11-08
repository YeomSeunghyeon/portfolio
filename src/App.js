
  import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
  import './App.css';
  import index from './Components/index';
  import Introduction from './Components/Introduction';
  import Project from "./Components/Project";
  import Contest from "./Components/Contest";
  import Career from "./Components/Career";
  function App() {
    return (
      <BrowserRouter>
        <header >
        <Link to={"/"} className='headerLink'>
          염승현의 portfolio
        </Link>
        </header>

        <div className="container">
          <nav className='menu'>
            <Link to={"/introduction"} className='menuitem'>나의 소개</Link>
            <Link to={"/project"}  className='menuitem'>프로 젝트</Link>
            <Link to={"/contest"}  className='menuitem'>공 모 전 </Link>
            <Link to={"/career"}  className='menuitem'>나의 경력</Link>
          </nav>

          <main className='main'>
            <Routes>
              <Route path="/" Component={index} />
              <Route path="/introduction" Component={Introduction} />
              <Route path="/project" Component={Project} />
              <Route path="/contest" Component={Contest} />
              <Route path="/career" Component={Career} />
            </Routes>
          </main>
          </div>
        <footer>
          <i>
            Copyright 2024. 염승현 all rights reserved.
            <br />
            연락처 : 010-7199-1835
          </i>
        </footer>
      </BrowserRouter>
    );
  }

  export default App;
