module.exports.getDate = function() { //remember "exports" not "export"
    let today = new Date();

    //Created an object to specify format for date
    let options = { weekday : "long", 
                    day : "numeric", 
                    month : "long" 
                };

    return today.toLocaleDateString("en-us", options);
    }

module.exports.getDay = function() {
    let today = new Date();

    let options = { month : "long",
                };

    return today.toLocaleTimeString("en-us", options);    
    }

