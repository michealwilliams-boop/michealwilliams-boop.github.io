$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
    //toggleGrid();


      //TODO 2 - Create Platforms
      
createPlatform(270, 710, 70, 10, "red"); //1 good
createPlatform(460, 620, 100 ,10 , "blue"); //2 good
createPlatform(680, 580, 200, 10, "purple"); //3 good
createPlatform(1300, 500 ,200 ,10 , "black")
createPlatform(1100, 590, 320, 10, "grey"); //5 good
createPlatform(790, 390, 280, 10, "red"); //6 goodish
createPlatform(320, 390, 230, 10, "yellow"); //8 
createPlatform(0, 300, 90, 10, "green"); //9 good
createPlatform(230, 160, 150, 10, "emerald"); //10
createPlatform(450, 160, 150, 10, "brown"); //11
createPlatform(680, 160, 150, 10, "coral"); //12
createPlatform(900, 160, 150, 10, "navy blue"); //13
createPlatform(1250, 220, 150, 10, "white"); //14


    //TODO 3 - Create Collectables

createCollectable("diamond", 20, 170, 0.5, 0.7);
createCollectable("diamond", 1350, 650, 0.5, 0.7 )
createCollectable("diamond",1300, 400, 0.5, 0.7)
createCollectable("diamond", 900, 290, 0.5, 0.7)    
createCollectable("diamond", 200,280, 0.5, 0.7)

    // TODO 4 - Create Cannons



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
