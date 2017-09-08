'use strict';

var driver = require('ruff-driver');
var gpio = require('gpio');

var ProximityState = {
    near: gpio.Direction.in,
    away: gpio.Direction.out
};

var prototype = {};

Object.defineProperties(prototype, {
    near: {
        get: function () {
            return this.state === ProximityState.near;
        }
    },
    away: {
        get: function () {
            return this.state === ProximityState.away;
        }
    }
});

module.exports = driver({

    attach: function (inputs, context) {
        this.gpio = inputs['gpio'];

        var that = this;
        this.gpio.read(function (error, level) {
            that.state = level;
        });

        this.gpio.on('interrupt', function (state) {
            if (that.state === state) {
                return;
            }

            that.state = state;

            if (state === ProximityState.near) {
                that.emit('near');
            } else {
                that.emit('away');
            }
        });
    },

    exports: prototype

});
