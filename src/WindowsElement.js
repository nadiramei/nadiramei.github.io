import Draggable from "react-draggable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faMinus,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function WindowsElement({
    title,
    onClick,
    children,
    left,
    top,
    portfolio,
    link,
    showcase
}) {
    return (
        // <Draggable>
            <div
                className={`mx-auto md:absolute mb-5 border border-2 border-solid border-b-red-400 border-r-red-400 ${
                    portfolio ? "w-[20rem] md:w-[40rem]" : "w-[20rem]"
                }`}
                style={{
                    top: top, 
                    left: left}}
            >
                <div className="h-8 bg-pink-300 border-b-2 border-red-400 flex flex-row items-center px-2">
                    <p className="font-mono">{title}</p>
                    <div className="grow"></div>
                    <div className="flex flex-row gap-4 justify-end">
                        <button onClick={onClick}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        {(portfolio || showcase) && (
                            <a href={link} target="_blank">
                                <FontAwesomeIcon
                                    icon={faArrowUpRightFromSquare}
                                />
                            </a>
                        )}
                    </div>
                </div>
                {children}
            </div>
        // </Draggable>
    );
}
export default WindowsElement;
