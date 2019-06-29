var calculate = d3.select(".button")

calculate.on("click", function(){
    var province = parseInt(d3.select("#dept").node().value)
    var week = parseInt(d3.select("#week").node().value)
    var day = parseInt(d3.select("#day").node().value)
    console.log('OUT');
    
    var X = [week,day,province];
    console.log(X) 
    console.log('PREDICT');
    d3.json('/predict/' + X).then( function(data){
        console.log(data);
        d3.select("h1").text(data) 
    });

    // $.post( "/calculate", {
    //     "province": province,
    //     "week": week,
    //     "day": day      
    // });

})




// fetch('/calculate')
//     .then(function (response) {
//         return response.text();
//     }).then(function (text) {
//         console.log('GET response text:');
//         console.log(text); // Print the greeting as text
//     });

// fetch('/calculate')
//     .then(function (response) {
//         return response.json(); // But parse it as JSON this time
//     })
//     .then(function (json) {
//         console.log('GET response as JSON:');
//         console.log(json); // Here’s our JSON object
//     })

// fetch('/calculate', {

//     // Specify the method
//     method: 'POST',

//     // JSON
//     headers: {
//         'Content-Type': 'application/json'
//     },

//     // A JSON payload
//     body: JSON.stringify({
//         "greeting": "Hello from the browser!"
//     })
// }).then(function (response) { // At this point, Flask has printed our JSON
//     return response.text();
// }).then(function (text) {

//     console.log('POST response: ');

//     // Should be 'OK' if everything was successful
//     console.log(text);
// });
