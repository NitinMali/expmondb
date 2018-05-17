const mongoose = require('mongoose');
const TripList = mongoose.model('TripList');

module.exports = {
    lists: [],

    getLists: function(req, res) {
        TripList.find()
        .exec(function(err, data) {
            if(err) {
                console.error('Error : '+ err);
            } else {
                res.json({list: data});
            }
        });
    },

    addItemtoList: function(req, res) {
        var tripObj = new TripList({title: 'Day in Bangalore', location: 'Bangalore'});

        tripObj.save(function(err){
            if(err) {
                console.error("Couldnt create new trip : " + err);
            } else {
                console.log("Trip created");
            }
        })
        res.json({status: 'Saved!!'});
    }
}