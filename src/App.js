import React, { useState } from 'react'
import Comment from "./components/Comment"
import Container from "./components/CommentsContainer"

function App() {
    return (
        <div>
            <Container>
                <Comment author="Mirsat" posted="Today at 12" comment="Nice!" />
                <Comment author="Sami" posted="Yesterday at 11" comment="Bad!" />
                <Comment author="Filip" posted="Now" comment="I Agree" />
            </Container>
        </div>
    )
}

export default App;