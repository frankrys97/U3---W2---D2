// import { Component } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CustomComment = (props) => {
  // state = {
  //   comment: "",
  //   rate: "1",
  // };

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "comment") {
      setComment(value);
    } else if (name === "rate") {
      setRate(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const myKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOGE2NjI4MzJlODAwMTk4NzMwOWEiLCJpYXQiOjE3MTQzOTE2NTQsImV4cCI6MTcxNTYwMTI1NH0.8LJndh4fAd8e9THgG8NnG1HZNV-PJ1_p9RlB9odR_Hc";

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myKey}`,
      },
      body: JSON.stringify({
        comment: comment,
        elementId: props.asin,
        rate: rate,
      }),
    })
      .then((response) => {
        if (response.ok) {
          props.updateComment(props.asin);

          // this.setState({ comment: "", rate: "1" });

          setComment("");
          setRate("1");
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="commentText">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            value={comment}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="rating">
          <Form.Label>Rating ⭐️</Form.Label>
          <Form.Control
            as="select"
            name="rate"
            value={rate}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3">
          Add a comment
        </Button>
      </Form>
    </div>
  );
};

export default CustomComment;
