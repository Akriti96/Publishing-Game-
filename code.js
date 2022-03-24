var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["165cb791-3bc7-4a29-9641-cb917796ab3c"],"propsByKey":{"165cb791-3bc7-4a29-9641-cb917796ab3c":{"name":"building_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/byni8wry0VSr.8M23lidKt3ZiQb911hx/category_buildings/building_10.png","frameSize":{"x":400,"y":208},"frameCount":1,"looping":true,"frameDelay":2,"version":"byni8wry0VSr.8M23lidKt3ZiQb911hx","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":208},"rootRelativePath":"assets/api/v1/animation-library/gamelab/byni8wry0VSr.8M23lidKt3ZiQb911hx/category_buildings/building_10.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life=0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;



var boundary1 = createSprite(190,120,420,3);
boundary2 = createSprite(190,260,420,3);

var sam = createSprite(20,190,13,13);
sam.shapeColor="red"

var car1 = createSprite(116,136,10,10);
car1.shapeColor="green"
var car2 = createSprite(184,246,10,10);
car2.shapeColor="purple"
var car3= createSprite(220,133,10,10);
car3.shapeColor="blue"
var car4 = createSprite(264,254,10,10);
car4.shapeColor="black"

car1.setVelocity(0,6)
car2.setVelocity(0,-6)
car3.setVelocity(0,6)
car4.setVelocity(0,-6)

var house = createSprite(382,185,20,20);
house.setAnimation("building_10_1");
house.scale=0.5









function draw() {
background("white");
    
  car1.bounceOff(boundary1)
car1.bounceOff(boundary2)

car2.bounceOff(boundary1)
car2.bounceOff(boundary2)

car3.bounceOff(boundary1)
car3.bounceOff(boundary2)


car4.bounceOff(boundary1)
car4.bounceOff(boundary2)


if (keyDown("RIGHT")) {
  sam.setVelocity(3,0)
}

if (keyDown("LEFT")) {
  sam.setVelocity(-3,0)
}

if (sam.isTouching(car1)) {
  sam.x=20
  sam.y=190
  sam.setVelocity(0,0)
playSound("assets/category_female_voiceover/game_over_female.mp3", false);
life+=1
}

if (sam.isTouching(car2)) {
  sam.x=20
  sam.y=190
playSound("assets/category_female_voiceover/game_over_female.mp3", false);
life+=1
}

if (sam.isTouching(car3)) {
  sam.x=20
  sam.y=190
  sam.setVelocity(0,0)
  playSound("assets/category_female_voiceover/game_over_female.mp3", false);
  life+=1
}

if (sam.isTouching(car4)) {
  sam.x=20
  sam.y=190
  sam.setVelocity(0,0)
  playSound("assets/category_female_voiceover/game_over_female.mp3", false);
  life+=1
}

if (sam.isTouching(house)) {
fill("red")
textSize(30)
text("You are victories",190,24)
playSound("assets/category_alerts/vibrant_game_courious_alert_3_winner.mp3", false);

}
textSize(25)
text("lives"+life,200,50)





  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
