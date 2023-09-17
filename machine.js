//GRAPHIC: coin
let coin = document.querySelector("#Coin");

//GRAPHIC: Screen elements
let screen = document.querySelector("#WorkingScreen");
let screenColour = screen.firstElementChild;
let screenText = screen.firstElementChild.nextElementSibling;

//GRAPHIC: package
let package = document.querySelector("#Cannabis_Pack");
let package2 = document.querySelector("#Cannabis_Pack_x5F_2");

//GRAPHIC: cog
let cog = document.querySelector("#A1_x5F_Cog");

//GRAPHIC: door
let door = document.querySelector("#Front_Door");

//GIF Image: elon musk
let elon_gif = document.querySelector("#elon_gif");

//This function can be called anytime to change the machine screen (Text, Word Position on the horinzontal axis, Fill Colour)
function changeScreen(screenWord, matrixPosition, fillColour){
  screenText.innerHTML = screenWord;
  screenText.setAttribute('transform', `matrix(1 0 0 1 ${matrixPosition} 319.1714)`);
  screenColour.style.fill = fillColour;
}

//When specific conditions are met sub animations start inside the main animation
function secondaryAnim(state){
if(state == 'coinTrue'){
  coin.classList.remove('insertCoin');
  changeScreen("WORKING", 1163,'#13b132');
}

if(state == 'outServiceTrue'){
  changeScreen('OUT OF SERVICE',1144,'#e61313');
}

if(state == 'stopShake'){
  package.classList.remove('shakePackage');
}
}


//Starts the animation: insertCoin and changes the machine screen Text and fillColour after 3 sec
function insertCoin(e){
  e.preventDefault();
    coin.classList.add('insertCoin');
    setTimeout(secondaryAnim,3000, 'coinTrue');
}

//Starts the animation: shakePackage and after 3 sec it stops
function shakePackage(e){
  e.preventDefault();
    package.classList.add('shakePackage');
    setTimeout(secondaryAnim,3000, 'stopShake');
}

// Starts the animation: cogRotate
function cogRotate(e){
  e.preventDefault();
  cog.classList.add('cogRotate');
}

//Starts the animation: packageDrop and also changes the machine screen Text and fillColour
function movePackage(e){
  e.preventDefault();
    package.classList.add('packageDrop');
    setTimeout(secondaryAnim,2000, 'outServiceTrue');
}

//Starts the animation: doorOpens
function openDoor(e){
  e.preventDefault();
    door.classList.add('doorOpens');
}

//Starts the animation: presentingPackage and also starts the animation: enableGIF after 4sec
function showPackage(e){
  e.preventDefault();
    package2.classList.add('presentingPackage');
    setTimeout(enableGIF,4000);
}

//Starts the animation: insertCoin and changes the machine screen Text and fillColour after 3 sec
function enableGIF(){
  package2.classList.add('hidePack');
  elon_gif.classList.add('showGIF');
}


//Function to start the animations one by one with specific intervals between them
function startAnimation(e){
  e.preventDefault();
  shakePackage(e);
  setTimeout(insertCoin,1000, e);
  setTimeout(cogRotate,4000, e);
  setTimeout(movePackage,5000, e);
  setTimeout(openDoor,6000, e);
  setTimeout(showPackage,6100, e);
}

//This function removes all the changes made before, all the classes that perform a animation are removed returning everything to the initial state
function stopAnimation(e){
  e.preventDefault();
  changeScreen('INSERT COIN',1158,'#B3B3B3');
  coin.classList.remove('insertCoin');
  package.classList.remove('shakePackage');
  cog.classList.remove('cogRotate');
  package.classList.remove('packageDrop');
  door.classList.remove('doorOpens');
  package2.classList.remove('presentingPackage');
  package2.classList.remove('hidePack');
  elon_gif.classList.remove('showGIF');
}


//looks for the button id in the page and performs the function
document.querySelector("#startAnimation").addEventListener("click", startAnimation);
//looks for the button id in the page and performs the function
document.querySelector("#stopAnimation").addEventListener("click", stopAnimation);
