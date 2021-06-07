window.addEventListener('load', function () {
  puzzle.start();
});

const puzzle = {
  imageId: 0,
  start() {
    this.setImage(1);
    this.mixTiles();
    document.getElementById("table").addEventListener('click', event => this.onClick(event));
  },
  swapTiles(cell1, cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  },
  mixTiles() {
    for (let x = 1; x <= 4; x++) {
      for (let y = 1; y <= 4; y++) {
        let x2 = Math.floor(Math.random() * 4 + 1);
        let y2 = Math.floor(Math.random() * 4 + 1);

        this.swapTiles("cell" + x + y, "cell" + x2 + y2);
        this.configTile(this.imageId);
      }
    }
  },
  clickTile(x, y) {
    var cell = document.getElementById("cell" + x + y);
    var tile = cell.className;
    if (tile != "16") {
      //Checking if empty tile on the right
      if (y < 4) {
        if (document.getElementById("cell" + x + (y + 1)).className == "tile16") {
          this.swapTiles("cell" + x + y, "cell" + x + (y + 1));
          this.configTile(this.imageId);
          return;
        }
      }
      //Checking if empty tile on the left
      if (y > 1) {
        if (document.getElementById("cell" + x + (y - 1)).className == "tile16") {
          this.swapTiles("cell" + x + y, "cell" + x + (y - 1));
          this.configTile(this.imageId);
          return;
        }
      }
      //Checking if empty tile is above
      if (x > 1) {
        if (document.getElementById("cell" + (x - 1) + y).className == "tile16") {
          this.swapTiles("cell" + x + y, "cell" + (x - 1) + y);
          this.configTile(this.imageId);
          return;
        }
      }
      //Checking if empty tile is below
      if (x < 4) {
        if (document.getElementById("cell" + (x + 1) + y).className == "tile16") {
          this.swapTiles("cell" + x + y, "cell" + (x + 1) + y);
          this.configTile(this.imageId);
          return;
        }
      }
    }
  },
  setImage(imageId) {
    for (i = 1; i <= 4; i++) {
      for (j = 1; j <= 4; j++) {
        document.getElementById("cell" + i + j).style.backgroundImage = "none";
      }
    }
    this.imageId = imageId;
    if (imageId == 1) {
      this.configTile(imageId);
    }
    if (imageId == 2) {
      this.configTile(imageId);
    }
    if (imageId == 3) {
      this.configTile(imageId);
    }
  },

  configTile(number) {
    if (number == 1) {
      for (i = 1; i < 16; i++) {
        document.querySelector('.tile'+ i).style.backgroundImage = "url('img/zahlen.jpg')";
      }
    }
    if (number == 2) {
      for (i = 1; i < 16; i++) {
        document.querySelector('.tile'+ i).style.backgroundImage = "url('img/nature1.jpg')";
      }      
    }
    if (number == 3) {
      for (i = 1; i < 16; i++) {
        document.querySelector('.tile'+ i).style.backgroundImage = "url('img/nature2.jpg')";
      }  
    }
    document.querySelector('.tile16').style.backgroundImage = "none";
  },


  onClick(event) {
    if (this.isWin()) {
      setTimeout(() => {
        if (confirm('Du hast gewonnen!/nNoch ein Spiel?'))
          this.start();
      }, 200);
      return;
    }
  },

  isWin() {
    counter = 1;
    boolean = false;
    for (i = 1; i <= 4; i++) {
      for (j = 1; j <= 4; j++) {
        if (document.getElementById("cell" + i + j).className == ("tile" + counter)) {
          counter++;
        } else {
          boolean = false;
          return boolean;
        }
      }
    }
    boolean = true;
    return boolean;
  }
};


