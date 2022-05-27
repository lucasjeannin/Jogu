//Var
var Codigo
var level
var Hero, imgHero, imgHero1, imgHero2, Hero2
var Espada, imgEspada, imgEspada1, Espada2
var Tiurex, imgTiurex, imgTiurex1, imgTiurex2
var Bonus, Bonus1, Bonus2, Bonus3, Bonus4, imgBonus, imgBonus2, imgBonus3, Pontuação, Texto, Prj, TxtPrj
var Bicho, imgBicho, imgBicho1
var Slime, imgSlime
var Solo, Plataforma, Plataforma1, Plataforma2, Plataforma3, Parede1, Parede2, Parede3
var Vida_boss, txtBoss, Vida_boss1, txtBoss1
var Escudo, imgEscudo
var Projetil, Projetil2, imgProjetil
var Canhao, imgCanhao, Bomba, imgBomba
var REXRAIO , rexRaio, rexRaio1
var Raios, imgRaios, Raios2, LuvaDeRaio, imgLuvaDeRaio, LDR
var Cavaleiro,imgCavaleiro, EspadaB, imgEspadaB, EscudoB, imgEscudoB, Vida_boss2
var CavaleiroB, imgCavaleiroB, imgCavaleiroB1,  imgCavaleiroB2, ArmaduraBoss
var Strike, imgStrike
var Trofeu, imgTrofeu

Codigo = 0


class FirstLevel {
  constructor() {

    //Heroi
    Hero = createSprite(100, 570, 50, 150)
    Hero.addAnimation("forma", imgHero1)
    Hero.addAnimation("correr", imgHero)
    Hero.addAnimation("correr2", imgHero2)
    Hero.scale = 0.06

    //Espada
    Espada = createSprite(Hero.x + 15, Hero.y, 5, 15)
    Espada.addAnimation("golpe", imgEspada)
    Espada.addAnimation("golpe1", imgEspada1)
    Espada.scale = 0.15;
    Espada.visible = false;

    //Tiurex
    Tiurex = createSprite(1500, 560, 40, 40)
    Tiurex.addImage("rexis", imgTiurex)
    Tiurex.addImage("rexis1", imgTiurex1)
    Tiurex.addImage("rexis2", imgTiurex2)
    Tiurex.scale = 0.2

    //Bonus
    Bonus2 = createSprite(100, 470, 20, 40)
    Bonus2.addImage("c", imgBonus2)
    Bonus2.scale = 0.3
    Bonus = createSprite(1000, 585, 20, 40)
    Bonus1 = createSprite(1300, 585, 20, 40)
    Bonus.addImage("a", imgBonus)
    Bonus1.addImage("b", imgBonus)
    Bonus.scale = 0.3
    Bonus1.scale = 0.3
    Bonus3 = createSprite(900, 330, 20, 20)
    Bonus3.addImage("d", imgBonus3)
    Bonus3.scale = 0.35;

    Pontuação = 0
    console.log(Pontuação)

    //Bicho
    Bicho = createSprite(1900, 480, 40, 40)
    Bicho.addImage("monstro", imgBicho)
    Bicho.addImage("monstro1", imgBicho1)
    Bicho.scale = 0.6
    Bicho.velocityX = 30
    //Slime
    Slime = createSprite(50, 450, 20, 20)
    Slime.addImage("monstro2", imgSlime)
    Slime.velocityX = 0
    Slime.scale = 0.3
    //Escudo
    Escudo = createSprite(900, 265, 30, 30)
    Escudo.addAnimation("escudo", imgEscudo)
    Escudo.scale = 1.6
    Escudo.velocityX = 5
    Vida_boss1 = 5
    //Tiro
    Projetil = createSprite(Hero.x, Hero.y, 10, 10)
    Projetil.addImage("TIRO", imgProjetil)
    Projetil.scale = 0.2

    //Chão
    Plataforma = createSprite(0, 485, 800, 10)
    Solo = createSprite(0, 600, 4200, 10)
    Plataforma1 = createSprite(900, 350, 1000, 10)
    //Colider
    Espada.setCollider("rectangle", 0, 0, 270, 300)
    Tiurex.setCollider("rectangle", 0, 0, 700, 400)
    Bicho.setCollider("rectangle", 0, 0, 400, 300)
    Hero.setCollider("rectangle", 0, 0, 800, 800)
    //Outros
    Tiurex.velocityX = -20
    Tiurex.depth = Tiurex.depth + 5;
    createEdgeSprites()
    Slime.visible = false;
    Vida_boss = 40
    Prj = 0
    Projetil.visible = false;

  }


