import * as $ from "jquery";

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

  var myProjects = [
    {
      name: "Stardew Valley Web Exhibit",
      description: "To-do list web app made in the style of Stardew Valley",
      icon: "images/projectIcons/StardewMuseumExhibit.gif",
      link: "https://www.figma.com/design/eOzrhe6A7hSipzltgWI2pa/StardewExhibit?node-id=0-1&t=IuqjlqkzMfsGD9Cm-1",
      pixelated: true,
    },
    {
      name: "Stardew Todo",
      description: "To-do list web app made in the style of Stardew Valley",
      icon: "images/projectIcons/StardewTodo.png",
      link: "https://github.com/zapsters/stardew-todo",
      pixelated: true,
    },
    {
      name: "Input Stack",
      description: "A multiplayer web game, continuously getting harder.",
      icon: "images/projectIcons/InputStackIcon.png",
      link: "https://github.com/zapsters/inputstack",
      pixelated: false,
    },
    {
      name: "Realtime Paint Application",
      description: "A real time, online collaborative canvas.",
      icon: "images/projectIcons/PaintLogo.png",
      link: "https://github.com/zapsters/paint",
      pixelated: true,
    },
    {
      name: "Science and Entity Research",
      description: "A passion project, collection of web apps.",
      icon: "images/projectIcons/SaERv2Spin.gif",
      link: "https://github.com/zapsters/SaER",
      pixelated: false,
    },
  ];
  myProjects.forEach(function (projectEntry, i) {
    console.log(projectEntry, i);
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
