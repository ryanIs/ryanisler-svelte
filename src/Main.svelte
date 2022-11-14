<script lang="ts">
  /**
   * Main.svelte
   *
   * This is the main svelte file which has the top-level view for the site.
   */
  import "uikit/dist/css/uikit.min.css"
  import HeaderGraphic from "./components/HeaderGraphic.svelte"
  import Project from "./components/Project.svelte"
  import Experiment from "./components/Experiment.svelte"
  import Current from "./components/Current.svelte"

  // import UIKit from 'uikit'

  // on production: will get project data JSON from /json

  let projects = {
    projects: [
      // {
      //   "title": "",
      //   "description": "",
      //   "startDate": "",
      //   "endDate": "",
      //   "technologiesUsed": [
      //     "", "", ""
      //   ],
      //   "image": "/portfolio-files/projects/"
      // },
      {
        title: "Personal Website",
        description:
          "I created a custom website for showcasing my other digital works. These projects include web games, original music and more.",
        startDate: "2013-09-01",
        endDate: "",
        technologiesUsed: ["Vue", "JSON", "HTML5", "CSS3", "JavaScript"],
        productLink: "http://www.ryanisler.com",
        productCode: "https://github.com/ryanIs/ryanisler-com",
        image: "/portfolio-files/projects/ryanisler-new.png",
        imageStyle: "",
      },
      {
        title: "RuneScape Item Tracker",
        description:
          "This application is an add-on for the MMORPG RuneScape. It acts as a virtual grand exchange viewer. RuneScape Item Tracker allows users to easily view item data such as exchange price, stock market ratings and more. ",
        startDate: "",
        endDate: "2019-10-01",
        technologiesUsed: ["Vue", "SASS", "API"],
        productLink: "http://ryanisler.com/projects/runescape-2007-item-tracker",
        productCode: "https://github.com/ryanIs/runescape-2007-item-tracker",
        image: "/portfolio-files/projects/runescape-item-tracker.png",
        imageStyle: "",
      },
      {
        title: "Mortal Kombat 11 Helper",
        description:
          "Mortal Kombat 11 Helper provides on-the-go frame-data and move input. As a MK11 player, I love having this application to have on-hand while playing against other players.",
        startDate: "",
        endDate: "2019-07-01",
        technologiesUsed: ["Vue", "JSON"],
        productLink: "http://ryanisler.com/projects/mk11",
        productCode: "https://github.com/ryanIs/mk11",
        image: "/portfolio-files/projects/mortal-kombat-11-helper.png",
        imageStyle: "",
      },
      {
        title: "Simple Calculator",
        description: "This calculator was a fun application I built to test out designing my own unique calculator UX.",
        startDate: "",
        endDate: "2018-11-01",
        technologiesUsed: ["React"],
        productLink: "http://ryanisler.com/projects/calculator",
        productCode: "https://github.com/ryanIs/calculator",
        image: "/portfolio-files/projects/simple-calculator.png",
        imageStyle: "",
      },
      {
        title: "Easy Notecards",
        description: "Easy notecards is a simple way to memorize things. It uses a two-sided data model.",
        startDate: "",
        endDate: "2018-11-01",
        technologiesUsed: ["Angular", "Node", "JSON"],
        productLink: "",
        productCode: "",
        image: "/portfolio-files/projects/easy-notecards.png",
        imageStyle: "border: 1px solid #eee",
      },
      {
        title: "Expense Tracker",
        description: "Expense Tracker is a very simple mobile application that tracks your expenses. ",
        startDate: "",
        endDate: "2018-07-01",
        technologiesUsed: ["React", "Mobile Development"],
        productLink: "http://ryanisler.com/projects/expense-tracker",
        productCode: "https://github.com/ryanIs/Expense-Tracker",
        image: "/portfolio-files/projects/expense-tracker.png",
        imageStyle: "",
      },
      {
        title: "Homework Note",
        description:
          "Homework Note is a simple application I built for assisting my personal studies. This application helps with assignment planning.",
        startDate: "",
        endDate: "2018-07-01",
        technologiesUsed: ["React"],
        productLink: "",
        productLink__NOT_WORKING: "http://www.ryanisler.com/projects/homework-note",
        productCode: "https://github.com/ryanIs/HomeworkNote",
        image: "/portfolio-files/projects/homework-note.png",
        imageStyle: "",
      },
      {
        title: "TeamSolve",
        description:
          "TeamSolve is a game designed to get people to work together. It is developed for mobile devices, however can be played on desktop too. Players earn puzzle pieces and colors by completing local puzzles.",
        startDate: "2016-09-04",
        endDate: "2017-05-24",
        technologiesUsed: ["JavaScript", "Bootstrap", "PHP", "MySQL"],
        productLink: "http://www.ryanisler.com/ts",
        productCode: "https://github.com/ryanIs/TeamSolve",
        image: "/portfolio-files/projects/teamsolve-main.png",
        imageStyle: "border: 1px solid #eee",
      },
    ],
    experiments: [
      {
        title: "Hearthstone Book",
        description:
          "Hearthstone Book is a helper application I designed for viewing cards quickly. This project utilizes a custom API with unique card data.",
        startDate: "",
        endDate: "2019-07-01",
        technologiesUsed: ["Vue", "JSON", "API"],
        productLink: "http://ryanisler.com/projects/hearthstone-book",
        productCode: "https://github.com/ryanIs/Hearthstone_Book",
        image: "/portfolio-files/experiments/hearthstone-book.png",
        imageStyle: "",
      },
      {
        title: "Colorful Brushes",
        description:
          "Colorful brushes is a simple CRUD application built using Backbone. This fun project approaches the cart feature of an eCommerence site in a simple manner. ",
        startDate: "",
        endDate: "2019-02-01",
        technologiesUsed: ["Backbone", "LESS", "Require"],
        productLink: "http://ryanisler.com/experiments/colorful-brushes",
        productCode: "https://github.com/ryanIs/ColorfulBrushes",
        image: "/portfolio-files/experiments/colorful-brushes.png",
        imageStyle: "",
      },
      {
        title: "Personal Site - Mock-up",
        description:
          "This website showcases an example of a design concept I was working with for my new personal online portfolio. ",
        startDate: "",
        endDate: "2017-07-01",
        technologiesUsed: ["JavaScript", "CSS3", "HTML5"],
        productLink: "http://ryanisler.com/experiments/ryanisler",
        productCode: "",
        image: "/portfolio-files/experiments/personal-site.png",
        imageStyle: "border: 1px solid #eee",
      },
      {
        title: "Storied Spaces",
        description:
          "Storied Spaces is a mobile application designed for Hamline University students. Digital Media Arts students pair up with Creative Writing students to create unique websites that showcase student's writings. Google Maps API allows users to travese throughout campus to access the sites.",
        startDate: "",
        endDate: "2017-04-01",
        technologiesUsed: ["JavaScript", "PHP", "MySQL"],
        productLink: "",
        productLink__Prof_Removed_It: "https://dma.hamline.edu/storied-spaces/",
        productCode: "",
        image: "/portfolio-files/experiments/storied-spaces.png",
        imageStyle: "",
      },
      {
        title: "Abstraction Generation",
        description:
          "Abstraction generation is a digital art tool I created for the purpose of making wicked cool 2D art with very little input. Designs used as an overlay for images in a final project in my photography course at Hamline.",
        startDate: "",
        endDate: "2016-12-01",
        technologiesUsed: ["AS3", "Graphic Design"],
        productLink: "https://dma.hamline.edu/~risler01/tools/generate",
        productCode: "",
        image: "/portfolio-files/experiments/abstraction-generation.png",
        imageStyle: "",
      },
      {
        title: "Comfort Zone",
        description:
          "Comfort zone is an HTML5 web game created to begin exploring the world of canvas development. Comfort Zone shows poetry as you progress throughout the web game. Each level changes the amount of space the user has to move around in.",
        startDate: "",
        endDate: "2016-10-01",
        technologiesUsed: ["JavaScript", "CSS3", "HTML5"],
        productLink: "https://dma.hamline.edu/~risler01/advWebDesign/ComfortZone",
        productCode: "",
        image: "/portfolio-files/experiments/comfort-zone.png",
        imageStyle: "",
      },
      {
        title: "Zelda Lost Definitions",
        description:
          "Zelda - Lost Definitions is a (flash) project built using the Scratch libaray. It was very fun to code using a visual programming language.",
        startDate: "",
        endDate: "2015-11-01",
        technologiesUsed: ["Scratch", "JavaScript", "CSS3", "HTML5"],
        productLink: "https://dma.hamline.edu/~risler01/digitalMediaArts/projects/project-3/scratch.html",
        productCode: "https://scratch.mit.edu/projects/58824298",
        image: "/portfolio-files/experiments/zelda.png",
        imageStyle: "border: 1px solid #eee",
      },
      {
        title: "Hypercube",
        description: "Hypercube is a cool online info site explaining one of my favorite things: 4D (spatial) objects.",
        startDate: "",
        endDate: "2015-10-01",
        technologiesUsed: ["JavaScript", "CSS3", "HTML5"],
        productLink: "https://dma.hamline.edu/~risler01/webDesign/projects/Project3",
        productCode: "",
        image: "/portfolio-files/experiments/hypercube.png",
        imageStyle: "",
      },
      {
        title: "Piano App",
        description:
          "This piano app was built as a simple and fast way to hear musical ideas. As a musician, I am always coming up with new ideas. Having this player helps quickly notate a song idea.",
        startDate: "",
        endDate: "2013-12-01",
        technologiesUsed: ["AS2", "Music"],
        productLink: "http://ryanisler.com/experiments/piano",
        productCode: "",
        image: "/portfolio-files/experiments/piano.png",
        imageStyle: "",
      },
      {
        title: "Applicants Application",
        description:
          "This flash experiment tested opening an XML file using flash. The focus is purely on presentation of external data and UX.",
        startDate: "",
        endDate: "2013-12-01",
        technologiesUsed: ["AS3", "XML", "UI/UX"],
        productLink: "http://ryanisler.com/experiments/applicants",
        productCode: "",
        image: "/portfolio-files/experiments/applicants.png",
        imageStyle: "",
      },
      {
        title: "Stone Quest",
        description:
          "This is a C++ console game. It was adapted from a version I designed on a TI-89 calculator. There are an amazing number of things you can with simple logic.",
        startDate: "",
        endDate: "2013-11-01",
        technologiesUsed: ["C++", "Game Dev", "Shell App", "TI-83"],
        productLink: "",
        productCode: "https://github.com/ryanIs/stone-quest",
        image: "/portfolio-files/experiments/stone-quest.png",
        imageStyle: "",
      },
      {
        title: "Chord Player",
        description:
          "This application makes use of the windows default beep function. It reads a text file with notes (written out) and plays it using a special frequency converter function I wrote.",
        startDate: "",
        endDate: "2013-10-01",
        technologiesUsed: ["C++", "Game Dev", "Shell App"],
        productLink: "",
        productCode: "https://github.com/ryanIs/chord-player",
        image: "/portfolio-files/experiments/chord-player.png",
        imageStyle: "",
      },
      {
        title: "Isler Brothers - Mock-up",
        description:
          "Isler Brothers is a collaberation website that was in the works a while ago. This is one of the many site concepts we went through.",
        startDate: "",
        endDate: "2013-06-01",
        technologiesUsed: ["JavaScript", "CSS3", "HTML5"],
        productLink: "http://ryanisler.com/experiments/islerbrothers-mock/index.html",
        productCode: "",
        image: "/portfolio-files/experiments/isler-brothers.png",
        imageStyle: "",
      },
      {
        title: "Japanese App",
        description:
          "This application was built for personal use. While learning Japanese, I built an application to assist in learning the hiragana alphabet.",
        startDate: "",
        endDate: "2012",
        technologiesUsed: ["AS3", "Japanese"],
        productLink: "http://ryanisler.com/experiments/japanese",
        productCode: "",
        image: "/portfolio-files/experiments/japanese.png",
        imageStyle: "",
      },
      {
        title: "YouDraw",
        description:
          "YouDraw is a fun application I created to create unique digital imagery. The ability to spin MovieClips while drawing allowed for an interesting canvas to create. This is a great application where programming meets art.",
        startDate: "",
        endDate: "2011-08-01",
        technologiesUsed: ["AS3"],
        productLink: "http://ryanisler.com/experiments/youdraw",
        productCode: "",
        image: "/portfolio-files/experiments/youdraw.png",
        imageStyle: "",
      },
      {
        title: "Math Quiz",
        description:
          "Math Quiz is a fun game I designed back in 2010. The development objective was to create a simple game using fun colors and in-game goals.",
        startDate: "",
        endDate: "2010-06-01",
        technologiesUsed: ["AS3", "Game Dev", "Music Comp"],
        productLink: "http://ryanisler.com/experiments/math-quiz",
        productCode: "",
        image: "/portfolio-files/experiments/math-quiz.png",
        imageStyle: "",
      },
    ],
    current: [
      {
        title: "Legends of Runeterra Helper",
        description: "A simple helpful card tracker for the card game, Legends of Runeterra, by Riot Games.",
        startDate: "2022-10-01",
        endDate: "",
        technologiesUsed: ["TypeScript", "React", "SASS", "Node"],
        productLink: "",
        productCode: "",
        image: "/portfolio-files/projects/lor-helper.png",
        imageStyle: "",
      },
      {
        title: "Stone King Franchise API",
        description:
          "A custom-built API for my original Stone King games. An easy way for developers to quickly access data like item/quest data through an API.",
        startDate: "2022-07-01",
        endDate: "",
        technologiesUsed: ["Go", "PostgreSQL", "REST"],
        productLink: "",
        productCode: "",
        image: "/portfolio-files/projects/stone-king-api.png",
        imageStyle: "",
      },
      {
        title: "Food Items",
        description: "A small application useful for tracking your must-have food items.",
        startDate: "2021-04-01",
        endDate: "",
        technologiesUsed: ["Angular", "", ""],
        productLink: "",
        productCode: "",
        image: "/portfolio-files/projects/food-items.png",
        imageStyle: "",
      },
    ],
    misc: {},
  }

  let thisYear = new Date().getFullYear()