  draw() {

    background("white")
    TxtPrj = text("Projeteis:" + Prj, 1050, 100)
    txtBoss1 = text("Escudo Gigante:" + Vida_boss1, 500, 1000)
    Texto = text("PT:" + Pontuação, 50, 50)
    Texto.scale = 4
    if (keyDown("d")) {
      Hero.changeAnimation("correr", imgHero)
      Hero.velocityX = 6


    }
    if(CavaleiroB.x <= 900){
      CavaleiroB.velocityX = 8
      
    }
    if(Cavaleiro.x <= 0){
      Cavaleiro.velocityX = 10
      EscudoB.velocityX = 10
      EspadaB.velocityX = 10
    }
    if(Cavaleiro.x >= 700){
      Cavaleiro.velocityX = -10
      EscudoB.velocityX = -10
      EspadaB.velocityX = -10
    }
    if(CavaleiroB.x >= 1500){
      CavaleiroB.velocityX = -8
      
    }
    //IFIS
    if (keyDown("space") && Hero.y > 560) {
      Hero.velocityY = -11;

    }
    Hero.velocityY = Hero.velocityY + 0.5;


    if (keyDown("a")) {
      Hero.changeAnimation("correr2", imgHero2)
      Hero.velocityX = -6
    }
    if(REXRAIO.x <= 1500){
      REXRAIO.velocityX = 6
      REXRAIO.changeAnimation("repangalo", rexRaio)
    }
    if(REXRAIO.x >= 1900){
      REXRAIO.velocityX = -6
      REXRAIO.changeAnimation("repangalo1", rexRaio1)
    }
    if (keyDown("l")) {

      Espada.changeAnimation("golpe", imgEspada)
      Espada.visible = true;
      Espada.x = Hero.x + 25
      Espada.y = Hero.y
      if (Espada.isTouching(Tiurex)) {
        Tiurex.destroy();
      }
      if (Espada.isTouching(Bicho)) {
        Bicho.destroy();
      }
      if (Espada.isTouching(Slime)) {
        Vida_boss = Vida_boss - 4
      }

    } else {
      Espada.visible = false;
    }

    if (keyDown("k")) {
      if (Espada.isTouching(Slime)) {
        Vida_boss = Vida_boss - 4
      }
      Espada.changeAnimation("golpe1", imgEspada1)
      Espada.visible = true;
      Espada.x = Hero.x - 30
      Espada.y = Hero.y
      if (Espada.isTouching(Tiurex)) {
        Tiurex.destroy();
      }
      if (Espada.isTouching(Bicho)) {
        Bicho.destroy();
      }


    }


    if (Tiurex.x >= 1900) {
      Tiurex.changeImage("rexis", imgTiurex)
      Tiurex.velocityX = -20
    }
    if (Tiurex.x <= 1000) {

      Tiurex.changeImage("rexis1", imgTiurex1)
      Tiurex.velocityX = 20
    }
    if (Slime.x >= 400) {
      Slime.velocityX = -10
    }
    if (Slime.x <= 50) {

      Slime.velocityX = 10;
    }
    if (Tiurex.isTouching(Hero)) {
      Hero.destroy();

    }
    if (Hero.isTouching(Bonus)) {
      Codigo = Codigo + 1
      Pontuação = Pontuação + 50;
      Bonus.destroy();
      Prj = Prj + 1


    }
    if (Hero.isTouching(Bonus3)) {

      Pontuação = Pontuação + 200;
      Bonus3.destroy();
      Prj = Prj + 3
      Hero.velocityX = Hero.velocityX + 5


    }
    if (Espada.isTouching(Bonus)) {

      Pontuação - 50;
      Bonus.destroy();

    }
    if (Hero.isTouching(Bonus1)) {

      Pontuação = Pontuação + 50;
      Bonus1.destroy();
      Prj = Prj + 1

    }
    if (Espada.isTouching(Bonus1)) {

      Pontuação - 50;
      Bonus1.destroy();

    }
    if (Hero.isTouching(Bonus2)) {
      Hero.velocityX + 3
      Pontuação = Pontuação + 50;
      Bonus2.destroy();
      Prj = Prj + 1

    }
    if (Espada.isTouching(Bonus2)) {
      Hero.velocityX - 3
      Pontuação - 50;
      Bonus2.destroy();

    }
    if (Bicho.x >= 1900) {
      Bicho.changeImage("monstro", imgBicho)
      Bicho.velocityX = -30
    }
    if (Bicho.x <= 1300) {

      Bicho.changeImage("monstro1", imgBicho1)
      Bicho.velocityX = 30
    }
    if (Bicho.isTouching(Hero)) {
      Hero.destroy();

    }
    if (Hero.collide(Plataforma)) {
      if (keyDown("space")) {
        Hero.velocityY = -14;

      }

    }
    if (Hero.x <= 800 && Hero.y <= 470) {
      Slime.visible = true;
      txtBoss = text("SLIME :" + Vida_boss, 1600, 100)
      txtBoss.scale = 8
    }
    if (Vida_boss <= 0) {
      Slime.destroy()
    }
    if (Slime.isTouching(Hero)) {
      Hero.destroy();
    }
    if (Escudo.x >= 1400) {
      Escudo.velocityX = -5
    }
    if (Escudo.x <= 400) {
      Escudo.velocityX = 5
    }
    if (Prj > 0) {
      if (keyDown("m")) {
        Projetil.x = Hero.x
        Projetil.y = Hero.y
        Projetil.velocityX = 40
        Prj = Prj - 1
        Projetil.visible = true;

      }
      if (keyDown("n")) {
        Projetil.x = Hero.x
        Projetil.velocityX = -40
        Prj = Prj - 1
        Projetil.visible = true;
      }
    }
    if (Escudo.isTouching(Hero)) {
      Hero.destroy();

    }
    if (Projetil.isTouching(Escudo)) {
      Vida_boss1 = Vida_boss1 - 1

    }
    if (Vida_boss1 <= 0) {
      Escudo.destroy()
      
    }


    Hero.collide(Plataforma);
    Hero.collide(Plataforma1);
    Hero.collide(Solo);
  }

