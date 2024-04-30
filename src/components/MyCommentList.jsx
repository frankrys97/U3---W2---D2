// import { Component } from "react";
import { ListGroup, Alert, Button } from "react-bootstrap";

const CommentList = (props) => {
  // fetchAllComment = () => {
  //   const myKey =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOGE2NjI4MzJlODAwMTk4NzMwOWEiLCJpYXQiOjE3MTQzOTE2NTQsImV4cCI6MTcxNTYwMTI1NH0.8LJndh4fAd8e9THgG8NnG1HZNV-PJ1_p9RlB9odR_Hc";

  //   fetch(
  //     "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${myKey}`,
  //       },
  //     }
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Something went wrong");
  //       }
  //     })
  //     .then((data) => {
  //       this.setState({ commentsArray: data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const deleteComment = (commentId) => {
    const myKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOGE2NjI4MzJlODAwMTk4NzMwOWEiLCJpYXQiOjE3MTQzOTE2NTQsImV4cCI6MTcxNTYwMTI1NH0.8LJndh4fAd8e9THgG8NnG1HZNV-PJ1_p9RlB9odR_Hc";

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + commentId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // this.fetchAllComment();
          props.updateComment(props.asin);
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // componentDidMount() {
  //   this.fetchAllComment();
  // }

  return (
    <>
      {props.asin === "" && (
        <Alert variant="warning">Please select a book to read comments</Alert>
      )}

      {props.asin !== "" && props.elements.length > 0 && (
        <ListGroup as="ol" numbered className="my-3 commentList">
          {props.elements.map((comment) => {
            return (
              <ListGroup.Item
                as="li"
                key={comment._id}
                className="d-flex justify-content-between align-items-start"
              >
                <p>
                  {comment.author}: {comment.comment} - Rate: {comment.rate}
                </p>

                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteComment(comment._id)}
                >
                  <i className="bi bi-trash3"></i>
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}

      {props.asin !== "" && props.elements.length === 0 && (
        <Alert variant="info">No comments yet</Alert>
      )}
    </>
  );
};

export default CommentList;
