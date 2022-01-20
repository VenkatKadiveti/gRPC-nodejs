// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_sum_pb = require('../proto/sum_pb.js');

function serialize_sum_SumRequest(arg) {
  if (!(arg instanceof proto_sum_pb.SumRequest)) {
    throw new Error('Expected argument of type sum.SumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sum_SumRequest(buffer_arg) {
  return proto_sum_pb.SumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sum_SumResponse(arg) {
  if (!(arg instanceof proto_sum_pb.SumResponse)) {
    throw new Error('Expected argument of type sum.SumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sum_SumResponse(buffer_arg) {
  return proto_sum_pb.SumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SumServiceService = exports.SumServiceService = {
  sumCal: {
    path: '/sum.SumService/SumCal',
    requestStream: false,
    responseStream: false,
    requestType: proto_sum_pb.SumRequest,
    responseType: proto_sum_pb.SumResponse,
    requestSerialize: serialize_sum_SumRequest,
    requestDeserialize: deserialize_sum_SumRequest,
    responseSerialize: serialize_sum_SumResponse,
    responseDeserialize: deserialize_sum_SumResponse,
  },
};

exports.SumServiceClient = grpc.makeGenericClientConstructor(SumServiceService);
