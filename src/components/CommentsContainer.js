import React from "react";

function CommentContainer(props) {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            {props.children}
        </div>
    )
}

export default CommentContainer