import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
// import AllBooks from "./components/AllBooks.jsx";
// import AllBooks2 from "./components/AllBooks2.jsx";
// import SingleBook from "./components/SingleBook.jsx";
// import fantasy from "./books/fantasy.json";
// import horror from "./books/horror.json";
import BookList from "./components/BookList.jsx";
import CarouselHome from "./components/MyCarousel.jsx";
import CommentArea from "./components/MyCommentArea.jsx";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
// import { Component } from "react";

const App = () => {
  // state = {
  //   selectedAsin: "",
  // };

  const [selectedAsin, setSelectedAsin] = useState("");

  const setNewAsin = (asin) => {
    setSelectedAsin(asin);
  };
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <main>
        <CarouselHome />
        {/* <SingleBook book={fantasy[0]} /> */}
        <Welcome brand="EpiBooks" />
        {/* <AllBooks /> */}
        {/* <AllBooks2 /> */}
        <Row>
          <Col md={8}>
            <BookList setNewAsin={setNewAsin} selectedAsin={selectedAsin} />
          </Col>
          <Col md={4}>
            <CommentArea asin={selectedAsin} />
          </Col>
        </Row>
      </main>
      <MyFooter name="EpiBooks"> </MyFooter>
    </div>
  );
};

export default App;
