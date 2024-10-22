function initialize() {
    sessionStorage.clear();
}

var numberOfCasino = document.querySelectorAll(".num").length;
console.log(numberOfCasino);
const gobetting = document.querySelector('#gobetting');
var gobetting2 = 0;
var beforebetting = 0; // va être additionné ou soustrait
var winning = false;
var howmuchbet = 0;
var sessionStoragelength = 0;
document.getElementById("result").disabled = true; 
/*on ne peut pas jouer sans avoir payé avant*/

const zero = document.querySelector('#numZero');

cancel.addEventListener('click', () =>{  // en cas d'annulation du jeux courant, je dois récuperer mon saldo
    sessionStoragelength = sessionStorage.length;
    sessionStorage.clear();
    beforebetting = beforebetting + sessionStoragelength;
    document.getElementById("saldo").innerHTML = beforebetting; // mostrar a atualização na telainici

    inicializeColor();
} ) 

function inicializeColor(){
    const returnColorToBlack = document.querySelectorAll(".black");
    const returnColorToRed = document.querySelectorAll(".red");
    const returnColorZero = document.querySelector(".zero");

    returnColorZero.style.backgroundColor = "green";
    returnColorZero.style.color = "white";

    for(i=0; i<= returnColorToBlack.length - 1; i++) {        
       returnColorToBlack[i].style.backgroundColor = "black";
       returnColorToBlack[i].style.color = "white";
    }

    for(i=0; i<= returnColorToRed.length -1; i++){
        returnColorToRed[i].style.backgroundColor = "red";
        returnColorToRed[i].style.color = "black";
    }
}

gobetting.addEventListener('click', () =>{
    console.log("= gobetting");
    console.log("before betting value = " + beforebetting);
    howmuchbet = document.querySelector('#howmuchbet').value;
    console.log("how much bet = " + howmuchbet); 
    beforebetting = 0;
    beforebetting = parseInt(beforebetting) + parseInt(howmuchbet);
    sessionStorage.clear();
    document.getElementById("saldo").innerHTML = howmuchbet;
    sessionStoragelength = 0;
    saldoatualizado; // il faut actualiser le balance
    
})

function saldoatualizado(){
    if (howmuchbet <= 0 || beforebetting <= 0){ // howmuchbet é a aposta inicial beforebetting é o saldo
        document.getElementById("wonlost").innerHTML = "No balance!";
        document.getElementById("result").disabled = true;
        //beforebetting = 0;   se não zerar recebo valor esquestos não sei pq
        //gobetting = 0;  se não zerar recebo valor esquesitos não sei pq
        console.log("saldo atualizado beforebetting " + beforebetting); 
        beforebetting = beforebetting + 1; // para não ultrapassar -1
    } else
        document.getElementById("result").disabled = false; // ele pode jogar agora pq botou dinheiro 
        beforebetting = beforebetting - 1;
        console.log("saldo atualizado = " + beforebetting);
        document.getElementById("saldo").innerHTML = beforebetting;
       
}

/*
function saldoatualizadodelete(){
    console.log("entrou no saldo atualizado apos delete" + sessionStoragelength);
    if (sessionStoragelength > 0){
        beforebetting = beforebetting + 1;    
    } else {
        document.getElementById("wonlost").innerHTML = "This number was not selected";   
    }
} 
    */
   /* in case of double click */

function saldoatualizadoaposganho(){
    beforebetting = parseInt(beforebetting) + parseInt(35);
    console.log("saldo atualizado após ganho " + beforebetting);
    document.getElementById("saldo").innerHTML = beforebetting;
    
}

function antesdojogosemganho(){
    winning = false;
}  


function semoucomganhos(){ // caso não ganhou nada ou caso ganhou sim
    if(winning){
        document.getElementById("wonlost").innerHTML = "WINNER!";
    } else {
        document.getElementById("wonlost").innerHTML  = "Sorry, no wins..."
    }
    sessionStorage.clear();
}




