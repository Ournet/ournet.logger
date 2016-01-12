'use strict';

var assert = require('assert');
var logger = require('../lib/logger');

describe('logger', function() {
	var loggerApi = ['log', 'info', 'warn', 'error', 'loggly', 'Logger'];
	loggerApi.forEach(function(name) {
		it('#' + name, function() {
			assert.equal('function', typeof logger[name]);
		});
	});
});
