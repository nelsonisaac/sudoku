
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame(){
    //Digits from 1-9
    for(let i=1;i<=9;i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div"); //creates a element with that variable
        number.id = i;                  //assigning the id of that variable with i to identify
        number.innerText = i;   
        number.addEventListener("click",selectNumber);  //giving the value i to the element created
        number.classList.add("number"); //gives the element a class for styling
        document.getElementById("digits").appendChild(number); //adds the number div as a child to the digits div
    }

    //Board
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let tile = document.createElement("div");
            tile.addEventListener("click",selectTile);
            //adding the board numbers to the grid
            if(board[r][c] === "-"){
                tile.innerText = null;
            }else{
                tile.innerText = board[r][c];
                tile.classList.add("tile-selected");
            }
            //adding border lines for 3x3 grid
            if( r == 2 || r == 5){
                tile.classList.add("horizontal-line");
            }
            if( c == 2 || c == 5){
                tile.classList.add("vertical-line");
            }
            
            tile.id = r.toString() +"-"+ c.toString();
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }


}

function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");

}

function selectTile(){
    if(numSelected){
        if(this.innerText != ""){
            return;
        }
        //splitting the id 0-1 by removing the "-" and assigning to r and c
        let coordinates = this.id.split("-");
        let r = parseInt(coordinates[0]);
        let c = parseInt(coordinates[1]);
        //comparing the selected number to the solution
        if(solution[r][c]==numSelected.id){
            this.innerText = numSelected.id;
        }
        else{
            errors += 1;
            document.getElementById("errors").innerText = errors;
            }
        
    }
    
}