/*document.querySelector(".num").addEventListener("click", function(){
    alert("I was clicked")
})*/

//window.localStorage.clear();


for (var i=0; i < numberOfCasino; i++){
    document.querySelectorAll(".num")[i].addEventListener("click", function(){
       // console.log(i);
       // console.log("I was clicked " + i + "times");
       // console.log(this.innerHTML);
       //this.style.color = "green";

       var numberInnerHTML = this.innerHTML;
      
      
       switch(numberInnerHTML){
        case "0":
            console.log("inside break x" + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML); 
            document.getElementById("numZero").style.backgroundColor = "lightgreen";
            document.getElementById("numZero").style.color = "green";
            saldoatualizado();       
        break;
        case "1":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n1").style.backgroundColor = "orange";
            document.getElementById("n1").style.color = "black"; 
            saldoatualizado();
        break;
        case "2":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n2").style.backgroundColor = "orange";
            document.getElementById("n2").style.color = "red"; 
            saldoatualizado();
        break;
        case "3":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n3").style.backgroundColor = "orange";
            document.getElementById("n3").style.color = "black"; 
            saldoatualizado();
        break;
        case "4":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n4").style.backgroundColor = "orange";
            document.getElementById("n4").style.color = "red"; 
            saldoatualizado();
        break;
        case "5":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n5").style.backgroundColor = "orange";
            document.getElementById("n5").style.color = "black"; 
            saldoatualizado();
        break;
        case "6":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n6").style.backgroundColor = "orange";
            document.getElementById("n6").style.color = "red";
            saldoatualizado();
        break;

        case "7":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n7").style.backgroundColor = "orange";
            document.getElementById("n7").style.color = "black"; 
            saldoatualizado();
        break;
        case "8":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n8").style.backgroundColor = "orange";
            document.getElementById("n8").style.color = "red"; 
            saldoatualizado();
        break;
        case "9":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n9").style.backgroundColor = "orange";
            document.getElementById("n9").style.color = "black"; 
            saldoatualizado();
        break;

        case "10":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n10").style.backgroundColor = "orange";
            document.getElementById("n10").style.color = "red"; 
            saldoatualizado();
        break;
        case "11":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n11").style.backgroundColor = "orange";
            document.getElementById("n11").style.color = "black"; 
            saldoatualizado();
        break;
        case "12":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n12").style.backgroundColor = "orange";
            document.getElementById("n12").style.color = "red"; 
            saldoatualizado();
        break;

        case "13":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n13").style.backgroundColor = "orange";
            document.getElementById("n13").style.color = "black"; 
            saldoatualizado();
        break;
        case "14":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n14").style.backgroundColor = "orange";
            document.getElementById("n14").style.color = "red"; 
            saldoatualizado();
        break;
        case "15":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n15").style.backgroundColor = "orange";
            document.getElementById("n15").style.color = "black"; 
            saldoatualizado();
        break;

        case "16":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n16").style.backgroundColor = "orange";
            document.getElementById("n16").style.color = "red"; 
            saldoatualizado();
        break;
        case "17":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n17").style.backgroundColor = "orange";
            document.getElementById("n17").style.color = "black"; 
            saldoatualizado();
        break;
        case "18":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n18").style.backgroundColor = "orange";
            document.getElementById("n18").style.color = "red"; 
            saldoatualizado();
        break;

        case "19":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n19").style.backgroundColor = "orange";
            document.getElementById("n19").style.color = "black"; 
            saldoatualizado();
        break;
        case "20":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n20").style.backgroundColor = "orange";
            document.getElementById("n20").style.color = "red"; 
            saldoatualizado();
        break;
        case "21":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n21").style.backgroundColor = "orange";
            document.getElementById("n21").style.color = "black"; 
            saldoatualizado();
        break;

        case "22":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n22").style.backgroundColor = "orange";
            document.getElementById("n22").style.color = "red"; 
            saldoatualizado();
        break;
        case "23":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n23").style.backgroundColor = "orange";
            document.getElementById("n23").style.color = "black"; 
            saldoatualizado();
        break;
        case "24":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n24").style.backgroundColor = "orange";
            document.getElementById("n24").style.color = "red"; 
            saldoatualizado();
        break;

        case "25":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n25").style.backgroundColor = "orange";
            document.getElementById("n25").style.color = "black"; 
            saldoatualizado();
        break;
        case "26":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n26").style.backgroundColor = "orange";
            document.getElementById("n26").style.color = "red"; 
            saldoatualizado();
        break;
        case "27":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n27").style.backgroundColor = "orange";
            document.getElementById("n27").style.color = "black"; 
            saldoatualizado();
        break;

        case "28":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n28").style.backgroundColor = "orange";
            document.getElementById("n28").style.color = "red"; 
            saldoatualizado();
        break;
        case "29":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n29").style.backgroundColor = "orange";
            document.getElementById("n29").style.color = "black"; 
            saldoatualizado();
        break;
        case "30":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n30").style.backgroundColor = "orange";
            document.getElementById("n30").style.color = "red"; 
            saldoatualizado();
        break;

        case "31":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n31").style.backgroundColor = "orange";
            document.getElementById("n31").style.color = "black"; 
            saldoatualizado();
        break;
        case "32":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n32").style.backgroundColor = "orange";
            document.getElementById("n32").style.color = "red"; 
            saldoatualizado();
        break;
        case "33":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n33").style.backgroundColor = "orange";
            document.getElementById("n33").style.color = "black"; 
            saldoatualizado();
        break;

        case "34":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n34").style.backgroundColor = "orange";
            document.getElementById("n34").style.color = "red"; 
            saldoatualizado();
        break;
        case "35":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n35").style.backgroundColor = "orange";
            document.getElementById("n35").style.color = "black"; 
            saldoatualizado();
        break;
        case "36":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            document.getElementById("n36").style.backgroundColor = "orange";
            document.getElementById("n36").style.color = "red"; 
            saldoatualizado();
        break;


        default: console.log("default " + numberInnerHTML);
       }

    })
    
}