  clean() {
    Plataforma.destroy();
    Plataforma1.destroy();
    Hero.destroy()
    Tiurex.destroy()
    Escudo.destroy()
    Slime.destroy()
    Bicho.destroy()
    Bonus.destroy()
    Bonus1.destroy()
    Bonus2.destroy()
    Bonus3.destroy()
  }

}

class SecondLevel {
  constructor() {
    Espada2 = createSprite(Hero.x + 15, Hero.y, 5, 15)
    Espada2.addAnimation("golpe", imgEspada)
    Espada2.addAnimation("golpe1", imgEspada1)
    Espada2.scale = 0.15;
    Espada2.visible = false;

    Plataforma2 = createSprite(1800, 485, 600, 10 )
    Plataforma3 = createSprite(1200, 300, 600, 10)
    Parede1 = createSprite(400, 470, 800, 10)
    Parede2 = createSprite(795, 270, 10, 400)
    Parede3 = createSprite(400, 65, 800,10)

    Projetil2 = createSprite(Hero.x, Hero.y, 10, 10)
    Projetil2.addImage("TIRO", imgProjetil)
    Projetil2.scale = 0.2

    CavaleiroB = createSprite(1200, 210, 50, 50)
    CavaleiroB.addImage("1", imgCavaleiroB)
    CavaleiroB.addImage("2", imgCavaleiroB1)
    CavaleiroB.addImage("3", imgCavaleiroB2)
    CavaleiroB.scale = 2
    CavaleiroB.velocityX = -8
    CavaleiroB.setCollider("rectangle", 0, 0, 40, 50)
    ArmaduraBoss = 100

    Hero2 = createSprite(100, 570, 50, 150)
    Hero2.addAnimation("forma", imgHero1)
    Hero2.addAnimation("correr", imgHero)
    Hero2.addAnimation("correr2", imgHero2)
    Hero2.visible = false
    Hero2.scale = 0.06

    Vida_boss2 = 200

    Strike = createSprite(10 , 10, 10, 30)
    Strike.addImage("10", imgStrike)

    Cavaleiro = createSprite(400, 390, 10, 10)
    Cavaleiro.addAnimation("morte", imgCavaleiro)
    Cavaleiro.scale = 0.75
    Cavaleiro.velocityX = -10
    EscudoB = createSprite(Cavaleiro.x - 50, Cavaleiro.y - 10, 10, 10)
    EscudoB.addImage("cudo", imgEscudoB)
    EscudoB.velocityX = -10
    EspadaB = createSprite(Cavaleiro.x + 30, Cavaleiro.y -20, 10, 10)
    EspadaB.addImage("pada", imgEspadaB)
    EspadaB.velocityX = - 10

    Raios = createSprite(100, 100, 70, 10)
    Raios.addAnimation("raios", imgRaios)

    Bonus4 = createSprite(760, 580, 20, 40)
    Bonus4.addImage("e", imgBonus2)
    Bonus4.scale = 0.35

    Raios2 = createSprite(100, 100, 70, 10)
    Raios2.addAnimation("raios", imgRaios)

    Trofeu = createSprite(10, 10, 20, 20)


    REXRAIO = createSprite(1700, 430, 80, 80)
    REXRAIO.addAnimation("repangalo", rexRaio)
    REXRAIO.addAnimation("repangalo1", rexRaio1)
    REXRAIO.velocityX = -6
    rexRaio.scale = 4

    LuvaDeRaio = createSprite(10, 10, 10, 10)
    LuvaDeRaio.addImage("asd", imgLuvaDeRaio)

    Bomba = createSprite(10, 10, 20, 20)
    Bomba.addImage("Tiro", imgBomba)
    
    Pontuação = 0

    Canhao = createSprite(1800, 560, 30, 30)
    Canhao.addAnimation("bomba", imgCanhao)
    Canhao.scale= 0.8

    

    Canhao.visible = false;
    Bomba.visible = false;
    REXRAIO.visible = false;
    Bonus4.visible = false;
    Plataforma2.visible = false;
    Raios.visible = false;
    Raios2.visible = false;
    Projetil2.visible = false;
    LuvaDeRaio.visible = false;
    CavaleiroB.visible = false;
    Plataforma3.visible = false;
    Parede1.visible = false;
    Parede2.visible = false;
    Parede3.visible = false;
    EscudoB.visible = false;
    EspadaB.visible = false;
    Cavaleiro.visible = false;
    Strike.visible = false;
    Trofeu.visible = false;
  }

