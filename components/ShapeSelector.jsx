import React, { useContext, useState } from "react";
import { DiamondContext } from "./context/DiamondContext";

const ShapeSelector = () => {
  const { currentShapeOptions, setCurrentShapeOptions } =
    useContext(DiamondContext);

  const shapes = [
    // ROUND BRILLIANT
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Round Brilliant</title>
          <path d="M29.4,59A29.5,29.5,0,1,1,58.8,29.5,29.48,29.48,0,0,1,29.4,59Zm0-58A28.5,28.5,0,1,0,57.8,29.5,28.49,28.49,0,0,0,29.4,1Z"></path>
          <polygon points="50.25 50.25 38 50.25 38 49.75 49.75 49.75 49.75 38 50.25 38 50.25 50.25"></polygon>
          <polygon points="50.25 21 49.75 21 49.75 9.25 38 9.25 38 8.75 50.25 8.75 50.25 21"></polygon>
          <polygon points="9.35 21 8.85 21 8.85 8.75 21.1 8.75 21.1 9.25 9.35 9.25 9.35 21"></polygon>
          <polygon points="21.1 50.25 8.85 50.25 8.85 38 9.35 38 9.35 49.75 21.1 49.75 21.1 50.25"></polygon>
          <path d="M9.1,38"></path>
          <path d="M9.1,21"></path>
          <polygon points="50.18 38.18 49.82 37.82 58.15 29.5 49.82 21.18 50.18 20.82 58.85 29.5 50.18 38.18"></polygon>
          <polygon points="29.5 58.85 20.92 50.18 21.28 49.82 29.5 58.15 37.82 49.82 38.18 50.18 29.5 58.85"></polygon>
          <polygon points="8.92 38.18 0.25 29.5 8.97 20.78 18.2 18.2 20.92 8.82 29.5 0.15 38.18 8.82 37.82 9.18 29.5 0.85 21.32 9.13 18.6 18.6 9.23 21.22 0.95 29.5 9.28 37.82 8.92 38.18"></polygon>
          <polygon points="9.31 38.13 8.88 37.87 13.81 29.5 8.88 21.13 9.31 20.87 14.39 29.5 9.31 38.13"></polygon>
          <polygon points="37.87 50.21 29.4 44.9 21.24 50.21 20.96 49.79 29.4 44.3 38.13 49.79 37.87 50.21"></polygon>
          <polygon points="49.78 38.13 44.61 29.5 49.78 20.87 50.22 21.13 45.19 29.5 50.22 37.87 49.78 38.13"></polygon>
          <polygon points="38.24 50.06 37.76 49.94 40.09 40.09 40.24 40.06 49.94 37.76 50.06 38.24 40.51 40.51 38.24 50.06"></polygon>
          <polygon points="29.4 14.19 20.97 9.21 21.23 8.79 29.4 13.61 37.88 8.78 38.12 9.22 29.4 14.19"></polygon>
          <polygon points="49.94 21.24 40.3 18.7 37.76 9.06 38.24 8.94 40.7 18.3 50.06 20.76 49.94 21.24"></polygon>
          <polygon points="20.86 50.06 18.59 40.51 9.04 38.24 9.16 37.76 19.01 40.09 21.34 49.94 20.86 50.06"></polygon>
          <path d="M29.4,44.87l-.09,0-10.7-4.34-4.78-11,4.38-11.3L29.4,13.63l11.29,4.68L45.17,29.5l0,.1L40.49,40.49l-.1,0ZM19,40.11,29.4,44.33l10.71-4.22L44.63,29.5,40.31,18.69,29.4,14.17,18.59,18.59l-4.22,10.9Z"></path>
          <polygon points="56.11 40.83 49.91 38.33 50.09 37.87 56.29 40.37 56.11 40.83"></polygon>
          <rect
            x="5.5"
            y="16.19"
            width="0.5"
            height="6.82"
            transform="translate(-14.56 17.44) rotate(-67.57)"
          ></rect>
          <polygon points="38.13 9.1 37.67 8.9 40.37 2.6 40.83 2.8 38.13 9.1"></polygon>
          <polygon points="18.53 56.39 18.07 56.21 20.67 49.81 21.13 49.99 18.53 56.39"></polygon>
          <rect
            x="49.85"
            y="19.4"
            width="6.59"
            height="0.5"
            transform="translate(-3.48 21.6) rotate(-22.26)"
          ></rect>
          <rect
            x="2.35"
            y="38.95"
            width="6.91"
            height="0.5"
            transform="translate(-14.35 5.08) rotate(-22.15)"
          ></rect>
          <rect
            x="19.45"
            y="2.34"
            width="0.5"
            height="6.82"
            transform="translate(-0.7 7.95) rotate(-22.43)"
          ></rect>
          <rect
            x="38.95"
            y="49.84"
            width="0.5"
            height="6.72"
            transform="translate(-17.52 19.3) rotate(-22.75)"
          ></rect>
        </svg>
      ),
      name: "0",
    },
    // OVAL
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Oval</title>
          <path d="M19.4,59C8.7,59,0,45.77,0,29.5S8.7,0,19.4,0,38.8,13.23,38.8,29.5,30.1,59,19.4,59Zm0-58C9.25,1,1,13.79,1,29.5S9.25,58,19.4,58,37.8,45.21,37.8,29.5,29.55,1,19.4,1Z"></path>
          <polygon points="33.25 49.85 25.1 49.85 25.1 49.35 32.75 49.35 32.75 37.2 33.25 37.2 33.25 49.85"></polygon>
          <polygon points="33.25 21.8 32.75 21.8 32.75 9.65 25.1 9.65 25.1 9.15 33.25 9.15 33.25 21.8"></polygon>
          <polygon points="19.61 58.63 19.19 58.37 24.87 49.5 29.74 29.5 24.87 9.5 19.19 0.64 19.61 0.36 25.34 9.34 30.26 29.5 30.24 29.56 25.31 49.73 19.61 58.63"></polygon>
          <polygon points="38.09 29.64 32.82 21.98 18.94 13.1 24.89 9.23 27.17 3.21 27.64 3.39 25.3 9.56 25.23 9.61 19.86 13.1 33.21 21.66 38.51 29.36 38.09 29.64"></polygon>
          <polygon points="27.17 55.79 24.9 49.77 18.94 46 32.82 37.02 38.09 29.36 38.51 29.64 33.14 37.41 19.86 46 25.3 49.43 25.33 49.51 27.64 55.61 27.17 55.79"></polygon>
          <polygon points="33.1 22.03 32.9 21.57 37.1 19.67 37.3 20.13 33.1 22.03"></polygon>
          <polygon points="37.1 39.33 32.9 37.43 33.1 36.97 37.3 38.87 37.1 39.33"></polygon>
          <polygon points="13.7 49.85 5.55 49.85 5.55 37.2 6.05 37.2 6.05 49.35 13.7 49.35 13.7 49.85"></polygon>
          <polygon points="6.05 21.8 5.55 21.8 5.55 9.15 13.7 9.15 13.7 9.65 6.05 9.65 6.05 21.8"></polygon>
          <polygon points="19.19 58.63 13.46 49.66 8.54 29.5 8.56 29.44 13.49 9.27 19.19 0.36 19.61 0.64 13.93 9.5 9.06 29.5 13.93 49.5 19.61 58.37 19.19 58.63"></polygon>
          <polygon points="0.71 29.64 0.29 29.36 5.67 21.59 18.94 13.1 13.5 9.57 11.07 3.39 11.53 3.21 13.9 9.23 19.86 13.1 5.98 21.98 0.71 29.64"></polygon>
          <polygon points="11.53 55.79 11.07 55.61 13.5 49.43 13.57 49.39 18.94 46 5.59 37.34 0.29 29.64 0.71 29.36 5.98 37.02 19.86 46 13.9 49.77 11.53 55.79"></polygon>
          <rect
            x="3.45"
            y="18.55"
            width="0.5"
            height="4.61"
            transform="translate(-16.82 15.63) rotate(-65.66)"
          ></rect>
          <rect
            x="1.4"
            y="37.9"
            width="4.61"
            height="0.5"
            transform="translate(-15.41 4.92) rotate(-24.36)"
          ></rect>
        </svg>
      ),
      name: "3",
    },
    // EMERALD
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Emerald</title>
          <path d="M38.31,59H7.09L0,51.91V7.09L7.09,0H38.31L45.4,7.09V51.91ZM7.51,58H37.89l6.51-6.51v-44L37.89,1H7.51L1,7.51v44Z"></path>
          <rect
            x="32"
            y="6.25"
            width="3"
            height="0.5"
            transform="translate(8.22 29.42) rotate(-53.17)"
          ></rect>
          <rect
            x="9.8"
            y="2.48"
            width="0.5"
            height="3.14"
            transform="translate(-0.4 6.91) rotate(-37.23)"
          ></rect>
          <rect
            x="7.95"
            y="0.19"
            width="0.5"
            height="2.92"
            transform="translate(0.73 5.41) rotate(-38.05)"
          ></rect>
          <rect
            x="35.74"
            y="1.4"
            width="2.92"
            height="0.5"
            transform="translate(12.98 29.93) rotate(-51.97)"
          ></rect>
          <rect
            x="33.78"
            y="3.8"
            width="3.14"
            height="0.5"
            transform="translate(10.74 29.75) rotate(-52.77)"
          ></rect>
          <rect
            x="11.65"
            y="4.99"
            width="0.5"
            height="2.92"
            transform="translate(-1.45 8.7) rotate(-38.03)"
          ></rect>
          <rect
            x="33.25"
            y="51.09"
            width="0.5"
            height="2.92"
            transform="translate(-25.27 31.83) rotate(-38.06)"
          ></rect>
          <rect
            x="10.44"
            y="52.3"
            width="2.92"
            height="0.5"
            transform="translate(-36.8 29.49) rotate(-51.9)"
          ></rect>
          <polygon points="38.62 58.75 6.78 58.75 9 55.94 9.4 56.26 7.82 58.25 37.58 58.25 36 56.26 36.4 55.94 38.62 58.75"></polygon>
          <rect
            x="35.05"
            y="53.4"
            width="0.5"
            height="3"
            transform="translate(-25.88 32.16) rotate(-36.87)"
          ></rect>
          <rect
            x="8.6"
            y="54.65"
            width="3"
            height="0.5"
            transform="translate(-39.86 30) rotate(-53.09)"
          ></rect>
          <polygon points="37.03 12.21 36.77 11.79 39.47 10.19 39.73 10.62 37.03 12.21"></polygon>
          <rect
            x="43.35"
            y="49.45"
            width="0.5"
            height="3"
            transform="translate(-22.32 63.26) rotate(-60.02)"
          ></rect>
          <polygon points="39.47 48.81 36.77 47.22 37.03 46.78 39.73 48.38 39.47 48.81"></polygon>
          <rect
            x="42.1"
            y="7.8"
            width="3"
            height="0.5"
            transform="translate(1.81 22.85) rotate(-29.97)"
          ></rect>
          <polygon points="39.73 10.62 39.47 10.19 42.17 8.59 42.43 9.02 39.73 10.62"></polygon>
          <polygon points="42.17 50.41 39.47 48.81 39.73 48.38 42.43 49.98 42.17 50.41"></polygon>
          <rect
            x="0.28"
            y="50.65"
            width="3.14"
            height="0.5"
            transform="translate(-25.71 8.07) rotate(-30.68)"
          ></rect>
          <rect
            x="6.85"
            y="9.75"
            width="0.5"
            height="3"
            transform="translate(-6.19 11.78) rotate(-60.02)"
          ></rect>
          <rect
            x="3"
            y="49.1"
            width="3"
            height="0.5"
            transform="translate(-24.05 8.85) rotate(-29.97)"
          ></rect>
          <rect
            x="5.6"
            y="47.6"
            width="3"
            height="0.5"
            transform="translate(-22.95 9.94) rotate(-29.97)"
          ></rect>
          <rect
            x="4.25"
            y="8.17"
            width="0.5"
            height="3.05"
            transform="translate(-6.12 8.45) rotate(-58.39)"
          ></rect>
          <rect
            x="1.6"
            y="6.53"
            width="0.5"
            height="3.14"
            transform="matrix(0.51, -0.86, 0.86, 0.51, -6.06, 5.56)"
          ></rect>
          <polygon points="3.45 8.9 2.95 8.9 2.95 8.6 8.92 2.62 9.28 2.98 3.45 8.8 3.45 8.9"></polygon>
          <rect x="2.95" y="8.9" width="0.5" height="41.2"></rect>
          <polygon points="9.2 56.35 9 56.35 2.95 50.3 2.95 50.1 3.3 50.1 3.38 50.02 9.28 55.92 9.2 56 9.2 56.35"></polygon>
          <rect x="9.2" y="55.85" width="27" height="0.5"></rect>
          <rect
            x="39.05"
            y="1.56"
            width="0.5"
            height="8.49"
            transform="translate(7.41 29.49) rotate(-45)"
          ></rect>
          <rect x="9.1" y="2.55" width="27.2" height="0.5"></rect>
          <rect
            x="35.01"
            y="52.9"
            width="8.49"
            height="0.5"
            transform="translate(-25.91 42.24) rotate(-44.05)"
          ></rect>
          <rect x="42.05" y="8.8" width="0.5" height="41.4"></rect>
          <rect x="39.35" y="10.4" width="0.5" height="38.2"></rect>
          <polygon points="39.42 10.58 34.32 5.48 34.4 5.4 34.4 5.05 34.6 5.05 39.78 10.22 39.42 10.58"></polygon>
          <polygon points="5.97 10.58 5.9 10.5 5.55 10.5 5.55 10.29 10.82 5.12 11.18 5.48 5.97 10.58"></polygon>
          <rect x="11" y="5.05" width="23.4" height="0.5"></rect>
          <rect x="11" y="53.45" width="23.4" height="0.5"></rect>
          <rect x="5.55" y="10.5" width="0.5" height="38.1"></rect>
          <polygon points="34.58 53.88 34.23 53.52 39.42 48.42 39.77 48.78 34.58 53.88"></polygon>
          <polygon points="11 53.95 10.8 53.95 5.62 48.78 5.98 48.42 11.08 53.52 11 53.6 11 53.95"></polygon>
          <polygon points="8.22 47.28 8.05 47.1 8.05 12 8.22 11.82 8.5 12.1 8.55 12.1 8.55 47 8.5 47 8.22 47.28"></polygon>
          <polygon points="12.8 51.65 12.6 51.65 8.22 47.28 8.58 46.92 12.88 51.22 12.8 51.3 12.8 51.65"></polygon>
          <polygon points="32.42 7.88 32.4 7.85 12.8 7.85 12.8 7.35 32.6 7.35 32.78 7.52 32.5 7.8 32.5 7.85 32.42 7.88"></polygon>
          <rect
            x="7.49"
            y="9.55"
            width="6.22"
            height="0.5"
            transform="translate(-3.83 10.37) rotate(-45)"
          ></rect>
          <rect
            x="31.67"
            y="48.95"
            width="6.15"
            height="0.5"
            transform="translate(-24.72 39.64) rotate(-45.63)"
          ></rect>
          <rect x="12.8" y="51.15" width="19.8" height="0.5"></rect>
          <rect
            x="34.5"
            y="6.81"
            width="0.5"
            height="6.08"
            transform="translate(3.21 27.46) rotate(-45.01)"
          ></rect>
          <rect x="36.65" y="12" width="0.5" height="35"></rect>
        </svg>
      ),
      name: "4",
    },
    // MARQUISE
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Marquise</title>
          <path
            d="M15.3,59.19,15,58.94C14.84,58.82,0,46.7,0,29.85S14.83.39,15,.27L15.3,0l.32.27c.15.12,15,12.84,15,29.73s-14.84,28.82-15,28.94Zm0-57.87C13.15,3.25,1,14.86,1,29.85S13.18,56.06,15.3,57.9C17.43,56.09,29.6,45.05,29.6,30S17.45,3.27,15.3,1.32Z"
            transform="translate(0 0)"
          ></path>
          <polygon points="15.54 58.61 15.06 58.49 26.01 14.97 17.37 9.56 17.63 9.14 26.59 14.74 26.54 14.91 15.54 58.61"></polygon>
          <polygon points="17.73 50.17 17.47 49.74 26.01 44.73 15.06 0.71 15.54 0.59 26.59 44.97 17.73 50.17"></polygon>
          <polygon points="10.49 53.51 10.11 53.19 29.77 29.95 10.11 6.01 10.49 5.7 30.43 29.96 10.49 53.51"></polygon>
          <polygon points="15.06 58.61 4.11 14.74 13.07 9.14 13.33 9.56 4.69 14.97 15.54 58.49 15.06 58.61"></polygon>
          <polygon points="13.07 50.17 4.11 44.88 15.06 0.49 15.54 0.61 4.69 44.63 13.33 49.74 13.07 50.17"></polygon>
          <polygon points="20.31 53.51 0.27 29.86 20.11 5.7 20.49 6.01 0.93 29.85 20.69 53.19 20.31 53.51"></polygon>
        </svg>
      ),
      name: "7",
    },
    // CUSHION
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Cushion</title>
          <path d="M29,58,13.52,56.56,5.83,52.17,1.28,44.28,0,29,1.29,13.51,5.83,5.83l7.89-4.55L29,0,44.49,1.29l7.68,4.54,4.54,7.68L58,29,56.66,44.49l-4.49,7.68-7.79,4.45ZM13.91,55.65,29,57l15.14-1.37,7.27-4.2,4.3-7.36L57,29,55.75,13.82l-4.3-7.27-7.27-4.3L29,1l-15,1.27L6.55,6.55l-4.3,7.27L1,29,2.25,44.09l4.3,7.36Z"></path>
          <polygon points="15.93 52.05 5.95 52.05 5.95 42.08 6.44 42.08 6.44 51.56 15.93 51.56 15.93 52.05"></polygon>
          <polygon points="52.05 52.05 42.17 52.05 42.17 51.56 51.56 51.56 51.56 42.08 52.05 42.08 52.05 52.05"></polygon>
          <polygon points="52.05 15.73 51.56 15.73 51.56 6.44 42.17 6.44 42.17 5.95 52.05 5.95 52.05 15.73"></polygon>
          <polygon points="6.44 15.83 5.95 15.83 5.95 5.95 15.93 5.95 15.93 6.44 6.44 6.44 6.44 15.83"></polygon>
          <polygon points="29 13.25 15.81 6.41 16.04 5.97 29 12.7 42.06 5.97 42.29 6.41 29 13.25"></polygon>
          <rect
            x="47.53"
            y="35.29"
            width="14.26"
            height="0.49"
            transform="translate(0.3 71.53) rotate(-66.54)"
          ></rect>
          <polygon points="29.1 57.74 28.9 57.28 41.93 51.65 41.93 42.08 44.77 29 41.93 15.88 41.93 6.35 28.9 0.71 29.1 0.26 42.42 6.03 42.42 15.83 45.28 29 42.41 42.13 42.42 51.97 29.1 57.74"></polygon>
          <polygon points="15.68 52.22 15.68 42.08 12.82 29 12.83 28.95 15.69 15.77 15.68 6.03 28.9 0.27 29.1 0.71 16.17 6.35 16.17 15.83 13.32 29 16.16 42.02 16.17 51.4 29 44.65 42.29 51.59 42.06 52.03 29 45.2 15.68 52.22"></polygon>
          <rect
            x="22.22"
            y="47.53"
            width="0.49"
            height="14.26"
            transform="translate(-36.62 53.4) rotate(-66.44)"
          ></rect>
          <rect
            x="54.41"
            y="15.24"
            width="0.49"
            height="14.35"
            transform="translate(-4.41 23.56) rotate(-23.4)"
          ></rect>
          <path d="M29,45.18,15.87,42.32H6L.26,29.1l.45-.2,5.5,12.61L12.8,29l-7-13.42H15.92L29,12.72l.05,0,13.18,2.85h10L45.3,29l6.91,13.32h-10ZM6.6,41.83h9.32L29,44.68l13.12-2.84H51.4L44.75,29l.06-.11,6.6-12.82H42.17L29,13.23,16,16.07H6.6L13.35,29Z"></path>
          <rect
            x="-3.84"
            y="22.17"
            width="14.35"
            height="0.49"
            transform="translate(-18.56 16.59) rotate(-66.64)"
          ></rect>
          <rect
            x="3.73"
            y="12.28"
            width="0.49"
            height="4.92"
            transform="translate(-11.01 11.84) rotate(-63.94)"
          ></rect>
          <rect
            x="14.6"
            y="1.52"
            width="0.49"
            height="4.92"
            transform="translate(-0.24 6.92) rotate(-26.06)"
          ></rect>
          <rect
            x="40.79"
            y="3.73"
            width="4.92"
            height="0.49"
            transform="translate(20.67 41.09) rotate(-63.94)"
          ></rect>
          <polygon points="51.92 16.05 51.7 15.61 56.13 13.44 56.34 13.88 51.92 16.05"></polygon>
          <polygon points="56.13 44.46 51.7 42.3 51.92 41.85 56.34 44.02 56.13 44.46"></polygon>
          <polygon points="44.12 56.24 41.95 51.92 42.39 51.7 44.56 56.02 44.12 56.24"></polygon>
          <polygon points="13.98 56.24 13.54 56.02 15.71 51.7 16.14 51.92 13.98 56.24"></polygon>
          <rect
            x="1.52"
            y="42.91"
            width="4.92"
            height="0.49"
            transform="translate(-18.56 6.14) rotate(-26.06)"
          ></rect>
        </svg>
      ),
      name: "2",
    },
    // PEAR
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Pear</title>
          <path
            d="M18.8,59.17C8.26,59.17,0,50.6,0,39.67,0,31.17,2.4,14.76,18.47.3L18.8,0l.34.3C35.2,14.87,37.6,31.22,37.6,39.67,37.6,50.6,29.34,59.17,18.8,59.17Zm0-57.82C3.32,15.47,1,31.4,1,39.67,1,50,8.82,58.17,18.8,58.17S36.6,50,36.6,39.67C36.6,31.45,34.28,15.58,18.8,1.35Z"
            transform="translate(0 0)"
          ></path>
          <path
            d="M33.73,51.52H3.87L18.8,0ZM4.53,51H33.07L18.8,1.81Z"
            transform="translate(0 0)"
          ></path>
          <path
            d="M18.8,47.64,6.71,42.8.14,38l.17-.21L18.48,15.46,12.11,7.63l.38-.32,6.31,7.76,6.31-7.76.38.32-6.37,7.83L37.46,38,31,42.8ZM.86,37.92,7,42.37,18.8,47.1l12-4.75,6-4.43L18.8,15.86Z"
            transform="translate(0 0)"
          ></path>
          <polygon points="10.6 56.73 10.2 56.42 14.2 51.12 18.79 47.05 23.7 51.13 27.41 56.43 27 56.72 23.31 51.44 18.8 47.7 14.57 51.46 10.6 56.73"></polygon>
          <polygon points="18.79 59.15 14.19 51.4 8.66 35.15 7.06 29.75 5.94 16.63 15.48 11.36 15.72 11.79 6.46 16.91 7.55 29.65 9.14 35 14.64 51.19 18.81 58.2 23.27 51.17 25.36 44.6 28.77 36.18 30.05 29.63 31.14 16.72 21.78 11.79 22.02 11.35 31.66 16.43 30.55 29.7 29.25 36.32 25.83 44.77 23.71 51.41 18.79 59.15"></polygon>
        </svg>
      ),
      name: "6",
    },
    // TRILLION
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Trillion</title>
          <path
            d="M29.58,56C8.76,55.67.63,50.51.3,50.29l-.3-.2.09-.35C10.12,11.11,29.14.24,29.33.13L29.57,0l.24.13C30,.23,49,11,59.05,49.75l.1.35-.31.19C58.5,50.51,50.38,55.57,29.58,56ZM1.15,49.63c1.66.92,10.14,5.08,28.43,5.34,18.26-.35,26.74-4.43,28.41-5.34C48.65,14,31.79,2.52,29.57,1.15,27.36,2.54,10.47,14.1,1.15,49.63Z"
            transform="translate(0 0)"
          ></path>
          <polygon points="10.82 53.37 10.32 53.37 10.34 48.98 29.34 0.48 29.81 0.66 10.82 49.12 10.82 53.37"></polygon>
          <polygon points="0.77 49.93 0.38 49.61 28.46 15.06 22.27 6.62 22.68 6.32 29.09 15.08 28.97 15.23 0.77 49.93"></polygon>
          <polygon points="8.02 41.01 7.53 40.93 10.34 23.24 25.41 10.48 25.74 10.86 10.81 23.5 8.02 41.01"></polygon>
          <polygon points="2.22 50.92 2.13 50.42 27.91 45.53 2.65 42.62 2.7 42.12 31.23 45.41 2.22 50.92"></polygon>
          <rect x="28.77" y="14.82" width="0.8" height="0.5"></rect>
          <polygon points="29.5 55.71 10.49 49.31 10.65 48.83 29.65 55.23 29.5 55.71"></polygon>
          <polygon points="48.83 53.37 48.33 53.37 48.33 49.12 29.34 0.66 29.81 0.48 48.83 49.07 48.83 53.37"></polygon>
          <polygon points="58.38 49.93 29.96 15.08 36.47 6.32 36.88 6.62 30.59 15.06 58.77 49.61 58.38 49.93"></polygon>
          <polygon points="51.13 41.01 48.34 23.5 33.41 10.86 33.74 10.48 48.81 23.24 51.62 40.93 51.13 41.01"></polygon>
          <polygon points="56.93 50.92 27.91 45.41 56.45 42.12 56.5 42.62 31.23 45.53 57.02 50.42 56.93 50.92"></polygon>
          <rect x="29.57" y="14.82" width="0.7" height="0.5"></rect>
          <rect
            x="29.05"
            y="52.02"
            width="20.05"
            height="0.5"
            transform="translate(-14.59 15.14) rotate(-18.54)"
          ></rect>
        </svg>
      ),
      name: "5",
    },
    // ASSCHER
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Asscher</title>
          <path
            className="cls-1"
            d="M46.57,59H12.43L.07,46.57,0,12.7,12.42,0H46.58L59,12.7V46.57ZM12.84,58H46.16L58,46.16V13.1L46.16,1H12.84L1,13.1l.07,33.06Z"
            transform="translate(0 0)"
          ></path>
          <rect
            className="cls-1"
            x="52.33"
            y="36.29"
            width="0.74"
            height="13.41"
            transform="translate(-10.94 66.99) rotate(-59.87)"
          ></rect>
          <rect
            className="cls-1"
            x="6.05"
            y="9.54"
            width="0.5"
            height="13.38"
            transform="translate(-10.91 13.61) rotate(-60.11)"
          ></rect>
          <rect
            className="cls-1"
            x="-0.34"
            y="42.75"
            width="13.35"
            height="0.5"
            transform="translate(-20.81 9.06) rotate(-30.27)"
          ></rect>
          <polygon
            className="cls-1"
            points="47.02 19.78 46.77 19.35 58.38 12.68 58.63 13.12 47.02 19.78"
          ></polygon>
          <rect
            className="cls-1"
            x="36.26"
            y="6.08"
            width="13.47"
            height="0.5"
            transform="translate(16.04 40.42) rotate(-60.03)"
          ></rect>
          <rect
            className="cls-1"
            x="9.32"
            y="52.48"
            width="13.35"
            height="0.5"
            transform="translate(-37.61 39.97) rotate(-59.73)"
          ></rect>
          <polygon
            className="cls-1"
            points="46.15 58.63 39.48 47.09 39.92 46.84 46.58 58.38 46.15 58.63"
          ></polygon>
          <rect
            className="cls-1"
            x="15.78"
            y="-0.42"
            width="0.5"
            height="13.5"
            transform="matrix(0.86, -0.5, 0.5, 0.86, -1.01, 8.94)"
          ></rect>
          <path
            className="cls-1"
            d="M44.47,55.28H14.53l-.07-.07L3.85,44.4v-.1L3.78,14.86l10.88-11H44.41l10.81,11V44.4Zm-29.73-.5H44.26L54.72,44.2V15L44.2,4.35H14.87L4.28,15.07,4.35,44.2Z"
            transform="translate(0 0)"
          ></path>
          <path
            className="cls-1"
            d="M42.14,51.28H16.86l-.07-.07-9-9.14V17.13l9.15-9.28H42.07l9.15,9.21v25Zm-25.07-.5H41.93l8.79-8.92V17.27L41.86,8.35H17.14l-8.86,9V41.86Z"
            transform="translate(0 0)"
          ></path>
          <path
            className="cls-1"
            d="M39.8,47.22H19.26l-7.41-7.48V19.46l7.48-7.54H39.74l.07.07,7.34,7.47V39.74Zm-20.33-.5H39.6l7-7.19V19.67l-7.12-7.25h-20l-7.19,7.25V39.53Z"
            transform="translate(0 0)"
          ></path>
        </svg>
      ),
      name: "8",
    },
    // PRINCESS
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <title>Princess</title>
          <path d="M57.94,58H0V0H57.94ZM1,57H57V1H1Z"></path>
          <path d="M.59,57.74l-.3-.29L16.71,17l.1-.1L57.34.29l.31.3L41.13,40.84l-.1.09ZM17.11,17.2.89,57,40.74,40.54,57,1Z"></path>
          <path d="M57.34,57.74,17.11,41.23l-.1-.1L.29.59l.3-.3L41.43,16.91l.09.1,16.13,40.3ZM17.4,40.84,57,57,41.13,17.3.89,1Z"></path>
          <polygon points="17.3 17.01 16.81 17.01 16.81 7.31 17.11 7.02 41.13 7.02 41.13 7.51 17.3 7.51 17.3 17.01"></polygon>
          <rect x="40.84" y="7.02" width="0.49" height="9.99"></rect>
          <rect x="41.13" y="16.81" width="9.59" height="0.49"></rect>
          <rect x="50.52" y="16.71" width="0.49" height="24.22"></rect>
          <rect x="40.54" y="40.64" width="10.28" height="0.49"></rect>
          <polygon points="41.13 51.02 16.71 51.02 16.71 50.53 40.84 50.53 40.84 40.34 41.33 40.34 41.33 50.73 41.13 51.02"></polygon>
          <rect x="16.81" y="40.54" width="0.49" height="10.09"></rect>
          <rect x="7.22" y="40.64" width="9.99" height="0.49"></rect>
          <polygon points="7.61 40.44 7.12 40.44 7.12 17.01 7.41 16.81 16.91 16.81 16.91 17.3 7.61 17.3 7.61 40.44"></polygon>
        </svg>
      ),
      name: "1",
    },
    // RADIANT
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 70"
          fill="none"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6 mx-2 hover:text-indigo-700 cursor-pointer my-2 scale-150"
        >
          <path d="M40.11,58H6.67L0,51.36V6.16L6.16,0H40.65l6.1,6.11V51.36Zm-33-1H39.71L45.77,51V6.51L40.24,1H6.56L1,6.56V51Z"></path>
          <path d="M36.75,53H10.44L5.25,47.57V10.43l5.48-5.69H35.89l6,5.64V47.57Zm-26.1-.49H36.54l4.88-5.09V10.59L35.69,5.23H10.94l-5.2,5.4V47.38Z"></path>
          <path d="M.64,51.35.35,51l4.94-3.64c.45-1.42,7-22.61,5.31-42.22L6.19.66,6.53.32l4.54,4.56V5C12.86,25.3,5.8,47.33,5.73,47.55l0,.08Z"></path>
          <path d="M7.07,57.66l-.39-.3,3.62-4.73c.09-1.54,1.41-26-5-41.95l-5-4.13.32-.38,5.08,4.27c6.66,16.44,5.07,42,5.06,42.29v.08Z"></path>
          <path d="M46.11,51.35l-4.65-3.72,0-.07C34.91,30.21,35.54,5.23,35.54,5v-.1L40.27.31l.34.36L36,5.09c0,1.75-.41,25.54,5.84,42.24L46.41,51Z"></path>
          <path d="M39.71,57.65l-3.31-4.9c-2.49-18,5-42.1,5-42.34l0-.06L46.1,6.13l.33.36-4.55,4.13c-.43,1.39-7.39,24.6-5,42l3.23,4.75Z"></path>
          <path d="M10.64,52.94l-.19-.45c.19-.08,19.05-7.81,31.26-5.26l-.1.49C29.55,45.2,10.82,52.86,10.64,52.94Z"></path>
          <path d="M36.65,52.94c-.18-.08-18.91-7.74-31-5.22l-.1-.49c12.21-2.54,31.07,5.18,31.26,5.26Z"></path>
          <path d="M10.79,11.19a27,27,0,0,1-5.48-.51l.1-.48C17.47,12.71,35.51,5.05,35.69,5l.2.45C35.73,5.49,22.31,11.19,10.79,11.19Z"></path>
          <path d="M36.21,11.19c-11.6,0-25.31-5.7-25.47-5.77L10.93,5c.19.08,18.61,7.74,30.68,5.23l.1.48A27.11,27.11,0,0,1,36.21,11.19Z"></path>
        </svg>
      ),
      name: "9",
    },
  ];
  return (
    <div>
      <div className="mb-2 text-center font-bold text-gray-600">Shape</div>

      <div className="flex flex-wrap justify-start w-full items-stretch">
        {shapes.map((shape, i) => {
          return (
            <div
              key={i}
              className={`${
                currentShapeOptions.includes(shape.name)
                  ? "text-indigo-700 border-indigo-700 border-b-2"
                  : "text-gray-600"
              }`}
              onClick={() => {
                if (currentShapeOptions.includes(shape.name)) {
                  setCurrentShapeOptions(
                    currentShapeOptions.filter((op) => {
                      return op !== shape.name;
                    })
                  );
                } else {
                  setCurrentShapeOptions((currentShapeOptions) => [
                    ...currentShapeOptions,
                    shape.name,
                  ]);
                }
              }}
            >
              {shape.svg}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShapeSelector;
