var grpc = require('grpc');
// greeting
var greets = require('../server/proto/greet_pb');
var services = require('../server/proto/greet_grpc_pb');

// sum 
var sum = require('../server/proto/sum_pb');
var sumServices = require('../server/proto/sum_grpc_pb');

// average
var averagePB = require('../server/proto/average_pb');
var averageService = require('../server/proto/average_grpc_pb');


function main () {
    console.log('HELLO FROM CLIENT...');
    var client = new services.GreetServiceClient(
        'localhost:2000',
        grpc.credentials.createInsecure()
    );

    console.log('CLIENT:', client);


    // request formation
    var request = new greets.GreetRequest();
    
    var greeting = new greets.Greeting();
    greeting.setFirstname('Venkat');
    greeting.setLastname('Kadiveti');

    request.setGreeting(greeting);

    client.greet(request, (err, response) => {
        if (!err) {
            console.log("Res: ", response.getResult())
        }
    })
}

function greetManyTimes () {
    console.log('HELLO FROM CLIENT...');
    var client = new services.GreetServiceClient(
        'localhost:2000',
        grpc.credentials.createInsecure()
    );

    console.log('CLIENT:', client);


    // request formation
    var request = new greets.GreetManyTimesRequest();
    
    var greeting = new greets.Greeting();
    greeting.setFirstname('Venkat');
    greeting.setLastname('Kadiveti');

    request.setGreeting(greeting);

  let call =  client.greetManyTimes(request, (err, response) => {});

  call.on('data', (response) => {
    console.log("Res: ", response.getResult())
  });

  call.on('status', (status) => {
    console.log("status: ", status)
  });

  call.on('error', (error) => {
    console.log("error: ", error)
  });

  call.on('end', (error) => {
    console.log("END")
  });
}

function sumFun() {
    console.log('HELLO FROM CLIENT...');
    var client = new sumServices.SumServiceClient(
        'localhost:2000',
        grpc.credentials.createInsecure()
    );

    console.log('CLIENT:', client);

    var request = new sum.SumRequest();
    var sumReq = new sum.Sum();
    sumReq.setNum1(1);
    sumReq.setNum2(4);
    request.setSum(sumReq);
    console.log('Req', request)
    client.sumCal(request, (err, response) => {
        if (!err) {
            console.log("Res: ", response.getResult())
        }
    })

}


function longGreet () {
    console.log('HELLO FROM CLIENT...');
    var client = new services.GreetServiceClient(
        'localhost:2000',
        grpc.credentials.createInsecure()
    );

    console.log('CLIENT:', client);
    
    var request = new greets.LongGreetRequest();

    var call = client.longGreet(request, (error, response) => {
        if (!error) {
            console.log("RESPONSE:", response.getResult())
        }
    })


    let count =1;
    let intervalId = setInterval(() => {
        var request = new greets.LongGreetRequest();
        var greeting = new greets.Greeting();
        greeting.setFirstname(`${count} : Venkat`);
        greeting.setLastname(`Kadiveti`);
        request.setGreeting(greeting);
        call.write(request);
        count++;
        if (count > 9 ) {
            clearInterval(intervalId);
            call.end();
        }
    }, 1000)

}

function average () {
    console.log('HELLO FROM CLIENT...');
    var client = new averageService.AverageServiceClient(
        'localhost:2000',
        grpc.credentials.createInsecure()
    );

    console.log('CLIENT:', client);
    
    var request = new averagePB.AverageRequest();

    var call  = client.average(request , (error, response) => {
        if (!error) {
            console.log('AVERAGE: ', response.getResult())
        } else {
            console.log(error)
        }
    })

    // let array = [1,2,3,4,5,6,7,8];
    let count = 0;
    let intervalId = setInterval(() => {
        const num = Math.floor(Math.random()*100)
        const request =  new averagePB.AverageRequest();
        request.setNumber(num);
        call.write(request);
        count++;
        if (count > 9) {
            clearInterval(intervalId);
            call.end()
        }
    }, 1000)
}

async function sleep (interval) {
    return new Promise((resolve) => {
        setInterval(() => resolve(), interval)
    })
}

async function greetEveryOne() {
    console.log('HELLO FROM CLIENT...');
    var client = new services.GreetServiceClient(
        'localhost:2000',
        grpc.credentials.createInsecure()
    );

    console.log('CLIENT:', client);

    var request = new greets.GreetEveryOneRequest();

    var call = client.greetEveryOne(request, (error, response) => {
        if (!error) {
            console.log("Server response : ", response)
        }
    });

    call.on('data', (res) => {
        console.log('Stream res: ',res.getResult())
    });

    call.on('error', (error) => {
        console.log(error)
    })

    call.on('end', () => {
        console.log("CLIENT END>>>>")
    })

    for(let i=0; i< 10; i++) {
        const greeting = new greets.Greeting();
        greeting.setFirstname(`${i} : Nani`);
        greeting.setLastname(`Kadiveti`);

        const request = new greets.GreetEveryOneRequest();
        request.setGreeting(greeting);
        call.write(request);
        await sleep(1000);
    }
call.end();


}
// sumFun(); // example unary api call 
// main(); // unary api call
// greetManyTimes(); // server streaming api call
// longGreet() // client streaming api call
// average() // Example
greetEveryOne() // Bi-directional streaming 