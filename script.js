var numberOfCasino = document.querySelectorAll(".num").length;
console.log(numberOfCasino);
const gobetting = document.querySelector('#gobetting');
var beforebetting = 0; // va être additionné ou soustrait
var winning = false;
var howmuchbet = 0;
var sessionStoragelength = 0;
document.getElementById("result").disabled = true; 
/*on ne peut pas jouer sans avoir payé avant*/

gobetting.addEventListener('click', () =>{
    console.log("= gobetting");
    console.log("before betting value = " + beforebetting);
    howmuchbet = document.querySelector('#howmuchbet').value;
    console.log("how much bet = " + howmuchbet); 
    document.getElementById("saldo").innerHTML = howmuchbet;
    beforebetting = beforebetting + howmuchbet;
    saldoatualizado; // il faut actualiser le balance
})

function saldoatualizado(){
    if (howmuchbet <= 0 || beforebetting <= 0){ // howmuchbet é a aposta inicial beforebetting é o saldo
        document.getElementById("wonlost").innerHTML = "No balance!";
        document.getElementById("result").disabled = true;
        beforebetting = 0;  // se não zerar recebo valor esquestos não sei pq
        gobetting = 0; // se não zerar recebo valor esquesitos não sei pq
    } else
        document.getElementById("result").disabled = false; // ele pode jogar agora pq botou dinheiro 
        beforebetting = beforebetting - 1;
        console.log("saldo atualizado = " + beforebetting);
        document.getElementById("saldo").innerHTML = beforebetting;
        
}


function saldoatualizadodelete(){
    console.log("entrou no saldo atualizado apos delete" + sessionStoragelength);
    if (sessionStoragelength > 0){
        beforebetting = beforebetting + 1;    
    } else {
        document.getElementById("wonlost").innerHTML = "This number was not selected";   
    }
} 
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
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML); 
            saldoatualizado();       
        break;
        case "1":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "2":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "3":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "4":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "5":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "6":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "7":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "8":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "9":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "10":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "11":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "12":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "13":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "14":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "15":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "16":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "17":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "18":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "19":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "20":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "21":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "22":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "23":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "24":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "25":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "26":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "27":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "28":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "29":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "30":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "31":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "32":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "33":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "34":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "35":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "36":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.setItem(numberInnerHTML, numberInnerHTML);
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
            window.sessionStorage.removeItemm(numberInnerHTML, numberInnerHTML);
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
            window.sessionStorage.removeItemm(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;

        case "22":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItem(numberInnerHTML, numberInnerHTML);
            saldoatualizado();
        break;
        case "23":
            console.log("inside break " + numberInnerHTML);
            window.sessionStorage.removeItemm(numberInnerHTML, numberInnerHTML);
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
    }