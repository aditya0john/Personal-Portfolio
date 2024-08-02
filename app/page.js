"use client";
import Cards from "@/components/cards";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  let [value, setValue] = useState(null);
  let [theme, setTheme] = useState(false);

  function newtheme() {
    if (theme == false) {
      setTheme(true);
    } else if (theme == true) {
      setTheme(false);
    }
  }
  function select(newValue) {
    setValue((prevValue) => (prevValue === newValue ? null : newValue));
  }

  return (
    <div className={theme == false ? "container_black" : "container_white"}>
      <div className="flex flex-col items-center justify-center h-screen select-none overflow-hidden">
        <audio autoPlay loop>
          <source src="/Rain.mp3" type="audio/ogg"></source>
        </audio>
        <div className="md:flex items-center justify-center about_div">
          <div
            className={
              value == 2 ? "grid grid-cols-3 gap-5 scale-95" : "hidden"
            }
          >
            <div class="card">
              <div class="card-inner">
                <div class="card-front flex gap-5 flex-col">
                  <p>E-Learning wesbsite</p>
                  <Image
                    className="rounded-lg"
                    src="/images/E-learning.png"
                    height={400}
                    width={400}
                  ></Image>
                </div>
                <div class="card-back">
                  <p>Back Side</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-inner bg-purple-300 rounded-lg">
                <div class="card-front flex gap-5 flex-col">
                  <p>E-Learning wesbsite</p>
                  <Image
                    className="rounded-lg"
                    src="/images/E-learning.png"
                    height={400}
                    width={400}
                  ></Image>
                </div>
                <div class="card-back">
                  <p>Back Side</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-inner">
                <div class="card-front flex gap-5 flex-col">
                  <p>E-Learning wesbsite</p>
                  <Image
                    className="rounded-lg"
                    src="/images/E-learning.png"
                    height={400}
                    width={400}
                  ></Image>
                </div>
                <div class="card-back">
                  <p>Back Side</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            className={value == 2 ? "hidden" : "grayscale z-[1]"}
            src={"/images/Me1.png"}
            alt="MY IMAGE"
            width={500}
            height={500}
          />
          <div>
            <div className={value == 2 ? "flex gap-10 about" : "hidden"}></div>
            <div
              className={
                value == 1 && theme == true
                  ? "pl-4 !text-black rounded-lg uppercase font-bold about"
                  : value == 1 && theme == false
                  ? "pl-4 !text-zinc-200 rounded-lg uppercase font-bold about"
                  : "hidden"
              }
              style={{ fontSize: 60 }}
            >
              ADITYA JOHN
              <hr
                className={
                  theme == true
                    ? "border border-2 border-black"
                    : "border border-2"
                }
              />
              <p className="capitalize" style={{ fontSize: 20 }}>
                full stack web developer
              </p>
            </div>

            <p
              className={
                value == 1 && theme == true
                  ? "rounded-lg text-justify rounded-lg mt-10 ml-10 mr-10 about text-black"
                  : value == 1 && theme == false
                  ? "rounded-lg text-justify rounded-lg mt-10 ml-10 mr-10 about text-white"
                  : "hidden"
              }
              style={{ fontSize: 20 }}
            >
              <span> I am a</span>
              <span className="bg-sky-100 text-zinc-600 p-1 rounded-lg ml-2">
                smart working
              </span>
              ,
              <span className="bg-sky-100 text-zinc-600 p-1 rounded-lg ml-2">
                passionate
              </span>
              ,
              <span className="bg-sky-100 text-zinc-600 p-1 rounded-lg ml-2">
                resourceful
              </span>
              ,
              <span className="bg-sky-100 text-zinc-600 p-1 rounded-lg ml-2">
                innovative
              </span>
              ,
              <span className="bg-sky-100 text-zinc-600 p-1 rounded-lg ml-2">
                flexible
              </span>
              , and
              <span className="bg-sky-100 text-zinc-600 p-1 rounded-lg ml-2">
                enthusiastic person
              </span>
              <span>
                {" "}
                . I have an impressive track record of delivering major tasks,
                improvising a situation, schedules and resources for optimum
                productivity, efficiency, and quality. Keen to find a
                challenging position within an ambitious company where I will be
                able to continue increasing my skills and wisdom. I am ready to
                give my very best on any work given to me.
              </span>
            </p>
          </div>
        </div>
        <div className="mt-10 gap-4 flex items-center justify-center">
          <button
            className={
              theme == false
                ? "bg-zinc-400 p-2 rounded-full box"
                : "bg-zinc-800 p-2 rounded-full box"
            }
            onClick={() => newtheme()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
              class="w-8 h-8"
            >
              <path
                d={
                  theme == false
                    ? "M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
                    : "M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                }
              />
            </svg>
          </button>
          <div>
            <div className="flex bg-gray-500 rounded-full p-1 sticky top-1">
              <button
                className={
                  value == 1
                    ? " rounded-l-full p-3 text-black indicator box"
                    : " rounded-l-full p-3 "
                }
                onClick={() => select(1)}
              >
                ABOUT ME
              </button>

              <button
                className={
                  value == 2
                    ? "rounded-r-full p-3 text-black indicator box"
                    : "rounded-r-full p-3"
                }
                onClick={() => select(2)}
              >
                MY WORKS SO FAR
              </button>
            </div>
          </div>
          <div>
            <ul class="wrapper">
              <li class="icon github box">
                <span class="tooltip text-black">GitHub</span>
                <Link href="https://github.com/aditya0john?tab=repositories">
                  <span>
                    <svg
                      class="w-10 h-10 text-white dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                    <i class="fab fa-facebook-f"></i>
                  </span>
                </Link>
              </li>
              <li class="icon LinkedIn box">
                <span class="tooltip">linkedIn</span>
                <Link href="https://www.linkedin.com/in/aditya-john-9793a5217/">
                  <span>
                    <svg
                      class="w-10 h-10 text-white dark:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                    <i class="fab fa-twitter"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
