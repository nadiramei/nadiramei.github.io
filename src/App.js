import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import WindowsElement from "./WindowsElement";
import ShowcaseElement from "./ShowcaseElement";

function App() {
    // randomizes stars' position
    const getRandomPosition = () => {
        const top = `${Math.floor(Math.random() * window.innerHeight)}px`;
        const left = `${Math.floor(Math.random() * window.innerWidth)}px`;
        return {top, left};
    };

    // randomizes stars' blink delay
    const getRandomDelay = () => {
        return `${Math.random() * 2}s`;
    };

    // generate star elements
    const generateStars = (count) => {
        const starsArray = [];
        for (let i = 1; i <= count; i++) {
            starsArray.push({
                id: i,
                opacity: Math.random(),
                ...getRandomPosition(),
                delay: getRandomDelay(),
            });
        }
        return starsArray;
    };
    const [stars] = useState(generateStars(75));

    // keep track of dark and light mode
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // get indonesia's time
    async function getTime() {
        try {
            const response = await fetch(
                "http://worldtimeapi.org/api/timezone/Asia/Jakarta"
            );
            const responseData = await response.json();

            const dateNow = new Date(responseData.utc_datetime);
            const formattedTime = dateNow
                .toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                    timeZoneName: "short",
                })
                .replace(/\u200E/g, "");

            return formattedTime;
        } catch (error) {
            console.error("Error fetching Jakarta time:", error);
            return null;
        }
    }

    var [time, setTime] = useState("");

    useEffect(() => {
        getTime().then((formattedTime) => {
            setTime(formattedTime);
        });
    }, []);

    const smallScreen = window.innerWidth < 768;

    const [windows, setWindows] = useState([
        {
            id: 1,
            title: "helloworld.exe",
            isMinimized: false,
            top: "1rem",
            left: "7rem",
            children: (
                <div className="typewriter z-2 bg-black text-white p-2 h-[25rem]">
                    <p></p>
                </div>
            ),
        },
        {
            id: 2,
            title: "primary",
            isMinimized: false,
            top: smallScreen ? "35rem" : "3rem",
            left: smallScreen ? "1rem" : "30rem",
            children: (
                <div className="bg-white p-2 flex flex-col">
                    <div className="flex flex-row items-center">
                        <div className="text-gray-500">language</div>
                        <div className="grow"></div>
                        <div className="ml-2 border-b border-solid border-gray-400 w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Javascript</p>
                        <p>Python</p>
                        <p>English</p>
                        <p>Indonesian</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="text-gray-500">tech stack</div>
                        <div className="grow"></div>
                        <div className="ml-2 border-b border-solid border-gray-400 w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>ReactJS</p>
                        <p>Sass</p>
                        <p>NextJS</p>
                        <p>TailwindCSS</p>
                        <p>NodeJS</p>
                        <p>Git</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="text-gray-500">others</div>
                        <div className="grow"></div>
                        <div className="ml-2 border-b border-solid border-gray-400 w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-1">
                        <p>Front-end Development</p>
                        <p>Web Design</p>
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            title: "secondary",
            isMinimized: false,
            top: "3rem",
            left: "52rem",
            children: (
                <div className="bg-white p-2 flex flex-col">
                    <div className="flex flex-row items-center">
                        <div className="text-gray-500">tech stack</div>
                        <div className="grow"></div>
                        <div className="ml-2 border-b border-solid border-gray-400 w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Django</p>
                        <p>Pug</p>
                        <p>Bootstrap</p>
                        <p>PostgreSQL</p>
                        <p>MySQL</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="text-gray-500">others</div>
                        <div className="grow"></div>
                        <div className="ml-2 border-b border-solid border-gray-400 w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-1">
                        <p>Back-end Development</p>
                    </div>
                </div>
            ),
        },
        {
            id: 4,
            title: "tertiary",
            isMinimized: false,
            top: "16rem",
            left: "52rem",
            children: (
                <div className="bg-white p-2 flex flex-col">
                    <div className="flex flex-row items-center">
                        <div className="text-gray-500">language</div>
                        <div className="grow"></div>
                        <div className="ml-2 border-b border-solid border-gray-400 w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Java</p>
                        <p>Spanish</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="text-gray-500">tech stack</div>
                        <div className="grow"></div>
                        <div className="ml-2 border-b border-solid border-gray-400 w-2/3"></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>VueJS</p>
                        <p>Spring Boot</p>
                        <p>Jest</p>
                    </div>
                </div>
            ),
        },
        {
            id: 5,
            portfolio: true,
            link: "http://gymnasticsindonesia.id/",
            title: "gymnasticsindonesia.id",
            isMinimized: false,
            top: "32rem",
            left: "7rem",
            children: (
                <div className="bg-white">
                    <iframe
                        title="gymnastics indonesia"
                        height="400"
                        width="100%"
                        src="https://persani-dev.vercel.app/"
                    ></iframe>
                </div>
            ),
        },
        {
            id: 6,
            portfolio: true,
            link: "https://skripsi-nadiramei.vercel.app/",
            title: "undergrad_thesis",
            isMinimized: false,
            top: "58rem",
            left: "27rem",
            children: (
                <div className="bg-white">
                    <iframe
                        title="undergrad thesis nadiramei"
                        height="400"
                        width="100%"
                        src="https://skripsi-nadiramei.vercel.app/"
                    ></iframe>
                </div>
            ),
        },
    ]);

    const [showcaseList, setShowcaseList] = useState({
        id: 7,
        showcase: true,
        link: "https://codepen.io/nadiramei/",
        title: ["tribute_page", "timer_app", "random_quote", "simple_calc", "markdown_prev", "drum", "technical_doc"],
        isMinimized: false,
        top: "88rem",
        left: "7rem",
        children: [
            <div key={1} className="bg-white">
                <iframe
                    title="tribute_page"
                    height="300"
                    width="100%"
                    src="https://codepen.io/nadiramei/embed/abjdWJz?default-tab=result"
                ></iframe>
            </div>,
            <div key={2} className="bg-white">
                <iframe
                    title="timer_app"
                    height="300"
                    width="100%"
                    src="https://codepen.io/nadiramei/embed/vYaLmxx?default-tab=result"
                ></iframe>
            </div>,
            <div key={3} className="bg-white">
                <iframe
                    title="random_quote"
                    height="300"
                    width="100%"
                    src="https://codepen.io/nadiramei/embed/abjdWwO?default-tab=result"
                ></iframe>
            </div>,
            <div key={4} className="bg-white">
                <iframe
                    title="simple_calc"
                    height="300"
                    width="100%"
                    src="https://codepen.io/nadiramei/embed/abjdWpz?default-tab=result"
                ></iframe>
            </div>,
            <div key={5} className="bg-white">
                <iframe
                    title="markdown_prev"
                    height="300"
                    width="100%"
                    src="https://codepen.io/nadiramei/embed/PoBZmjE?default-tab=result"
                ></iframe>
            </div>,
            <div key={6} className="bg-white">
                <iframe
                    title="drum"
                    height="300"
                    width="100%"
                    src="https://codepen.io/nadiramei/embed/QWByvMZ?default-tab=result"
                ></iframe>
            </div>,
            <div key={6} className="bg-white">
                <iframe
                    title="technical_doc"
                    height="300"
                    width="100%"
                    src="https://codepen.io/nadiramei/embed/RwBrJvx?default-tab=result"
                ></iframe>
            </div>,
        ],
    });

    const toggleMinimization = (id) => {
        if (id < 7) {
            setWindows((prevWindows) =>
                prevWindows.map((window) =>
                    window.id === id
                        ? {...window, isMinimized: !window.isMinimized}
                        : window
                )
            );
        } else {
            setShowcaseList((window) =>
                window.id === id
                    ? {...window, isMinimized: !window.isMinimized}
                    : window
            );
        }
    };

    return (
        <div
            className={`flex flex-col h-[170rem] md:h-[115rem] w-screen md:min-w-[75rem] font-mono overflow-y-auto ${
                isDarkMode ? "squares-dark" : "squares"
            }`}
            transition-style="in:wipe:right"
        >
            {stars.map((star) => (
                <>
                    <div
                        key={star.id}
                        className={isDarkMode ? "star-dark" : "star"}
                        style={{
                            position: "fixed",
                            top: star.top,
                            left: star.left,
                            shape: "svg",
                            animation: `blink 4s infinite ${star.delay}`,
                            zIndex: "-1",
                        }}
                    ></div>
                </>
            ))}

            <div className="flex md:flex-col">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/nadiramei"
                    className={`flex flex-col items-center justify-center p-2 w-28 ${
                        isDarkMode && "fill-current text-pink-200"
                    }`}
                >
                    {/* github icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40"
                        width="40"
                        viewBox="0 0 496 512"
                    >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                    Github
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="mailto:nadiramei@gmail.com"
                    className={`flex flex-col items-center justify-center p-2 w-28 ${
                        isDarkMode && "text-pink-200"
                    }`}
                >
                    <FontAwesomeIcon icon={faEnvelope} className="h-8" />
                    Contact Me
                </a>
            </div>

            {windows.map((window) => (
                <React.Fragment key={window.id}>
                    {/* skills section */}
                    {window.id === 2 && (
                        <div className="md:absolute mb-2 mx-auto md:top-[1rem] md:left-[30rem] w-80 md:w-[42rem]">
                            <div className="flex flex-row items-center">
                                <div
                                    className={`${
                                        isDarkMode && "text-pink-300"
                                    }`}
                                >
                                    My Skills
                                </div>
                                <div className="grow"></div>
                                <div
                                    className={`ml-2 border-b border-solid w-[70%] md:w-[80%] ${
                                        isDarkMode
                                            ? "border-pink-100"
                                            : "border-black"
                                    }`}
                                ></div>
                            </div>
                        </div>
                    )}
                    {/* portfolio section */}
                    {window.id === 5 && (
                        <div className="md:absolute mb-2 mx-auto md:top-[30rem] md:left-[7rem] w-[20rem] md:w-[65rem]">
                            <div className="flex flex-row items-center">
                                <div
                                    className={`${
                                        isDarkMode && "text-pink-300"
                                    }`}
                                >
                                    My Portfolio
                                </div>
                                <div className="grow"></div>
                                <div
                                    className={`ml-2 border-b border-solid w-[60%] md:w-[85%] ${
                                        isDarkMode
                                            ? "border-pink-100"
                                            : "border-black"
                                    }`}
                                ></div>
                            </div>
                        </div>
                    )}
                    {!window.isMinimized && (
                        <WindowsElement
                            title={window.title}
                            onClick={() => toggleMinimization(window.id)}
                            top={window.top}
                            left={window.left}
                            portfolio={window.portfolio ? window.portfolio : ""}
                            link={window.link ? window.link : ""}
                        >
                            {window.children}
                        </WindowsElement>
                    )}
                </React.Fragment>
            ))}
            {/* 
            <a href="https://www.codewars.com/users/nadiramei/">
                <img className="w-[20rem]" src="https://www.codewars.com/users/nadiramei/badges/large" />
            </a> 
            */}
            {/* personal showcase */}
            <div className="md:absolute mb-2 mx-auto md:top-[86rem] md:left-[7rem] w-[20rem] md:w-[65rem]">
                <div className="flex flex-row items-center">
                    <div className={`${isDarkMode && "text-pink-300"}`}>
                        Other Personal Projects
                    </div>
                    <div className="grow"></div>
                    <div
                        className={`ml-2 border-b border-solid w-[30%] md:w-[75%] ${
                            isDarkMode ? "border-pink-100" : "border-black"
                        }`}
                    ></div>
                </div>
            </div>
            {showcaseList && !showcaseList.isMinimized && (
                <ShowcaseElement
                    title={showcaseList.title}
                    onClick={() => toggleMinimization(showcaseList.id)}
                    top={showcaseList.top}
                    left={showcaseList.left}
                >
                    {showcaseList.children}
                </ShowcaseElement>
            )}

            <div className="flex-grow"></div>
            <div
                id="taskbar"
                className={`fixed z-10 bottom-0 left-0 right-0 h-10 flex items-center ${
                    isDarkMode ? "bg-pink-300" : "footer"
                }`}
            >
                <button
                    onClick={toggleDarkMode}
                    className={`mx-4 w-6 items-center transition-transform duration-300 ${
                        isDarkMode && "transform rotate-45"
                    }`}
                    aria-label={`Toggle ${
                        isDarkMode ? "Light Mode" : "Dark Mode"
                    }`}
                >
                    <FontAwesomeIcon
                        icon={isDarkMode ? faMoon : faSun}
                        className="h-6"
                    />
                </button>
                <div className="w-[65%] md:w-[75%] h-10 overflow-x-auto flex flex-row">
                    {windows.map((window) => (
                        <React.Fragment key={window.id}>
                            {window.isMinimized && (
                                <button
                                    onClick={() =>
                                        toggleMinimization(window.id)
                                    }
                                    className="border-2 border-r-pink-400 border-b-pink-400 px-2 h-10 shadow-inner"
                                >
                                    {window.title}
                                </button>
                            )}
                        </React.Fragment>
                    ))}
                    {showcaseList && showcaseList.isMinimized && (
                        <button
                            onClick={() => toggleMinimization(showcaseList.id)}
                            className="border-2 border-r-pink-400 border-b-pink-400 px-2 h-10 shadow-inner"
                        >
                            Others
                        </button>
                    )}
                </div>
                <div className="flex-grow"></div>
                <span className="mr-4 font-bold min-w-[10rem] text-right">
                    ID | {time}
                </span>
            </div>
        </div>
    );
}

export default App;
