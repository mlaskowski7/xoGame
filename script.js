const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');
const block5 = document.getElementById('block5');
const block6 = document.getElementById('block6');
const block7 = document.getElementById('block7');
const block8 = document.getElementById('block8');
const block9 = document.getElementById('block9');
const resetButton = document.getElementById('reset-icon');
const resultText = document.getElementById('result-text');
const scoreOEl = document.getElementById('scoreO');
const scoreXEl = document.getElementById('scoreX');
const turnEl = document.getElementById('turn');
const resetPointsBtn = document.querySelector('.reset-points');

let player = 'o';
let blockFilled = {};
let blocks = {block1,block2,block3,block4,block5,block6,block7,block8,block9};
let gameOver = false;
let scoreX = 0;
let scoreO = 0;

function printSign(event){
    resultText.setAttribute("hidden","");
    if(blockFilled[event.target.id] === undefined || blockFilled[event.target.id] === null){
        let html = '';
        if(player === 'x'){
            html = '<i class="fa-solid fa-xmark"></i>';
        } else if (player === 'o'){
            html = '<i class="fa-solid fa-o"></i>';
        }
        event.target.innerHTML = html;
        blockFilled[event.target.id] = player;
        if(player === 'x'){
            player = 'o';
        } else if(player === 'o'){
            player = 'x';
        }
        turnEl.textContent =`Player ${player} turn`;
    } else {
        alert("This Place is already filled!");
    }
    checkGameOver();
    
}

function reset(){
    Object.values(blocks).forEach(element => {
        element.innerHTML = '';
    });
    player ='o';
    blockFilled = {};
}

function resetPoints(){
    scoreO = 0;
    scoreX = 0;
    scoreXEl.textContent =`Player X: ${scoreX}`;
    scoreOEl.textContent =`Player O: ${scoreO}`;
}

function checkGameOver(){
    if (blockFilled["block1"] === 'x' && blockFilled["block1"] === blockFilled["block2"] && blockFilled["block2"] === blockFilled["block3"] || 
    blockFilled["block4"] === 'x' && blockFilled["block4"] === blockFilled["block5"] && blockFilled["block5"] === blockFilled["block6"]||
    blockFilled["block7"] === 'x' && blockFilled["block7"] === blockFilled["block8"] && blockFilled["block8"] === blockFilled["block9"] ||
    blockFilled["block1"] === 'x' && blockFilled["block1"] === blockFilled["block4"] && blockFilled["block4"] === blockFilled["block7"]||
    blockFilled["block2"] === 'x' && blockFilled["block2"] === blockFilled["block5"] && blockFilled["block5"] === blockFilled["block8"]||
    blockFilled["block3"] === 'x' && blockFilled["block3"] === blockFilled["block6"] && blockFilled["block6"] === blockFilled["block9"]||
    blockFilled["block1"] === 'x' && blockFilled["block1"] === blockFilled["block5"] && blockFilled["block5"] === blockFilled["block9"]||
    blockFilled["block3"] === 'x' && blockFilled["block3"] === blockFilled["block5"] && blockFilled["block5"] === blockFilled["block7"]){
        resultText.textContent = "Player X Won!";
        resultText.removeAttribute("hidden");
        scoreX += 1;
        scoreXEl.textContent =`Player X: ${scoreX}`;
        reset();
    } else if(blockFilled["block1"] === 'o' && blockFilled["block1"] === blockFilled["block2"] && blockFilled["block2"] === blockFilled["block3"] || 
    blockFilled["block4"] === 'o' && blockFilled["block4"] === blockFilled["block5"] && blockFilled["block5"] === blockFilled["block6"]||
    blockFilled["block7"] === 'o' && blockFilled["block7"] === blockFilled["block8"] && blockFilled["block8"] === blockFilled["block9"] ||
    blockFilled["block1"] === 'o' && blockFilled["block1"] === blockFilled["block4"] && blockFilled["block4"] === blockFilled["block7"]||
    blockFilled["block2"] === 'o' && blockFilled["block2"] === blockFilled["block5"] && blockFilled["block5"] === blockFilled["block8"]||
    blockFilled["block3"] === 'o' && blockFilled["block3"] === blockFilled["block6"] && blockFilled["block6"] === blockFilled["block9"]||
    blockFilled["block1"] === 'o' && blockFilled["block1"] === blockFilled["block5"] && blockFilled["block5"] === blockFilled["block9"]||
    blockFilled["block3"] === 'o' && blockFilled["block3"] === blockFilled["block5"] && blockFilled["block5"] === blockFilled["block7"]){
        resultText.textContent = "Player O Won!";
        resultText.removeAttribute("hidden");
        scoreO += 1;
        scoreOEl.textContent =`Player O: ${scoreO}`;
        reset();
    } 
    else if(blockFilled['block1'] != undefined && blockFilled['block2'] != undefined && blockFilled['block3'] != undefined && blockFilled['block4'] != undefined && blockFilled['block5'] != undefined && blockFilled['block6'] != undefined && blockFilled['block7'] != undefined && blockFilled['block8'] != undefined && blockFilled['block9'] != undefined){
        resultText.textContent = "It's a tie!";
        resultText.removeAttribute("hidden");
        reset();
    }
}

// Event Listeners
block1.addEventListener('click',printSign);
block2.addEventListener('click',printSign);
block3.addEventListener('click',printSign);
block4.addEventListener('click',printSign);
block5.addEventListener('click',printSign);
block6.addEventListener('click',printSign);
block7.addEventListener('click',printSign);
block8.addEventListener('click',printSign);
block9.addEventListener('click',printSign);
resetButton.addEventListener('click',reset);
resetPointsBtn.addEventListener('click',resetPoints);