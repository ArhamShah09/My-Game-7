var player;

var wall1 ,wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;

var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

var wall21 ,wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30;

var wall31 ,wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40;

var wall41 ,wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50;

var wall51 ,wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60;

var wall61 ,wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70;

var wall71 ,wall72, wall73, wall74, wall75, wall76, wall77, wall78, wall79, wall80;

var wall81 ,wall82, wall83, wall84, wall85, wall86, wall87, wall88, wall89, wall90;

var wall91 ,wal92, wall93, wall94, wall95, wall96, wall97, wall98, wall99, wall100;

var virus1, virus1IMG, virus2, virus2IMG, virus3, virus3IMG, virus4, virus4IMG, virus5, virus5IMG; 

var virus6, virus6IMG, virus7, virus7IMG, virus8, virus8IMG;

var crowd1, crowd1IMG, crowd2, crowd2IMG;

var sanitizer1, sanitizer1IMG, sanitizer2, sanitizer2IMG;

var mask1, mask1IMG;

var life = 1;

var gameState = "PLAY";

function preload() {

  virus1IMG = loadImage("greenVirus.jpg");

  virus2IMG = loadImage("redVirus.jpg");

  virus3IMG = loadImage("greenVirus.jpg");

  virus4IMG = loadImage("greenVirus.jpg");

  virus5IMG = loadImage("multipleVirus.jpg");

  virus6IMG = loadImage("multipleVirus.jpg");

  virus7IMG = loadImage("redVirus.jpg");

  virus8IMG = loadImage("redVirus.jpg");

  //virus9IMG = loadImage("greenVirus.jpg");

  crowd1IMG = loadImage("crowd.jpg");

  crowd2IMG = loadImage("crowd.jpg");

  sanitizer1IMG = loadImage("sanitizer.jpg");

  sanitizer2IMG = loadImage("sanitizer.jpg");

  mask1IMG = loadImage("mask.jpg");
}