</script>

<div class="main-wrapper" id="projects">
  <!-- <div style="height: 30px;"></div> -->

  <nav class="uk-navbar-container" uk-navbar>
    <div class="top-left-floating">
      <a href="https://github.com/ryanIs" target="_blank" rel="noreferrer" title="View my GitHub proejcts!">
        <img src="/portfolio-files/other/github.svg" alt="Git" />
      </a>

      <a
        href="https://www.linkedin.com/in/ryan-isler-184907ba/"
        target="_blank"
        rel="noreferrer"
        title="View my LinkedIn!"
      >
        <img class="non-first-img" src="/portfolio-files/other/linkedin.svg" alt="Git" />
      </a>
    </div>

    <div class="uk-navbar-center">
      <ul class="uk-navbar-nav">
        <li>
          <a href="#projects" class="uk-active">&#10043; Projects</a>
        </li>
        <li>
          <a href="#experiments">&#10023; Experiments</a>
        </li>
        <li>
          <a href="#current">&#10018; Current</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="header">
    <HeaderGraphic />
  </div>

  <div class="content-wrapper">
    <div class="projects uk-grid uk-flex uk-flex-around">
      {#if projects != null}
        {#each projects["projects"] as project}
          <Project {project} />
        {/each}
      {/if}
    </div>

    <div class="experiments uk-grid uk-flex uk-flex-around" id="experiments">
      {#if projects != null}
        {#each projects["experiments"] as experiment}
          <Experiment {experiment} />
        {/each}
      {/if}
    </div>

    <div class="current uk-grid uk-flex uk-flex-around" id="current">
      {#if projects != null}
        {#each projects["current"] as current}
          <Current project={current} />
        {/each}
      {/if}
    </div>
  </div>

  <footer>
    <p class="follow">Ryan Isler - {thisYear}</p>
    <div class="footer-links uk-flex uk-flex-between">
      <a href="https://github.com/ryanIs/" target="_blank" title="Check out my GitHub." rel="noreferrer">
        <img src="/portfolio-files/other/github.svg" alt="Git" /></a
      >
      <a href="https://www.linkedin.com/in/ryan-isler-184907ba/" target="_blank" title="Check out my LinkedIn." rel="noreferrer">
        <img src="/portfolio-files/other/linkedin.svg" alt="Git" /></a
      >
      <a href="https://twitter.com/RyanIsl" target="_blank" title="Check out my Twitter feed." rel="noreferrer">
        <img src="/portfolio-files/other/twitter.svg" alt="Twitter" />
      </a>
      <a href="https://ryanisler.com/r" target="_blank" title="Personal Site!" rel="noreferrer">
        <img src="/portfolio-files/other/r.svg" alt="Personal" />
      </a>
    </div>
  </footer>
</div>

<style>
  .projects {
    max-width: 1600px;
    margin: 0 auto;
    /* margin-left: 0; */
    margin-bottom: 100px;
  }

  .experiments {
    max-width: 1600px;
    margin-bottom: 100px;
    margin: 0 auto;
  }

  .current {
    
    max-width: 1600px;
    margin-bottom: 300px;
    margin: 0 auto;

  }

  .top-left-floating {
    position: absolute;
    display: inline-flex;
    top: 3px;
    left: 0;
    /* width: 0;
    height: 0; */
    flex-direction: horizontal;
  }

  .top-left-floating img {
    width: auto;
    height: 20px;
    margin-left: 10px;
    opacity: 0.2;
    /* display: inline-block; */

    transition: opacity 0.4s;
  }

  .non-first-img {
    margin-left: 15px !important;
  }

  .top-left-floating img:hover {
    opacity: 0.6;
  }

  .uk-navbar-nav li a {
    /* display: inline-block; */
    min-height: auto;
    /* min-height: 40px; */
    line-height: 30px;
    text-transform: none;
    /* font-size: 12px !imporstant; */
    /* letter-spacing: 2px; */
    /* font-weight: bold; */
  }

  @keyframes navIntro {
    0% {
      top: -35px;
    }
    20% {
      top: -35px;
    }
    100% {
      top: 0px;
    }
  }

  nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    animation: navIntro 1.4s;
    z-index: 9999;
    min-height: 30px;
  }

  .uk-navbar-container {
    background: #fcfcfc;
    /* background: linear-gradient(#fdfdfd, #fcfcfc); */
    border-bottom: 1px solid #eee;
    /* font-size: 10px !important; */
    position: fixed;
  }

  @media screen and (max-width: 1200px) {
    .experiments {
      max-width: auto;
      /* margin: 0 auto; */
    }
  }

  footer p {
    text-align: center;
  }

  /* footer span {
    width: 188px;
    display: block;
    margin: 0 auto;
  } */

  footer a {
    color: #345dc3;
    text-decoration: none;
    transition: color 0.5s;
    display: inline-block;
  }

  footer a:hover {
    color: #90afff;
  }

  footer {
    font-size: 0.9em;
    color: #aaaaaa;
    /* background: #172d64; */
    background: #fafafa;
    border-top: 1px solid #eee;
    /* padding: 50px 10px; */
    padding: 20px 10px 40px;
    /* box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.2); */

    /* border-radius: 0 200px 0 0; */
  }

  footer img {
    width: auto;
    height: 20px;
    /* height: 25px; */
    /* margin-left: 10px; */
    opacity: 0.2;
    /* display: inline-block; */
    transition: opacity 0.4s;
    /* filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg); */

    /* mix-blend-mode: multiply; */
  }

  /* footer img svg {
    fill: #90afff;

  } */

  footer img:hover {
    opacity: 0.6;
    /* fill: #90afff; */
    /* filter: hue-rotate(180deg); */
    /* filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg); */
  }

  .footer-links {
    max-width: 200px;
    margin: 0 auto;
  }
</style>
