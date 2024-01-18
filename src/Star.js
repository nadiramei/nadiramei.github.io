import { useState } from "react";
// Example with stateful component
const Star = ({size, color, className}) => {
    const [isBlinking, setIsBlinking] = useState(false);

    // Toggle the blinking state as needed

    return (
        <div
            className={isBlinking ? "blink" : ""}
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: "50%"
            }}
        ></div>
    );
};
export default Star;