function setup() {

  createCanvas(600,600);

  console.log(600/22);

  console.log(600/22);

  virus1 = createSprite(27,25,10,10);
  virus1.addImage(virus1IMG);
  virus1.scale = 0.01;
  virus1.velocityX = 3;

  virus2 = createSprite(564,27,10,10);
  virus2.addImage(virus2IMG);
  virus2.scale = 0.01;
  virus2.velocityY = 3;

  virus3 = createSprite(270,564,10,10);
  virus3.addImage(virus3IMG);
  virus3.scale = 0.01;
  virus3.velocityX = 3;

  virus4 = createSprite(150,375,10,10);
  virus4.addImage(virus4IMG);
  virus4.scale = 0.01;

  virus5 = createSprite(52,108,10,10);
  virus5.addImage(virus5IMG);
  virus5.scale = 0.02;

  virus6 = createSprite(320,160,10,10);
  virus6.addImage(virus6IMG);
  virus6.scale = 0.02;

  virus7 = createSprite(24,350,10,10);
  virus7.addImage(virus7IMG);
  virus7.scale = 0.01;
  virus7.velocityY = -3;

  virus8 = createSprite(402,397,10,10);
  virus8.addImage(virus8IMG);
  virus8.scale = 0.01;
  virus8.velocityY = -2;

  /*virus9 = createSprite(402,454,10,10);
  virus9.addImage(virus9IMG);
  virus9.scale = 0.01;
  virus9.velocityX = -2;*/

  crowd1 = createSprite(361,131,10,10);
  crowd1.addImage(crowd1IMG);
  crowd1.scale = 0.03;

  crowd2 = createSprite(351,189,10,10);
  crowd2.addImage(crowd2IMG);
  crowd2.scale = 0.03;

  sanitizer1 = createSprite(70,185,10,10);
  sanitizer1.addImage(sanitizer1IMG);
  sanitizer1.scale = 0.04;

  sanitizer2 = createSprite(300,563,10,10);
  sanitizer2.addImage(sanitizer2IMG);
  sanitizer2.scale = 0.04;

  mask1 = createSprite(374,397,10,10);
  mask1.addImage(mask1IMG);
  mask1.scale = 0.02;
  
  player = createSprite(10,158,10,10);
  player.shapeColor = "blue";

  wall1 = createSprite(10,77,10,135);
  wall1.shapeColor = "lightgreen";

  wall2 = createSprite(10,374,10,405);
  wall2.shapeColor = "lightgreen";

  wall3 = createSprite(37,91,10,108);
  wall3.shapeColor = "lightgreen";

  wall4 = createSprite(64,104,10,81);
  wall4.shapeColor = "lightgreen";

  wall5 = createSprite(64,37,54,10);
  wall5.shapeColor = "lightgreen";
  
  wall6 = createSprite(91,64,10,54);
  wall6.shapeColor = "lightgreen";

  wall7 = createSprite(171,91,162,10);
  wall7.shapeColor = "lightgreen";

  wall8 = createSprite(158,37,81,10);
  wall8.shapeColor = "lightgreen";

  wall9 = createSprite(118,50,10,27);
  wall9.shapeColor = "lightgreen";

  wall10 = createSprite(145,64,54,10);
  wall10.shapeColor = "lightgreen";

  wall11 = createSprite(172,118,216,10);
  wall11.shapeColor = "lightgreen";

  wall12 = createSprite(212,64,27,10);
  wall12.shapeColor = "lightgreen";

  wall13 = createSprite(226,50,10,27);
  wall13.shapeColor = "lightgreen";

  wall14 = createSprite(253,64,10,54);
  wall14.shapeColor = "lightgreen";

  wall15 = createSprite(280,77,10,27);
  wall15.shapeColor = "lightgreen";

  wall16 = createSprite(293,37,81,10);
  wall16.shapeColor = "lightgreen";

  wall17 = createSprite(293,64,27,10);
  wall17.shapeColor = "lightgreen";

  wall18 = createSprite(293,91,27,10);
  wall18.shapeColor = "lightgreen";

  wall19 = createSprite(306,118,10,54);
  wall19.shapeColor = "lightgreen";

  wall20 = createSprite(333,91,10,108);
  wall20.shapeColor = "lightgreen";

  wall21 = createSprite(360,145,54,10);
  wall21.shapeColor = "lightgreen";

  wall22 = createSprite(360,78,10,81);
  wall22.shapeColor = "lightgreen";

  wall23 = createSprite(387,91,10,108);
  wall23.shapeColor = "lightgreen";

  wall24 = createSprite(387,91,10,108);
  wall24.shapeColor = "lightgreen";

  wall25 = createSprite(468,37,162,10);
  wall25.shapeColor = "lightgreen";

  wall26 = createSprite(468,64,108,10);
  wall26.shapeColor = "lightgreen";

  wall27 = createSprite(468,91,54,10);
  wall27.shapeColor = "lightgreen";

  wall28 = createSprite(455,118,27,10);
  wall28.shapeColor = "lightgreen";

  wall29 = createSprite(442,105,10,27);
  wall29.shapeColor = "lightgreen";

  wall30 = createSprite(415,105,10,81);
  wall30.shapeColor = "lightgreen";

  wall31 = createSprite(469,132,10,27);
  wall31.shapeColor = "lightgreen";

  wall32 = createSprite(442,145,54,10);
  wall32.shapeColor = "lightgreen";

  wall33 = createSprite(550,293,10,513);
  wall33.shapeColor = "lightgreen";

  wall34 = createSprite(523,212,10,297);
  wall34.shapeColor = "lightgreen";

  wall35 = createSprite(496,212,10,243);
  wall35.shapeColor = "lightgreen";

  wall36 = createSprite(496,212,10,243);
  wall36.shapeColor = "lightgreen";

  wall37 = createSprite(104,145,27,10);
  wall37.shapeColor = "lightgreen";

  wall38 = createSprite(50,172,81,10);
  wall38.shapeColor = "lightgreen";

  wall39 = createSprite(91,185,10,27);
  wall39.shapeColor = "lightgreen";

  wall40 = createSprite(63,198,54,10);
  wall40.shapeColor = "lightgreen";

  wall41 = createSprite(118,185,10,81);
  wall41.shapeColor = "lightgreen";

  wall42 = createSprite(76,225,81,10);
  wall42.shapeColor = "lightgreen";

  wall43 = createSprite(37,292,10,135);
  wall43.shapeColor = "lightgreen";

  wall44 = createSprite(145,198,10,108);
  wall44.shapeColor = "lightgreen";

  wall45 = createSprite(172,211,10,135);
  wall45.shapeColor = "lightgreen";

  wall46 = createSprite(199,224,10,162);
  wall46.shapeColor = "lightgreen";

  wall47 = createSprite(226,237,10,135);
  wall47.shapeColor = "lightgreen";

  wall48 = createSprite(253,250,10,162);
  wall48.shapeColor = "lightgreen";

  wall49 = createSprite(253,145,108,10);
  wall49.shapeColor = "lightgreen";

  wall50 = createSprite(361,172,216,10);
  wall50.shapeColor = "lightgreen";

  wall51 = createSprite(469,266,10,189);
  wall51.shapeColor = "lightgreen";

  wall52 = createSprite(104,252,81,10);
  wall52.shapeColor = "lightgreen";

  wall53 = createSprite(117,279,108,10);
  wall53.shapeColor = "lightgreen";

  wall54 = createSprite(144,306,108,10);
  wall54.shapeColor = "lightgreen";

  wall55 = createSprite(158,333,189,10);
  wall55.shapeColor = "lightgreen";

  wall56 = createSprite(64,306,10,54);
  wall56.shapeColor = "lightgreen";

  wall57 = createSprite(158,360,243,10);
  wall57.shapeColor = "lightgreen";

  wall58 = createSprite(280,277,10,162);
  wall58.shapeColor = "lightgreen";

  wall59 = createSprite(361,199,162,10);
  wall59.shapeColor = "lightgreen";

  wall60 = createSprite(442,306,10,216);
  wall60.shapeColor = "lightgreen";

  wall61 = createSprite(171,387,270,10);
  wall61.shapeColor = "lightgreen";

  wall62 = createSprite(307,304,10,162);
  wall62.shapeColor = "lightgreen";

  wall63 = createSprite(361,226,108,10);
  wall63.shapeColor = "lightgreen";

  wall64 = createSprite(415,319,10,189);
  wall64.shapeColor = "lightgreen";

  wall65 = createSprite(496,361,54,10);
  wall65.shapeColor = "lightgreen";

  wall66 = createSprite(496,388,54,10);
  wall66.shapeColor = "lightgreen";

  wall67 = createSprite(483,415,81,10);
  wall67.shapeColor = "lightgreen";

  wall68 = createSprite(388,346,10,135);
  wall68.shapeColor = "lightgreen";

  wall69 = createSprite(361,333,10,162);
  wall69.shapeColor = "lightgreen";

  wall70 = createSprite(375,415,27,10);
  wall70.shapeColor = "lightgreen";

  wall71 = createSprite(375,253,27,10);
  wall71.shapeColor = "lightgreen";

  wall72 = createSprite(334,333,10,162);
  wall72.shapeColor = "lightgreen";

  wall73 = createSprite(184,414,297,10);
  wall73.shapeColor = "lightgreen";

  wall74 = createSprite(280,427,10,27);
  wall74.shapeColor = "lightgreen";

  wall75 = createSprite(388,440,216,10);
  wall75.shapeColor = "lightgreen";

  wall76 = createSprite(523,440,10,54);
  wall76.shapeColor = "lightgreen";

  wall77 = createSprite(185,440,135,10);
  wall77.shapeColor = "lightgreen";

  wall78 = createSprite(253,454,10,27);
  wall78.shapeColor = "lightgreen";

  wall79 = createSprite(77,440,27,10);
  wall79.shapeColor = "lightgreen";

  wall80 = createSprite(91,480,10,81);
  wall80.shapeColor = "lightgreen";

  wall81 = createSprite(64,480,10,81);
  wall81.shapeColor = "lightgreen";

  wall82 = createSprite(37,480,10,135);
  wall82.shapeColor = "lightgreen";

  wall83 = createSprite(118,480,10,81);
  wall83.shapeColor = "lightgreen";

  wall84 = createSprite(145,480,10,27);
  wall84.shapeColor = "lightgreen";

  wall85 = createSprite(212,493,135,10);
  wall85.shapeColor = "lightgreen";

  wall86 = createSprite(387,493,162,10);
  wall86.shapeColor = "lightgreen";

  wall87 = createSprite(508,493,27,10);
  wall87.shapeColor = "lightgreen";

  wall88 = createSprite(334,466,378,10);
  wall88.shapeColor = "lightgreen";

  wall89 = createSprite(521,506,10,27);
  wall89.shapeColor = "lightgreen";

  wall90 = createSprite(467,506,10,27);
  wall90.shapeColor = "lightgreen";

  wall91 = createSprite(306,506,10,27);
  wall91.shapeColor = "lightgreen";

  wall92 = createSprite(280,520,324,10);
  wall92.shapeColor = "lightgreen";

  wall93 = createSprite(495,520,54,10);
  wall93.shapeColor = "lightgreen";

  wall94 = createSprite(441,533,10,27);
  wall94.shapeColor = "lightgreen";

  wall95 = createSprite(495,546,108,10);
  wall95.shapeColor = "lightgreen";

  wall96 = createSprite(212,546,351,10);
  wall96.shapeColor = "lightgreen";

  wall97 = createSprite(294,10,569,10);
  wall97.shapeColor = "lightgreen";

  wall98 = createSprite(294,579,569,10);
  wall98.shapeColor = "lightgreen";

  wall99 = createSprite(579,145,10,270);
  wall99.shapeColor = "lightgreen";

  wall100 = createSprite(579,442,10,270);
  wall100.shapeColor = "lightgreen";

}

