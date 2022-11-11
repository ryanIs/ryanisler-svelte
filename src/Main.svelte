<script lang="ts">
  /**
   * Main.svelte
   *
   * This is the main svelte file which has the top-level view for the site.
   */
  import "uikit/dist/css/uikit.min.css"
  import HeaderGraphic from "./components/HeaderGraphic.svelte"
  import Project from "./components/Project.svelte"

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
        image: "/portfolio-files/projects/mortal-kombat-11-helper.png",
      },
      {
        title: "Simple Calculator",
        description: "This calculator was a fun application I built to test out designing my own unique calculator UX.",
        startDate: "",
        endDate: "2018-11-01",
        technologiesUsed: ["React"],
        image: "/portfolio-files/projects/easy-notecards.png.png",
      },
      {
        title: "Easy Notecards",
        description: "Easy notecards is a simple way to memorize things. It uses a two-sided data model.",
        startDate: "",
        endDate: "2018-11-01",
        technologiesUsed: ["Angular", "Node", "JSON"],
        image: "/portfolio-files/projects/easy-notecards.png.png",
      },
      {
        title: "RuneScape Item Tracker",
        description:
          "This application is an add-on for the MMORPG RuneScape. It acts as a virtual grand exchange viewer. RuneScape Item Tracker allows users to easily view item data such as exchange price, stock market ratings and more. ",
        startDate: "",
        endDate: "2019-10-01",
        technologiesUsed: ["Vue", "SASS", "API"],
        image: "/portfolio-files/projects/easy-notecards.png.png",
      },
      {
        title: "Expense Tracker",
        description: "Expense Tracker is a very simple mobile application that tracks your expenses. ",
        startDate: "",
        endDate: "2018-07-01",
        technologiesUsed: ["React", "Mobile Development"],
        image: "/portfolio-files/projects/expense-tracker.png",
      },
      {
        title: "Homework Note",
        description:
          "Homework Note is a simple application I built for assisting my personal studies. This application helps with assignment planning.",
        startDate: "",
        endDate: "2018-07-01",
        technologiesUsed: ["React"],
        image: "/portfolio-files/projects/homework-note.png",
      },
      {
        title: "TeamSolve",
        description:
          "TeamSolve is a game designed to get people to work together. It is developed for mobile devices, however can be played on desktop too. Players earn puzzle pieces and colors by completing local puzzles.",
        startDate: "2016-09-04",
        endDate: "2017-05-24",
        technologiesUsed: ["JavaScript", "Bootstrap", "PHP", "MySQL"],
        image: "/portfolio-files/experiments/main-teamsolve.png",
      },
    ],
    experiments: [
      {
        title: "Colorful Brushes",
        description:
          "Colorful brushes is a simple CRUD application built using Backbone. This fun project approaches the cart feature of an eCommerence site in a simple manner. ",
        startDate: "",
        endDate: "2019-02-01",
        technologiesUsed: ["Backbone", "LESS", "Require"],
        image: "/portfolio-files/experiments/",
      },
      {
        title: "Personal Site - Mock-up",
        description:
          "This website showcases an example of a design concept I was working with for my new personal online portfolio. ",
        startDate: "",
        endDate: "2017-07-01",
        technologiesUsed: ["JavaScript", "CSS3", "HTML5"],
        image: "/portfolio-files/experiments/",
      },
      {
        title: "Storied Spaces",
        description:
          "Storied Spaces is a mobile application designed for Hamline University students. Digital Media Arts students pair up with Creative Writing students to create unique websites that showcase student's writings. Google Maps API allows users to travese throughout campus to access the sites.",
        startDate: "",
        endDate: "2017-04-01",
        technologiesUsed: ["JavaScript", "PHP", "MySQL"],
        image: "/portfolio-files/experiments/",
      },
      {
        title: "Abstraction Generation",
        description:
          "Abstraction generation is a digital art tool I created for the purpose of making wicked cool 2D art with very little input. Designs used as an overlay for images in a final project in my photography course at Hamline.",
        startDate: "",
        endDate: "2016-12-01",
        technologiesUsed: ["AS3", "Graphic Design"],
        image: "/portfolio-files/experiments/",
      },
      {
        title: "Comfort Zone",
        description:
          "Comfort zone is an HTML5 web game created to begin exploring the world of canvas development. Comfort Zone shows poetry as you progress throughout the web game. Each level changes the amount of space the user has to move around in.",
        startDate: "",
        endDate: "2016-10-01",
        technologiesUsed: ["JavaScript", "CSS3", "HTML5"],
        image: "/portfolio-files/experiments/",
      },
      {
        title: "Zelda Lost Definitions",
        description:
          "Zelda - Lost Definitions is a (flash) project built using the Scratch libaray. It was very fun to code using a visual programming language.",
        startDate: "",
        endDate: "2015-11-01",
        technologiesUsed: ["Scratch", "JavaScript", "CSS3", "HTML5"],
        image: "/portfolio-files/experiments/zelda.png",
      },
      {
        title: "Hypercube",
        description: "Hypercube is a cool online info site explaining one of my favorite things: 4D (spatial) objects.",
        startDate: "",
        endDate: "2015-10-01",
        technologiesUsed: ["JavaScript", "CSS3", "HTML5"],
        image: "/portfolio-files/experiments/hypercube.png",
      },
      {
        title: "Piano App",
        description:
          "This piano app was built as a simple and fast way to hear musical ideas. As a musician, I am always coming up with new ideas. Having this player helps quickly notate a song idea.",
        startDate: "",
        endDate: "2013-12-01",
        technologiesUsed: ["AS2", "Music"],
        image: "/portfolio-files/experiments/piano.png",
      },
      {
        title: "Applicants Application",
        description:
          "This flash experiment tested opening an XML file using flash. The focus is purely on presentation of external data and UX.",
        startDate: "",
        endDate: "2013-12-01",
        technologiesUsed: ["AS3", "XML", "UI/UX"],
        image: "/portfolio-files/experiments/applicants.png",
      },
      {
        title: "Stone Quest",
        description:
          "This is a C++ console game. It was adapted from a version I designed on a TI-89 calculator. There are an amazing number of things you can with simple logic.",
        startDate: "",
        endDate: "2013-11-01",
        technologiesUsed: ["C++", "Game Dev", "Shell App", "TI-83"],
        image: "/portfolio-files/experiments/stone-quest.png",
      },
      {
        title: "Chord Player",
        description:
          "This application makes use of the windows default beep function. It reads a text file with notes (written out) and plays it using a special frequency converter function I wrote.",
        startDate: "",
        endDate: "2013-10-01",
        technologiesUsed: ["C++", "Game Dev", "Shell App"],
        image: "/portfolio-files/experiments/chord-player.png",
      },
      {
        title: "Isler Brothers - Mock-up",
        description:
          "Isler Brothers is a collaberation website that was in the works a while ago. This is one of the many site concepts we went through.",
        startDate: "",
        endDate: "2013-06-01",
        technologiesUsed: ["JavaScript", "CSS3", "HTML5"],
        image: "/portfolio-files/experiments/isler-brothers.png",
      },
      {
        title: "Japanese App",
        description:
          "This application was built for personal use. While learning Japanese, I built an application to assist in learning the hiragana alphabet.",
        startDate: "",
        endDate: "2012",
        technologiesUsed: ["AS3", "Japanese"],
        image: "/portfolio-files/experiments/japanese.png",
      },
      {
        title: "YouDraw",
        description:
          "YouDraw is a fun application I created to create unique digital imagery. The ability to spin MovieClips while drawing allowed for an interesting canvas to create. This is a great application where programming meets art.",
        startDate: "",
        endDate: "2011-08-01",
        technologiesUsed: ["AS3"],
        image: "/portfolio-files/experiments/you-draw.png",
      },
      {
        title: "Math Quiz",
        description:
          "Math Quiz is a fun game I designed back in 2010. The development objective was to create a simple game using fun colors and in-game goals.",
        startDate: "",
        endDate: "2010-06-01",
        technologiesUsed: ["AS3", "Game Dev", "Music Comp"],
        image: "/portfolio-files/experiments/math-quiz.png",
      },
    ],
    current: [
      {
        title: "Legends of Runeterra Helper",
        description: "A simple helpful card tracker for the card game, Legends of Runeterra, by Riot Games.",
        startDate: "2022-10-01",
        endDate: "",
        technologiesUsed: ["TypeScript", "React", "SASS", "Node"],
        image: "/portfolio-files/projects/lor-helper.png",
      },
      {
        title: "Stone King Franchise API",
        description:
          "A custom-built API for my original Stone King games. An easy way for developers to quickly access data like item/quest data through an API.",
        startDate: "2022-07-01",
        endDate: "",
        technologiesUsed: ["Go", "PostgreSQL", "REST"],
        image: "/portfolio-files/projects/stone-king-api.png",
      },
      {
        title: "Food Items",
        description: "A small application useful for tracking your must-have food items.",
        startDate: "2021-04-01",
        endDate: "",
        technologiesUsed: ["Angular", "", ""],
        image: "/portfolio-files/projects/food-items.png",
      },
    ],
    misc: {},
  }
</script>

<div class="main-wrapper">

  <div style="height: 30px;"></div>

  <nav class="uk-navbar-container" uk-navbar="align: center">
    <div class="uk-navbar-center">
      <ul class="uk-navbar-nav">
        <li>
          <a href="#projects" class="uk-active">Projects</a>
        </li>
        <li>
          <a href="#experiments">Experiments</a>
        </li>
        <li>
          <a href="#current">Current</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="header">
    <!-- <HeaderGraphic /> -->
    <div class="uk-margin text-align: center;">Ryan Isler</div>
  </div>
  <div class="content-wrapper">
    <div class="projects">
      {#if projects != null}
        {#each projects["projects"] as project}
          <Project project={project} />
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
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
  }

  .uk-navbar-container {
    background: #fcfcfc;
    /* background: linear-gradient(#fdfdfd, #fcfcfc); */
    border-bottom: 1px solid #eee;
    /* font-size: 10px !important; */
  }
</style>
