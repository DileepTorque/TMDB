
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "./Mainpage.css"
 

const Cinema = () => {
  let[state,setState]=useState([]);
  let [Search,setSearch]=useState([]);
  let navigate=useNavigate()
useEffect(()=>{
fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=c7003c15c966ed65016de2ab586e2a79&language=en-US").then((a)=>a.json())
.then((b)=>setState(b.results))
  
},[])
function Moviesearch(){
  fetch(`https://api.themoviedb.org/3/search/movie?query=${Search}&api_key=4baaa8b049d342c77c58c5d923f99487`).then((res=>res.json()))
  .then(val=>setState(val.results))
}
  return (
    <div>
      {/* <Navbar/> */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={Moviesearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Carosel/> */}
    <Carousel>
  {state.map(x => {
    return (
      <div key={x.id}> {/* Add key prop here */}
        <img src={`https://image.tmdb.org/t/p/original/${x.backdrop_path}`} /> <br/> <br/> <br/><br/><br/>
        <p className="legend">{x.title}</p> <br/> 
        <p>{x.overview}</p>
        <p>{x.vote_average}</p> <br/> <br/> <br/><br/><br/>
      </div>
    );
  })}
</Carousel>

     {/* <cards/> */}
     <section className="cards-section">
  {state.map(m => {
    return (
      <Card key={m.id} style={{ width: '18rem' }}> {/* Add key prop here */}
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${m.backdrop_path}`} />
        <Card.Body>
          <Card.Title>{m.title}</Card.Title>
          <Card.Text>{m.overview}</Card.Text>
          <Button variant="primary" onClick={() => navigate('/Particular', { state: { m } })}>
            Get Details
          </Button>
        </Card.Body>
      </Card>
    );
  })}
</section>

    </div>
  )
}
export default Cinema;

