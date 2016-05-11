'use strict';
var fs = require('fs');
exports.readFile = {
    getContent: function(filename, error, success) {
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) {
                error(filename, err);
                return;
            }
            success(filename, data);
        });
    }
};
