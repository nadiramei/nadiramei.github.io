import { useState } from "react";
import Draggable from "react-draggable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

function ShowcaseElement({title, onClick, children, left, top}) {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
      setActiveButton(index);
    };
    return (
        <Draggable>
            <div
                className={`mx-auto md:absolute mb-5 border border-2 border-solid border-b-red-400 border-r-red-400 hover:cursor-grab w-[20rem] md:w-[65rem]`}
                style={{top: top, left: left}}
            >
                <div className="h-8 bg-pink-300 border-b-4 border-red-400 flex flex-row items-center">
                    <div className="w-[80%] overflow-x-auto flex flex-row">
                    {title.map((item, i) => (
                        <button
                            key={i}
                            className={`font-mono border-r-2 border-b-2 ${
                                i === activeButton ? "border-b-red-600 border-l-2" : "border-red-400"
                            } px-2 h-7 hover:cursor-pointer`}
                            onClick={() => handleButtonClick(i)}
                        >
                            {item}
                        </button>
                    ))}
                    </div>
                    <div className="grow"></div>
                    <div className="flex flex-row mr-4 justify-end">
                        <button onClick={onClick}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </div>
                </div>
                {children.map((item, i) => (
                    <div key={i} className={i === activeButton ? "block" : "hidden"}>
                        {item}
                    </div>
                ))}
            </div>
        </Draggable>
    );
}
export default ShowcaseElement;
