import Questions from "./Questions";
import React from "react";

function QuestionsCard (props) {

return (
    <div>
        <div>
            <label>Question</label>
            <button>answer1</button>
            <button>answer2</button>
            <button>answer3</button>
            <button>Next Question</button>
        </div>
        <Questions></Questions>
    </div>
)

}

export default QuestionsCard;