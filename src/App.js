import { NavBar } from './Components/NavBar';
import { Link, Route, Routes } from 'react-router-dom';
import { SearchJob } from './Components/SearchJob';
import { AppliedJob } from './Components/AppliedJob';
import { SavedJobs } from './Components/SavedJobs';
import styled from "styled-components";
const StyledLink = styled(Link)`
  color: black;
  text-decoration:none;

  &:active {
     text-decoration: underline;
    }
`;
const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: auto;
    font-size: 20px;
    padding:20px 0px;
    background-color: white;
    margin-top:2px;

`;

function App() {
  return (
    <div >
      <NavBar />
      <NavbarWrapper>
        <StyledLink className='subNavLinks' to={"/"} >Search Job</StyledLink>
        <StyledLink className='subNavLinks' to={"/appliedjob"} >Applied</StyledLink>
        <StyledLink className='subNavLinks' to={"/savedjob"} >Saved Job</StyledLink>
      </NavbarWrapper>
      <Routes >
        <Route path='/' element={<SearchJob />} />
        <Route path='/appliedjob' element={<AppliedJob />} />
        <Route path='/savedjob' element={<SavedJobs />} />
      </Routes>
    </div>
  );
}

export default App;