/* ----------------------------------------------------------------------------*/

/*aqui vou remover o que já foi clicado se por exemplo o usuario desiste de apostar
num determinado numero*/

for (var i=0; i < numberOfCasino; i++){
    document.querySelectorAll(".num")[i].addEventListener("dblclick", function(){
       // console.log(i);
       // console.log("I was clicked " + i + "times");
       // console.log(this.innerHTML);
       //this.style.color = "green";

       var numberInnerHTML = this.innerHTML;
      
      
       switch(numberInnerHTML){
        case "0":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML); 
            saldoatualizadodelete();       
        break;
        case "1":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizadodelete();
        break;
        case "2":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "3":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "4":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "5":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "6":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "7":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "8":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "9":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "10":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "11":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "12":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "13":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "14":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "15":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "16":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "17":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "18":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "19":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "20":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "21":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "22":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "23":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "24":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "25":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "26":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "27":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "28":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "29":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "30":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "31":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "32":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "33":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "34":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "35":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "36":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;


        default: console.log("default " + numberInnerHTML);
       }

    })
    
}

/*-------------------------------------------------------------------------------------*/

function playroulette(){
    antesdojogosemganho();
    document.getElementById("result").innerHTML =
    Math.floor(Math.random() * 37);
    
    var rouletteResult = document.getElementById("result").innerHTML;
    sessionStoragelength = window.sessionStorage.length;

    for (i = 0; i<= numberOfCasino; i++){
        
        var apostas = sessionStorage.getItem(i.toString()); 
        
            console.log("apostas " + sessionStorage.getItem(apostas));
            if(apostas === null){
                console.log("nulled");
                console.log("the null key number is " + i);           
            }else if(rouletteResult === apostas){
                console.log("bingo ");
                saldoatualizadoaposganho();
                winning = true;
        }
      
        }       
       
    semoucomganhos();
    inicializeColor();
    }