// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_greet_pb = require('../proto/greet_pb.js');

function serialize_greet_GreetEveryOneRequest(arg) {
  if (!(arg instanceof proto_greet_pb.GreetEveryOneRequest)) {
    throw new Error('Expected argument of type greet.GreetEveryOneRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetEveryOneRequest(buffer_arg) {
  return proto_greet_pb.GreetEveryOneRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetEveryOneResponse(arg) {
  if (!(arg instanceof proto_greet_pb.GreetEveryOneResponse)) {
    throw new Error('Expected argument of type greet.GreetEveryOneResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetEveryOneResponse(buffer_arg) {
  return proto_greet_pb.GreetEveryOneResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetManyTimesRequest(arg) {
  if (!(arg instanceof proto_greet_pb.GreetManyTimesRequest)) {
    throw new Error('Expected argument of type greet.GreetManyTimesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetManyTimesRequest(buffer_arg) {
  return proto_greet_pb.GreetManyTimesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetManyTimesResponse(arg) {
  if (!(arg instanceof proto_greet_pb.GreetManyTimesResponse)) {
    throw new Error('Expected argument of type greet.GreetManyTimesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetManyTimesResponse(buffer_arg) {
  return proto_greet_pb.GreetManyTimesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetRequest(arg) {
  if (!(arg instanceof proto_greet_pb.GreetRequest)) {
    throw new Error('Expected argument of type greet.GreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetRequest(buffer_arg) {
  return proto_greet_pb.GreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_GreetResponse(arg) {
  if (!(arg instanceof proto_greet_pb.GreetResponse)) {
    throw new Error('Expected argument of type greet.GreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_GreetResponse(buffer_arg) {
  return proto_greet_pb.GreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_LongGreetRequest(arg) {
  if (!(arg instanceof proto_greet_pb.LongGreetRequest)) {
    throw new Error('Expected argument of type greet.LongGreetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_LongGreetRequest(buffer_arg) {
  return proto_greet_pb.LongGreetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greet_LongGreetResponse(arg) {
  if (!(arg instanceof proto_greet_pb.LongGreetResponse)) {
    throw new Error('Expected argument of type greet.LongGreetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_greet_LongGreetResponse(buffer_arg) {
  return proto_greet_pb.LongGreetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreetServiceService = exports.GreetServiceService = {
  // unary api
greet: {
    path: '/greet.GreetService/Greet',
    requestStream: false,
    responseStream: false,
    requestType: proto_greet_pb.GreetRequest,
    responseType: proto_greet_pb.GreetResponse,
    requestSerialize: serialize_greet_GreetRequest,
    requestDeserialize: deserialize_greet_GreetRequest,
    responseSerialize: serialize_greet_GreetResponse,
    responseDeserialize: deserialize_greet_GreetResponse,
  },
  // server streaming api
greetManyTimes: {
    path: '/greet.GreetService/GreetManyTimes',
    requestStream: false,
    responseStream: true,
    requestType: proto_greet_pb.GreetManyTimesRequest,
    responseType: proto_greet_pb.GreetManyTimesResponse,
    requestSerialize: serialize_greet_GreetManyTimesRequest,
    requestDeserialize: deserialize_greet_GreetManyTimesRequest,
    responseSerialize: serialize_greet_GreetManyTimesResponse,
    responseDeserialize: deserialize_greet_GreetManyTimesResponse,
  },
  // client streaming api
longGreet: {
    path: '/greet.GreetService/LongGreet',
    requestStream: true,
    responseStream: false,
    requestType: proto_greet_pb.LongGreetRequest,
    responseType: proto_greet_pb.LongGreetResponse,
    requestSerialize: serialize_greet_LongGreetRequest,
    requestDeserialize: deserialize_greet_LongGreetRequest,
    responseSerialize: serialize_greet_LongGreetResponse,
    responseDeserialize: deserialize_greet_LongGreetResponse,
  },
  // BI-directional streaming 
greetEveryOne: {
    path: '/greet.GreetService/GreetEveryOne',
    requestStream: true,
    responseStream: true,
    requestType: proto_greet_pb.GreetEveryOneRequest,
    responseType: proto_greet_pb.GreetEveryOneResponse,
    requestSerialize: serialize_greet_GreetEveryOneRequest,
    requestDeserialize: deserialize_greet_GreetEveryOneRequest,
    responseSerialize: serialize_greet_GreetEveryOneResponse,
    responseDeserialize: deserialize_greet_GreetEveryOneResponse,
  },
};

exports.GreetServiceClient = grpc.makeGenericClientConstructor(GreetServiceService);
