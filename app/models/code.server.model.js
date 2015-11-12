'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Code Schema
 */
var CodeSchema = new Schema({
	description: {
		type: String,
		default: '',
		required: 'Please fill Code scenario',
		trim: true
	},
	code: {
		type: String,
		default: '',
		required: 'Please fill Code Snippet',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Code', CodeSchema);
