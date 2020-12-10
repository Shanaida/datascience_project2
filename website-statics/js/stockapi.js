//function inputChange() {
  //const stockInput= document.getElementById("stock-input").value;
  //console.log(stockInput);
//};

//function clearfield()
   //{  
     //console.log(document.getElementById("stock-input").value= " ");    
   //};
function myFunction(){
  var stockInput = document.getElementById('stock-input').value;
  document.getElementById("demo").innerHTML = stockInput;
}
var apiKey = "8AS1LY1K1PUZWQDK";
var stock = document.getElementById("demo").innerHTML;
//const api_url= "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${apiKey}";

async function getISS() {
  setTimeout(async function getISS() {
    const api_url= "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${apiKey}";
    const response = await fetch(api_url);
    const dataA = await response.json();
    const globalQuote = JSON.stringify(dataA['Global Quote']);
    console.log(globalQuote);
    document.getElementById("stats").innerHTML = globalQuote;
  }, 10000);
}
getISS();

//var data = JSON.parse(globalQuote)
//var dataEnter = svg.selectAll("rect").data(data).enter();

