import React from "react";
import {Button, Image, Media} from "react-bootstrap";
import commentService from "../../services/CommentService";

const placeholderImg =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_175da5a14d1%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_175da5a14d1%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.8359375%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

const CurrentCommentsComponent = (
  {
    user={}, children, comment, updateCommentState
  }) => {

  const userOfComment = comment.userId[0]

  return (
    <div>
      <hr/>
      <Media>
        <Image className="mr-3" src={user.avatarUrl || placeholderImg}/>
        <Media.Body>
          <h5 className="mt-0 text-justify">{userOfComment.username || "No Username"}</h5>
          {children}
        </Media.Body>

        {
          user._id === userOfComment._id &&
          <Button variant="primary"
                  onClick={() => commentService.deleteComment(comment._id, user._id)
                    .then(() => window.location.reload(false))}>
            Delete
          </Button>
        }

        {
          user._id === userOfComment._id &&
          !comment.editing &&
          <Button variant="warning"
                  onClick={() => {
                    comment.editing = true
                    updateCommentState(comment)
                  }
                  }>
            Edit
          </Button>
        }

        {
          user._id === userOfComment._id &&
          comment.editing &&
          <Button variant="success"
                  onClick={() => {
                    comment.editing = false
                    updateCommentState(comment)
                    commentService.updateComment(comment)
                  }}>
            Submit
          </Button>
        }

      </Media>
    </div>
  );
};

export default CurrentCommentsComponent;
