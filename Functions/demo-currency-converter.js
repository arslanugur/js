Problem: Currency Converter
    /*To make a currency converter app.
      Create a function called convert, which takes two parameters: 
      the amount to convert, and the rate, and returns the resulting amount.
      
      The code to take the parameters as input 
      and call the function is already present in the Playground.
      Create the function to make the code work.

Sample    Sample
Input:    Output:
100       110
1.1

Sample    Sample
Input:    Output:
1050      9870
9.4

Sample    Sample
Input:    Output:
42        30.24
0.72


      Converting 100 at the rate of 1.1 is equal to 100*1.1 = 110.
      */

      //Code:
function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
   function convert (a,b){
      var c = a * b;
      return c
   }
    console.log(convert(amount, rate));
}


      //More Details on Converter
      //HTML Code:
<!DOCTYPE html>
<html>
    <head>
        <title>Currency Converter</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <body>
        <div class="container">
            <br><br>
            <h1 style="text-align: center;">Currency Converter</h1>
            <form id="myForm"> 
                <br><br>
                <label for="Base Currency">Base Currency</label>
                <select class="form-control" id="base">
                <option>USD</option>
                 <option>HKD</option>
                  <option>ISK</option>
                   <option>PHP</option>
                    <option>DKK</option>
                     <option>HUF</option>
                      <option>CZK</option>
                       <option>GBP</option>
                        <option>RON</option>
                         <option>SEK</option>
                          <option>IDR</option>
                           <option>INR</option>
                            <option>BRL</option>
                             <option>RUB</option>
                              <option>HRK</option>
                               <option>JPY</option>
                                <option>THB</option>
                                 <option>CHF</option>
                                  <option>EUR</option>
                                   <option>MYR</option>
                                  <option>BGN</option>
                                 <option>TRY</option>
                                <option>CNY</option>
                               <option>NOK</option>
                              <option>NZD</option>
                             <option>ZAR</option>
                            <option>CAD</option>
                           <option>MXN</option>
                          <option>SGD</option>
                         <option>AUD</option>
                        <option>ILS</option>
                       <option>KRW</option>
                      <option>PLN</option>
                </select>
                <br>
                <div class="form-group">
                    <input type="number" class="form-control" id="baseNumber" value="1">
                </div>
                <label for="Target Currency">Target Currency</label>
                <select class="form-control" id="target">
                    <option>INR</option>
                     <option>HKD</option>
                      <option>ISK</option>
                       <option>PHP</option>
                        <option>DKK</option>
                         <option>HUF</option>
                          <option>CZK</option>
                           <option>GBP</option>
                            <option>RON</option>
                           <option>SEK</option>
                          <option>IDR</option>
                         <option>CAD</option>
                        <option>BRL</option>
                       <option>RUB</option>
                      <option>HRK</option>
                     <option>JPY</option>
                      <option>THB</option>
                       <option>CHF</option>
                        <option>EUR</option>
                         <option>MYR</option>
                          <option>BGN</option>
                           <option>TRY</option>
                            <option>CNY</option>
                             <option>NOK</option>
                              <option>NZD</option>
                               <option>ZAR</option>
                              <option>USD</option>
                             <option>MXN</option>
                            <option>SGD</option>
                           <option>AUD</option>
                          <option>ILS</option>
                         <option>KRW</option>
                        <option>PLN</option>
                 </select>
                    <br>
                <div class="form-group">
                    <input type="number" class="form-control" id="targetNumber">
                </div>
            </form>
        </div>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="script.js"></script>
</html>


      //JS Code:
$(document).ready(function () {
  // some variables
  var baseCurrency = 'USD';
  var baseNumber = 1;
  var targetCurrency = 'INR';
  var targetNumber; 
  var url;

  currencyConverter(baseCurrency, baseNumber,targetCurrency,targetNumber)

  // get base currency value
$("#base").change(function () {
  // base currency
  baseCurrency = $(this).children("option:selected").val();
  // call currencyConverter function
  currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)

});

// get base currency number
$("#baseNumber").change(function(){
  // base number
  baseNumber = $(this).val()
  // call currencyConverter function
  currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)

})

  // get target currency value
$("#target").change(function () {
  // target currency
  targetCurrency = $(this).children("option:selected").val();
  // call currencyConverter function
  currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)

});

  // get target currency number
$("#targetNumber").change(function(){
    // target number
  targetNumber = $(this).val()
   // call currencyConverter function
  currencyConverter2(baseCurrency,baseNumber,targetCurrency,targetNumber)

})


  // function to convert BaseCurrency to TargetCurrency
function currencyConverter(baseCurrency, baseNumber,targetCurrency,targetNumber)
  {
      // api url
      url = "https://api.exchangeratesapi.io/latest?symbols="+targetCurrency+"&base="+baseCurrency

      // make a get request to api
      $.get(url,function(data){
          console.log(data.rates)

          for (let [key, value] of Object.entries(data.rates)) {
            
            var result = value * baseNumber

           $("#targetNumber").val(result)

          }
          console.log(`data.rates.${targetCurrency}`)
    })
}

function currencyConverter2(baseCurrency, baseNumber,targetCurrency,targetNumber)
{
      // api url
      url = "https://api.exchangeratesapi.io/latest?symbols="+baseCurrency+"&base="+targetCurrency

      // make a get request to api
      $.get(url,function(data){
          console.log(data.rates)

          for (let [key, value] of Object.entries(data.rates)) {
            console.log(value)
            var result = value * targetNumber
           $("#baseNumber").val(result)
          }
          console.log(`data.rates.${targetCurrency}`)
      })
  }
});





