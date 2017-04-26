import { Board } from '../board.js';
import { generateBombs } from '../bombs.js';


function expertGame() {
    var bigBoard=new Board(16,30);
    bigBoard.createBoard();
    let numberBombs=99;
    let arrayOfBombs=generateBombs(bigBoard.numberElements,numberBombs);

    for (let bomb of arrayOfBombs) {
        bomb.bomb=true;
    }
    $('#numberOfBombs').html('Number of Bombs'+numberBombs);
    $('#options').css("display","none");


    $('button').on('click', function (ev) {
        console.log(ev.which);
        //1=left click
        //3=right click
    });
    $('button').on('contextmenu', function (ev) {
        let $target=$(ev.target);
        ev.preventDefault();//don't show context menu
        console.log(ev.which);
        if($target.html()==='*'){
            $target.html('');
            numberBombs++;
            $('#numberOfBombs').html('Number of Bombs'+numberBombs);
        } else {
            $target.html('*');
            numberBombs--;
            $('#numberOfBombs').html('Number of Bombs'+numberBombs);
        }
        //add Image Flag to button
        //think to simplifie,duplicate on each controller
        //do some css on flag event
    });

}

export { expertGame };