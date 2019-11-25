import React from "react";
import SplitText from "react-pose-text";

// Full React Pose Text documentation can be found at
// https://popmotion.io/pose/api/react-pose-text
const charPoses = {
    exit: { opacity: 0, y: -2 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 50,
    },
};

function AnimatedText({ text, testing }) {
    return (
        <div>
            {testing ? (
                <div>{text}</div>
            ) : (
                <SplitText
                    initialPose="exit"
                    pose="enter"
                    charPoses={charPoses}
                >
                    {text}
                </SplitText>
            )}
        </div>
    );
}

export default AnimatedText;