function draw() {
  background("orange");

  if(keyDown(UP_ARROW) && gameState === "PLAY"){
    player.velocityY = -2;
  }

  if(keyDown(DOWN_ARROW) && gameState === "PLAY"){
    player.velocityY = 2;
  }

  if(keyDown(LEFT_ARROW) && gameState === "PLAY"){
    player.velocityX = -2;
  }

  if(keyDown(RIGHT_ARROW) && gameState === "PLAY"){
    player.velocityX = 2;
  }

  if(virus7.y < 185) {
    virus7.velocityY = 3;
  }

  if(virus7.y > 560) {
    virus7.velocityY = -3;
  }

  if(virus1.x < 30) {
    virus1.velocityX = 3;
  }

  if(virus1.x > 560) {
    virus1.velocityX = -3;
  }

  if(virus2.y < 30) {
    virus2.velocityY = 3;
  }

  if(virus2.y > 560) {
    virus2.velocityY = -3;
  }

  if(virus3.x < 30) {
    virus3.velocityX = 3;
  }

  if(virus3.x > 450) {
    virus3.velocityX = -3;
  }

  if(virus8.y < 243) {
    virus8.velocityY = 2;
  }

  if(virus8.y > 424) {
    virus8.velocityY = -2;
  }

  /*if(virus9.x < 265) {
    virus9.velocityX = 2;
  }

  if(virus9.x > 506) {
    virus9.velocityX = -2;
  }*/

  player.collide(wall1);

  player.collide(wall2);

  player.collide(wall3);

  player.collide(wall4);

  player.collide(wall5);

  player.collide(wall6);

  player.collide(wall7);

  player.collide(wall8);

  player.collide(wall9);

  player.collide(wall10);

  player.collide(wall11);

  player.collide(wall12);

  player.collide(wall13);

  player.collide(wall14);

  player.collide(wall15);

  player.collide(wall16);

  player.collide(wall17);

  player.collide(wall18);

  player.collide(wall19);

  player.collide(wall20);

  player.collide(wall21);

  player.collide(wall22);

  player.collide(wall23);

  player.collide(wall24);

  player.collide(wall25);

  player.collide(wall26);

  player.collide(wall27);

  player.collide(wall28);

  player.collide(wall29);

  player.collide(wall30);

  player.collide(wall31);

  player.collide(wall32);

  player.collide(wall33);

  player.collide(wall34);

  player.collide(wall35);

  player.collide(wall36);

  player.collide(wall37);

  player.collide(wall38);

  player.collide(wall39);

  player.collide(wall40);

  player.collide(wall41);

  player.collide(wall42);

  player.collide(wall43);

  player.collide(wall44);

  player.collide(wall45);

  player.collide(wall46);

  player.collide(wall47);

  player.collide(wall48);

  player.collide(wall49);

  player.collide(wall50);

  player.collide(wall51);

  player.collide(wall52);

  player.collide(wall53);

  player.collide(wall54);

  player.collide(wall55);

  player.collide(wall56);

  player.collide(wall57);

  player.collide(wall58);

  player.collide(wall59);

  player.collide(wall60);

  player.collide(wall61);

  player.collide(wall62);

  player.collide(wall63);

  player.collide(wall64);

  player.collide(wall65);

  player.collide(wall66);

  player.collide(wall67);

  player.collide(wall68);

  player.collide(wall69);

  player.collide(wall70);

  player.collide(wall71);

  player.collide(wall72);

  player.collide(wall73);

  player.collide(wall74);

  player.collide(wall75);

  player.collide(wall76);

  player.collide(wall77);

  player.collide(wall78);

  player.collide(wall79);

  player.collide(wall80);

  player.collide(wall81);

  player.collide(wall82);

  player.collide(wall83);

  player.collide(wall84);

  player.collide(wall85);

  player.collide(wall86);

  player.collide(wall87);

  player.collide(wall88);

  player.collide(wall89);

  player.collide(wall90);

  player.collide(wall91);

  player.collide(wall92);

  player.collide(wall93);

  player.collide(wall94);

  player.collide(wall95);

  player.collide(wall96);

  player.collide(wall97);

  player.collide(wall98);

  player.collide(wall99);

  player.collide(wall100);

  //player.collide(virus9);

  drawSprites();

  if(player.x === 10) {
    fill("blue");
    textSize(25);
    text("Help the player to get out of the maze and stay away",10,270);
    text("from corona virus",150,300);
  }

  if(player.x >= 590) {
    fill("blue");
    textSize(25);
    text("YOU WON!!!",250,280);
  }

  if(player.isTouching(sanitizer1) || player.isTouching(sanitizer2) || player.isTouching(mask1)) {
    if(player.isTouching(sanitizer1)) {
      life = life+1;
      sanitizer1.destroy();
    }

    if(player.isTouching(sanitizer2)) {
      life = life+1;
      sanitizer2.destroy();
    }

    if(player.isTouching(mask1)) {
      life = life+1;
      mask1.destroy();
    }
  }

  if(player.isTouching(virus1) || player.isTouching(virus2) || player.isTouching(virus3) || player.isTouching(virus4) || player.isTouching(virus5) || player.isTouching(virus6) || player.isTouching(virus7) || player.isTouching(virus8) || player.isTouching(crowd1) || player.isTouching(crowd2)) {
    console.log("hello");
    if(player.isTouching(virus1) && life > 0) {
      life = life-1;
      virus1.destroy();
      //playsound();
    }

    if(player.isTouching(virus2) && life > 0) {
      life = life-1;
      virus2.destroy();
      //playsound();
    }

    if(player.isTouching(virus3) && life > 0) {
      life = life-1;
      virus3.destroy();
      //playsound();
    }

    if(player.isTouching(virus4) && life > 0) {
      life = life-1;
      virus4.destroy();
      //playsound();
    }

    if(player.isTouching(virus5) && life > 0) {
      life = life-1;
      virus5.destroy();
      //playsound();
    }

    if(player.isTouching(virus6) && life > 0) {
      life = life-1;
      virus6.destroy();
      //playsound();
    }

    if(player.isTouching(virus7) && life > 0) {
      life = life-1;
      virus7.destroy();
      //playsound();
    }

    if(player.isTouching(virus8) && life > 0) {
      life = life-1;
      virus8.destroy();
      //playsound();
    }

    if(player.isTouching(crowd1) && life > 0) {
      life = life-1;
      crowd1.destroy();
      //playsound();
    }

    if(player.isTouching(crowd2) && life > 0) {
      life = life-1;
      crowd2.destroy();
      //playsound();
    }
    
    if(life === 0){
      gameState = "OVER";
      player.velocityX = 0;
      player.velocityY = 0;
    }
  }

  if(gameState === "OVER") {
    fill("blue");
    textSize(25);
    text("YOU LOSE!!!",250,280);
  }
}