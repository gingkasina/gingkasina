//ตัวแปร แทนค่าตาราง ผู้เล่นคนแรก และคนที่สอง เทริร์นคือเปลี่ยนตาผู้เล่น 
var table = ["none", "none", "none", "none", "none", "none", "none", "none", "none"]
var playerOne = "";
var playerTwo = "";
var turn = "";

//start ตอนแรกตั้งค่าเป็น false
var start = false;

function gamestart() {
    console.log("game Start!!");

    //เมื่อกดstart startจะเป็น true ผู้เล่นคนแรกเลือกจะเป็น x หรือ o 
    if (playerOne != null) {
        start = true;
        console.log(`playerOne selected: ${playerOne}`)
        getplayerTwo(playerOne);
        turn = playerOne;
    }
    //ถ้าไม่กดจะแจ้งเตือน
    else {
        alert("Choose X or O first!!")
    }
}
//ถ้าผู้เล่นคนแรกเลือก x คนที่สองจะเป็น o 
function getplayerTwo() {
    if (playerOne == "X") {
        playerTwo = "O";
    }
    //แต่ถ้าไม่ ผู้เล่นคนที่สองจะเป็น x
    else {
        playerTwo = "X";
    }
}
//เช็คว่าช่องที่กดนั้นว่างหรือไม่ ถ้าว่างก็กดใส่ตัวอักษรได้ ไปเรียกฟังก์ชั่นกดขึ้นมา
function check(input, num) {
    console.log("checking for winner...");
    if (document.getElementById(num).innerHTML == "") {
        document.getElementById(num).innerHTML = input;
        return true;
    }
    else {
        return false;
    }
}
//ฟังก์ชั่นเคลียร์ตารางให้ว่างเมื่อกดreset หรือ จบเกม
function reset() {
    console.log("reset....");
    for (var i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = "";
    }
    turn = playerOne
    start = false
    table = ["none", "none", "none", "none", "none", "none", "none", "none", "none"]
}
//ฟังก์ชั่นเลือกตัวอักษรของผู้เล่นคนแรก
function choice(choice) {
    console.log(choice)
    playerOne = choice;
}
//ถ้าไม่กด start จะแจ้งเตือนให้กด start ก่อน
function tic(num) {
    if (start == false) {
        alert("start game first!!")
    }
    //ถ้ากดก็จะเป็นตาของผู้เล่นคนแรก
    else {
        if (turn == playerOne) {
            if (table[num - 1] == "none") {
                table[num - 1] = playerOne
                
                //คอยเช็คเคสว่าถ้าตรงกันตรงช่องไหนถึงจะ winner
                if (check(turn, num) == true) {
                    var isWinner = false;
                    if ((table[0] == turn && table[1] == turn && table[2] == turn) ||
                        (table[3] == turn && table[4] == turn && table[5] == turn) ||
                        (table[6] == turn && table[7] == turn && table[8] == turn) ||
                        (table[0] == turn && table[3] == turn && table[6] == turn) ||
                        (table[1] == turn && table[4] == turn && table[7] == turn) ||
                        (table[2] == turn && table[5] == turn && table[8] == turn) ||
                        (table[0] == turn && table[4] == turn && table[8] == turn) ||
                        (table[2] == turn && table[4] == turn && table[6] == turn)) {
                        isWinner = true;
                    }
                    //ถ้าชนะจะขึ้นแจ้งเตือน
                    if (isWinner) {
                        setTimeout(function () {
                            alert(playerOne + " is Winner!!");
                            //เมื่อชนะแล้วจะทำการล้างตาราง
                            reset();
                        }, 500);
                    }
                    //สลับผู้เล่นมาผู้เล่นคนที่สอง
                    turn = playerTwo;
                }
                //แจ้งเตือนหากกดซ้ำช่องที่ใส่แล้ว
            } else alert("press another block");
        }
        //เช็คเคสว่าเคสว่าถ้าตรงกันตรงช่องไหนถึงจะ winner
        else {
            if (table[num - 1] == "none") {
                table[num - 1] = playerTwo
                if (check(turn, num) == true) {
                    var isWinner = false;
                    if ((table[0] == turn && table[1] == turn && table[2] == turn) ||
                        (table[3] == turn && table[4] == turn && table[5] == turn) ||
                        (table[6] == turn && table[7] == turn && table[8] == turn) ||
                        (table[0] == turn && table[3] == turn && table[6] == turn) ||
                        (table[1] == turn && table[4] == turn && table[7] == turn) ||
                        (table[2] == turn && table[5] == turn && table[8] == turn) ||
                        (table[0] == turn && table[4] == turn && table[8] == turn) ||
                        (table[2] == turn && table[4] == turn && table[6] == turn)) {
                        isWinner = true;
                    }
                    //ถ้าชนะจะขึ้นแจ้งเตือน
                    if (isWinner) {
                        setTimeout(function () {
                            alert(playerTwo + " is Winner!!");
                            reset();
                        }, 500);
                        //เมื่อชนะแล้วจะทำการล้างตาราง
                        reset();
                    }
                    //สลับมาที่ผู้เล่นคนแรก
                    turn = playerOne;
                }
            }
            //แจ้งเตือนหากกดซ้ำช่องที่ใส่แล้ว
            else alert("press another block");
        }
    }
}