  start () {
    Hero2.visible = true;  
    Canhao.visible = true;
    REXRAIO.visible = true;
    Bonus4.visible = true;
    Plataforma2.visible = true;
    Projetil2.visible = false;
    LuvaDeRaio.visible = false;
    Plataforma3.visible = true;
    CavaleiroB.visible = true;
    Parede3.visible = true;
    Parede2.visible = true;
    Parede1.visible = true;
    EscudoB.visible = true;
    EspadaB.visible = true;
    Cavaleiro.visible = true;
  }

  draw() {
    background("white")
    
    Texto = text("PT:" + Pontuação, 50, 50)
    text("Armadura do Cavaleiro 1 :" + ArmaduraBoss, 1250, 100)
    text("Cavaleiro Mestre : " + Vida_boss2, 1450, 100)
    TxtPrj = text("Projeteis:" + Prj, 1050, 100)
    if(Hero2.isTouching(LuvaDeRaio)){
      LuvaDeRaio.destroy();
      LDR = 1 
      }
    if(LDR === 1 && keyDown("j")){
      Raios2.x = Hero2.x + 105
      Raios2.y = Hero2.y 
      Raios2.visible = true;
      Raios2.scale = 3
      if(Raios2.isTouching(CavaleiroB)){
        ArmaduraBoss = ArmaduraBoss - 0.25
        }
        if(Raios2.isTouching(Cavaleiro)){
          Vida_boss2 = Vida_boss2 - 0.25
          }
    }else{
      Raios2.visible = false;
    }
    if(Cavaleiro.x <= 0){
      Cavaleiro.velocityX = 10
      EscudoB.velocityX = 10
      EspadaB.velocityX = 10
    }
    if(Cavaleiro.x >= 700){
      Cavaleiro.velocityX = -10
      EscudoB.velocityX = -10
      EspadaB.velocityX = -10
    }
    


  
    if(LDR === 1 && keyDown("h")){
      Raios2.x = Hero2.x - 105
      Raios2.y = Hero2.y 
      Raios2.visible = true;
      Raios2.scale = 3
      if(Raios2.isTouching(CavaleiroB)){
        ArmaduraBoss = ArmaduraBoss - 0.25
        }
        if(Raios2.isTouching(Cavaleiro)){
          Vida_boss2 = Vida_boss2 - 0.25
          }
    }
   
    
    if(Projetil2.isTouching(EspadaB)){
      Vida_boss2 = Vida_boss2 - 5
    }
    
    if (keyDown("d")) {
      Hero2.changeAnimation("correr", imgHero)
      Hero2.velocityX = 6


    }
    if (keyDown("space") && Hero2.y > 560) {
      Hero2.velocityY = -11;

    }
    if (Hero2.collide(Plataforma2)) {
      if (keyDown("space")) {
        Hero2.velocityY = -14;

      }
    }
   
    if (Hero2.collide(Parede1)) {
      if (keyDown("space")) {
        Hero2.velocityY = -14;

      }
    }
    if (Hero2.collide(Plataforma3)) {
      if (keyDown("space")) {
        Hero2.velocityY = -14;

      }
    }
    if (Hero2.isTouching(Bonus4)) {
      Pontuação = Pontuação + 50;
      Bonus4.destroy();
      Prj = Prj + 0
      


    }
    if(Hero2.isTouching(EspadaB)){
      Hero2.destroy()
    }
    if (keyDown("m") && Prj >= 1) {
      Projetil2.x = Hero2.x
      Projetil2.y = Hero2.y
      Projetil2.velocityX = 40
      Prj = Prj - 1
      Projetil2.visible = true;

    }
    
    if(ArmaduraBoss <= 0){
      if(Espada2.isTouching(CavaleiroB)){
        CavaleiroB.destroy();
        Pontuação = Pontuação + 200
        Prj = Prj + 5
      }
    }
    if(Pontuação === 350){
      Parede2.destroy()
    }
    if(ArmaduraBoss <= 50){
      CavaleiroB.changeImage("2", imgCavaleiroB1)
    }
    if(ArmaduraBoss <= 0){
      CavaleiroB.changeImage("3", imgCavaleiroB2)
    }
    if (keyDown("n") && Prj >= 1) {
      Projetil2.x = Hero2.x
      Projetil2.y = Hero2.y
      Projetil2.velocityX = -40
      Prj = Prj - 1
      Projetil2.visible = true;

    }
    if(Vida_boss2 <= 0){
      Cavaleiro.destroy()
      EscudoB.destroy()
      EspadaB.destroy()
      Trofeu.x = Cavaleiro.x
      Trofeu.y = Cavaleiro.y - 35
      
    }
    if (keyDown("l")) {

      Espada2.changeAnimation("golpe", imgEspada)
      Espada2.visible = true;
      Espada2.x = Hero2.x + 25
      Espada2.y = Hero2.y
      if (Espada2.isTouching(Bomba)) {
        Bomba.velocityX = 30;

       }
    
      
      
    }else{
      Espada2.visible = false;
    }
    if(Hero2.x >= 1500 && Hero.y >= 505){
      Raios.visible = true;
      Raios.x = REXRAIO.x - 155;
      Raios.y = REXRAIO.y;
      Raios.scale = 5;
      REXRAIO.changeAnimation("repangalo1", rexRaio1)
      REXRAIO.velocityX = 0;
      if(Raios.isTouching(Hero2)){
        Hero2.destroy();
      }

    }else{
      
      Raios.visible = false;
      if(REXRAIO.x <= 1500){
        REXRAIO.velocityX = 6
        REXRAIO.changeAnimation("repangalo", rexRaio)
      }
      if(Projetil2.isTouching(REXRAIO)){
        LuvaDeRaio.x = REXRAIO.x
        LuvaDeRaio.y = REXRAIO.y + 20
        LuvaDeRaio.visible = true;
        REXRAIO.destroy();
        Raios.destroy();
        Pontuação = Pontuação + 100
        Prj = Prj + 4
      }
     
      
      if(REXRAIO.x >= 1900){
        REXRAIO.velocityX = -6
        REXRAIO.changeAnimation("repangalo1", rexRaio1)
      }
    }
    
      if(Vida_boss2 <= 100){
        if(Strike.isTouching(Hero2)){
          Hero2.destroy();
        }
        if(frameCount % 240 === 0){
          Strike.x = EspadaB.x;
          Strike.y = EspadaB.y + 45;
          Strike.visible = true;
          Strike.scale = 2.5;
          Strike.velocityX = 30
        }
      }
   
    if (keyDown("k")) {

      Espada2.changeAnimation("golpe1", imgEspada1)
      Espada2.visible = true;
      Espada2.x = Hero2.x - 30
      Espada2.y = Hero2.y
      if (Espada2.isTouching(Bomba)) {
        Bomba.velocityX = 30;
       }
       if(Raios2.isTouching(EspadaB)){
        Vida_boss2 = Vida_boss2 - 0.15
      }
      
      }
    if (Bomba.isTouching(Canhao)) {
      Canhao.destroy();
      Prj = Prj + 1
      Bomba.destroy();
     }
    if(Bomba.isTouching(Hero2)){
      Hero2.destroy();
      Bomba.destroy();
    }
    Hero2.velocityY = Hero2.velocityY + 0.5;
    

    if (keyDown("a")) {
      Hero2.changeAnimation("correr2", imgHero2)
      Hero2.velocityX = -6
    }
    if(Hero2.x === 400 && Hero2.y > 550){
      Bomba.x = Canhao.x - 50
      Bomba.y = Canhao.y
      Bomba.velocityX = -30
      Bomba.visible = true;
    }
    if(CavaleiroB.x <= 900){
      CavaleiroB.velocityX = 8
      
    }
    if(CavaleiroB.x >= 1500){
      CavaleiroB.velocityX = -8
      
    }
    if(CavaleiroB.isTouching(Hero2)){
      Hero2.destroy();
      CavaleiroB.velocityX = 0
    }
    Hero2.collide(Solo);
    Hero2.collide(Plataforma2);
    Hero2.collide(Plataforma3);
    Hero2.collide(Parede1);
    Cavaleiro.collide(Parede1)
    EscudoB.collide(Parede1)
    EspadaB.collide(Parede1)
  }

