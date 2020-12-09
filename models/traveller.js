const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return startLocations;

};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return endLocations;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
    const transportType = this.journeys.filter((journey) => {
      return journey.transport === transport;
    });
    return transportType;

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const distance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return distance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distance = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance;
  }, 0);
  return distance;   

};

Traveller.prototype.getUniqueModesOfTransport = function () {
const transportModes = this.journeys.map(journey => journey.transport);

transportModes.reduce(unique, item)


};

// const modes = this.journeys.filter((journey) => {
//   return journey.transport;
// });
// return modes;
// };


module.exports = Traveller;
