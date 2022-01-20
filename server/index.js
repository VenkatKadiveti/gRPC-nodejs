//greeting
var greets = require('../server/proto/greet_pb');
var services = require('../server/proto/greet_grpc_pb');

// sum 
var sumPB = require('../server/proto/sum_pb');
var sumServices = require('../server/proto/sum_grpc_pb');

// average
var averagePB = require('../server/proto/average_pb');
var averageService = require('../server/proto/average_grpc_pb');


var grpc = require('grpc');

/**
 * Implements a greet method.
 */
function greet (call, callback) {
    var greeting = new greets.GreetResponse();

    greeting.setResult(
        "Hello "+ call.request.getGreeting().getFirstname() + ' ' + call.request.getGreeting().getLastname()
    )
    callback(null, greeting)
}

/**
 * Implements SUM function
 */
function sumCal (call, callback) {
    var sumRes = new sumPB.SumResponse();
    sumRes.setResult(call.request.getSum().getNum1()+call.request.getSum().getNum2());
    callback(null, sumRes);
}

/**
 * Implementtion of greetManyTimes function for server streaming api
 */
function greetManyTimes(call, callback) {
    var firstname = call.request.getGreeting().getFirstname();
    var laststname = call.request.getGreeting().getLastname();

    var greetManyTimeResponse = new greets.GreetManyTimesResponse();
    greetManyTimeResponse.setResult('Hello '+ firstname+' '+ laststname);

    let count = 0;
    let intervalId = setInterval(() => {
       call.write(greetManyTimeResponse);
       count ++;
       if (count > 9) {
           clearInterval(intervalId);
           call.end();
       }
    }, 1000)
}

function longGreet(call, callback) {
    call.on('data', (request) => {
        const fullname = request.getGreeting().getFirstname() + ' '+ request.getGreeting().getLastname();
        console.log("Stream : ", fullname);
    });

    call.on('error' , (error) => {
        console.log(error);
    });

    call.on('end' , () => {
        const res = new greets.LongGreetResponse();
        res.setResult("Client streaming end...");
        callback(null, res);
    });
}

function average (call, callback) {
    let sum_of_numbers  = 0;
    let no_of_integers = 0;
    call.on('data', (request) => {
        sum_of_numbers += request.getNumber();
        console.log('Number: ', request.getNumber());
        no_of_integers++;
    });

    call.on('error' , (error) => {
        console.log(error);
    });

    call.on('end', () => {
        console.log('Sum of Numbers: ', sum_of_numbers, 'totalNumbers: ', no_of_integers);
        const result = new averagePB.AverageResponse();
        result.setResult(sum_of_numbers/no_of_integers);
        callback(null, result);
    });
}

async function sleep (interval) {
    return new Promise((resolve) => {
        setInterval(() => resolve(), interval)
    })
}
async function greetEveryOne(call, callback) {
    call.on('data', (response) => {
        const fullnsme = response.getGreeting().getFirstname()+ ' '+ response.getGreeting().getLastname();
        console.log("FULLNAME: " , fullnsme)
    });

    call.on('error', error => {
        console.log(error)
    });

    call.on('end', () => {
        console.log("The END...")
    });

    for(let i=0; i< 10; i++) {
        const res = new greets.GreetEveryOneResponse();
        res.setResult(`${i} : Venkat Kadiveti`);
        call.write(res);
        await sleep(1000);
    }
call.end();


}

function main () {
    var server = new grpc.Server();
    server.addService(services.GreetServiceService, {greet: greet, greetManyTimes: greetManyTimes, longGreet : longGreet, greetEveryOne:greetEveryOne});
    server.addService(sumServices.SumServiceService, {sumCal: sumCal});
    server.addService(averageService.AverageServiceService, {average: average});
    server.bind("localhost:2000", grpc.ServerCredentials.createInsecure());
    server.start();
    console.log('SERVER RUNNING ON PORT: 2000');
}

main();