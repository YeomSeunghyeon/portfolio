
  import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
  import './App.css';
  import index from './Components/index';
  import Introduction from './Components/Introduction';
  import Project from "./Components/Project";
  import Contest from "./Components/Contest";
  import Career from "./Components/Career";
import Login from './Components/Login';
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login, logout } from './Components/Store';
import Todo from './Components/Todo';
import MyPage from './Components/MyPage';
  function App() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    function handleLogout(){
      dispatch(logout());
    }
    return (
      <BrowserRouter>
        <header >
        <Link to={"/"} className='headerLink'>
          염승현의 portfolio
        </Link>{isAuthenticated ? (<div className="headerlist">
          <Link to={'/mypage'} className='MyPage'>mypage</Link>
          <Link to={'/todo'} className='Todo'>todolist</Link>
            <button className='Logout' onClick={handleLogout}>로그아웃</button></div>
        ):( <Link to={'/login'} className='Login'>로그인</Link>)}
        </header>

        <div className="container">
          {isAuthenticated ? (
               <nav className='menu'>
               <Link to={"/introduction"} className='menuitem'>나의 소개</Link>
               <Link to={"/project"}  className='menuitem'>프로 젝트</Link>
               <Link to={"/contest"}  className='menuitem'>공 모 전 </Link>
               <Link to={"/career"}  className='menuitem'>나의 경력</Link>
   
             </nav>
          ) : (
            <div></div>
          )}
          <main className='main'>
            <Routes>
              <Route path="/" Component={index} />
              <Route path="/introduction" Component={Introduction} />
              <Route path="/project" Component={Project} />
              <Route path="/contest" Component={Contest} />
              <Route path="/career" Component={Career} />
              <Route path="/login" Component={Login}/>
              <Route path="/todo" Component={Todo}/>
              <Route path='/mypage' Component={MyPage}/>
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
