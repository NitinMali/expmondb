module.exports = {
    lists: [],

    getLists: function(req, res) {
        res.json({status: 'get list !!!'});
    },

    addItemtoList: function(req, res) {
        res.json({status: 'Saved!!'});
    }
}