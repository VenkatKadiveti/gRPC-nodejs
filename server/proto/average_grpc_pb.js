// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_average_pb = require('../proto/average_pb.js');

function serialize_average_AverageRequest(arg) {
  if (!(arg instanceof proto_average_pb.AverageRequest)) {
    throw new Error('Expected argument of type average.AverageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_average_AverageRequest(buffer_arg) {
  return proto_average_pb.AverageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_average_AverageResponse(arg) {
  if (!(arg instanceof proto_average_pb.AverageResponse)) {
    throw new Error('Expected argument of type average.AverageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_average_AverageResponse(buffer_arg) {
  return proto_average_pb.AverageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AverageServiceService = exports.AverageServiceService = {
  // client streaming api example
average: {
    path: '/average.AverageService/Average',
    requestStream: true,
    responseStream: false,
    requestType: proto_average_pb.AverageRequest,
    responseType: proto_average_pb.AverageResponse,
    requestSerialize: serialize_average_AverageRequest,
    requestDeserialize: deserialize_average_AverageRequest,
    responseSerialize: serialize_average_AverageResponse,
    responseDeserialize: deserialize_average_AverageResponse,
  },
};

exports.AverageServiceClient = grpc.makeGenericClientConstructor(AverageServiceService);