  clean() {

  }

}


function preload() {
  imgHero1 = loadAnimation("personagem3.png")
  imgHero = loadAnimation("personagem1.png", "personagem2.png")
  imgHero2 = loadAnimation("personagem5.png", "personagem6.png")
  imgEspada = loadAnimation("Espada.png", "Espada1.png", "Espada.png")
  imgEspada1 = loadAnimation("Espada4.png", "Espada2.png", "Espada4.png")
  imgTiurex = loadImage("Tiurex.png")
  imgTiurex1 = loadImage("Tiurex1.png")
  imgTiurex2 = loadImage("Tiurex2.png")
  imgBonus = loadImage("Bonus.png")
  imgBicho = loadImage("Bicho.png")
  imgBicho1 = loadImage("Bicho1.png")
  imgSlime = loadImage("Slime.png")
  imgBonus2 = loadImage("Bonus2.png")
  imgEscudo = loadAnimation("Escudo.png", "Escudo1.png", "Escudo2.png")
  imgProjetil = loadImage("Projetil.png")
  imgBonus3 = loadImage("Bonus3.png")
  imgCanhao = loadImage("Chanhao.png")
  imgBomba = loadImage("Fogo.png")
  rexRaio = loadAnimation("RexsRaio.png", "RexsRaio1.png", "RexsRaio2.png")
  rexRaio1 = loadAnimation("RexsRaio3.png", "RexsRaio4.png", "RexsRaio5.png")
  imgRaios = loadAnimation("Raios.png", "Raios1.png", "Raios.png")
  imgLuvaDeRaio = loadImage("Raio.png")
  imgEscudoB= loadImage("EscudoB.png")
  imgEspadaB = loadImage("EspadaB.png")
  imgCavaleiro = loadAnimation("Cavaleiro1.png", "Cavaleiro2.png", "Cavaleiro3.png")
  imgCavaleiroB = loadImage("Cara_da_Espada.png")
  imgCavaleiroB1 = loadImage("Cara_da_Espada1.png")
  imgCavaleiroB2 = loadImage("Cara_da_Espada2.png")
  imgStrike = loadImage("FireStrike.png")
  imgStrike1 = loadImage("FireStrike1.png")
  imgTrofeu = loadImage("Trofeu.png")
 }






function setup() {
  createCanvas(2100, 600)
  level = new FirstLevel()
  level2 = new SecondLevel()
}

function draw() {
  
    if (keyDown("p") ) {
      level.clean()
      Pontuação = 0
      level = level2 
      level.start()
    }
    level.draw()
    drawSprites();

}
