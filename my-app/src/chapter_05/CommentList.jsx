import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "GilDong",
    comment: "First Component",
  },
  {
    name: "Steve",
    comment: "Fight",
  },
  {
    name: "Kane",
    comment: "EPL",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
