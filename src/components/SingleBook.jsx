import { Button, Card, Col } from "react-bootstrap";
import React from "react";
// const mySingleBook = ({book}) => {
//   return (
//     <Col>
//       <Card className="h-100 card">
//         <Card.Img
//           variant="top"
//           src={book.img}
//           alt={book.title}
//           className="cards-image"
//         />
//         <Card.Body className="d-flex flex-column justify-content-between align-items-start">
//           <Card.Title>{book.title}</Card.Title>
//           <Card.Text>
//             {book.category} - {book.price}€
//           </Card.Text>
//           <Button variant="primary">Buy It</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default mySingleBook;

const MySingleBook = (props) => {
  return (
    <Col>
      <Card
        className={`h-100 card ${
          props.book.asin === props.selectedAsin ? "selected" : ""
        }`}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          alt={props.book.title}
          className="cards-image"
          onClick={() => {
            if (props.book.asin === props.selectedAsin) {
              props.setNewAsin("");
            } else {
              props.setNewAsin(props.book.asin);
            }
          }}
        />
        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            {props.book.category} - {props.book.price}€
          </Card.Text>
          <Button variant="primary">Buy It</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MySingleBook;
