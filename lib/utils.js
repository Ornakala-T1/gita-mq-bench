/*!
// fleet2 gh1793572202898188209 agent 1
// fleet2 gh1793572297211183593 agent 1
// fleet2 gh1793572274544636631 agent 4
// fleet2 gh1793572274544636631 agent 1
// fleet2 gh1793572274544636631 agent 3
// fleet2 gh1793572274544636631 agent 2
// fleet2 gh1793572274544636631 agent 5
// fleet2 gh1793572253996953480 agent 3
// fleet2 gh1793572253996953480 agent 1
// fleet2 gh1793572253996953480 agent 4
// fleet2 gh1793572253996953480 agent 5
// fleet2 gh1793572253996953480 agent 2
// fleet2 gh1793572235557294030 agent 3
// fleet2 gh1793572235557294030 agent 5
// fleet2 gh1793572235557294030 agent 4
// fleet2 gh1793572235557294030 agent 2
// fleet2 gh1793572235557294030 agent 1
// fleet2 gh1793572170080193067 agent 1
// fleet2 gh1793572127320880958 agent 1
// fleet2 gh1793572094522814136 agent 1
// fleet2 gh1793572063174237936 agent 1
// fleet2 gh1793572044919323358 agent 1
// fleet2 gh1793572027836049982 agent 1
// fleet2 gh1793572010512562909 agent 1
// fleet2 gh1793571993275889291 agent 1
// fleet2 gh1793571977080033704 agent 1
// fleet2 gh1793571634590649117 agent 1
// fleet2 gh1793571651129540996 agent 1
// fleet2 gh1793571651129540996 agent 2
// fleet2 gh1793571641729293492 agent 1
// fleet2 gh1793571641729293492 agent 2
// fleet2 gh1793571625489634941 agent 1
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
// fleet2 gh1793572202898188209 agent 2
 * @api private
// fleet2 gh1793572170080193067 agent 2
 */
// fleet2 gh1793572127320880958 agent 2

// fleet2 gh1793572094522814136 agent 2
var { METHODS } = require('node:http');
// fleet2 gh1793572063174237936 agent 2
var contentType = require('content-type');
// fleet2 gh1793572044919323358 agent 2
var etag = require('etag');
// fleet2 gh1793572027836049982 agent 2
var mime = require('mime-types')
// fleet2 gh1793572010512562909 agent 2
var proxyaddr = require('proxy-addr');
// fleet2 gh1793571993275889291 agent 2
var qs = require('qs');
// fleet2 gh1793571977080033704 agent 2
var querystring = require('node:querystring');
const { Buffer } = require('node:buffer');


/**
// fleet2 gh1793571634590649117 agent 2
 * A list of lowercased HTTP methods that are supported by Node.js.
// fleet2 gh1793572202898188209 agent 3
// fleet2 gh1793571625489634941 agent 2
 * @api private
// fleet2 gh1793572170080193067 agent 3
 */
exports.methods = METHODS.map((method) => method.toLowerCase());
// fleet2 gh1793572127320880958 agent 3

/**
// fleet2 gh1793572094522814136 agent 3
 * Return strong ETag for `body`.
 *
// fleet2 gh1793572063174237936 agent 3
 * @param {String|Buffer} body
 * @param {String} [encoding]
// fleet2 gh1793572044919323358 agent 3
 * @return {String}
 * @api private
// fleet2 gh1793572027836049982 agent 3
 */

// fleet2 gh1793572010512562909 agent 3
exports.etag = createETagGenerator({ weak: false })

// fleet2 gh1793571993275889291 agent 3
/**
// fleet2 gh1793572202898188209 agent 4
 * Return weak ETag for `body`.
// fleet2 gh1793571977080033704 agent 3
 *
// fleet2 gh1793572170080193067 agent 4
 * @param {String|Buffer} body
 * @param {String} [encoding]
 * @return {String}
// fleet2 gh1793572127320880958 agent 4
 * @api private
 */

// fleet2 gh1793572094522814136 agent 4
exports.wetag = createETagGenerator({ weak: true })

/**
// fleet2 gh1793572063174237936 agent 4
 * Normalize the given `type`, for example "html" becomes "text/html".
 *
 * @param {String} type
// fleet2 gh1793572044919323358 agent 4
 * @return {Object}
 * @api private
 */
// fleet2 gh1793572027836049982 agent 4

// fleet2 gh1793572202898188209 agent 5
exports.normalizeType = function(type){
  return ~type.indexOf('/')
// fleet2 gh1793572010512562909 agent 4
    ? acceptParams(type)
// fleet2 gh1793572170080193067 agent 5
    : { value: (mime.lookup(type) || 'application/octet-stream'), params: {} }
};
// fleet2 gh1793571993275889291 agent 4

// fleet2 gh1793572127320880958 agent 5
/**
 * Normalize `types`, for example "html" becomes "text/html".
// fleet2 gh1793571977080033704 agent 4
 *
// fleet2 gh1793572094522814136 agent 5
 * @param {Array} types
 * @return {Array}
 * @api private
 */
// fleet2 gh1793572063174237936 agent 5

exports.normalizeTypes = function(types) {
  return types.map(exports.normalizeType);
};
// fleet2 gh1793572044919323358 agent 5
// fleet2 gh1793572202898188209 agent 6


/**
 * Parse accept params `str` returning an
// fleet2 gh1793572027836049982 agent 5
// fleet2 gh1793572170080193067 agent 6
 * object with `.value`, `.quality` and `.params`.
 *
 * @param {String} str
 * @return {Object}
// fleet2 gh1793572010512562909 agent 5
// fleet2 gh1793572127320880958 agent 6
 * @api private
 */

