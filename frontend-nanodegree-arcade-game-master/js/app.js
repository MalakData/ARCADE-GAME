'use strict';
let gameover = document.querySelector(".game-over");
let winner = document.querySelector(".win");
let pointGame=0;

    
        //Function Game Over
    function gameOver(){
        gameover.classList.add("show");
    }
    // Reset Game Function
    function resetGame(){
        window.location.reload(true);
    }
    // Player Win Game Function
    function winnerGama(){
        winner.classList.add("show");
    }
// Enemies our player must avoid
var Enemy=function (x, y,speed){
        this.x=x;
        this.y=y;
        this.location=(x , y);
        this.sprite = 'images/enemy-bug.png';
        this.speed=speed;
    };
    // Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    Enemy.prototype.update=function(dt){
        this.x += 100 * this.speed * dt;
        //function Check-Collisions
            if (parseInt(this.x)+ 100 >= play.x && parseInt(this.x) <= play.x + 40 && this.y === play.y){
                console.log("a collision just occured your player diessss");  
                play.reset();
                pointGame += 1
            }
                if(pointGame>=3){
                    gameOver();
                
            }
        };

    // Draw the enemy on the screen, required method for game
        Enemy.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        };

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

    var Player=function (x ,y) {
        this.x=x;
        this.y=y;
        this.sprite= 'images/char-horn-girl.png';  

    };

   Player.prototype.update = function(){
    play.x; 
    play.y;
    PlayerIsWinner();
   }
   
   //to draws player on canvas 
    Player.prototype.render=function () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        
    }

        // method to handleInput() 
    Player.prototype.handleInput = function(pressedKeys){
        if (pressedKeys === 'left' && this.x > 33){
            this.x -= 100;
        }
        else if (pressedKeys === 'up'&& this.y > 18){
            this.y -= 80;
            //use the method for measuer distance 
           console.log(play.y)
            
        }
        else if (pressedKeys === 'right' && this.x < 400){
            this.x += 100
        }
        else if (pressedKeys === 'down' && this.y < 380){
            this.y += 80
        }
    };
   
    Player.prototype.reset = function(){
        this.x = 200;
        this.y = 380;
    }
    // possible X-axis positions on board
    var columns = [ -5, -100, -200, -300, -400];
    var enemyX;

    // possible Y-axis positions on board
    var rows = [ 60, 140, 220];
    var enemyY;

    var enemySpeed;

    // this is to randomly pick locations for bugs
    setInterval(function instances(){
        enemyX = columns[Math.floor(Math.random() * 5)],
        enemyY = rows[Math.floor(Math.random() * 12)],
        enemySpeed = Math.floor(Math.random() * 15),
        allEnemies.push(new Enemy(enemyX, enemyY, enemySpeed)); 
    },500)
    // Now instantiate your objects.
    // Place all enemy objects in an array called allEnemies
    let allEnemies = [ new Enemy(-8, 60, 10), new Enemy(30, 140, 10), new Enemy(-11, 220, 10)];
    // Place the player object in a variable called player
    let play= new Player(200,380);
    // This listens for key presses and sends the keys to your
    // Player.handleInput() method. You don't need to modify this.
    document.addEventListener('keyup', function(e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        play.handleInput(allowedKeys[e.keyCode]);
    });
    //function when player is arrive water winner
    //-20 is distance of water block 
    function PlayerIsWinner(){
        if(play.y==-20){
            winnerGama();
        }

    }