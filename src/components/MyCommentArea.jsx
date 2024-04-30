import CommentList from "./MyCommentList";
import CustomComment from "./CustomComment";
// import { Component } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  // state = {
  //   elements: [],
  //   isLoading: false,
  //   isError: false,
  // };

  const [elements, setElements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getComment = () => {
    const myKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOGE2NjI4MzJlODAwMTk4NzMwOWEiLCJpYXQiOjE3MTQzOTE2NTQsImV4cCI6MTcxNTYwMTI1NH0.8LJndh4fAd8e9THgG8NnG1HZNV-PJ1_p9RlB9odR_Hc";

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((elements) => {
        console.log(elements);
        setElements(elements);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  };

  // componentDidMount() {
  //   console.log(this.props.asin, "inizio didmount");
  //   this.getComment();
  //   console.log("fine didmount");
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({ isLoading: true, isError: false });
  //     this.getComment();
  //   }
  // }

  useEffect(() => {
    getComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  return (
    <>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      )}

      {isError && <Error />}

      {!isLoading && !isError && (
        <div className="m-2">
          <h4>Comments:</h4>
          <CommentList
            asin={props.asin}
            elements={elements}
            updateComment={getComment}
            isLoading={isLoading}
          />
          <h4>Add a comment</h4>
          <CustomComment asin={props.asin} updateComment={getComment} />
        </div>
      )}
    </>
  );
};

export default CommentArea;
