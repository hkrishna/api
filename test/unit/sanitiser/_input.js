
var input  = require('../../../sanitiser/_input'),
    parser = require('../../../helper/query_parser'),
    delim = ',',
    defaultError = 'invalid param \'input\': text length, must be >0',
    allLayers    = [ 'geoname', 'osmnode', 'osmway', 'admin0', 'admin1', 'admin2', 'neighborhood', 
                   'locality', 'local_admin', 'osmaddress', 'openaddresses' ],
    nonAddressLayers = [ 'geoname', 'osmnode', 'osmway', 'admin0', 'admin1', 'admin2', 'neighborhood', 
                   'locality', 'local_admin' ],
    defaultParsed=  { target_layer: nonAddressLayers },
    defaultClean =  { input: 'test', 
                      layers: allLayers, 
                      size: 10,
                      details: true,
                      parsed_input: defaultParsed,
                      lat:0,
                      lon:0
                    },
    getTargetLayers = function(query) {
      var address = parser(query);
      return address.target_layer;
    };


module.exports = {
  defaultParsed: defaultParsed,
  defaultClean : defaultClean,
  getTargetLayers: getTargetLayers
};