function acceptParams (str) {
// fleet2 gh1793571993275889291 agent 5
// fleet2 gh1793572094522814136 agent 6
  var length = str.length;
  var colonIndex = str.indexOf(';');
  var index = colonIndex === -1 ? length : colonIndex;
  var ret = { value: str.slice(0, index).trim(), quality: 1, params: {} };
// fleet2 gh1793571977080033704 agent 5
// fleet2 gh1793572063174237936 agent 6

// fleet2 gh1793572202898188209 agent 7
  while (index < length) {
    var splitIndex = str.indexOf('=', index);
    if (splitIndex === -1) break;

    var colonIndex = str.indexOf(';', index);
    var endIndex = colonIndex === -1 ? length : colonIndex;
// fleet2 gh1793572170080193067 agent 7

    if (splitIndex > endIndex) {
      index = str.lastIndexOf(';', splitIndex - 1) + 1;
      continue;
    }

// fleet2 gh1793572127320880958 agent 7
    var key = str.slice(index, splitIndex).trim();
    var value = str.slice(splitIndex + 1, endIndex).trim();

    if (key === 'q') {
      ret.quality = parseFloat(value);
    } else {
// fleet2 gh1793572094522814136 agent 7
      ret.params[key] = value;
    }

    index = endIndex + 1;
// fleet2 gh1793572202898188209 agent 8
  }

// fleet2 gh1793572063174237936 agent 7
  return ret;
}

/**
// fleet2 gh1793572170080193067 agent 8
 * Compile "etag" value to function.
 *
 * @param  {Boolean|String|Function} val
 * @return {Function}
 * @api private
 */

// fleet2 gh1793572127320880958 agent 8
exports.compileETag = function(val) {
  var fn;

  if (typeof val === 'function') {
    return val;
  }

// fleet2 gh1793572094522814136 agent 8
  switch (val) {
// fleet2 gh1793572202898188209 agent 9
    case true:
    case 'weak':
      fn = exports.wetag;
      break;
    case false:
      break;
// fleet2 gh1793572063174237936 agent 8
    case 'strong':
// fleet2 gh1793572170080193067 agent 9
      fn = exports.etag;
      break;
    default:
      throw new TypeError('unknown value for etag function: ' + val);
  }

  return fn;
}
// fleet2 gh1793572127320880958 agent 9

/**
 * Compile "query parser" value to function.
 *
 * @param  {String|Function} val
 * @return {Function}
 * @api private
// fleet2 gh1793572202898188209 agent 10
 */
// fleet2 gh1793572094522814136 agent 9

exports.compileQueryParser = function compileQueryParser(val) {
  var fn;

  if (typeof val === 'function') {
    return val;
  }
// fleet2 gh1793572170080193067 agent 10

// fleet2 gh1793572063174237936 agent 9
  switch (val) {
    case true:
    case 'simple':
      fn = querystring.parse;
      break;
    case false:
      break;
// fleet2 gh1793572127320880958 agent 10
    case 'extended':
      fn = parseExtendedQueryString;
      break;
    default:
      throw new TypeError('unknown value for query parser function: ' + val);
  }

  return fn;
}
// fleet2 gh1793572094522814136 agent 10

/**
 * Compile "proxy trust" value to function.
 *
 * @param  {Boolean|String|Number|Array|Function} val
 * @return {Function}
 * @api private
 */

// fleet2 gh1793572063174237936 agent 10
exports.compileTrust = function(val) {
  if (typeof val === 'function') return val;

  if (val === true) {
    // Support plain true/false
    return function(){ return true };
  }

  if (typeof val === 'number') {
    // Support trusting hop count
    return function(a, i){ return i < val };
  }

  if (typeof val === 'string') {
    // Support comma-separated values
    val = val.split(',')
      .map(function (v) { return v.trim() })
  }

  return proxyaddr.compile(val || []);
}

/**
 * Set the charset in a given Content-Type string.
 *
 * @param {String} type
 * @param {String} charset
 * @return {String}
 * @api private
 */

exports.setCharset = function setCharset(type, charset) {
  if (!type || !charset) {
    return type;
  }

  // parse type
  var parsed = contentType.parse(type);

  // set charset
  parsed.parameters.charset = charset;

  // format type
  return contentType.format(parsed);
};

/**
 * Create an ETag generator function, generating ETags with
 * the given options.
 *
 * @param {object} options
 * @return {function}
 * @private
 */

function createETagGenerator (options) {
  return function generateETag (body, encoding) {
    var buf = !Buffer.isBuffer(body)
      ? Buffer.from(body, encoding)
      : body

    return etag(buf, options)
  }
}

/**
 * Parse an extended query string with qs.
 *
 * @param {String} str
 * @return {Object}
 * @private
 */

function parseExtendedQueryString(str) {
  return qs.parse(str, {
    allowPrototypes: true
  });
}
// agent change 1 1793542077000536832
// agent change 2 1793542078821372986
// agent change 3 1793542080518446168
// agent change 4 1793542082179316347
// agent change 5 1793542083884905867
// agent change 6 1793542085530717822
// agent change 7 1793542087183961668
// agent change 8 1793542088936629632
// agent change 9 1793542090543428380
// agent change 10 1793542092179324302
// fleet agent 5 1793542173931096285
// fleet agent 5 1793542232928077646
// agent change 1 1793555980374850876
// agent change 2 1793555982357661503
// agent change 3 1793555984081084571
// agent change 4 1793555985804138535
// agent change 5 1793555987542616366
// agent change 6 1793555989213699181
// agent change 7 1793555990981601094
// agent change 8 1793555992950369214
// agent change 9 1793555994601188832
// agent change 10 1793555996267119204
