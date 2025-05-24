import * as $ from "jquery";
import "./sass/styles.scss";
import favicon from "./images/PersonalLogoFoxIcon.png";

// Import project icons
import sporeganizerIcon from "./images/projectIcons/Sporeganizer.png";
import inputStackIcon from "./images/projectIcons/InputStackIcon.png";
import stardewExhibitIcon from "./images/projectIcons/StardewMuseumExhibit.gif";
import paintIcon from "./images/projectIcons/PaintLogo.png";
import stardewTodoIcon from "./images/projectIcons/StardewTodo.png";
import saerIcon from "./images/projectIcons/SaERv2Spin.gif";

// Import featured work images
import inputStackShowcaseArt from "./images/showcase/InputStackGameplay.png";
import paintShowcaseArt from "./images/showcase/PaintHomepage.png";
import SporeganizerShowcaseArt from "./images/showcase/SporeganizerShowcase.png";
import stardewExhibitShowcaseArt from "./images/showcase/StardewExhibitHomepage.png";

// Set the favicon
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon";
link.href = favicon;
document.head.appendChild(link);

$(function () {
  console.log(`
    ________________________________________________________________
     ______      _          ____        _ _ _                       
    |  ____|    (_)        |  _ \\      | | (_)                      
    | |__   _ __ _ _ __    | |_) | __ _| | |_ _ __   __ _  ___ _ __ 
    |  __| | '__| | '_ \\   |  _ < / _' | | | | '_ \\ / _' |/ _ \\ '__|
    | |____| |  | | | | |  | |_) | (_| | | | | | | | (_| |  __/ |   
    |______|_|  |_|_| |_|  |____/ \\__,_|_|_|_|_| |_|\__,  |\\___|_|  
                                                    __/  |          
                                                   |____/
    ________________________________________________________________`);

  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $("#mobileNav").toggleClass("is-active");
  });

  const navSpeed = "400ms";
  $("#mobileNav").css("transition-duration", navSpeed);
  $(".nav--content").css("transition-duration", navSpeed);

  // Populate the featured work section
  var featuredWorks = [
    {
      title: "Sporeganizer",
      description:
        "Sporeganizer is a playful, mushroom-themed web app for organizing classes and assignments with ease. Built for students, it keeps your schedule clear and your tasks on track. Simple, aesthetic, and built with love for productivity and fungi fans alike.",
      image: SporeganizerShowcaseArt,
      link: "https://sporeganizer.com",
    },
    {
      title: "Input Stack",
      description:
        "InputStack is a fast-paced multiplayer web game that challenges your reflexes and strategy. Face increasing difficulty as you compete to stay on top of the stack. Dynamic gameplay designed to keep you hooked and coming back for more.",
      image: inputStackShowcaseArt,
      link: "https://github.com/zapsters/inputstack",
    },
    {
      title: "Stardew Valley Interactive Kiosk",
      description:
        "Stardew Valley Interactive Kiosk is a museum exhibit designed with a focus on user experience. It was developed through extensive UX research, user studies, and wireframing to ensure intuitive navigation and engagement. The result is an interactive display that effectively connects visitors with the Stardew Valley world.",
      image: stardewExhibitShowcaseArt,
      link: "https://www.figma.com/design/eOzrhe6A7hSipzltgWI2pa/StardewExhibit?node-id=0-1&t=IuqjlqkzMfsGD9Cm-1",
    },
  ];
  featuredWorks.forEach(function (workEntry, i) {
    $("#featuredWorkContent").append(
      `<a href="${workEntry.link}" class="featuredWorkCard" target="_blank">
          <div
            class="featuredWorkCard-Cover"
            style="background-image: url(${workEntry.image})"></div>
          <div class="featuredWorkCard-Content">
            <h3>${workEntry.title}</h3>
          <p>${workEntry.description}</p>
          </div>
        </a>`
    );
  });

  // Populate project showcase
  var myProjects = [
    {
      name: "Sporeganizer",
      description:
        "A fully online class & assignment tracker  webapp with a fun mushroom theme. Under Development",
      icon: sporeganizerIcon,
      link: "https://github.com/zapsters/Sporeganizer",
      pixelated: true,
    },
    {
      name: "Input Stack",
      description: "A multiplayer web game, continuously getting harder.",
      icon: inputStackIcon,
      link: "https://github.com/zapsters/inputstack",
      pixelated: false,
    },
    {
      name: "Stardew Valley Web Exhibit",
      description: "From User Personas, Wireframing, Usability Testing, to a Final Product.",
      icon: stardewExhibitIcon,
      link: "https://www.figma.com/design/eOzrhe6A7hSipzltgWI2pa/StardewExhibit?node-id=0-1&t=IuqjlqkzMfsGD9Cm-1",
      pixelated: true,
    },
    {
      name: "Realtime Paint Application",
      description: "A real time, online collaborative canvas.",
      icon: paintIcon,
      link: "https://github.com/zapsters/paint",
      pixelated: true,
    },
    {
      name: "Stardew Todo",
      description: "To-do list web app made in the style of Stardew Valley",
      icon: stardewTodoIcon,
      link: "https://github.com/zapsters/stardew-todo",
      pixelated: true,
    },
    {
      name: "Science and Entity Research",
      description: "A passion project, collection of web apps.",
      icon: saerIcon,
      link: "https://github.com/zapsters/SaER",
      pixelated: false,
    },
  ];
  myProjects.forEach(function (projectEntry, i) {
    let style = "";
    if (projectEntry.pixelated) {
      style += "image-rendering: pixelated;";
    }
    $("#projectsContent").append(
      `<a target="_blank" href="${projectEntry.link}" class="projectCard">
        <img style="${style}" src="${projectEntry.icon}" alt="" srcset="" />
        <h3>${projectEntry.name}</h3>
        <p>${projectEntry.description}</p>
      </a>`
    );
  });
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1000) {
    $("#mobileNav").removeClass("is-active");
    $("#hamburger-9").removeClass("is-active");
  }
});
