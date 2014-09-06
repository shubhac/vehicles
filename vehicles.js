/**
 * Created by sbkloaner-sbktech on 7/31/14.
 */
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

var vehicles = [vehicle1, vehicle2, vehicle3];

var findVehicle = function(name, list){
    var i;
    for (i = 0; i < list.length; i++){
        if( list[i].type == name ){
            alert("stored at: " + list[i].storedAt);
            return list[i].storedAt;
        }
    }
};

var findSub = findVehicle("Jet Ski", vehicles);

var location;
findSub();
