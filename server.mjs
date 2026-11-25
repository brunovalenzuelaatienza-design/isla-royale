import { createRequire as __cr } from 'module'; const require = __cr(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ws/lib/constants.js
var require_constants = __commonJS({
  "node_modules/ws/lib/constants.js"(exports, module) {
    "use strict";
    var BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
    var hasBlob = typeof Blob !== "undefined";
    if (hasBlob) BINARY_TYPES.push("blob");
    module.exports = {
      BINARY_TYPES,
      CLOSE_TIMEOUT: 3e4,
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      hasBlob,
      kForOnEventAttribute: /* @__PURE__ */ Symbol("kIsForOnEventAttribute"),
      kListener: /* @__PURE__ */ Symbol("kListener"),
      kStatusCode: /* @__PURE__ */ Symbol("status-code"),
      kWebSocket: /* @__PURE__ */ Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// node_modules/ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/ws/lib/buffer-util.js"(exports, module) {
    "use strict";
    var { websocketMask, websocketUnmask } = __require("http");
    var { EMPTY_BUFFER } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0) return EMPTY_BUFFER;
      if (list.length === 1) return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data)) return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (websocketMask) {
      module.exports.mask = function(source, mask, output, offset, length) {
        if (length < 24) _mask(source, mask, output, offset, length);
        else websocketMask(source, mask, output, offset, length);
      };
      module.exports.unmask = function(buffer, mask) {
        if (buffer.length < 24) _unmask(buffer, mask);
        else websocketUnmask(buffer, mask);
      };
    } else if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = __require("bufferutil");
        module.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48) _mask(source, mask, output, offset, length);
          else bufferUtil.mask(source, mask, output, offset, length);
        };
        module.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32) _unmask(buffer, mask);
          else bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/ws/lib/limiter.js"(exports, module) {
    "use strict";
    var kDone = /* @__PURE__ */ Symbol("kDone");
    var kRun = /* @__PURE__ */ Symbol("kRun");
    var Limiter = class {
      /**
       * Creates a new `Limiter`.
       *
       * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
       *     to run concurrently
       */
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      /**
       * Adds a job to the queue.
       *
       * @param {Function} job The job to run
       * @public
       */
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      /**
       * Removes a job from the queue and runs it if possible.
       *
       * @private
       */
      [kRun]() {
        if (this.pending === this.concurrency) return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module.exports = Limiter;
  }
});

// node_modules/ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/ws/lib/permessage-deflate.js"(exports, module) {
    "use strict";
    var zlib2 = __require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = /* @__PURE__ */ Symbol("permessage-deflate");
    var kTotalLength = /* @__PURE__ */ Symbol("total-length");
    var kCallback = /* @__PURE__ */ Symbol("callback");
    var kBuffers = /* @__PURE__ */ Symbol("buffers");
    var kError = /* @__PURE__ */ Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate2 = class {
      /**
       * Creates a PerMessageDeflate instance.
       *
       * @param {Object} [options] Configuration options
       * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
       *     for, or request, a custom client window size
       * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
       *     acknowledge disabling of client context takeover
       * @param {Number} [options.concurrencyLimit=10] The number of concurrent
       *     calls to zlib
       * @param {Boolean} [options.isServer=false] Create the instance in either
       *     server or client mode
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
       *     use of a custom server window size
       * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
       *     disabling of server context takeover
       * @param {Number} [options.threshold=1024] Size (in bytes) below which
       *     messages should not be compressed if context takeover is disabled
       * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
       *     deflate
       * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
       *     inflate
       */
      constructor(options) {
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._maxPayload = this._options.maxPayload | 0;
        this._isServer = !!this._options.isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      /**
       * @type {String}
       */
      static get extensionName() {
        return "permessage-deflate";
      }
      /**
       * Create an extension negotiation offer.
       *
       * @return {Object} Extension parameters
       * @public
       */
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      /**
       * Accept an extension negotiation offer/response.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Object} Accepted configuration
       * @public
       */
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      /**
       * Releases all resources used by the extension.
       *
       * @public
       */
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      /**
       *  Accept an extension negotiation offer.
       *
       * @param {Array} offers The extension negotiation offers
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && (typeof params.client_max_window_bits === "number" ? opts.clientMaxWindowBits > params.client_max_window_bits : !params.client_max_window_bits)) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      /**
       * Accept the extension negotiation response.
       *
       * @param {Array} response The extension negotiation response
       * @return {Object} Accepted configuration
       * @private
       */
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      /**
       * Normalize parameters.
       *
       * @param {Array} configurations The extension negotiation offers/reponse
       * @return {Array} The offers/response with normalized parameters
       * @private
       */
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      /**
       * Decompress data. Concurrency limited.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Compress data. Concurrency limited.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @public
       */
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      /**
       * Decompress data.
       *
       * @param {Buffer} data Compressed data
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib2.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib2.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin) this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      /**
       * Compress data.
       *
       * @param {(Buffer|String)} data Data to compress
       * @param {Boolean} fin Specifies whether or not this is the last fragment
       * @param {Function} callback Callback
       * @private
       */
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib2.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib2.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib2.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module.exports = PerMessageDeflate2;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      if (this[kError]) {
        this[kCallback](this[kError]);
        return;
      }
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/ws/lib/validation.js"(exports, module) {
    "use strict";
    var { isUtf8 } = __require("buffer");
    var { hasBlob } = require_constants();
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      // 80 - 95
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
      // 112 - 127
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || // Overlong
          buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || // Overlong
          buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    function isBlob(value) {
      return hasBlob && typeof value === "object" && typeof value.arrayBuffer === "function" && typeof value.type === "string" && typeof value.stream === "function" && (value[Symbol.toStringTag] === "Blob" || value[Symbol.toStringTag] === "File");
    }
    module.exports = {
      isBlob,
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = __require("utf-8-validate");
        module.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/ws/lib/receiver.js"(exports, module) {
    "use strict";
    var { Writable } = __require("stream");
    var PerMessageDeflate2 = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var DEFER_EVENT = 6;
    var Receiver2 = class extends Writable {
      /**
       * Creates a Receiver instance.
       *
       * @param {Object} [options] Options object
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {String} [options.binaryType=nodebuffer] The type for binary data
       * @param {Object} [options.extensions] An object containing the negotiated
       *     extensions
       * @param {Boolean} [options.isServer=false] Specifies whether to operate in
       *     client or server mode
       * @param {Number} [options.maxBufferedChunks=0] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=0] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=0] The maximum allowed message length
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       */
      constructor(options = {}) {
        super();
        this._allowSynchronousEvents = options.allowSynchronousEvents !== void 0 ? options.allowSynchronousEvents : true;
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxBufferedChunks = options.maxBufferedChunks | 0;
        this._maxFragments = options.maxFragments | 0;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._numFragments = 0;
        this._fragments = [];
        this._errored = false;
        this._loop = false;
        this._state = GET_INFO;
      }
      /**
       * Implements `Writable.prototype._write()`.
       *
       * @param {Buffer} chunk The chunk of data to write
       * @param {String} encoding The character encoding of `chunk`
       * @param {Function} cb Callback
       * @private
       */
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO) return cb();
        if (this._maxBufferedChunks > 0 && this._buffers.length >= this._maxBufferedChunks) {
          cb(
            this.createError(
              RangeError,
              "Too many buffered chunks",
              false,
              1008,
              "WS_ERR_TOO_MANY_BUFFERED_PARTS"
            )
          );
          return;
        }
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      /**
       * Consumes `n` bytes from the buffered data.
       *
       * @param {Number} n The number of bytes to consume
       * @return {Buffer} The consumed bytes
       * @private
       */
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length) return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      /**
       * Starts the parsing loop.
       *
       * @param {Function} cb Callback
       * @private
       */
      startLoop(cb) {
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              this.getInfo(cb);
              break;
            case GET_PAYLOAD_LENGTH_16:
              this.getPayloadLength16(cb);
              break;
            case GET_PAYLOAD_LENGTH_64:
              this.getPayloadLength64(cb);
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              this.getData(cb);
              break;
            case INFLATING:
            case DEFER_EVENT:
              this._loop = false;
              return;
          }
        } while (this._loop);
        if (!this._errored) cb();
      }
      /**
       * Reads the first two bytes of a frame.
       *
       * @param {Function} cb Callback
       * @private
       */
      getInfo(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          const error = this.createError(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
          cb(error);
          return;
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate2.extensionName]) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (!this._fragmented) {
            const error = this.createError(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            const error = this.createError(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
            cb(error);
            return;
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            const error = this.createError(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
            cb(error);
            return;
          }
          if (compressed) {
            const error = this.createError(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
            cb(error);
            return;
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            const error = this.createError(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
            cb(error);
            return;
          }
        } else {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            const error = this.createError(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
            cb(error);
            return;
          }
        } else if (this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
          cb(error);
          return;
        }
        if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
        else this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+16).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength16(cb) {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        this.haveLength(cb);
      }
      /**
       * Gets extended payload length (7+64).
       *
       * @param {Function} cb Callback
       * @private
       */
      getPayloadLength64(cb) {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          const error = this.createError(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        this.haveLength(cb);
      }
      /**
       * Payload length has been read.
       *
       * @param {Function} cb Callback
       * @private
       */
      haveLength(cb) {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
        }
        if (this._masked) this._state = GET_MASK;
        else this._state = GET_DATA;
      }
      /**
       * Reads mask bytes.
       *
       * @private
       */
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      /**
       * Reads data bytes.
       *
       * @param {Function} cb Callback
       * @private
       */
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        this._mask = void 0;
        if (this._opcode > 7) {
          this.controlMessage(data, cb);
          return;
        }
        if (this._maxFragments > 0 && ++this._numFragments > this._maxFragments) {
          const error = this.createError(
            RangeError,
            "Too many message fragments",
            false,
            1008,
            "WS_ERR_TOO_MANY_BUFFERED_PARTS"
          );
          cb(error);
          return;
        }
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        this.dataMessage(cb);
      }
      /**
       * Decompresses data.
       *
       * @param {Buffer} data Compressed data
       * @param {Function} cb Callback
       * @private
       */
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err) return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              const error = this.createError(
                RangeError,
                "Max payload size exceeded",
                false,
                1009,
                "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
              );
              cb(error);
              return;
            }
            this._fragments.push(buf);
          }
          this.dataMessage(cb);
          if (this._state === GET_INFO) this.startLoop(cb);
        });
      }
      /**
       * Handles a data message.
       *
       * @param {Function} cb Callback
       * @private
       */
      dataMessage(cb) {
        if (!this._fin) {
          this._state = GET_INFO;
          return;
        }
        const messageLength = this._messageLength;
        const fragments = this._fragments;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragmented = 0;
        this._numFragments = 0;
        this._fragments = [];
        if (this._opcode === 2) {
          let data;
          if (this._binaryType === "nodebuffer") {
            data = concat(fragments, messageLength);
          } else if (this._binaryType === "arraybuffer") {
            data = toArrayBuffer(concat(fragments, messageLength));
          } else if (this._binaryType === "blob") {
            data = new Blob(fragments);
          } else {
            data = fragments;
          }
          if (this._allowSynchronousEvents) {
            this.emit("message", data, true);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", data, true);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        } else {
          const buf = concat(fragments, messageLength);
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          if (this._state === INFLATING || this._allowSynchronousEvents) {
            this.emit("message", buf, false);
            this._state = GET_INFO;
          } else {
            this._state = DEFER_EVENT;
            setImmediate(() => {
              this.emit("message", buf, false);
              this._state = GET_INFO;
              this.startLoop(cb);
            });
          }
        }
      }
      /**
       * Handles a control message.
       *
       * @param {Buffer} data Data to handle
       * @return {(Error|RangeError|undefined)} A possible error
       * @private
       */
      controlMessage(data, cb) {
        if (this._opcode === 8) {
          if (data.length === 0) {
            this._loop = false;
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              const error = this.createError(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
              cb(error);
              return;
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              const error = this.createError(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
              cb(error);
              return;
            }
            this._loop = false;
            this.emit("conclude", code, buf);
            this.end();
          }
          this._state = GET_INFO;
          return;
        }
        if (this._allowSynchronousEvents) {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit(this._opcode === 9 ? "ping" : "pong", data);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
      /**
       * Builds an error object.
       *
       * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
       * @param {String} message The error message
       * @param {Boolean} prefix Specifies whether or not to add a default prefix to
       *     `message`
       * @param {Number} statusCode The status code
       * @param {String} errorCode The exposed error code
       * @return {(Error|RangeError)} The error
       * @private
       */
      createError(ErrorCtor, message, prefix, statusCode, errorCode) {
        this._loop = false;
        this._errored = true;
        const err = new ErrorCtor(
          prefix ? `Invalid WebSocket frame: ${message}` : message
        );
        Error.captureStackTrace(err, this.createError);
        err.code = errorCode;
        err[kStatusCode] = statusCode;
        return err;
      }
    };
    module.exports = Receiver2;
  }
});

// node_modules/ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/ws/lib/sender.js"(exports, module) {
    "use strict";
    var { Duplex } = __require("stream");
    var { randomFillSync } = __require("crypto");
    var {
      types: { isUint8Array }
    } = __require("util");
    var PerMessageDeflate2 = require_permessage_deflate();
    var { EMPTY_BUFFER, kWebSocket, NOOP } = require_constants();
    var { isBlob, isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = /* @__PURE__ */ Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var RANDOM_POOL_SIZE = 8 * 1024;
    var randomPool;
    var randomPoolPointer = RANDOM_POOL_SIZE;
    var DEFAULT = 0;
    var DEFLATING = 1;
    var GET_BLOB_DATA = 2;
    var Sender2 = class _Sender {
      /**
       * Creates a Sender instance.
       *
       * @param {Duplex} socket The connection socket
       * @param {Object} [extensions] An object containing the negotiated extensions
       * @param {Function} [generateMask] The function used to generate the masking
       *     key
       */
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._queue = [];
        this._state = DEFAULT;
        this.onerror = NOOP;
        this[kWebSocket] = void 0;
      }
      /**
       * Frames a piece of data according to the HyBi WebSocket protocol.
       *
       * @param {(Buffer|String)} data The data to frame
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @return {(Buffer|String)[]} The framed data
       * @public
       */
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            if (randomPoolPointer === RANDOM_POOL_SIZE) {
              if (randomPool === void 0) {
                randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
              }
              randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
              randomPoolPointer = 0;
            }
            mask[0] = randomPool[randomPoolPointer++];
            mask[1] = randomPool[randomPoolPointer++];
            mask[2] = randomPool[randomPoolPointer++];
            mask[3] = randomPool[randomPoolPointer++];
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1) target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask) {
          return dataLength ? [target, data] : [target];
        }
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (!dataLength) return [target];
        if (skipMasking) return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      /**
       * Sends a close message to the other peer.
       *
       * @param {Number} [code] The status code component of the body
       * @param {(String|Buffer)} [data] The message component of the body
       * @param {Boolean} [mask=false] Specifies whether or not to mask the message
       * @param {Function} [cb] Callback
       * @public
       */
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else if (isUint8Array(data)) {
            buf.set(data, 2);
          } else {
            throw new TypeError("Second argument must be a string or a Uint8Array");
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(buf, options), cb);
        }
      }
      /**
       * Sends a ping message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a pong message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback
       * @public
       */
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, false, options, cb]);
          } else {
            this.getBlobData(data, false, options, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(_Sender.frame(data, options), cb);
        }
      }
      /**
       * Sends a data message to the other peer.
       *
       * @param {*} data The message to send
       * @param {Object} options Options object
       * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
       *     or text
       * @param {Boolean} [options.compress=false] Specifies whether or not to
       *     compress `data`
       * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Function} [cb] Callback
       * @public
       */
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else if (isBlob(data)) {
          byteLength = data.size;
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin) this._firstFragment = true;
        const opts = {
          [kByteLength]: byteLength,
          fin: options.fin,
          generateMask: this._generateMask,
          mask: options.mask,
          maskBuffer: this._maskBuffer,
          opcode,
          readOnly,
          rsv1
        };
        if (isBlob(data)) {
          if (this._state !== DEFAULT) {
            this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
          } else {
            this.getBlobData(data, this._compress, opts, cb);
          }
        } else if (this._state !== DEFAULT) {
          this.enqueue([this.dispatch, data, this._compress, opts, cb]);
        } else {
          this.dispatch(data, this._compress, opts, cb);
        }
      }
      /**
       * Gets the contents of a blob as binary data.
       *
       * @param {Blob} blob The blob
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     the data
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      getBlobData(blob, compress, options, cb) {
        this._bufferedBytes += options[kByteLength];
        this._state = GET_BLOB_DATA;
        blob.arrayBuffer().then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(_Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        }).catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
      }
      /**
       * Dispatches a message.
       *
       * @param {(Buffer|String)} data The message to send
       * @param {Boolean} [compress=false] Specifies whether or not to compress
       *     `data`
       * @param {Object} options Options object
       * @param {Boolean} [options.fin=false] Specifies whether or not to set the
       *     FIN bit
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Boolean} [options.mask=false] Specifies whether or not to mask
       *     `data`
       * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
       *     key
       * @param {Number} options.opcode The opcode
       * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
       *     modified
       * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
       *     RSV1 bit
       * @param {Function} [cb] Callback
       * @private
       */
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(_Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate2.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._state = DEFLATING;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            callCallbacks(this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._state = DEFAULT;
          options.readOnly = false;
          this.sendFrame(_Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      /**
       * Executes queued send operations.
       *
       * @private
       */
      dequeue() {
        while (this._state === DEFAULT && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      /**
       * Enqueues a send operation.
       *
       * @param {Array} params Send operation parameters.
       * @private
       */
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      /**
       * Sends a frame.
       *
       * @param {(Buffer | String)[]} list The frame to send
       * @param {Function} [cb] Callback
       * @private
       */
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module.exports = Sender2;
    function callCallbacks(sender, err, cb) {
      if (typeof cb === "function") cb(err);
      for (let i = 0; i < sender._queue.length; i++) {
        const params = sender._queue[i];
        const callback = params[params.length - 1];
        if (typeof callback === "function") callback(err);
      }
    }
    function onError(sender, err, cb) {
      callCallbacks(sender, err, cb);
      sender.onerror(err);
    }
  }
});

// node_modules/ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/ws/lib/event-target.js"(exports, module) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants();
    var kCode = /* @__PURE__ */ Symbol("kCode");
    var kData = /* @__PURE__ */ Symbol("kData");
    var kError = /* @__PURE__ */ Symbol("kError");
    var kMessage = /* @__PURE__ */ Symbol("kMessage");
    var kReason = /* @__PURE__ */ Symbol("kReason");
    var kTarget = /* @__PURE__ */ Symbol("kTarget");
    var kType = /* @__PURE__ */ Symbol("kType");
    var kWasClean = /* @__PURE__ */ Symbol("kWasClean");
    var Event = class {
      /**
       * Create a new `Event`.
       *
       * @param {String} type The name of the event
       * @throws {TypeError} If the `type` argument is not specified
       */
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      /**
       * @type {*}
       */
      get target() {
        return this[kTarget];
      }
      /**
       * @type {String}
       */
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      /**
       * Create a new `CloseEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {Number} [options.code=0] The status code explaining why the
       *     connection was closed
       * @param {String} [options.reason=''] A human-readable string explaining why
       *     the connection was closed
       * @param {Boolean} [options.wasClean=false] Indicates whether or not the
       *     connection was cleanly closed
       */
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      /**
       * @type {Number}
       */
      get code() {
        return this[kCode];
      }
      /**
       * @type {String}
       */
      get reason() {
        return this[kReason];
      }
      /**
       * @type {Boolean}
       */
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      /**
       * Create a new `ErrorEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.error=null] The error that generated this event
       * @param {String} [options.message=''] The error message
       */
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      /**
       * @type {*}
       */
      get error() {
        return this[kError];
      }
      /**
       * @type {String}
       */
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      /**
       * Create a new `MessageEvent`.
       *
       * @param {String} type The name of the event
       * @param {Object} [options] A dictionary object that allows for setting
       *     attributes via object members of the same name
       * @param {*} [options.data=null] The message content
       */
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      /**
       * @type {*}
       */
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      /**
       * Register an event listener.
       *
       * @param {String} type A string representing the event type to listen for
       * @param {(Function|Object)} handler The listener to add
       * @param {Object} [options] An options object specifies characteristics about
       *     the event listener
       * @param {Boolean} [options.once=false] A `Boolean` indicating that the
       *     listener should be invoked at most once after being added. If `true`,
       *     the listener would be automatically removed when invoked.
       * @public
       */
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      /**
       * Remove an event listener.
       *
       * @param {String} type A string representing the event type to remove
       * @param {(Function|Object)} handler The listener to remove
       * @public
       */
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// node_modules/ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/ws/lib/extension.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0) dest[name] = [elem];
      else dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1) start = i;
            else if (!mustUnescape) mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1) start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1) end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1) end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1) end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension2) => {
        let configurations = extensions[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations.map((params) => {
          return [extension2].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values)) values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module.exports = { format, parse };
  }
});

// node_modules/ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/ws/lib/websocket.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var https = __require("https");
    var http2 = __require("http");
    var net = __require("net");
    var querystring = __require("querystring");
    var tls = __require("tls");
    var { randomBytes, createHash } = __require("crypto");
    var { Duplex, Readable } = __require("stream");
    var { URL } = __require("url");
    var PerMessageDeflate2 = require_permessage_deflate();
    var Receiver2 = require_receiver();
    var Sender2 = require_sender();
    var { isBlob } = require_validation();
    var {
      BINARY_TYPES,
      CLOSE_TIMEOUT,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var kAborted = /* @__PURE__ */ Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket2 = class _WebSocket extends EventEmitter {
      /**
       * Create a new `WebSocket`.
       *
       * @param {(String|URL)} address The URL to which to connect
       * @param {(String|String[])} [protocols] The subprotocols
       * @param {Object} [options] Connection options
       */
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._errorEmitted = false;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = _WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            if (!options || options.protocols === void 0) {
              protocols = [];
            } else if (Array.isArray(options.protocols)) {
              protocols = options.protocols;
            } else {
              protocols = [options.protocols];
            }
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              if (options.protocols === void 0) {
                protocols = [];
              } else if (Array.isArray(options.protocols)) {
                protocols = options.protocols;
              } else {
                protocols = [options.protocols];
              }
            } else {
              protocols = [protocols];
            }
          }
          options = initAsClient(this, address, protocols, options);
        } else {
          this._isServer = true;
        }
        if (options.autoPong) {
          this._autoPong = true;
          this._autoPongComplete = () => autoPongComplete(this);
          this._pendingAutoPongs = 0;
          this._maxPendingAutoPongs = options.maxPendingAutoPongs | 0;
        }
        this._closeTimeout = options.closeTimeout;
      }
      /**
       * For historical reasons, the custom "nodebuffer" type is used by the default
       * instead of "blob".
       *
       * @type {String}
       */
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type)) return;
        this._binaryType = type;
        if (this._receiver) this._receiver._binaryType = type;
      }
      /**
       * @type {Number}
       */
      get bufferedAmount() {
        if (!this._socket) return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      /**
       * @type {String}
       */
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      /**
       * @type {Boolean}
       */
      get isPaused() {
        return this._paused;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onclose() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onerror() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onopen() {
        return null;
      }
      /**
       * @type {Function}
       */
      /* istanbul ignore next */
      get onmessage() {
        return null;
      }
      /**
       * @type {String}
       */
      get protocol() {
        return this._protocol;
      }
      /**
       * @type {Number}
       */
      get readyState() {
        return this._readyState;
      }
      /**
       * @type {String}
       */
      get url() {
        return this._url;
      }
      /**
       * Set up the socket and the internal resources.
       *
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Object} options Options object
       * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Function} [options.generateMask] The function used to generate the
       *     masking key
       * @param {Number} [options.maxBufferedChunks=0] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=0] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=0] The maximum allowed message size
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @private
       */
      setSocket(socket, head, options) {
        const receiver = new Receiver2({
          allowSynchronousEvents: options.allowSynchronousEvents,
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxBufferedChunks: options.maxBufferedChunks,
          maxFragments: options.maxFragments,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        const sender = new Sender2(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._sender = sender;
        this._socket = socket;
        receiver[kWebSocket] = this;
        sender[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        sender.onerror = senderOnError;
        if (socket.setTimeout) socket.setTimeout(0);
        if (socket.setNoDelay) socket.setNoDelay();
        if (head.length > 0) socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = _WebSocket.OPEN;
        this.emit("open");
      }
      /**
       * Emit the `'close'` event.
       *
       * @private
       */
      emitClose() {
        if (!this._socket) {
          this._readyState = _WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate2.extensionName]) {
          this._extensions[PerMessageDeflate2.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = _WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      /**
       * Start a closing handshake.
       *
       *          +----------+   +-----------+   +----------+
       *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
       *    |     +----------+   +-----------+   +----------+     |
       *          +----------+   +-----------+         |
       * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
       *          +----------+   +-----------+   |
       *    |           |                        |   +---+        |
       *                +------------------------+-->|fin| - - - -
       *    |         +---+                      |   +---+
       *     - - - - -|fin|<---------------------+
       *              +---+
       *
       * @param {Number} [code] Status code explaining why the connection is closing
       * @param {(String|Buffer)} [data] The reason why the connection is
       *     closing
       * @public
       */
      close(code, data) {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === _WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err) return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        this._readyState = _WebSocket.CLOSING;
        setCloseTimer(this);
      }
      /**
       * Pause the socket.
       *
       * @public
       */
      pause() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      /**
       * Send a ping.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the ping is sent
       * @public
       */
      ping(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Send a pong.
       *
       * @param {*} [data] The data to send
       * @param {Boolean} [mask] Indicates whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when the pong is sent
       * @public
       */
      pong(data, mask, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0) mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      /**
       * Resume the socket.
       *
       * @public
       */
      resume() {
        if (this.readyState === _WebSocket.CONNECTING || this.readyState === _WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain) this._socket.resume();
      }
      /**
       * Send a data message.
       *
       * @param {*} data The message to send
       * @param {Object} [options] Options object
       * @param {Boolean} [options.binary] Specifies whether `data` is binary or
       *     text
       * @param {Boolean} [options.compress] Specifies whether or not to compress
       *     `data`
       * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
       *     last one
       * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
       * @param {Function} [cb] Callback which is executed when data is written out
       * @public
       */
      send(data, options, cb) {
        if (this.readyState === _WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number") data = data.toString();
        if (this.readyState !== _WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate2.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      /**
       * Forcibly close the connection.
       *
       * @public
       */
      terminate() {
        if (this.readyState === _WebSocket.CLOSED) return;
        if (this.readyState === _WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = _WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket2, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket2, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket2, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket2, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket2.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket2.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket2.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function") return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket2.prototype.addEventListener = addEventListener;
    WebSocket2.prototype.removeEventListener = removeEventListener;
    module.exports = WebSocket2;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        allowSynchronousEvents: true,
        autoPong: true,
        closeTimeout: CLOSE_TIMEOUT,
        protocolVersion: protocolVersions[1],
        maxBufferedChunks: 256 * 1024,
        maxFragments: 16 * 1024,
        maxPayload: 100 * 1024 * 1024,
        maxPendingAutoPongs: 60,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        protocols: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL(address);
        } catch {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
        parsedUrl = new URL(parsedUrl);
        parsedUrl.protocol = parsedUrl.protocol === "http:" ? "ws:" : "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http2.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = opts.createConnection || (isSecure ? tlsConnect : netConnect);
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate2({
          ...opts.perMessageDeflate,
          isServer: false,
          maxPayload: opts.maxPayload
        });
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate2.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        const username = querystring.unescape(parsedUrl.username);
        const password = querystring.unescape(parsedUrl.password);
        opts.auth = `${username}:${password}`;
      }
      if (isIpcUrl) {
        const i = opts.path.indexOf(":");
        if (i === -1) {
          opts.socketPath = opts.path;
          opts.path = "";
        } else {
          opts.socketPath = opts.path.slice(0, i);
          opts.path = opts.path.slice(i + 1);
        }
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost) delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted]) return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket2.CONNECTING) return;
        req = websocket._req = null;
        const upgrade = res.headers.upgrade;
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt) websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate2.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate2.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          allowSynchronousEvents: opts.allowSynchronousEvents,
          generateMask: opts.generateMask,
          maxBufferedChunks: opts.maxBufferedChunks,
          maxFragments: opts.maxFragments,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
      return opts;
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket2.CLOSING;
      websocket._errorEmitted = true;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket2.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = isBlob(data) ? data.size : toBuffer(data).length;
        if (websocket._socket) websocket._sender._bufferedBytes += length;
        else websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeCode = code;
      if (reason.length === 0) {
        websocket._closeMessage = EMPTY_BUFFER;
      } else {
        websocket._closeMessage = Buffer.allocUnsafeSlow(reason.length);
        websocket._closeMessage.set(reason);
      }
      if (websocket._socket[kWebSocket] === void 0) return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005) websocket.close();
      else websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused) websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      if (websocket._autoPong && websocket.readyState === WebSocket2.OPEN) {
        if (websocket._maxPendingAutoPongs > 0 && websocket._pendingAutoPongs >= websocket._maxPendingAutoPongs) {
          websocket.terminate();
        } else {
          websocket._pendingAutoPongs++;
          websocket.pong(data, !this._isServer, websocket._autoPongComplete);
        }
      }
      websocket.emit("ping", data);
    }
    function autoPongComplete(websocket) {
      websocket._pendingAutoPongs--;
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function senderOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket.readyState === WebSocket2.CLOSED) return;
      if (websocket.readyState === WebSocket2.OPEN) {
        websocket._readyState = WebSocket2.CLOSING;
        setCloseTimer(websocket);
      }
      this._socket.end();
      if (!websocket._errorEmitted) {
        websocket._errorEmitted = true;
        websocket.emit("error", err);
      }
    }
    function setCloseTimer(websocket) {
      websocket._closeTimer = setTimeout(
        websocket._socket.destroy.bind(websocket._socket),
        websocket._closeTimeout
      );
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket2.CLOSING;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && this._readableState.length !== 0) {
        const chunk = this.read(this._readableState.length);
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket2.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket2.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/ws/lib/stream.js
var require_stream = __commonJS({
  "node_modules/ws/lib/stream.js"(exports, module) {
    "use strict";
    var WebSocket2 = require_websocket();
    var { Duplex } = __require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream2(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data)) ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed) return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed) return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called) callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy) ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null) return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted) duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused) ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module.exports = createWebSocketStream2;
  }
});

// node_modules/ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "node_modules/ws/lib/subprotocol.js"(exports, module) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module.exports = { parse };
  }
});

// node_modules/ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/ws/lib/websocket-server.js"(exports, module) {
    "use strict";
    var EventEmitter = __require("events");
    var http2 = __require("http");
    var { Duplex } = __require("stream");
    var { createHash } = __require("crypto");
    var extension2 = require_extension();
    var PerMessageDeflate2 = require_permessage_deflate();
    var subprotocol2 = require_subprotocol();
    var WebSocket2 = require_websocket();
    var { CLOSE_TIMEOUT, GUID, kWebSocket } = require_constants();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer2 = class extends EventEmitter {
      /**
       * Create a `WebSocketServer` instance.
       *
       * @param {Object} options Configuration options
       * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
       *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
       *     multiple times in the same tick
       * @param {Boolean} [options.autoPong=true] Specifies whether or not to
       *     automatically send a pong in response to a ping
       * @param {Number} [options.backlog=511] The maximum length of the queue of
       *     pending connections
       * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
       *     track clients
       * @param {Number} [options.closeTimeout=30000] Duration in milliseconds to
       *     wait for the closing handshake to finish after `websocket.close()` is
       *     called
       * @param {Function} [options.handleProtocols] A hook to handle protocols
       * @param {String} [options.host] The hostname where to bind the server
       * @param {Number} [options.maxBufferedChunks=262144] The maximum number of
       *     buffered data chunks
       * @param {Number} [options.maxFragments=16384] The maximum number of message
       *     fragments
       * @param {Number} [options.maxPayload=104857600] The maximum allowed message
       *     size
       * @param {Number} [options.maxPendingAutoPongs=60] The maximum number of
       *     pending automatic pongs
       * @param {Boolean} [options.noServer=false] Enable no server mode
       * @param {String} [options.path] Accept only connections matching this path
       * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
       *     permessage-deflate
       * @param {Number} [options.port] The port where to bind the server
       * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
       *     server to use
       * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
       *     not to skip UTF-8 validation for text and close messages
       * @param {Function} [options.verifyClient] A hook to reject connections
       * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
       *     class to use. It must be the `WebSocket` class or class that extends it
       * @param {Function} [callback] A listener for the `listening` event
       */
      constructor(options, callback) {
        super();
        options = {
          allowSynchronousEvents: true,
          autoPong: true,
          maxBufferedChunks: 256 * 1024,
          maxFragments: 16 * 1024,
          maxPayload: 100 * 1024 * 1024,
          maxPendingAutoPongs: 60,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          closeTimeout: CLOSE_TIMEOUT,
          verifyClient: null,
          noServer: false,
          backlog: null,
          // use default (511 as implemented in net.js)
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket: WebSocket2,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http2.createServer((req, res) => {
            const body = http2.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true) options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      /**
       * Returns the bound address, the address family name, and port of the server
       * as reported by the operating system if listening on an IP socket.
       * If the server is listening on a pipe or UNIX domain socket, the name is
       * returned as a string.
       *
       * @return {(Object|String|null)} The address of the server
       * @public
       */
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server) return null;
        return this._server.address();
      }
      /**
       * Stop the server from accepting new connections and emit the `'close'` event
       * when all existing connections are closed.
       *
       * @param {Function} [cb] A one-time listener for the `'close'` event
       * @public
       */
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb) this.once("close", cb);
        if (this._state === CLOSING) return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server2 = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server2.close(() => {
            emitClose(this);
          });
        }
      }
      /**
       * See if a given request should be handled by this server instance.
       *
       * @param {http.IncomingMessage} req Request object to inspect
       * @return {Boolean} `true` if the request is valid, else `false`
       * @public
       */
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path) return false;
        }
        return true;
      }
      /**
       * Handle a HTTP Upgrade request.
       *
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @public
       */
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const upgrade = req.headers.upgrade;
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (key === void 0 || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 13 && version !== 8) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
            "Sec-WebSocket-Version": "13, 8"
          });
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol2.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate2({
            ...this.options.perMessageDeflate,
            isServer: true,
            maxPayload: this.options.maxPayload
          });
          try {
            const offers = extension2.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate2.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate2.extensionName]);
              extensions[PerMessageDeflate2.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      /**
       * Upgrade the connection to WebSocket.
       *
       * @param {Object} extensions The accepted extensions
       * @param {String} key The value of the `Sec-WebSocket-Key` header
       * @param {Set} protocols The subprotocols
       * @param {http.IncomingMessage} req The request object
       * @param {Duplex} socket The network socket between the server and client
       * @param {Buffer} head The first packet of the upgraded stream
       * @param {Function} cb Callback
       * @throws {Error} If called more than once with the same socket
       * @private
       */
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable) return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING) return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null, void 0, this.options);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate2.extensionName]) {
          const params = extensions[PerMessageDeflate2.extensionName].params;
          const value = extension2.format({
            [PerMessageDeflate2.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          allowSynchronousEvents: this.options.allowSynchronousEvents,
          maxBufferedChunks: this.options.maxBufferedChunks,
          maxFragments: this.options.maxFragments,
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module.exports = WebSocketServer2;
    function addListeners(server2, map) {
      for (const event of Object.keys(map)) server2.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server2.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server2) {
      server2._state = CLOSED;
      server2.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http2.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http2.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server2, req, socket, code, message, headers) {
      if (server2.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server2.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message, headers);
      }
    }
  }
});

// server/index.js
import http from "http";
import fs2 from "fs";
import path2 from "path";
import os from "os";
import { fileURLToPath } from "url";
import zlib from "zlib";

// node_modules/ws/wrapper.mjs
var import_stream = __toESM(require_stream(), 1);
var import_extension = __toESM(require_extension(), 1);
var import_permessage_deflate = __toESM(require_permessage_deflate(), 1);
var import_receiver = __toESM(require_receiver(), 1);
var import_sender = __toESM(require_sender(), 1);
var import_subprotocol = __toESM(require_subprotocol(), 1);
var import_websocket = __toESM(require_websocket(), 1);
var import_websocket_server = __toESM(require_websocket_server(), 1);

// shared/constants.js
var TICK_RATE = 30;
var TICK_DT = 1 / TICK_RATE;
var SNAPSHOT_EVERY = 2;
var MAP_SIZE = 320;
var PLAYER_RADIUS = 0.55;
var MAX_HP = 100;
var SPEED_WALK = 6;
var SPEED_SPRINT = 8.8;
var SPEED_ADS = 3.8;
var SPEED_HEALING = 2.2;
var JUMP_VELOCITY = 7.5;
var GRAVITY = 22;
var PICKUP_RADIUS = 2.4;
var BTN = {
  FIRE: 1,
  ADS: 2,
  SPRINT: 4,
  JUMP: 8
};
var MODES = {
  solo: { id: "solo", name: "Solo", teamSize: 1, capacity: 15 },
  duos: { id: "duos", name: "D\xFAos", teamSize: 2, capacity: 14 },
  squads: { id: "squads", name: "Escuadrones", teamSize: 4, capacity: 15 }
};
var ZONE_PHASES = [
  { wait: 50, shrink: 35, r: 105, dps: 1 },
  { wait: 40, shrink: 30, r: 66, dps: 2 },
  { wait: 35, shrink: 25, r: 38, dps: 4 },
  { wait: 28, shrink: 20, r: 18, dps: 7 },
  { wait: 20, shrink: 20, r: 6, dps: 10 },
  { wait: 12, shrink: 25, r: 0, dps: 16 }
];
var XP_RULES = {
  perMatch: 50,
  perKill: 30,
  perSecondAlive: 0.4,
  win: 250,
  top5: 60
};
function levelFromXp(xp) {
  let level = 1, need = 400, rest = xp;
  while (rest >= need) {
    rest -= need;
    level++;
    need = 400 + 100 * (level - 1);
  }
  return { level, into: rest, need };
}

// server/profiles.js
import fs from "fs";
import path from "path";
import crypto from "crypto";

// shared/characters.js
var CHARACTERS = [
  { id: "rocco", name: "Rocco", unlock: 1, skin: "#f2c09a", shirt: "#e8473f", pants: "#2f4a7a", shoes: "#3a2a22", hat: "cap", hatColor: "#e8473f", hair: "#4a2e1c", extra: "none" },
  { id: "luna", name: "Luna", unlock: 1, skin: "#ffd7b5", shirt: "#8a5cf5", pants: "#2b2b3d", shoes: "#ffffff", hat: "ponytail", hatColor: "#c77dff", hair: "#c77dff", extra: "none" },
  { id: "kiko", name: "Kiko", unlock: 2, skin: "#c98d63", shirt: "#3fbf6b", pants: "#6b4f2e", shoes: "#222222", hat: "beanie", hatColor: "#2f8f4f", hair: "#1c1c1c", extra: "backpack" },
  { id: "nara", name: "Nara", unlock: 3, skin: "#8d5a3b", shirt: "#ff8f3f", pants: "#3b3b3b", shoes: "#ff8f3f", hat: "helmet", hatColor: "#ff8f3f", hair: "#111111", extra: "none" },
  { id: "bolt", name: "Bolt", unlock: 5, skin: "#f0c8a0", shirt: "#ffd23f", pants: "#30343f", shoes: "#ffd23f", hat: "goggles", hatColor: "#30343f", hair: "#e6e6e6", extra: "none" },
  { id: "mara", name: "Mara", unlock: 7, skin: "#e0a878", shirt: "#2fb8c4", pants: "#f2e6c9", shoes: "#5a3b22", hat: "bandana", hatColor: "#d6334a", hair: "#5a2a12", extra: "backpack" },
  { id: "tito", name: "Tito", unlock: 10, skin: "#f5cba7", shirt: "#b5651d", pants: "#355c7d", shoes: "#4a3020", hat: "cowboy", hatColor: "#8b5a2b", hair: "#7a4a22", extra: "none" },
  { id: "zuri", name: "Zuri", unlock: 14, skin: "#6e4530", shirt: "#ff5fa2", pants: "#1f1f2e", shoes: "#ffffff", hat: "crown", hatColor: "#ffcc33", hair: "#111111", extra: "headphones" }
];
var CHARACTER_IDS = CHARACTERS.map((c) => c.id);

// shared/cosmetics.js
var SLOTS = [
  { id: "hair", name: "Peinados", icon: "\u{1F487}", required: true },
  { id: "face", name: "Caras", icon: "\u{1F600}", required: true },
  { id: "hat", name: "Gorras y sombreros", icon: "\u{1F9E2}" },
  { id: "mask", name: "M\xE1scaras", icon: "\u{1F977}" },
  { id: "glasses", name: "Gafas", icon: "\u{1F576}\uFE0F" },
  { id: "top", name: "Camisetas y chaquetas", icon: "\u{1F455}", required: true },
  { id: "pants", name: "Pantalones", icon: "\u{1F456}", required: true },
  { id: "backpack", name: "Mochilas", icon: "\u{1F392}" },
  { id: "special", name: "Accesorios especiales", icon: "\u2728" }
];
var COLOR_SLOTS = [
  { id: "skin", name: "Tono de piel", palette: ["#ffdbc2", "#f2c09a", "#e0a878", "#c98d63", "#a26a45", "#7a4b31", "#5a3522"] },
  { id: "hairColor", name: "Color de pelo", palette: ["#1c1c1c", "#4a2e1c", "#7a4a22", "#c98d4a", "#f2d16b", "#e8e8e8", "#d6334a", "#c77dff", "#3fa9f5", "#5ad67d", "#ff8fc8"] },
  { id: "topColor", name: "Color de la ropa", palette: ["#e8473f", "#ff8f3f", "#ffd23f", "#5ad67d", "#2fb8c4", "#3f7fe8", "#8a5cf5", "#ff5fa2", "#f5f5f5", "#3a3f4b", "#8b5a2b", "#1f6b45"] },
  { id: "pantsColor", name: "Color del pantal\xF3n", palette: ["#2f4a7a", "#30343f", "#6b4f2e", "#4d5d3a", "#8a8f99", "#f2e6c9", "#e8473f", "#3f7fe8", "#1c1c1c", "#c77dff"] }
];
var I = (slot, style, name, rarity, unlock, tags = []) => ({ id: `${slot}-${style}`, slot, style, name, rarity, unlock, tags });
var FREE = { type: "free" };
var LV = (level) => ({ type: "level", level });
var COINS = (price) => ({ type: "coins", price });
var ADS = (ads) => ({ type: "ads", ads });
var DAILY = { type: "daily" };
var ITEMS = [
  // peinados
  I("hair", "short", "Corto cl\xE1sico", "com\xFAn", FREE),
  I("hair", "spiky", "De punta", "com\xFAn", FREE),
  I("hair", "ponytail", "Coleta", "com\xFAn", FREE),
  I("hair", "long", "Melena", "com\xFAn", FREE),
  I("hair", "buzz", "Rapado", "com\xFAn", FREE),
  I("hair", "bald", "Calvo", "com\xFAn", FREE),
  I("hair", "afro", "Afro", "rara", LV(3)),
  I("hair", "bun", "Mo\xF1o", "rara", LV(6)),
  I("hair", "curly", "Rizos", "rara", COINS(250), ["popular"]),
  I("hair", "mohawk", "Cresta", "\xE9pica", COINS(400), ["featured"]),
  // caras
  I("face", "happy", "Alegre", "com\xFAn", FREE),
  I("face", "determined", "Decidido", "com\xFAn", FREE),
  I("face", "cool", "Chulito", "rara", LV(4)),
  I("face", "surprised", "Sorprendido", "rara", ADS(1), ["new"]),
  I("face", "angry", "Furioso", "rara", COINS(150)),
  I("face", "sleepy", "Dormil\xF3n", "rara", DAILY),
  // gorras y sombreros
  I("hat", "beanie", "Gorro de lana", "com\xFAn", FREE),
  I("hat", "headband", "Cinta deportiva", "com\xFAn", FREE),
  I("hat", "helmet", "Casco de moto", "com\xFAn", FREE),
  I("hat", "cap", "Gorra b\xE1sica", "com\xFAn", LV(2)),
  I("hat", "beret", "Boina", "rara", ADS(2)),
  I("hat", "chef", "Gorro de chef", "rara", COINS(300)),
  I("hat", "cowboy", "Sombrero vaquero", "rara", COINS(400), ["popular"]),
  I("hat", "tophat", "Chistera", "\xE9pica", COINS(650)),
  I("hat", "viking", "Casco vikingo", "\xE9pica", LV(12)),
  I("hat", "pirate", "Sombrero pirata", "\xE9pica", LV(18)),
  I("hat", "propeller", "Gorra con h\xE9lice", "\xE9pica", ADS(3), ["new"]),
  I("hat", "party", "Gorro de fiesta", "rara", DAILY),
  I("hat", "crown", "Corona real", "legendaria", LV(25)),
  I("hat", "astro", "Casco de astronauta", "legendaria", LV(30)),
  // máscaras
  I("mask", "bandit", "Pa\xF1uelo de bandido", "com\xFAn", FREE),
  I("mask", "ninja", "M\xE1scara ninja", "rara", LV(8)),
  I("mask", "hockey", "M\xE1scara de hockey", "\xE9pica", COINS(500)),
  I("mask", "fox", "M\xE1scara de zorro", "\xE9pica", ADS(3), ["featured"]),
  I("mask", "skull", "Calavera", "legendaria", LV(22)),
  // gafas
  I("glasses", "round", "Gafas redondas", "com\xFAn", FREE),
  I("glasses", "goggles", "Gafas de aviador", "com\xFAn", FREE),
  I("glasses", "sun", "Gafas de sol especiales", "rara", LV(5)),
  I("glasses", "heart", "Gafas de coraz\xF3n", "rara", ADS(2)),
  I("glasses", "star", "Gafas de estrella", "\xE9pica", COINS(350), ["popular"]),
  I("glasses", "pixel", "Gafas pixeladas", "\xE9pica", DAILY),
  I("glasses", "visor", "Visor cibern\xE9tico", "legendaria", LV(16)),
  // camisetas y chaquetas
  I("top", "tshirt", "Camiseta", "com\xFAn", FREE),
  I("top", "hoodie", "Sudadera con capucha", "com\xFAn", FREE),
  I("top", "tank", "Camiseta de tirantes", "com\xFAn", FREE),
  I("top", "jacket", "Chaqueta", "rara", LV(7)),
  I("top", "jersey", "Camiseta deportiva", "rara", LV(11)),
  I("top", "hawaiian", "Camisa hawaiana", "rara", ADS(2), ["new"]),
  I("top", "vest", "Chaleco t\xE1ctico", "\xE9pica", COINS(500)),
  I("top", "puffer", "Plum\xEDfero", "\xE9pica", COINS(700), ["featured"]),
  I("top", "suit", "Traje elegante", "\xE9pica", LV(15)),
  I("top", "astro", "Traje espacial", "legendaria", LV(30)),
  // pantalones
  I("pants", "jeans", "Vaqueros", "com\xFAn", FREE),
  I("pants", "shorts", "Pantal\xF3n corto", "com\xFAn", FREE),
  I("pants", "joggers", "Ch\xE1ndal", "com\xFAn", FREE),
  I("pants", "cargo", "Pantal\xF3n cargo", "rara", LV(9)),
  I("pants", "skirt", "Falda", "rara", COINS(250)),
  I("pants", "suit", "Pantal\xF3n de traje", "\xE9pica", LV(15)),
  I("pants", "astro", "Pantal\xF3n espacial", "legendaria", LV(30)),
  // mochilas
  I("backpack", "classic", "Mochila cl\xE1sica", "com\xFAn", FREE),
  I("backpack", "explorer", "Mochila exclusiva de explorador", "\xE9pica", LV(10)),
  I("backpack", "guitar", "Guitarra", "\xE9pica", COINS(600), ["popular"]),
  I("backpack", "turtle", "Caparaz\xF3n de tortuga", "\xE9pica", ADS(3)),
  I("backpack", "jetpack", "Mochila cohete", "legendaria", COINS(900), ["featured", "new"]),
  I("backpack", "wings", "Alas de \xE1ngel", "legendaria", LV(20)),
  // especiales
  I("special", "scarf", "Bufanda", "com\xFAn", FREE),
  I("special", "headphones", "Cascos de m\xFAsica", "rara", COINS(350)),
  I("special", "chain", "Medall\xF3n dorado", "rara", ADS(2)),
  I("special", "cape", "Capa de h\xE9roe", "\xE9pica", LV(14)),
  I("special", "halo", "Aureola", "legendaria", LV(28))
];
var ITEM_BY_ID = Object.fromEntries(ITEMS.map((i) => [i.id, i]));
var DEFAULT_OUTFIT = {
  hair: "hair-short",
  face: "face-happy",
  hat: null,
  mask: null,
  glasses: null,
  top: "top-tshirt",
  pants: "pants-jeans",
  backpack: null,
  special: null,
  skin: "#f2c09a",
  hairColor: "#4a2e1c",
  topColor: "#e8473f",
  pantsColor: "#2f4a7a"
};
var PRESETS = [
  { name: "Rocco", outfit: { ...DEFAULT_OUTFIT, hat: "hat-beanie", topColor: "#e8473f" } },
  { name: "Luna", outfit: { ...DEFAULT_OUTFIT, hair: "hair-ponytail", hairColor: "#c77dff", top: "top-hoodie", topColor: "#8a5cf5", pantsColor: "#30343f", skin: "#ffdbc2" } },
  { name: "Kiko", outfit: { ...DEFAULT_OUTFIT, hair: "hair-spiky", hairColor: "#1c1c1c", top: "top-tank", topColor: "#5ad67d", pants: "pants-shorts", pantsColor: "#6b4f2e", backpack: "backpack-classic", skin: "#c98d63" } },
  { name: "Nara", outfit: { ...DEFAULT_OUTFIT, hair: "hair-long", hairColor: "#1c1c1c", hat: "hat-helmet", topColor: "#ff8f3f", pants: "pants-joggers", pantsColor: "#30343f", skin: "#7a4b31", face: "face-determined" } },
  { name: "Mara", outfit: { ...DEFAULT_OUTFIT, hair: "hair-long", hairColor: "#d6334a", mask: "mask-bandit", top: "top-hoodie", topColor: "#2fb8c4", pantsColor: "#f2e6c9", special: "special-scarf", skin: "#e0a878" } },
  { name: "Bolt", outfit: { ...DEFAULT_OUTFIT, hair: "hair-buzz", hairColor: "#e8e8e8", glasses: "glasses-goggles", topColor: "#ffd23f", pants: "pants-joggers", pantsColor: "#1c1c1c", skin: "#a26a45", face: "face-determined" } }
];
var COLOR_RE = /^#[0-9a-f]{6}$/i;
function ownsItem(id, level, owned) {
  const it = ITEM_BY_ID[id];
  if (!it) return false;
  if (it.unlock.type === "free") return true;
  if (it.unlock.type === "level") return level >= it.unlock.level;
  return Array.isArray(owned) ? owned.includes(id) : !!(owned && owned.has && owned.has(id));
}
function sanitizeOutfit(o, level = null, owned = null) {
  const out = { ...DEFAULT_OUTFIT };
  if (!o || typeof o !== "object") return out;
  for (const s of SLOTS) {
    const v = o[s.id];
    if (v === null && !s.required) {
      out[s.id] = null;
      continue;
    }
    const it = ITEM_BY_ID[v];
    if (!it || it.slot !== s.id) continue;
    if (level !== null && !ownsItem(v, level, owned)) continue;
    out[s.id] = v;
  }
  for (const c of COLOR_SLOTS) if (typeof o[c.id] === "string" && COLOR_RE.test(o[c.id]) && c.palette.includes(o[c.id].toLowerCase())) out[c.id] = o[c.id].toLowerCase();
  return out;
}
function randomOutfit(rnd = Math.random) {
  const pick = (a) => a[Math.floor(rnd() * a.length)];
  const o = { ...DEFAULT_OUTFIT };
  for (const s of SLOTS) {
    const opts = ITEMS.filter((i) => i.slot === s.id);
    o[s.id] = !s.required && rnd() < 0.55 ? null : pick(opts).id;
  }
  if (o.mask && o.glasses && rnd() < 0.7) o.glasses = null;
  for (const c of COLOR_SLOTS) o[c.id] = pick(c.palette);
  return o;
}
function levelReward(level) {
  return {
    level,
    coins: 50 + level * 10 + (level % 5 === 0 ? 150 : 0),
    items: ITEMS.filter((i) => i.unlock.type === "level" && i.unlock.level === level).map((i) => i.id)
  };
}
function matchCoins({ kills, won, placement }) {
  return 10 + kills * 5 + (won ? 100 : placement <= 5 ? 25 : 0);
}
var MISSIONS = [
  { id: "play3", text: "Juega 3 partidas", stat: "matches", goal: 3, coins: 80, xp: 150 },
  { id: "kills5", text: "Consigue 5 eliminaciones", stat: "kills", goal: 5, coins: 100, xp: 200 },
  { id: "survive10", text: "Sobrevive 10 minutos en total", stat: "survived", goal: 600, coins: 90, xp: 150 },
  { id: "weapons10", text: "Recoge 10 armas", stat: "weapons", goal: 10, coins: 70, xp: 120 },
  { id: "win1", text: "Consigue una victoria", stat: "wins", goal: 1, coins: 150, xp: 300 },
  { id: "damage800", text: "Inflige 800 puntos de da\xF1o", stat: "damage", goal: 800, coins: 90, xp: 160 },
  { id: "top5x2", text: "Queda 2 veces entre los 5 mejores", stat: "top5", goal: 2, coins: 100, xp: 180 }
];
function dayKey(d = /* @__PURE__ */ new Date()) {
  return d.toLocaleDateString("sv-SE", { timeZone: "Europe/Madrid" });
}
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function missionsForDay(day, profileId) {
  const ids = MISSIONS.map((m) => m.id).sort((a, b) => hash(day + profileId + a) - hash(day + profileId + b));
  return ids.slice(0, 3);
}
var DAILY_REWARDS = [
  { coins: 50 },
  { coins: 60, xp: 100 },
  { coins: 100 },
  { item: "glasses-pixel", coins: 50 },
  { coins: 150 },
  { coins: 100, xp: 250 },
  { item: "hat-party", coins: 200 }
];
var DAILY_ITEM_FALLBACK = "face-sleepy";
var AD_COINS = 40;
var AD_COINS_PER_DAY = 5;
var AD_ITEMS_PER_DAY = 10;
var COIN_PACKS = [
  { id: "pack-s", coins: 500, price: 199, label: "500 monedas" },
  { id: "pack-m", coins: 1300, price: 499, label: "1.300 monedas", bonus: "+30 %" },
  { id: "pack-l", coins: 2800, price: 999, label: "2.800 monedas", bonus: "+40 %" }
];

// server/log.js
function log(...args) {
  const t = (/* @__PURE__ */ new Date()).toLocaleTimeString("es-ES", { hour12: false });
  console.log(`[${t}]`, ...args);
}

// server/profiles.js
var MIN_AD_MS = 5e3;
var AD_TOKEN_TTL = 10 * 60 * 1e3;
var START_COINS = 150;
var ProfileStore = class _ProfileStore {
  constructor(dir) {
    this.dir = dir;
    this.file = path.join(dir, "profiles.json");
    this.data = {};
    this.saveTimer = null;
    this.adTokens = /* @__PURE__ */ new Map();
    this.pendingDouble = /* @__PURE__ */ new Map();
    try {
      fs.mkdirSync(dir, { recursive: true });
      if (fs.existsSync(this.file)) this.data = JSON.parse(fs.readFileSync(this.file, "utf8")) || {};
      log(`Perfiles cargados: ${Object.keys(this.data).length}`);
      this.secret = process.env.PROFILE_SECRET || this._localSecret();
    } catch (e) {
      this.secret = process.env.PROFILE_SECRET || crypto.randomBytes(32).toString("hex");
      log("No se pudieron leer los perfiles, se crea un archivo nuevo:", e.message);
      try {
        fs.copyFileSync(this.file, this.file + ".corrupto");
      } catch {
      }
      this.data = {};
    }
    for (const p of Object.values(this.data)) this._migrate(p);
  }
  _localSecret() {
    const f = path.join(this.dir, "secret.key");
    try {
      return fs.readFileSync(f, "utf8").trim();
    } catch {
    }
    const k = crypto.randomBytes(32).toString("hex");
    try {
      fs.writeFileSync(f, k);
    } catch {
    }
    return k;
  }
  // ------------------------------------------------------------------ copia firmada del progreso
  sign(p) {
    const keys = [
      "id",
      "name",
      "xp",
      "matches",
      "wins",
      "kills",
      "deaths",
      "damage",
      "top5",
      "timePlayed",
      "bestKills",
      "byMode",
      "created",
      "coins",
      "owned",
      "outfit",
      "daily",
      "ads",
      "rev",
      "purchases"
    ];
    const obj = {};
    for (const k of keys) obj[k] = p[k];
    const body = Buffer.from(JSON.stringify(obj)).toString("base64url");
    const mac = crypto.createHmac("sha256", this.secret).update(body).digest("base64url");
    return body + "." + mac;
  }
  restore(token) {
    if (typeof token !== "string" || token.length > 2e4) return null;
    const [body, mac] = token.split(".");
    if (!body || !mac) return null;
    const expect = crypto.createHmac("sha256", this.secret).update(body).digest("base64url");
    if (mac.length !== expect.length || !crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expect))) return null;
    let d;
    try {
      d = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    } catch {
      return null;
    }
    if (!d || typeof d.id !== "string") return null;
    const cur = this.data[d.id];
    if (cur && ((cur.rev || 0) >= (d.rev || 0) || cur.xp > d.xp)) return cur;
    const base = this._blank(d.name, d.id);
    const p = { ...base, ...d, name: _ProfileStore.sanitizeName(d.name), byMode: { ...base.byMode, ...d.byMode || {} }, lastSeen: Date.now() };
    this._migrate(p);
    this.data[d.id] = p;
    this.save();
    return p;
  }
  static sanitizeName(name) {
    let n = String(name || "").replace(/[^\p{L}\p{N}_\- ]/gu, "").trim().slice(0, 16);
    if (n.length < 2) n = "Jugador" + Math.floor(Math.random() * 9e3 + 1e3);
    return n;
  }
  create(name) {
    const p = this._blank(name, crypto.randomUUID());
    this.data[p.id] = p;
    this.save();
    return p;
  }
  _blank(name, id) {
    const preset = PRESETS[Math.floor(Math.random() * PRESETS.length)];
    return {
      id,
      name: _ProfileStore.sanitizeName(name),
      xp: 0,
      matches: 0,
      wins: 0,
      kills: 0,
      deaths: 0,
      damage: 0,
      top5: 0,
      timePlayed: 0,
      bestKills: 0,
      byMode: { solo: { matches: 0, wins: 0, kills: 0 }, duos: { matches: 0, wins: 0, kills: 0 }, squads: { matches: 0, wins: 0, kills: 0 } },
      created: Date.now(),
      lastSeen: Date.now(),
      coins: START_COINS,
      owned: [],
      outfit: { ...preset.outfit },
      missions: null,
      daily: { last: null, streak: 0 },
      ads: { day: null, coins: 0, items: 0, progress: {} },
      rev: 0,
      purchases: []
    };
  }
  // Perfiles antiguos (antes de la personalización) reciben los campos nuevos
  _migrate(p) {
    if (typeof p.coins !== "number") p.coins = START_COINS;
    if (!Array.isArray(p.owned)) p.owned = [];
    if (!p.outfit) {
      const old = CHARACTERS.find((c) => c.id === p.character);
      const preset = old && PRESETS.find((x) => x.name === old.name);
      p.outfit = { ...preset ? preset.outfit : DEFAULT_OUTFIT };
    }
    if (!p.daily) p.daily = { last: null, streak: 0 };
    if (!p.ads) p.ads = { day: null, coins: 0, items: 0, progress: {} };
    if (!Array.isArray(p.purchases)) p.purchases = [];
    if (typeof p.rev !== "number") p.rev = 0;
    p.owned = p.owned.filter((id) => ITEM_BY_ID[id]);
  }
  get(id) {
    return typeof id === "string" ? this.data[id] || null : null;
  }
  getOrCreate(id, name) {
    let p = this.get(id);
    if (!p) p = this.create(name);
    p.lastSeen = Date.now();
    return p;
  }
  touch(p) {
    p.rev = (p.rev || 0) + 1;
    this.save();
  }
  level(p) {
    return levelFromXp(p.xp).level;
  }
  setName(id, name) {
    const p = this.get(id);
    if (p) {
      p.name = _ProfileStore.sanitizeName(name);
      this.touch(p);
    }
    return p;
  }
  // Traje que se usa en las partidas (solo piezas desbloqueadas)
  outfitFor(p) {
    return sanitizeOutfit(p.outfit, this.level(p), p.owned);
  }
  // ------------------------------------------------------------------ vista pública (lo que recibe el cliente)
  publicView(p) {
    const lv = levelFromXp(p.xp);
    this._ensureMissions(p);
    this._ensureAdDay(p);
    const today = dayKey();
    return {
      id: p.id,
      name: p.name,
      xp: p.xp,
      level: lv.level,
      levelXp: lv.into,
      levelNeed: lv.need,
      matches: p.matches,
      wins: p.wins,
      kills: p.kills,
      deaths: p.deaths,
      damage: p.damage,
      top5: p.top5,
      timePlayed: Math.round(p.timePlayed),
      bestKills: p.bestKills,
      byMode: p.byMode,
      coins: p.coins,
      owned: p.owned,
      outfit: this.outfitFor(p),
      missions: { day: p.missions.day, list: p.missions.list.map((m) => ({ ...m, ...MISSIONS.find((x) => x.id === m.id) })) },
      daily: { claimedToday: p.daily.last === today, streak: p.daily.streak, nextIndex: this._dailyIndex(p) },
      ads: { coinsLeft: Math.max(0, AD_COINS_PER_DAY - p.ads.coins), itemsLeft: Math.max(0, AD_ITEMS_PER_DAY - p.ads.items), progress: p.ads.progress },
      token: this.sign(p)
    };
  }
  // ------------------------------------------------------------------ experiencia y niveles
  _addXp(p, amount) {
    const before = this.level(p);
    p.xp += Math.max(0, Math.round(amount));
    const after = this.level(p);
    const rewards = [];
    for (let l = before + 1; l <= after; l++) {
      const r = levelReward(l);
      p.coins += r.coins;
      rewards.push({ level: l, coins: r.coins, items: r.items });
    }
    return rewards;
  }
  // ------------------------------------------------------------------ resultado de una partida
  recordMatch(id, r) {
    const p = this.get(id);
    if (!p) return null;
    const before = this.level(p);
    const breakdown = [];
    breakdown.push(["Partida jugada", XP_RULES.perMatch]);
    if (r.kills) breakdown.push([`Eliminaciones (${r.kills})`, r.kills * XP_RULES.perKill]);
    const surv = Math.round(r.survived * XP_RULES.perSecondAlive);
    if (surv) breakdown.push(["Tiempo de supervivencia", surv]);
    if (r.won) breakdown.push(["\xA1Victoria!", XP_RULES.win]);
    else if (r.placement <= 5 && !r.abandoned) breakdown.push(["Entre los 5 \xFAltimos supervivientes", XP_RULES.top5]);
    const xp = breakdown.reduce((a, b) => a + b[1], 0);
    p.matches++;
    if (r.won) p.wins++;
    else p.deaths++;
    const top5 = r.won || r.placement <= 5 && !r.abandoned;
    if (top5) p.top5++;
    p.kills += r.kills;
    p.damage += r.damage;
    p.timePlayed += r.survived;
    p.bestKills = Math.max(p.bestKills, r.kills);
    const bm = p.byMode[r.mode] || (p.byMode[r.mode] = { matches: 0, wins: 0, kills: 0 });
    bm.matches++;
    bm.kills += r.kills;
    if (r.won) bm.wins++;
    const coins = r.abandoned ? 0 : matchCoins({ kills: r.kills, won: r.won, placement: r.placement });
    p.coins += coins;
    this._ensureMissions(p);
    const stats = { matches: 1, kills: r.kills, survived: Math.round(r.survived), weapons: r.weapons || 0, wins: r.won ? 1 : 0, damage: r.damage, top5: top5 ? 1 : 0 };
    for (const m of p.missions.list) {
      const def = MISSIONS.find((x) => x.id === m.id);
      if (def && !m.claimed) m.progress = Math.min(def.goal, m.progress + (stats[def.stat] || 0));
    }
    const levelRewards = this._addXp(p, xp);
    if (!r.abandoned) this.pendingDouble.set(p.id, { xp, until: Date.now() + 10 * 60 * 1e3 });
    this.touch(p);
    const after = this.level(p);
    return { xp, coins, breakdown, profile: this.publicView(p), placement: r.won ? 1 : r.placement, survived: r.survived, levelUp: after > before ? after : 0, levelRewards, newChars: [] };
  }
  // ------------------------------------------------------------------ personalización y tienda
  setOutfit(id, outfit) {
    const p = this.get(id);
    if (!p) return { error: "Perfil no encontrado." };
    if (!outfit || typeof outfit !== "object") return { error: "Traje no v\xE1lido." };
    const level = this.level(p);
    for (const s of SLOTS) {
      const v = outfit[s.id];
      if (v === null || v === void 0) {
        if (s.required) return { error: "Falta una pieza obligatoria." };
        continue;
      }
      const it = ITEM_BY_ID[v];
      if (!it || it.slot !== s.id) return { error: "Pieza no v\xE1lida." };
      if (!ownsItem(v, level, p.owned)) return { error: `A\xFAn no tienes \xAB${it.name}\xBB.` };
    }
    p.outfit = sanitizeOutfit(outfit, level, p.owned);
    this.touch(p);
    return { ok: true };
  }
  buyItem(id, itemId) {
    const p = this.get(id);
    const it = ITEM_BY_ID[itemId];
    if (!p || !it) return { error: "Objeto no encontrado." };
    if (ownsItem(itemId, this.level(p), p.owned)) return { error: "Ya tienes este objeto." };
    if (it.unlock.type !== "coins") return { error: "Este objeto no se vende con monedas." };
    if (p.coins < it.unlock.price) return { error: `Te faltan ${it.unlock.price - p.coins} monedas.` };
    p.coins -= it.unlock.price;
    p.owned.push(itemId);
    this.touch(p);
    return { ok: true, reward: { title: `\xA1Has conseguido \xAB${it.name}\xBB!`, items: [itemId] } };
  }
  // ------------------------------------------------------------------ misiones diarias
  _ensureMissions(p) {
    const day = dayKey();
    if (!p.missions || p.missions.day !== day) p.missions = { day, list: missionsForDay(day, p.id).map((mid) => ({ id: mid, progress: 0, claimed: false })) };
  }
  claimMission(id, missionId) {
    const p = this.get(id);
    if (!p) return { error: "Perfil no encontrado." };
    this._ensureMissions(p);
    const m = p.missions.list.find((x) => x.id === missionId);
    const def = MISSIONS.find((x) => x.id === missionId);
    if (!m || !def) return { error: "Misi\xF3n no encontrada." };
    if (m.claimed) return { error: "Ya has cobrado esta misi\xF3n." };
    if (m.progress < def.goal) return { error: "La misi\xF3n a\xFAn no est\xE1 completada." };
    m.claimed = true;
    p.coins += def.coins;
    const levelRewards = this._addXp(p, def.xp);
    this.touch(p);
    return { ok: true, reward: { title: "Misi\xF3n completada", coins: def.coins, xp: def.xp, levelRewards } };
  }
  // ------------------------------------------------------------------ recompensa diaria
  _dailyIndex(p) {
    const today = dayKey();
    const yesterday = dayKey(new Date(Date.now() - 24 * 3600 * 1e3));
    if (p.daily.last === today) return (p.daily.streak - 1) % DAILY_REWARDS.length;
    const streak = p.daily.last === yesterday ? p.daily.streak + 1 : 1;
    return (streak - 1) % DAILY_REWARDS.length;
  }
  claimDaily(id) {
    const p = this.get(id);
    if (!p) return { error: "Perfil no encontrado." };
    const today = dayKey();
    if (p.daily.last === today) return { error: "Ya has recogido la recompensa de hoy. \xA1Vuelve ma\xF1ana!" };
    const yesterday = dayKey(new Date(Date.now() - 24 * 3600 * 1e3));
    p.daily.streak = p.daily.last === yesterday ? p.daily.streak + 1 : 1;
    p.daily.last = today;
    const r = DAILY_REWARDS[(p.daily.streak - 1) % DAILY_REWARDS.length];
    let coins = r.coins || 0;
    const items = [];
    if (r.item) {
      let item = r.item;
      if (p.owned.includes(item)) item = p.owned.includes(DAILY_ITEM_FALLBACK) ? null : DAILY_ITEM_FALLBACK;
      if (item) {
        p.owned.push(item);
        items.push(item);
      } else coins += 100;
    }
    p.coins += coins;
    const levelRewards = r.xp ? this._addXp(p, r.xp) : [];
    this.touch(p);
    return { ok: true, reward: { title: `Recompensa diaria \xB7 d\xEDa ${(p.daily.streak - 1) % 7 + 1}`, coins, xp: r.xp || 0, items, levelRewards } };
  }
  // ------------------------------------------------------------------ anuncios con recompensa
  _ensureAdDay(p) {
    const day = dayKey();
    if (p.ads.day !== day) {
      p.ads.day = day;
      p.ads.coins = 0;
      p.ads.items = 0;
    }
  }
  // El servidor entrega un vale de un solo uso antes de mostrar el anuncio.
  startAd(id, kind, itemId) {
    const p = this.get(id);
    if (!p) return { error: "Perfil no encontrado." };
    this._ensureAdDay(p);
    if (kind === "coins") {
      if (p.ads.coins >= AD_COINS_PER_DAY) return { error: "Has llegado al l\xEDmite de monedas por anuncios de hoy." };
    } else if (kind === "item") {
      const it = ITEM_BY_ID[itemId];
      if (!it || it.unlock.type !== "ads") return { error: "Este objeto no se consigue con anuncios." };
      if (p.owned.includes(itemId)) return { error: "Ya tienes este objeto." };
      if (p.ads.items >= AD_ITEMS_PER_DAY) return { error: "Has llegado al l\xEDmite de anuncios de hoy." };
    } else if (kind === "doublexp") {
      const pend = this.pendingDouble.get(p.id);
      if (!pend || pend.until < Date.now()) return { error: "Ya no hay experiencia que duplicar." };
    } else return { error: "Tipo de recompensa desconocido." };
    for (const [k, v] of this.adTokens) if (Date.now() - v.t0 > AD_TOKEN_TTL) this.adTokens.delete(k);
    for (const [k, v] of this.adTokens) if (v.pid === p.id) this.adTokens.delete(k);
    const token = crypto.randomBytes(16).toString("hex");
    this.adTokens.set(token, { pid: p.id, kind, itemId: kind === "item" ? itemId : null, t0: Date.now() });
    return { ok: true, token };
  }
  // Se llama cuando el SDK de anuncios confirma que el anuncio se vio completo (adViewed).
  finishAd(id, token) {
    const v = this.adTokens.get(token);
    if (!v || v.pid !== id) return { error: "Vale de anuncio no v\xE1lido o caducado." };
    this.adTokens.delete(token);
    if (Date.now() - v.t0 < MIN_AD_MS) return { error: "El anuncio no se complet\xF3." };
    const p = this.get(id);
    if (!p) return { error: "Perfil no encontrado." };
    this._ensureAdDay(p);
    if (v.kind === "coins") {
      if (p.ads.coins >= AD_COINS_PER_DAY) return { error: "L\xEDmite diario alcanzado." };
      p.ads.coins++;
      p.coins += AD_COINS;
      this.touch(p);
      return { ok: true, reward: { title: "Gracias por ver el anuncio", coins: AD_COINS } };
    }
    if (v.kind === "item") {
      const it = ITEM_BY_ID[v.itemId];
      if (!it || p.owned.includes(v.itemId)) return { error: "Ya tienes este objeto." };
      p.ads.items++;
      p.ads.progress[v.itemId] = (p.ads.progress[v.itemId] || 0) + 1;
      const done = p.ads.progress[v.itemId] >= it.unlock.ads;
      if (done) {
        p.owned.push(v.itemId);
        delete p.ads.progress[v.itemId];
      }
      this.touch(p);
      return { ok: true, reward: done ? { title: `\xA1Has desbloqueado \xAB${it.name}\xBB!`, items: [v.itemId] } : { title: `Anuncio ${p.ads.progress[v.itemId]}/${it.unlock.ads} para \xAB${it.name}\xBB` } };
    }
    if (v.kind === "doublexp") {
      const pend = this.pendingDouble.get(p.id);
      if (!pend || pend.until < Date.now()) return { error: "Ya no hay experiencia que duplicar." };
      this.pendingDouble.delete(p.id);
      const levelRewards = this._addXp(p, pend.xp);
      this.touch(p);
      return { ok: true, bonus: pend.xp, reward: { title: "Experiencia duplicada", xp: pend.xp, levelRewards } };
    }
    return { error: "Recompensa desconocida." };
  }
  // ------------------------------------------------------------------ compras con dinero real (las confirma Stripe)
  creditPurchase(profileId, packId, sessionId) {
    const p = this.get(profileId);
    const pack = COIN_PACKS.find((x) => x.id === packId);
    if (!p || !pack) return null;
    if (p.purchases.includes(sessionId)) return null;
    p.purchases.push(sessionId);
    p.coins += pack.coins;
    this.touch(p);
    this.flush();
    log(`Compra acreditada: ${p.name} +${pack.coins} monedas (${sessionId})`);
    return { profile: this.publicView(p), coins: pack.coins };
  }
  save() {
    if (this.saveTimer) return;
    this.saveTimer = setTimeout(() => {
      this.saveTimer = null;
      this.flush();
    }, 800);
  }
  flush() {
    try {
      const tmp = this.file + ".tmp";
      fs.writeFileSync(tmp, JSON.stringify(this.data, null, 1));
      fs.renameSync(tmp, this.file);
    } catch (e) {
      log("Error guardando perfiles:", e.message);
    }
  }
};

// server/matchmaker.js
import crypto2 from "crypto";

// shared/rng.js
function makeRng(seed) {
  let a = seed >>> 0;
  const next2 = () => {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
  return {
    next: next2,
    range: (min, max) => min + (max - min) * next2(),
    int: (min, max) => Math.floor(min + (max - min + 1) * next2()),
    pick: (arr) => arr[Math.floor(next2() * arr.length)],
    chance: (p) => next2() < p
  };
}

// shared/physics.js
var CELL = 8;
function buildCollision(map) {
  const n = Math.ceil((map.size + 8) / CELL) + 1;
  const off = 4;
  const grid = new Array(n * n);
  for (let i = 0; i < grid.length; i++) grid[i] = [];
  const add = (obj, minx, miny, maxx, maxy) => {
    const cx0 = Math.max(0, Math.floor((minx + off) / CELL)), cy0 = Math.max(0, Math.floor((miny + off) / CELL));
    const cx1 = Math.min(n - 1, Math.floor((maxx + off) / CELL)), cy1 = Math.min(n - 1, Math.floor((maxy + off) / CELL));
    for (let cy = cy0; cy <= cy1; cy++) for (let cx = cx0; cx <= cx1; cx++) grid[cy * n + cx].push(obj);
  };
  let uid = 0;
  for (const w of map.walls) {
    const o = { t: "box", x: w.x, y: w.y, w: w.w, h: w.h, id: uid++, ref: w };
    add(o, w.x, w.y, w.x + w.w, w.y + w.h);
  }
  for (const c of map.circles) {
    const o = { t: "circle", x: c.x, y: c.y, r: c.r, id: uid++, ref: c };
    add(o, c.x - c.r, c.y - c.r, c.x + c.r, c.y + c.r);
  }
  for (const c of map.crates) {
    const o = { t: "box", x: c.x, y: c.y, w: c.w, h: c.h, id: uid++, ref: c, crate: c };
    add(o, c.x, c.y, c.x + c.w, c.y + c.h);
  }
  map._col = { grid, n, off, stamp: 0, marks: new Int32Array(uid + 1) };
}
function queryBox(map, minx, miny, maxx, maxy, out = []) {
  const col = map._col;
  out.length = 0;
  col.stamp++;
  const cx0 = Math.max(0, Math.floor((minx + col.off) / CELL)), cy0 = Math.max(0, Math.floor((miny + col.off) / CELL));
  const cx1 = Math.min(col.n - 1, Math.floor((maxx + col.off) / CELL)), cy1 = Math.min(col.n - 1, Math.floor((maxy + col.off) / CELL));
  for (let cy = cy0; cy <= cy1; cy++) for (let cx = cx0; cx <= cx1; cx++) {
    for (const o of col.grid[cy * col.n + cx]) {
      if (col.marks[o.id] === col.stamp) continue;
      col.marks[o.id] = col.stamp;
      if (o.crate && !o.crate.alive) continue;
      out.push(o);
    }
  }
  return out;
}
var _tmp = [];
function resolveCircle(map, p, r) {
  let hit = false;
  for (let iter = 0; iter < 3; iter++) {
    const list = queryBox(map, p.x - r, p.y - r, p.x + r, p.y + r, _tmp);
    let moved = false;
    for (const o of list) {
      if (o.t === "box") {
        const nx = Math.max(o.x, Math.min(p.x, o.x + o.w));
        const ny = Math.max(o.y, Math.min(p.y, o.y + o.h));
        let dx = p.x - nx, dy = p.y - ny;
        const d2 = dx * dx + dy * dy;
        if (d2 < r * r) {
          if (d2 > 1e-9) {
            const d = Math.sqrt(d2);
            p.x = nx + dx / d * r;
            p.y = ny + dy / d * r;
          } else {
            const l = p.x - o.x, rr = o.x + o.w - p.x, t = p.y - o.y, b = o.y + o.h - p.y;
            const m = Math.min(l, rr, t, b);
            if (m === l) p.x = o.x - r;
            else if (m === rr) p.x = o.x + o.w + r;
            else if (m === t) p.y = o.y - r;
            else p.y = o.y + o.h + r;
          }
          hit = moved = true;
        }
      } else {
        const dx = p.x - o.x, dy = p.y - o.y, rr = o.r + r;
        const d2 = dx * dx + dy * dy;
        if (d2 < rr * rr) {
          const d = Math.sqrt(d2) || 1e-4;
          p.x = o.x + dx / d * rr;
          p.y = o.y + dy / d * rr;
          hit = moved = true;
        }
      }
    }
    if (!moved) break;
  }
  return hit;
}
function moveCircle(map, p, dx, dy, r) {
  const dist = Math.hypot(dx, dy);
  const steps = Math.max(1, Math.ceil(dist / (r * 0.8)));
  let hit = false;
  for (let i = 0; i < steps; i++) {
    p.x += dx / steps;
    p.y += dy / steps;
    if (resolveCircle(map, p, r)) hit = true;
  }
  return hit;
}
function circleBlocked(map, x, y, r) {
  const list = queryBox(map, x - r, y - r, x + r, y + r, _tmp);
  for (const o of list) {
    if (o.t === "box") {
      const nx = Math.max(o.x, Math.min(x, o.x + o.w)), ny = Math.max(o.y, Math.min(y, o.y + o.h));
      if ((x - nx) ** 2 + (y - ny) ** 2 < r * r) return true;
    } else if ((x - o.x) ** 2 + (y - o.y) ** 2 < (o.r + r) ** 2) return true;
  }
  return false;
}
function segBox(x0, y0, dx, dy, o) {
  let tmin = 0, tmax = 1;
  if (Math.abs(dx) < 1e-9) {
    if (x0 < o.x || x0 > o.x + o.w) return Infinity;
  } else {
    let t1 = (o.x - x0) / dx, t2 = (o.x + o.w - x0) / dx;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return Infinity;
  }
  if (Math.abs(dy) < 1e-9) {
    if (y0 < o.y || y0 > o.y + o.h) return Infinity;
  } else {
    let t1 = (o.y - y0) / dy, t2 = (o.y + o.h - y0) / dy;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    if (tmin > tmax) return Infinity;
  }
  return tmin;
}
function segCircle(x0, y0, dx, dy, cx, cy, r) {
  const fx = x0 - cx, fy = y0 - cy;
  const a = dx * dx + dy * dy;
  if (a < 1e-12) return Infinity;
  const b = 2 * (fx * dx + fy * dy);
  const c = fx * fx + fy * fy - r * r;
  if (c <= 0) return 0;
  const disc = b * b - 4 * a * c;
  if (disc < 0) return Infinity;
  const s = Math.sqrt(disc);
  const t = (-b - s) / (2 * a);
  if (t >= 0 && t <= 1) return t;
  return Infinity;
}
function raycast(map, x0, y0, x1, y1, ignoreCrates = false) {
  const col = map._col;
  const dx = x1 - x0, dy = y1 - y0;
  col.stamp++;
  let best = Infinity, bestObj = null;
  let cx = Math.floor((x0 + col.off) / CELL), cy = Math.floor((y0 + col.off) / CELL);
  const ex = Math.floor((x1 + col.off) / CELL), ey = Math.floor((y1 + col.off) / CELL);
  const stepX = dx > 0 ? 1 : -1, stepY = dy > 0 ? 1 : -1;
  const tDeltaX = dx !== 0 ? Math.abs(CELL / dx) : Infinity;
  const tDeltaY = dy !== 0 ? Math.abs(CELL / dy) : Infinity;
  const gx = x0 + col.off, gy = y0 + col.off;
  let tMaxX = dx !== 0 ? (dx > 0 ? (cx + 1) * CELL - gx : gx - cx * CELL) / Math.abs(dx) : Infinity;
  let tMaxY = dy !== 0 ? (dy > 0 ? (cy + 1) * CELL - gy : gy - cy * CELL) / Math.abs(dy) : Infinity;
  let guard = 0;
  while (guard++ < 400) {
    if (cx >= 0 && cy >= 0 && cx < col.n && cy < col.n) {
      for (const o of col.grid[cy * col.n + cx]) {
        if (col.marks[o.id] === col.stamp) continue;
        col.marks[o.id] = col.stamp;
        if (o.crate && (!o.crate.alive || ignoreCrates)) continue;
        const t = o.t === "box" ? segBox(x0, y0, dx, dy, o) : segCircle(x0, y0, dx, dy, o.x, o.y, o.r);
        if (t < best) {
          best = t;
          bestObj = o;
        }
      }
    }
    const tNext = Math.min(tMaxX, tMaxY);
    if (best <= tNext || tNext > 1) break;
    if (cx === ex && cy === ey) break;
    if (tMaxX < tMaxY) {
      tMaxX += tDeltaX;
      cx += stepX;
    } else {
      tMaxY += tDeltaY;
      cy += stepY;
    }
  }
  return best <= 1 ? { t: best, obj: bestObj } : null;
}

// shared/map.js
var MAP_SEED = 20261124;
var HOUSE_COLORS = ["#f6e7c8", "#ffd6a5", "#cde7f0", "#f7c6c7", "#e2f0cb", "#fff1b5", "#d9d2f5"];
var ROOF_COLORS = ["#d9534f", "#3f7fbf", "#e07b39", "#6b8e23", "#8e5b9e", "#c0392b", "#2c8c8c"];
function generateMap(seed = MAP_SEED) {
  const rng = makeRng(seed);
  const S = MAP_SIZE;
  const map = {
    size: S,
    seed,
    walls: [],
    circles: [],
    buildings: [],
    roads: [],
    crates: [],
    lootSpots: [],
    bushes: [],
    areas: [],
    pois: [],
    props: [],
    fences: []
  };
  const occupied = [];
  const overlaps = (x, y, w, h, margin = 0) => {
    for (const o of occupied) {
      if (x - margin < o.x + o.w && x + w + margin > o.x && y - margin < o.y + o.h && y + h + margin > o.y) return true;
    }
    return false;
  };
  const occupy = (x, y, w, h) => occupied.push({ x, y, w, h });
  const onRoad = (x, y, m = 1) => map.roads.some((r) => x > r.x - m && x < r.x + r.w + m && y > r.y - m && y < r.y + r.h + m);
  const road = (x, y, w, h) => {
    map.roads.push({ x, y, w, h });
  };
  road(8, 156, S - 16, 8);
  road(156, 8, 8, S - 16);
  road(20, 74, 126, 6);
  road(20, 110, 126, 6);
  road(74, 20, 6, 136);
  road(110, 20, 6, 136);
  road(164, 236, 140, 6);
  road(232, 164, 6, 140);
  road(100, 164, 6, 80);
  for (const r of map.roads) occupy(r.x, r.y, r.w, r.h);
  map.areas.push({ x: 16, y: 16, w: 134, h: 134, color: "#cfe3a8", name: "town" });
  map.areas.push({ x: 186, y: 186, w: 122, h: 122, color: "#b9bec4", name: "industrial" });
  map.areas.push({ x: 112, y: 214, w: 74, h: 92, color: "#c9c2b0", name: "warehouses" });
  map.areas.push({ x: 16, y: 186, w: 82, h: 120, color: "#d9c48f", name: "farm" });
  map.areas.push({ x: 186, y: 14, w: 122, h: 136, color: "#7fbf6a", name: "forest" });
  map.areas.push({ x: 140, y: 140, w: 40, h: 40, color: "#d0d0c8", name: "station" });
  function addBuilding(x, y, w, h, opts = {}) {
    const t = opts.t ?? 0.5;
    const height = opts.height ?? 3.4;
    const doors = opts.doors ?? ["s"];
    const dw = opts.doorWidth ?? 2.6;
    const wallColor = opts.wallColor ?? rng.pick(HOUSE_COLORS);
    const roofColor = opts.roofColor ?? rng.pick(ROOF_COLORS);
    const b = { x, y, w, h, height, wallColor, roofColor, kind: opts.kind ?? "house", roof: opts.roof ?? "gable", doors, windows: opts.windows ?? true };
    map.buildings.push(b);
    const wall = (wx, wy, ww, wh) => map.walls.push({ x: wx, y: wy, w: ww, h: wh, height, color: wallColor, kind: "wall", building: map.buildings.length - 1 });
    const side = (dir) => {
      const hasDoor = doors.includes(dir);
      if (dir === "n" || dir === "s") {
        const wy = dir === "n" ? y : y + h - t;
        if (!hasDoor) wall(x, wy, w, t);
        else {
          const cx = x + w / 2;
          wall(x, wy, cx - dw / 2 - x, t);
          wall(cx + dw / 2, wy, x + w - (cx + dw / 2), t);
        }
      } else {
        const wx = dir === "w" ? x : x + w - t;
        if (!hasDoor) wall(wx, y + t, t, h - 2 * t);
        else {
          const cy = y + h / 2;
          wall(wx, y + t, t, cy - dw / 2 - (y + t));
          wall(wx, cy + dw / 2, t, y + h - t - (cy + dw / 2));
        }
      }
    };
    ["n", "s", "w", "e"].forEach(side);
    occupy(x - 1, y - 1, w + 2, h + 2);
    const spots = opts.loot ?? Math.max(1, Math.floor(w * h / 60));
    for (let i = 0; i < spots; i++) {
      map.lootSpots.push({ x: rng.range(x + 1.6, x + w - 1.6), y: rng.range(y + 1.6, y + h - 1.6), tier: opts.tier ?? 1 });
    }
    return b;
  }
  map.pois.push({ name: "Villa Colores", x: 80, y: 80 });
  const cols = [24, 82, 118], rows = [24, 82, 118];
  const townCells = [
    [24, 24],
    [44, 24],
    [82, 24],
    [118, 24],
    [24, 44],
    [44, 44],
    [82, 44],
    [118, 44],
    [24, 82],
    [44, 82],
    [118, 82],
    [24, 118],
    [44, 118],
    [82, 118],
    [118, 118],
    [82, 82]
  ];
  for (const [cx, cy] of townCells) {
    if (cx === 82 && cy === 82) continue;
    const w = rng.int(12, 15), h = rng.int(10, 13);
    const doors = [rng.pick(["s", "n"]), rng.pick(["e", "w"])];
    if (!overlaps(cx, cy, w, h, 0.5)) addBuilding(cx, cy, w, h, { doors, loot: 2 });
  }
  void cols;
  void rows;
  map.circles.push({ x: 92, y: 92, r: 2.6, height: 1.2, kind: "fountain" });
  occupy(88, 88, 8, 8);
  addBuilding(82, 98, 22, 10, { doors: ["n", "s"], height: 5.2, kind: "hall", wallColor: "#f3e3c3", roofColor: "#b03a2e", loot: 3, tier: 2 });
  map.pois.push({ name: "Bosque Pinar", x: 246, y: 80 });
  const cabins = [[205, 40], [262, 30], [240, 110], [282, 92]];
  for (const [x, y] of cabins) addBuilding(x, y, 10, 8, { doors: [rng.pick(["s", "w", "e"])], wallColor: "#a9744f", roofColor: "#5b3a24", kind: "cabin", loot: 2 });
  addBuilding(222, 72, 7, 7, { doors: ["s"], height: 7.5, wallColor: "#8a6240", roofColor: "#4a2f1d", kind: "tower", loot: 2, tier: 3, roof: "flat" });
  map.pois.push({ name: "Pol\xEDgono \xD3xido", x: 256, y: 270 });
  addBuilding(246, 250, 34, 22, { doors: ["n", "w", "s"], height: 7, wallColor: "#9aa5ad", roofColor: "#56616b", kind: "factory", roof: "flat", loot: 5, tier: 2, doorWidth: 3.4 });
  const containerColors = ["#d64545", "#2f7ed8", "#e6a23c", "#3aa76d", "#8e44ad", "#16a085"];
  for (let i = 0; i < 16; i++) {
    for (let tries = 0; tries < 30; tries++) {
      const vertical = rng.chance(0.5);
      const w = vertical ? 2.6 : 6.5, h = vertical ? 6.5 : 2.6;
      const x = rng.range(192, 300 - w), y = rng.range(192, 300 - h);
      if (overlaps(x, y, w, h, 3) || onRoad(x + w / 2, y + h / 2, 4)) continue;
      const stacked = rng.chance(0.35);
      map.walls.push({ x, y, w, h, height: stacked ? 5.2 : 2.6, color: rng.pick(containerColors), kind: "container" });
      occupy(x, y, w, h);
      if (rng.chance(0.5)) map.lootSpots.push({ x: x + w / 2 + (vertical ? 2.2 : 0), y: y + h / 2 + (vertical ? 0 : 2.2), tier: 2 });
      break;
    }
  }
  const tanks = [[205, 215], [215, 290], [290, 215]];
  for (const [x, y] of tanks) {
    map.circles.push({ x, y, r: 4, height: 7, kind: "tank" });
    occupy(x - 4.5, y - 4.5, 9, 9);
  }
  map.pois.push({ name: "Los Almacenes", x: 148, y: 262 });
  addBuilding(116, 220, 28, 16, { doors: ["e", "w", "n"], height: 6, wallColor: "#c8b28a", roofColor: "#7d6a4e", kind: "warehouse", roof: "flat", loot: 5, tier: 2, doorWidth: 3.6 });
  addBuilding(152, 248, 28, 16, { doors: ["e", "w", "s"], height: 6, wallColor: "#b7c4c9", roofColor: "#5f7680", kind: "warehouse", roof: "flat", loot: 5, tier: 2, doorWidth: 3.6 });
  addBuilding(118, 278, 24, 14, { doors: ["n", "e"], height: 6, wallColor: "#d8c3a5", roofColor: "#8c6f4d", kind: "warehouse", roof: "flat", loot: 4, tier: 2, doorWidth: 3.6 });
  for (let i = 0; i < 10; i++) {
    for (let tries = 0; tries < 30; tries++) {
      const x = rng.range(114, 182), y = rng.range(214, 300);
      if (overlaps(x, y, 2.4, 2.4, 2) || onRoad(x, y, 2)) continue;
      map.walls.push({ x, y, w: 2.4, h: 2.4, height: 1.3, color: "#b98b52", kind: "pallet" });
      occupy(x, y, 2.4, 2.4);
      break;
    }
  }
  map.pois.push({ name: "Granja Girasol", x: 56, y: 246 });
  addBuilding(28, 196, 18, 14, { doors: ["s", "e"], height: 5.5, wallColor: "#c0392b", roofColor: "#7b241c", kind: "barn", loot: 3, tier: 1, doorWidth: 3.2 });
  addBuilding(64, 266, 9, 8, { doors: ["n"], wallColor: "#f0e0c0", roofColor: "#6d4c41", kind: "shed", loot: 1 });
  addBuilding(30, 278, 9, 8, { doors: ["e"], wallColor: "#e8d4b0", roofColor: "#6d4c41", kind: "shed", loot: 1 });
  addBuilding(70, 206, 12, 10, { doors: ["w"], loot: 2 });
  const fenceRun = (x0, y0, x1, y1, gaps = []) => {
    const horizontal = y0 === y1;
    const len = horizontal ? x1 - x0 : y1 - y0;
    let s = 0;
    const segs = [];
    const sorted = gaps.slice().sort((a, b) => a - b);
    for (const g of sorted) {
      segs.push([s, g - 1.6]);
      s = g + 1.6;
    }
    segs.push([s, len]);
    for (const [a, b] of segs) {
      if (b - a < 0.5) continue;
      const f = horizontal ? { x: x0 + a, y: y0 - 0.15, w: b - a, h: 0.3 } : { x: x0 - 0.15, y: y0 + a, w: 0.3, h: b - a };
      map.walls.push({ ...f, height: 1.1, color: "#e9dcc0", kind: "fence" });
    }
  };
  fenceRun(22, 226, 92, 226, [20, 52]);
  fenceRun(22, 262, 58, 262, [18]);
  fenceRun(22, 226, 22, 262, [18]);
  fenceRun(92, 226, 92, 300, [14, 50]);
  for (let i = 0; i < 9; i++) {
    const x = rng.range(28, 88), y = rng.range(230, 258);
    if (!overlaps(x - 1.4, y - 1.4, 2.8, 2.8, 1.5)) {
      map.circles.push({ x, y, r: 1.3, height: 1.6, kind: "hay" });
      occupy(x - 1.4, y - 1.4, 2.8, 2.8);
    }
  }
  map.pois.push({ name: "Gasolinera Cruce", x: 172, y: 172 });
  addBuilding(168, 168, 12, 9, { doors: ["n", "w"], wallColor: "#ffffff", roofColor: "#e74c3c", kind: "shop", roof: "flat", loot: 3, tier: 2 });
  for (const [px, py] of [[146, 168], [146, 176], [156, 168]]) {
  }
  map.props.push({ kind: "canopy", x: 166, y: 142, w: 14, h: 10 });
  for (const [px, py] of [[167, 143], [179, 143], [167, 151], [179, 151]]) map.circles.push({ x: px, y: py, r: 0.35, height: 4, kind: "pillar" });
  occupy(166, 142, 14, 10);
  map.walls.push({ x: 171, y: 145.5, w: 1.2, h: 2, height: 1.6, color: "#e74c3c", kind: "pump" });
  map.walls.push({ x: 175, y: 145.5, w: 1.2, h: 2, height: 1.6, color: "#e74c3c", kind: "pump" });
  map.pois.push({ name: "Colina Molino", x: 206, y: 186 });
  const smalls = [[196, 168, 10, 8], [130, 190, 9, 8], [176, 120, 10, 8], [42, 166, 9, 8], [262, 172, 10, 8], [172, 200, 8, 8], [120, 168, 8, 7]];
  for (const [x, y, w, h] of smalls) if (!overlaps(x, y, w, h, 1)) addBuilding(x, y, w, h, { doors: [rng.pick(["n", "s", "e", "w"])], loot: 2, kind: "hut" });
  const ruins = [[140, 60], [60, 150], [290, 150], [150, 300 - 8], [210, 140], [130, 130]];
  for (const [x, y] of ruins) {
    if (overlaps(x - 3, y - 3, 10, 10, 1)) continue;
    map.walls.push({ x, y, w: 6, h: 0.8, height: 1.8, color: "#a3a3a3", kind: "ruin" });
    map.walls.push({ x, y: y + 0.8, w: 0.8, h: 4, height: 1.8, color: "#a3a3a3", kind: "ruin" });
    occupy(x - 0.5, y - 0.5, 7, 6);
    map.lootSpots.push({ x: x + 3, y: y + 3, tier: 1 });
  }
  let crateId = 0;
  const placeCrate = (x, y) => {
    if (overlaps(x - 0.2, y - 0.2, 2, 2, 0.8) || onRoad(x + 0.8, y + 0.8, 0.5)) return false;
    map.crates.push({ id: crateId++, x, y, w: 1.6, h: 1.6, hp: 70, alive: true });
    occupy(x, y, 1.6, 1.6);
    return true;
  };
  for (const b of map.buildings) {
    if (rng.chance(0.55)) {
      for (let t = 0; t < 10; t++) {
        const side = rng.int(0, 3);
        const x = side === 0 ? b.x - 2.6 : side === 1 ? b.x + b.w + 1 : rng.range(b.x, b.x + b.w - 1.6);
        const y = side === 2 ? b.y - 2.6 : side === 3 ? b.y + b.h + 1 : rng.range(b.y, b.y + b.h - 1.6);
        if (placeCrate(x, y)) break;
      }
    }
  }
  for (let i = 0; i < 40; i++) {
    for (let t = 0; t < 20; t++) {
      if (placeCrate(rng.range(14, S - 16), rng.range(14, S - 16))) break;
    }
  }
  const addTree = (x, y, kind) => {
    if (overlaps(x - 1, y - 1, 2, 2, 0.8) || onRoad(x, y, 2)) return false;
    const scale = rng.range(0.85, 1.35);
    map.circles.push({ x, y, r: 0.55 * scale, height: 6, kind, scale, crown: 2.2 * scale });
    occupy(x - 0.8, y - 0.8, 1.6, 1.6);
    return true;
  };
  for (let i = 0; i < 230; i++) addTree(rng.range(188, 306), rng.range(16, 148), "pine");
  for (let i = 0; i < 160; i++) addTree(rng.range(10, S - 10), rng.range(10, S - 10), rng.chance(0.5) ? "tree" : "pine");
  for (let i = 0; i < 70; i++) {
    const x = rng.range(12, S - 12), y = rng.range(12, S - 12);
    const r = rng.range(0.9, 2.1);
    if (overlaps(x - r, y - r, 2 * r, 2 * r, 1.2) || onRoad(x, y, r + 1)) continue;
    map.circles.push({ x, y, r, height: r * 1.2, kind: "rock" });
    occupy(x - r, y - r, 2 * r, 2 * r);
  }
  for (let i = 0; i < 220; i++) {
    const x = rng.range(10, S - 10), y = rng.range(10, S - 10);
    if (overlaps(x - 0.8, y - 0.8, 1.6, 1.6, 0.3) || onRoad(x, y, 1)) continue;
    map.bushes.push({ x, y, s: rng.range(0.7, 1.4) });
  }
  for (let i = 0; i < 45; i++) {
    for (let t = 0; t < 20; t++) {
      const x = rng.range(14, S - 14), y = rng.range(14, S - 14);
      if (overlaps(x - 0.6, y - 0.6, 1.2, 1.2, 0.5)) continue;
      map.lootSpots.push({ x, y, tier: 0 });
      break;
    }
  }
  const B = 3;
  map.walls.push({ x: -B, y: -B, w: S + 2 * B, h: B, height: 3, kind: "boundary" });
  map.walls.push({ x: -B, y: S, w: S + 2 * B, h: B, height: 3, kind: "boundary" });
  map.walls.push({ x: -B, y: 0, w: B, h: S, height: 3, kind: "boundary" });
  map.walls.push({ x: S, y: 0, w: B, h: S, height: 3, kind: "boundary" });
  buildCollision(map);
  map.lootSpots = map.lootSpots.filter((s) => !circleBlocked(map, s.x, s.y, 0.5));
  return map;
}

// shared/movement.js
function applyMovement(s, inp, map, dt, flags = {}) {
  let mx = Number(inp.mx) || 0, my = Number(inp.my) || 0;
  const len = Math.hypot(mx, my);
  if (len > 1) {
    mx /= len;
    my /= len;
  }
  const b = inp.b | 0;
  let speed = SPEED_WALK;
  if (flags.healing) speed = SPEED_HEALING;
  else if (b & BTN.ADS) speed = SPEED_ADS;
  else if (b & BTN.SPRINT) speed = SPEED_SPRINT;
  if (len > 0.01) moveCircle(map, s, mx * speed * dt, my * speed * dt, PLAYER_RADIUS);
  const jump = (b & BTN.JUMP) !== 0;
  if (jump && !s.jh && s.z <= 1e-3) s.vz = JUMP_VELOCITY;
  s.jh = jump;
  if (s.z > 0 || s.vz > 0) {
    s.vz -= GRAVITY * dt;
    s.z += s.vz * dt;
    if (s.z <= 0) {
      s.z = 0;
      s.vz = 0;
    }
  }
  return len > 0.01;
}

// shared/weapons.js
var WEAPONS = {
  pistol: {
    id: "pistol",
    name: "Pistola",
    dmg: 19,
    interval: 0.26,
    range: 34,
    reload: 1.15,
    mag: 12,
    ammo: "light",
    spread: 0.035,
    pellets: 1,
    speed: 85,
    auto: false,
    recoil: 0.25,
    zoom: 1,
    color: "#7c8796",
    rarity: "com\xFAn"
  },
  smg: {
    id: "smg",
    name: "Subfusil",
    dmg: 12,
    interval: 0.075,
    range: 27,
    reload: 1.7,
    mag: 30,
    ammo: "light",
    spread: 0.085,
    pellets: 1,
    speed: 80,
    auto: true,
    recoil: 0.12,
    zoom: 1,
    color: "#4aa3ff",
    rarity: "com\xFAn"
  },
  shotgun: {
    id: "shotgun",
    name: "Escopeta",
    dmg: 11,
    interval: 0.85,
    range: 15,
    reload: 2.3,
    mag: 5,
    ammo: "shells",
    spread: 0.2,
    pellets: 8,
    speed: 70,
    auto: false,
    recoil: 0.6,
    zoom: 1,
    color: "#c47a3c",
    rarity: "rara"
  },
  ar: {
    id: "ar",
    name: "Rifle de asalto",
    dmg: 20,
    interval: 0.125,
    range: 44,
    reload: 2,
    mag: 25,
    ammo: "medium",
    spread: 0.045,
    pellets: 1,
    speed: 100,
    auto: true,
    recoil: 0.18,
    zoom: 1.12,
    color: "#5ad67d",
    rarity: "rara"
  },
  sniper: {
    id: "sniper",
    name: "Rifle de precisi\xF3n",
    dmg: 88,
    interval: 1.4,
    range: 85,
    reload: 2.7,
    mag: 4,
    ammo: "heavy",
    spread: 4e-3,
    pellets: 1,
    speed: 170,
    auto: false,
    recoil: 0.9,
    zoom: 1.45,
    color: "#b07cff",
    rarity: "\xE9pica"
  }
};
var WEAPON_IDS = Object.keys(WEAPONS);
var AMMO = {
  light: { id: "light", name: "Munici\xF3n ligera", pack: 30, max: 180, color: "#ffd23f" },
  medium: { id: "medium", name: "Munici\xF3n media", pack: 30, max: 180, color: "#5ad67d" },
  shells: { id: "shells", name: "Cartuchos", pack: 10, max: 40, color: "#ff6b3d" },
  heavy: { id: "heavy", name: "Munici\xF3n pesada", pack: 8, max: 32, color: "#b07cff" }
};
var HEALS = {
  bandage: { id: "bandage", name: "Venda", heal: 15, time: 1.6, cap: 75, max: 10, color: "#f5f5f5" },
  medkit: { id: "medkit", name: "Botiqu\xEDn", heal: 60, time: 3.2, cap: 100, max: 4, color: "#ff4d5a" }
};
var SPREAD_ADS = 0.45;
var SPREAD_MOVING = 1.5;
var SPREAD_SPRINT = 2.1;
var SPREAD_AIR = 2.5;

// server/nav.js
var NavGrid = class {
  constructor(map, cell = 2, clearance = 0.8) {
    this.map = map;
    this.cell = cell;
    this.clear = clearance;
    this.n = Math.ceil(map.size / cell);
    this.blocked = new Uint8Array(this.n * this.n);
    for (let gy = 0; gy < this.n; gy++) for (let gx = 0; gx < this.n; gx++) this.updateCell(gx, gy);
    const N = this.n * this.n;
    this.g = new Float32Array(N);
    this.parent = new Int32Array(N);
    this.visit = new Uint32Array(N);
    this.closed = new Uint32Array(N);
    this.stamp = 1;
  }
  updateCell(gx, gy) {
    const x = (gx + 0.5) * this.cell, y = (gy + 0.5) * this.cell;
    this.blocked[gy * this.n + gx] = circleBlocked(this.map, x, y, this.clear) ? 1 : 0;
  }
  updateArea(x, y, w, h) {
    const c = this.cell;
    for (let gy = Math.floor((y - 2) / c); gy <= Math.floor((y + h + 2) / c); gy++)
      for (let gx = Math.floor((x - 2) / c); gx <= Math.floor((x + w + 2) / c); gx++)
        if (gx >= 0 && gy >= 0 && gx < this.n && gy < this.n) this.updateCell(gx, gy);
  }
  toCell(x, y) {
    return [Math.min(this.n - 1, Math.max(0, Math.floor(x / this.cell))), Math.min(this.n - 1, Math.max(0, Math.floor(y / this.cell)))];
  }
  isFree(x, y) {
    const [gx, gy] = this.toCell(x, y);
    return !this.blocked[gy * this.n + gx];
  }
  nearestFree(gx, gy, maxR = 8) {
    if (!this.blocked[gy * this.n + gx]) return [gx, gy];
    for (let r = 1; r <= maxR; r++) {
      for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
        if (Math.abs(dx) !== r && Math.abs(dy) !== r) continue;
        const x = gx + dx, y = gy + dy;
        if (x < 0 || y < 0 || x >= this.n || y >= this.n) continue;
        if (!this.blocked[y * this.n + x]) return [x, y];
      }
    }
    return null;
  }
  // Comprueba si se puede ir en línea recta (muestreo sobre la rejilla inflada)
  walkable(x0, y0, x1, y1) {
    const d = Math.hypot(x1 - x0, y1 - y0);
    const steps = Math.ceil(d / (this.cell * 0.4));
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      if (!this.isFree(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t)) return false;
    }
    return true;
  }
  findPath(sx, sy, tx, ty, maxNodes = 7e3) {
    const n = this.n;
    let s = this.toCell(sx, sy), t = this.toCell(tx, ty);
    s = this.nearestFree(s[0], s[1]);
    t = this.nearestFree(t[0], t[1]);
    if (!s || !t) return null;
    const start = s[1] * n + s[0], goal = t[1] * n + t[0];
    if (start === goal) return [{ x: tx, y: ty }];
    const stamp = ++this.stamp;
    const heap = new MinHeap();
    const h = (i2) => {
      const x = i2 % n, y = i2 / n | 0;
      const dx = Math.abs(x - t[0]), dy = Math.abs(y - t[1]);
      return dx + dy + (Math.SQRT2 - 2) * Math.min(dx, dy);
    };
    this.g[start] = 0;
    this.visit[start] = stamp;
    this.parent[start] = -1;
    heap.push(start, h(start));
    let expanded = 0, found = false, bestNode = start, bestH = h(start);
    while (heap.size) {
      const cur = heap.pop();
      if (this.closed[cur] === stamp) continue;
      this.closed[cur] = stamp;
      if (cur === goal) {
        found = true;
        break;
      }
      if (++expanded > maxNodes) break;
      const cx = cur % n, cy = cur / n | 0;
      const hc = h(cur);
      if (hc < bestH) {
        bestH = hc;
        bestNode = cur;
      }
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dy) continue;
        const x = cx + dx, y = cy + dy;
        if (x < 0 || y < 0 || x >= n || y >= n) continue;
        const ni = y * n + x;
        if (this.blocked[ni] || this.closed[ni] === stamp) continue;
        if (dx && dy && (this.blocked[cy * n + x] || this.blocked[y * n + cx])) continue;
        const ng = this.g[cur] + (dx && dy ? Math.SQRT2 : 1);
        if (this.visit[ni] !== stamp || ng < this.g[ni]) {
          this.visit[ni] = stamp;
          this.g[ni] = ng;
          this.parent[ni] = cur;
          heap.push(ni, ng + h(ni));
        }
      }
    }
    let node = found ? goal : bestNode;
    const cells = [];
    while (node !== -1) {
      cells.push(node);
      node = this.parent[node];
    }
    cells.reverse();
    const pts = cells.map((i2) => ({ x: (i2 % n + 0.5) * this.cell, y: ((i2 / n | 0) + 0.5) * this.cell }));
    if (found) pts[pts.length - 1] = { x: tx, y: ty };
    const out = [];
    let ax = sx, ay = sy, i = 0;
    while (i < pts.length) {
      let j = Math.min(pts.length - 1, i + 12);
      while (j > i && !this.walkable(ax, ay, pts[j].x, pts[j].y)) j--;
      out.push(pts[j]);
      ax = pts[j].x;
      ay = pts[j].y;
      i = j + 1;
    }
    return out;
  }
  randomFreeNear(rng, cx, cy, radius, tries = 25) {
    for (let i = 0; i < tries; i++) {
      const a = rng() * Math.PI * 2, r = Math.sqrt(rng()) * radius;
      const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
      if (x < 4 || y < 4 || x > this.map.size - 4 || y > this.map.size - 4) continue;
      if (this.isFree(x, y)) return { x, y };
    }
    return null;
  }
};
var MinHeap = class {
  constructor() {
    this.items = [];
    this.prio = [];
  }
  get size() {
    return this.items.length;
  }
  push(item, p) {
    const it = this.items, pr = this.prio;
    it.push(item);
    pr.push(p);
    let i = it.length - 1;
    while (i > 0) {
      const par = i - 1 >> 1;
      if (pr[par] <= pr[i]) break;
      [it[par], it[i]] = [it[i], it[par]];
      [pr[par], pr[i]] = [pr[i], pr[par]];
      i = par;
    }
  }
  pop() {
    const it = this.items, pr = this.prio;
    const top = it[0];
    const lastI = it.pop(), lastP = pr.pop();
    if (it.length) {
      it[0] = lastI;
      pr[0] = lastP;
      let i = 0;
      for (; ; ) {
        const l = 2 * i + 1, r = l + 1;
        let m = i;
        if (l < it.length && pr[l] < pr[m]) m = l;
        if (r < it.length && pr[r] < pr[m]) m = r;
        if (m === i) break;
        [it[m], it[i]] = [it[i], it[m]];
        [pr[m], pr[i]] = [pr[i], pr[m]];
        i = m;
      }
    }
    return top;
  }
};

// server/bot.js
var NAMES = [
  "TortugaVeloz",
  "Pixelito",
  "LaSombra",
  "Capit\xE1nTaco",
  "Nebulosa",
  "ElRayo",
  "Mapache99",
  "Kraken_",
  "Zorrito",
  "Bomb\xF3n",
  "Chispas",
  "NachoLibre",
  "Tormenta",
  "Gominola",
  "PumaRoja",
  "Luci\xE9rnaga",
  "Bigotes",
  "Cometa",
  "Trueno_X",
  "Mostaza",
  "Panda_Ninja",
  "Galleta",
  "Volc\xE1n",
  "Bruma",
  "Cicl\xF3n",
  "Mandarina",
  "Pistacho",
  "Rompehielos",
  "Halc\xF3n",
  "Turbo",
  "Coyote",
  "Pepinillo",
  "Saeta",
  "Ballena",
  "Meteoro",
  "Calamar",
  "Lince",
  "Rub\xED",
  "G\xE1rgola",
  "Tibur\xF3n",
  "F\xE9nix",
  "Kiwi",
  "Torbellino"
];
var LEVELS = {
  // reaction: segundos hasta disparar tras ver a alguien · aimError: error de puntería (rad) · turn: velocidad de giro
  // miss: probabilidad de un fallo claro por ráfaga · lead: cuánto anticipan el movimiento del objetivo
  easy: { reaction: 1, aimError: 0.27, turn: 4.5, view: 26, think: 0.45, fireRangeK: 0.65, burst: 0.45, dodge: 0.2, jump: 0, miss: 0.35, lead: 0.2 },
  normal: { reaction: 0.68, aimError: 0.17, turn: 6.5, view: 32, think: 0.32, fireRangeK: 0.78, burst: 0.65, dodge: 0.45, jump: 0.03, miss: 0.22, lead: 0.45 },
  hard: { reaction: 0.45, aimError: 0.11, turn: 8.5, view: 37, think: 0.26, fireRangeK: 0.88, burst: 0.8, dodge: 0.7, jump: 0.06, miss: 0.12, lead: 0.65 }
};
var PERSONALITIES = {
  aggressive: { fleeHp: 28, chaseTime: 6, coverPref: 0.25, lootGreed: 0.7, preferRange: 0.85, investigate: 0.7 },
  balanced: { fleeHp: 40, chaseTime: 3.5, coverPref: 0.45, lootGreed: 0.85, preferRange: 1.05, investigate: 0.45 },
  cautious: { fleeHp: 55, chaseTime: 2, coverPref: 0.75, lootGreed: 1, preferRange: 1.3, investigate: 0.15 },
  sniper: { fleeHp: 45, chaseTime: 2.5, coverPref: 0.6, lootGreed: 0.9, preferRange: 1.6, loves: "sniper", investigate: 0.3 }
};
var WEAPON_RANK = { pistol: 1, smg: 3.2, shotgun: 3.4, ar: 4.5, sniper: 3.6 };
var IDEAL_DIST = { pistol: 13, smg: 11, shotgun: 5.5, ar: 18, sniper: 32 };
function angDiff(a, b) {
  let d = a - b;
  while (d > Math.PI) d -= 2 * Math.PI;
  while (d < -Math.PI) d += 2 * Math.PI;
  return d;
}
function gauss() {
  return (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
}
var BotController = class {
  static randomName(used) {
    for (let i = 0; i < 50; i++) {
      let n = NAMES[Math.floor(Math.random() * NAMES.length)];
      if (Math.random() < 0.35) n += Math.floor(Math.random() * 90 + 10);
      if (!used.has(n)) {
        used.add(n);
        return n;
      }
    }
    return "Jugador" + Math.floor(Math.random() * 9999);
  }
  static randomCharacter() {
    return CHARACTER_IDS[Math.floor(Math.random() * CHARACTER_IDS.length)];
  }
  constructor(match, p, level = "normal") {
    this.m = match;
    this.p = p;
    this.level = level;
    this.L = LEVELS[level] || LEVELS.normal;
    const keys = Object.keys(PERSONALITIES);
    this.personalityName = keys[Math.floor(Math.random() * keys.length)];
    this.P = PERSONALITIES[this.personalityName];
    this.state = "loot";
    this.thinkT = Math.random() * 0.3;
    this.path = null;
    this.pathI = 0;
    this.pathGoal = null;
    this.repathT = 0;
    this.target = null;
    this.targetSeen = false;
    this.lastSeen = null;
    this.reactT = 0;
    this.aimNoise = 0;
    this.aimNoiseT = 0;
    this.onTargetT = 0;
    this.strafeDir = Math.random() < 0.5 ? 1 : -1;
    this.strafeT = 0;
    this.lootTarget = null;
    this.crateTarget = null;
    this.roamGoal = null;
    this.coverGoal = null;
    this.coverT = 0;
    this.stuckT = 0;
    this.lastX = p.x;
    this.lastY = p.y;
    this.nudge = null;
    this.nudgeT = 0;
    this.lastThreatT = -99;
    this.firePulse = false;
    this.burstT = 0;
    this.burstPause = 0;
    this.aim = p.angle;
    this.wantAngle = p.angle;
    this.investigate = null;
    this.ads = false;
    this.blacklist = /* @__PURE__ */ new Set();
    this.lootSince = 0;
    this.lootRef = null;
    this.flinch = 0;
    this.leadK = this.L.lead;
    match.listeners.damaged.push((t, a) => this._onDamaged(t, a));
    match.listeners.shot.push((s) => this._onShot(s));
  }
  get alive() {
    return this.p.alive && this.p.bot === this;
  }
  _onDamaged(target, attacker) {
    if (!this.alive || !attacker || attacker.team === this.p.team) return;
    const t = this.m.time;
    if (target === this.p) {
      this.flinch = 0.5;
      this.aimNoise += (Math.random() - 0.5) * 0.4;
    }
    const d = Math.hypot(attacker.x - this.p.x, attacker.y - this.p.y);
    const guess = () => ({ x: attacker.x + (Math.random() - 0.5) * d * 0.5, y: attacker.y + (Math.random() - 0.5) * d * 0.5, t });
    if (target === this.p) {
      this.lastThreatT = t;
      if (!this.targetSeen || this.target && this.target.id !== attacker.id && Math.random() < 0.25) {
        if (d < 30 || Math.random() < 0.5) {
          this.target = attacker;
          this.lastSeen = guess();
        }
      }
    } else if (target.team === this.p.team && Math.hypot(target.x - this.p.x, target.y - this.p.y) < 40 && Math.random() < 0.6) {
      if (!this.targetSeen) {
        this.target = attacker;
        this.lastSeen = guess();
      }
    }
  }
  _onShot(shooter) {
    if (!this.alive || shooter.team === this.p.team || this.targetSeen) return;
    const d = Math.hypot(shooter.x - this.p.x, shooter.y - this.p.y);
    if (d < 36 && Math.random() < this.P.investigate) this.investigate = { x: shooter.x + (Math.random() - 0.5) * 6, y: shooter.y + (Math.random() - 0.5) * 6, t: this.m.time };
  }
  // --------------------------------------------------------------- principal
  update(dt, playing) {
    const p = this.p;
    const inp = { mx: 0, my: 0, b: 0, a: p.angle };
    if (!playing) return inp;
    this.thinkT -= dt;
    if (this.thinkT <= 0) {
      this.thinkT = this.L.think * (0.8 + Math.random() * 0.4);
      this._think();
    }
    let mv = this._steer(dt);
    if (this.nudgeT > 0) {
      this.nudgeT -= dt;
      mv = this.nudge;
    }
    inp.mx = mv.x;
    inp.my = mv.y;
    const fighting = this.state === "fight";
    if ((this.state === "flee" || this.state === "zone" || this.state === "roam" || this.state === "follow" || this.state === "chase") && (mv.x || mv.y) && !p.healing) inp.b |= BTN.SPRINT;
    this.stuckT += dt;
    if (this.stuckT > 0.9) {
      const moved = Math.hypot(p.x - this.lastX, p.y - this.lastY);
      if ((mv.x || mv.y) && moved < 0.35) this._unstick();
      this.stuckT = 0;
      this.lastX = p.x;
      this.lastY = p.y;
    }
    if (fighting && this.target) {
      const t = this.target;
      const def = this._weaponDef();
      const d = Math.hypot(t.x - p.x, t.y - p.y);
      const lead = def ? d / def.speed : 0;
      const tvx = t.vx || 0, tvy = t.vy || 0;
      const px = t.x + tvx * lead * this.leadK, py = t.y + tvy * lead * this.leadK;
      this.onTargetT += dt;
      this.aimNoiseT -= dt;
      if (this.flinch > 0) this.flinch -= dt;
      if (this.aimNoiseT <= 0) {
        this.aimNoiseT = 0.3 + Math.random() * 0.4;
        let err = gauss() * this.L.aimError * Math.max(0.55, 1.5 - this.onTargetT * 0.2);
        if (Math.random() < this.L.miss) err += (Math.random() < 0.5 ? -1 : 1) * (0.12 + Math.random() * 0.15);
        if (this.flinch > 0) err *= 1.8;
        const lateral = Math.abs(-Math.sin(Math.atan2(t.y - p.y, t.x - p.x)) * tvx + Math.cos(Math.atan2(t.y - p.y, t.x - p.x)) * tvy);
        err += gauss() * Math.min(0.12, lateral * 0.012);
        this.aimNoise = err;
      }
      this.wantAngle = Math.atan2(py - p.y, px - p.x) + this.aimNoise;
    } else if (mv.x || mv.y) {
      this.wantAngle = Math.atan2(mv.y, mv.x);
      this.onTargetT = 0;
    }
    const diff = angDiff(this.wantAngle, this.aim);
    const maxTurn = this.L.turn * dt;
    this.aim += Math.max(-maxTurn, Math.min(maxTurn, diff));
    inp.a = Math.atan2(Math.sin(this.aim), Math.cos(this.aim));
    if (fighting && this.target && this.targetSeen) {
      this.reactT -= dt;
      const def = this._weaponDef();
      const w = p.weapons[p.slot];
      const d = Math.hypot(this.target.x - p.x, this.target.y - p.y);
      if (def && w && this.reactT <= 0 && d < def.range * this.L.fireRangeK && Math.abs(angDiff(this.wantAngle, this.aim)) < 0.12 + def.spread) {
        this.burstT += dt;
        if (this.burstPause > 0) this.burstPause -= dt;
        else {
          if (def.auto) inp.b |= BTN.FIRE;
          else {
            this.firePulse = !this.firePulse;
            if (this.firePulse && p.fireCd <= 0) inp.b |= BTN.FIRE;
          }
          if (this.burstT > 0.5 + this.L.burst * 1) {
            this.burstT = 0;
            this.burstPause = (1 - this.L.burst) * 1.1 + 0.15 + Math.random() * 0.35;
          }
        }
        if (def.id === "sniper" && d > 18) inp.b |= BTN.ADS;
      }
      if (Math.random() < this.L.jump * dt * 3 && p.z === 0) inp.b |= BTN.JUMP;
    }
    if (this.state === "crate" && this.crateTarget && this.crateTarget.alive) {
      const c = this.crateTarget;
      const cx = c.x + c.w / 2, cy = c.y + c.h / 2;
      const d = Math.hypot(cx - p.x, cy - p.y);
      if (d < 9) {
        this.wantAngle = Math.atan2(cy - p.y, cx - p.x);
        this.aim += Math.max(-maxTurn, Math.min(maxTurn, angDiff(this.wantAngle, this.aim)));
        inp.a = this.aim;
        if (Math.abs(angDiff(this.wantAngle, this.aim)) < 0.15) {
          this.firePulse = !this.firePulse;
          if (this.firePulse) inp.b |= BTN.FIRE;
        }
      }
    }
    return inp;
  }
  // --------------------------------------------------------------- decisiones
  _think() {
    const m = this.m, p = this.p, t = m.time;
    this._perceive();
    this._manageWeapons();
    const z = m.zone;
    const distZone = Math.hypot(p.x - z.cx, p.y - z.cy);
    const distNext = Math.hypot(p.x - z.tx, p.y - z.ty);
    const outsideNow = distZone > z.r - 3;
    const outsideNext = z.phase >= 0 && distNext > z.tr - 2 && (z.stage === "shrink" || z.timer < 22);
    const hasHeal = p.heals.medkit > 0 || p.heals.bandage > 0 && p.hp < HEALS.bandage.cap;
    const w = p.weapons[p.slot];
    const hasAmmo = p.weapons.some((x) => x && (x.mag > 0 || p.ammo[WEAPONS[x.type].ammo] > 0));
    if (this.targetSeen && this.target) {
      const d = Math.hypot(this.target.x - p.x, this.target.y - p.y);
      if (p.hp < this.P.fleeHp && (hasHeal || this.target.hp > p.hp + 20) && Math.random() < 0.85) {
        this._setState("flee");
      } else if (!hasAmmo) {
        this._setState("flee");
      } else if (outsideNow && d > 14 && z.dps >= 2) {
        this._setState("zone");
      } else this._setState("fight");
      return;
    }
    if (outsideNow || outsideNext) {
      this._setState("zone");
      return;
    }
    if (p.hp < 80 && hasHeal && t - this.lastThreatT > 2.5) {
      if (!p.healing) m.startHeal(p, null);
      this._setState("heal");
      return;
    }
    if (p.healing) return;
    if (w) {
      const def = WEAPONS[w.type];
      if (w.mag < def.mag * 0.6 && p.ammo[def.ammo] > 0 && p.reloading <= 0) m.startReload(p);
    }
    if (this.target && this.lastSeen && t - this.lastSeen.t < this.P.chaseTime && this.target.alive && p.hp > 55 && hasAmmo && Math.random() < 0.8) {
      this._setState("chase");
      return;
    }
    this.target = this.target && this.target.alive && this.lastSeen && t - this.lastSeen.t < 12 ? this.target : null;
    if (this.investigate && t - this.investigate.t < 6 && hasAmmo && p.hp > 55) {
      this._setState("investigate");
      return;
    }
    const loot = this._chooseLoot();
    if (loot) {
      if (this.lootRef !== loot) {
        this.lootRef = loot;
        this.lootSince = t;
      }
      if (t - this.lootSince > 9) {
        this.blacklist.add(loot.id);
        this.lootRef = null;
      } else {
        this.lootTarget = loot;
        this._setState("loot");
        return;
      }
    }
    if (this._wantsMoreLoot() && w && w.mag + p.ammo[WEAPONS[w.type].ammo] > 6) {
      const crate = this._nearestCrate(30);
      if (crate) {
        this.crateTarget = crate;
        this._setState("crate");
        return;
      }
    }
    const leader = this._leader();
    if (leader && Math.hypot(leader.x - p.x, leader.y - p.y) > 12) {
      this._setState("follow");
      return;
    }
    this._setState("roam");
  }
  _setState(s) {
    if (s !== this.state) {
      this.state = s;
      this.path = null;
      this.repathT = 0;
      if (s === "fight") {
        this.coverGoal = null;
        this.coverT = 0;
      }
    }
  }
  _perceive() {
    const m = this.m, p = this.p, t = m.time;
    let best = null, bestScore = Infinity;
    for (const q of m.players.values()) {
      if (!q.alive || q.team === p.team) continue;
      const d = Math.hypot(q.x - p.x, q.y - p.y);
      const view = t < 20 && t - this.lastThreatT > 3 ? 9 : this.L.view;
      if (d > view) continue;
      const ang = Math.abs(angDiff(Math.atan2(q.y - p.y, q.x - p.x), p.angle));
      if (ang > 1.9 && d > 6) continue;
      if (this.target !== q && d > 14 && Math.random() < 0.35 + d / 120) continue;
      if (raycast(m.map, p.x, p.y, q.x, q.y)) continue;
      let score = d - (this.target === q ? 8 : 0) + q.hp * 0.05;
      if (score < bestScore) {
        bestScore = score;
        best = q;
      }
    }
    const wasSeen = this.targetSeen;
    if (best) {
      if (!wasSeen || this.target !== best) {
        this.reactT = this.L.reaction * (0.8 + Math.random() * 0.6) + (best.id !== this.target?.id ? 0.15 : 0);
        this.onTargetT = 0;
        this.leadK = this.L.lead * (0.5 + Math.random() * 0.8);
      }
      this.target = best;
      this.targetSeen = true;
      this.lastSeen = { x: best.x, y: best.y, t };
      this.lastThreatT = t;
      this.investigate = null;
    } else {
      this.targetSeen = false;
      if (this.target && !this.target.alive) {
        this.target = null;
        this.lastSeen = null;
      }
    }
  }
  _weaponDef() {
    const w = this.p.weapons[this.p.slot];
    return w ? WEAPONS[w.type] : null;
  }
  _manageWeapons() {
    const p = this.p, m = this.m;
    if (p.healing) return;
    const usable = (w) => w && (w.mag > 0 || p.ammo[WEAPONS[w.type].ammo] > 0);
    let wantSlot = p.slot;
    if (this.targetSeen && this.target) {
      const d = Math.hypot(this.target.x - p.x, this.target.y - p.y);
      let bestS = -1, bestScore = -Infinity;
      p.weapons.forEach((w, i) => {
        if (!usable(w)) return;
        const def = WEAPONS[w.type];
        let s = WEAPON_RANK[w.type] - Math.abs(d - IDEAL_DIST[w.type]) / 8;
        if (d > def.range) s -= 5;
        if (w.mag === 0) s -= 1.5;
        if (i === p.slot) s += 0.6;
        if (s > bestScore) {
          bestScore = s;
          bestS = i;
        }
      });
      if (bestS >= 0) wantSlot = bestS;
    } else if (!usable(p.weapons[p.slot])) {
      const other = p.weapons.findIndex(usable);
      if (other >= 0) wantSlot = other;
    }
    if (wantSlot !== p.slot && p.reloading <= 0) m.switchSlot(p, wantSlot);
  }
  _wantsMoreLoot() {
    const p = this.p;
    const weapons = p.weapons.filter(Boolean);
    if (weapons.length < 2) return true;
    if (p.heals.medkit + p.heals.bandage < 2) return true;
    return weapons.some((w) => p.ammo[WEAPONS[w.type].ammo] < WEAPONS[w.type].mag);
  }
  _itemValue(it) {
    const p = this.p;
    if (it.kind === "weapon") {
      if (p.weapons.some((w) => w && w.type === it.type)) return p.ammo[WEAPONS[it.type].ammo] < AMMO[WEAPONS[it.type].ammo].max * 0.5 ? 0.6 : 0;
      let rank = WEAPON_RANK[it.type] + (this.P.loves === it.type ? 2.5 : 0);
      const empty = p.weapons.findIndex((w) => !w);
      if (empty >= 0) return rank + 1;
      const worst = Math.min(...p.weapons.map((w) => WEAPON_RANK[w.type] + (this.P.loves === w.type ? 2.5 : 0)));
      return rank > worst + 0.5 ? rank - worst : 0;
    }
    if (it.kind === "ammo") {
      if (!p.weapons.some((w) => w && WEAPONS[w.type].ammo === it.type)) return 0;
      const frac = p.ammo[it.type] / AMMO[it.type].max;
      return frac < 0.95 ? 2.2 * (1 - frac) : 0;
    }
    if (it.kind === "heal") {
      const n = p.heals[it.type];
      if (n >= HEALS[it.type].max) return 0;
      return (it.type === "medkit" ? 2.2 : 1.2) / (1 + n * 0.6) + (p.hp < 60 ? 1 : 0);
    }
    return 0;
  }
  _chooseLoot() {
    const p = this.p, z = this.m.zone;
    let best = null, bestScore = 0;
    const R = 40 * this.P.lootGreed;
    for (const it of this.m.loot.values()) {
      const d = Math.hypot(it.x - p.x, it.y - p.y);
      if (d > R) continue;
      if (Math.hypot(it.x - z.cx, it.y - z.cy) > z.r - 2) continue;
      if (this.blacklist.has(it.id)) continue;
      const v = this._itemValue(it);
      if (v <= 0) continue;
      const score = v / (1 + d * 0.08);
      if (score > bestScore) {
        bestScore = score;
        best = it;
      }
    }
    return best;
  }
  _nearestCrate(R) {
    const p = this.p;
    let best = null, bd = R;
    for (const c of this.m.map.crates) {
      if (!c.alive) continue;
      const d = Math.hypot(c.x - p.x, c.y - p.y);
      if (d < bd) {
        bd = d;
        best = c;
      }
    }
    return best;
  }
  _leader() {
    const p = this.p;
    if (this.m.modeDef.teamSize <= 1) return null;
    let leader = null;
    for (const q of this.m.players.values()) {
      if (q === p || !q.alive || q.team !== p.team) continue;
      if (q.conn) return q;
      if (!leader || q.id < leader.id) leader = q;
    }
    if (leader && leader.id > p.id) return null;
    return leader;
  }
  // --------------------------------------------------------------- navegación
  _goTo(x, y, dt = 0) {
    const p = this.p;
    this.repathT -= 1 / 30;
    const goalChanged = !this.pathGoal || Math.hypot(this.pathGoal.x - x, this.pathGoal.y - y) > 3;
    if (!this.path || goalChanged || this.repathT <= 0) {
      this.path = this.m.nav.findPath(p.x, p.y, x, y);
      this.pathI = 0;
      this.pathGoal = { x, y };
      this.repathT = 3;
    }
  }
  _followPath() {
    const p = this.p;
    if (!this.path || this.pathI >= this.path.length) return { x: 0, y: 0 };
    let wp = this.path[this.pathI];
    while (Math.hypot(wp.x - p.x, wp.y - p.y) < 1) {
      this.pathI++;
      if (this.pathI >= this.path.length) return { x: 0, y: 0 };
      wp = this.path[this.pathI];
    }
    const dx = wp.x - p.x, dy = wp.y - p.y, d = Math.hypot(dx, dy) || 1;
    return { x: dx / d, y: dy / d };
  }
  _unstick() {
    const a = Math.random() * Math.PI * 2;
    this.nudge = { x: Math.cos(a), y: Math.sin(a) };
    this.nudgeT = 0.35;
    this.path = null;
    const p = this.p;
    const c = this._nearestCrate(3);
    if (c) {
      this.crateTarget = c;
      this.state = "crate";
    }
    void p;
  }
  _steer(dt) {
    const m = this.m, p = this.p;
    const z = m.zone;
    switch (this.state) {
      case "zone": {
        const tx = z.stage === "shrink" || z.phase < 0 ? z.cx : z.tx, ty = z.stage === "shrink" || z.phase < 0 ? z.cy : z.ty;
        if (!this.roamGoal || Math.hypot(this.roamGoal.x - tx, this.roamGoal.y - ty) > Math.max(6, (z.stage === "shrink" ? z.r : z.tr) * 0.5)) {
          this.roamGoal = m.nav.randomFreeNear(m.rng, tx, ty, Math.max(2, (z.stage === "shrink" ? z.r : z.tr) * 0.45)) || { x: tx, y: ty };
        }
        this._goTo(this.roamGoal.x, this.roamGoal.y);
        return this._followPath();
      }
      case "heal":
        return { x: 0, y: 0 };
      case "loot": {
        const it = this.lootTarget;
        if (!it || !m.loot.has(it.id)) {
          this.lootTarget = null;
          this.thinkT = 0;
          return { x: 0, y: 0 };
        }
        const d = Math.hypot(it.x - p.x, it.y - p.y);
        if (d < 1.6) {
          if (it.kind === "weapon" && p.weapons.every(Boolean) && !p.weapons.some((w) => w.type === it.type)) {
            const ranks = p.weapons.map((w) => WEAPON_RANK[w.type] + (this.P.loves === w.type ? 2.5 : 0));
            const worst = ranks[0] <= ranks[1] ? 0 : 1;
            if (p.slot !== worst) m.switchSlot(p, worst);
          }
          if (!m.pickup(p, it)) this.blacklist.add(it.id);
          this.lootTarget = null;
          this.thinkT = 0.05;
          return { x: 0, y: 0 };
        }
        if (d < 3.5 || this.path && this.pathI >= this.path.length) {
          return { x: (it.x - p.x) / d, y: (it.y - p.y) / d };
        }
        this._goTo(it.x, it.y);
        return this._followPath();
      }
      case "crate": {
        const c = this.crateTarget;
        if (!c || !c.alive) {
          this.crateTarget = null;
          this.thinkT = 0;
          return { x: 0, y: 0 };
        }
        const cx = c.x + c.w / 2, cy = c.y + c.h / 2;
        const d = Math.hypot(cx - p.x, cy - p.y);
        if (d < 5) return { x: 0, y: 0 };
        this._goTo(cx, cy);
        return this._followPath();
      }
      case "follow": {
        const l = this._leader();
        if (!l) return { x: 0, y: 0 };
        const d = Math.hypot(l.x - p.x, l.y - p.y);
        if (d < 6) return { x: 0, y: 0 };
        this._goTo(l.x + (p.id % 3 - 1) * 2.5, l.y + ((p.id >> 1) % 3 - 1) * 2.5);
        return this._followPath();
      }
      case "investigate": {
        const g = this.investigate;
        if (!g) return { x: 0, y: 0 };
        if (Math.hypot(g.x - p.x, g.y - p.y) < 3) {
          this.investigate = null;
          return { x: 0, y: 0 };
        }
        this._goTo(g.x, g.y);
        return this._followPath();
      }
      case "chase": {
        const g = this.lastSeen;
        if (!g) return { x: 0, y: 0 };
        if (Math.hypot(g.x - p.x, g.y - p.y) < 2.5) {
          this.lastSeen = { ...g, t: -99 };
          return { x: 0, y: 0 };
        }
        this._goTo(g.x, g.y);
        return this._followPath();
      }
      case "flee":
        return this._steerFlee();
      case "fight":
        return this._steerFight(dt);
      case "roam":
      default: {
        const zr = z.phase >= 0 ? z.tr : z.r;
        const zx = z.phase >= 0 ? z.tx : z.cx, zy = z.phase >= 0 ? z.ty : z.cy;
        if (!this.roamGoal || Math.hypot(this.roamGoal.x - p.x, this.roamGoal.y - p.y) < 3 || Math.hypot(this.roamGoal.x - zx, this.roamGoal.y - zy) > zr) {
          const pois = m.map.pois.filter((o) => Math.hypot(o.x - zx, o.y - zy) < zr - 5);
          if (pois.length && Math.random() < 0.6) {
            const poi = pois[Math.floor(Math.random() * pois.length)];
            this.roamGoal = m.nav.randomFreeNear(m.rng, poi.x, poi.y, 20) || poi;
          } else this.roamGoal = m.nav.randomFreeNear(m.rng, zx, zy, Math.max(4, zr * 0.8)) || { x: zx, y: zy };
        }
        this._goTo(this.roamGoal.x, this.roamGoal.y);
        return this._followPath();
      }
    }
  }
  _steerFlee() {
    const m = this.m, p = this.p;
    const threat = this.lastSeen || this.target;
    if (!threat) {
      this.state = "roam";
      return { x: 0, y: 0 };
    }
    if (!this.coverGoal || this.coverT <= 0) {
      this.coverGoal = this._findCover(threat, 14) || this._awayPoint(threat, 18);
      this.coverT = 2.5;
    }
    this.coverT -= this.L.think * 0.3;
    if (this.coverGoal && Math.hypot(this.coverGoal.x - p.x, this.coverGoal.y - p.y) < 1.2) {
      if (!this.targetSeen) {
        if (!p.healing) m.startHeal(p, null);
        if (!p.healing) m.startReload(p);
      }
      return { x: 0, y: 0 };
    }
    if (this.coverGoal) {
      this._goTo(this.coverGoal.x, this.coverGoal.y);
      return this._followPath();
    }
    return { x: 0, y: 0 };
  }
  _steerFight(dt) {
    const m = this.m, p = this.p, t = this.target;
    if (!t) return { x: 0, y: 0 };
    const def = this._weaponDef();
    const ideal = (def ? IDEAL_DIST[def.id] : 10) * this.P.preferRange;
    const d = Math.hypot(t.x - p.x, t.y - p.y);
    const dx = (t.x - p.x) / (d || 1), dy = (t.y - p.y) / (d || 1);
    if ((p.reloading > 0 || p.hp < 60 && Math.random() < this.P.coverPref * 0.1) && !this.coverGoal) {
      this.coverGoal = this._findCover(t, 10);
      this.coverT = 2;
    }
    if (this.coverGoal) {
      this.coverT -= dt;
      if (this.coverT <= 0 || p.reloading <= 0 && Math.hypot(this.coverGoal.x - p.x, this.coverGoal.y - p.y) < 1.2) this.coverGoal = null;
      else {
        this._goTo(this.coverGoal.x, this.coverGoal.y);
        return this._followPath();
      }
    }
    this.strafeT -= dt;
    if (this.strafeT <= 0) {
      this.strafeT = 0.5 + Math.random() * 1.1;
      if (Math.random() < 0.7) this.strafeDir *= -1;
    }
    let mx = 0, my = 0;
    if (d > ideal + 5) {
      this._goTo(t.x, t.y);
      const f = this._followPath();
      mx = f.x;
      my = f.y;
    } else if (d < ideal - 4) {
      mx = -dx;
      my = -dy;
    }
    const sx = -dy * this.strafeDir, sy = dx * this.strafeDir;
    mx += sx * this.L.dodge;
    my += sy * this.L.dodge;
    const len = Math.hypot(mx, my);
    if (len < 0.01) return { x: 0, y: 0 };
    mx /= len;
    my /= len;
    if (!m.nav.walkable(p.x, p.y, p.x + mx * 2, p.y + my * 2)) {
      this.strafeDir *= -1;
      this.strafeT = 0.6;
    }
    return { x: mx, y: my };
  }
  _findCover(threat, R) {
    const m = this.m, p = this.p;
    let best = null, bd = Infinity;
    for (let i = 0; i < 16; i++) {
      const a = i / 16 * Math.PI * 2 + Math.random() * 0.3;
      const r = 3 + Math.random() * R;
      const x = p.x + Math.cos(a) * r, y = p.y + Math.sin(a) * r;
      if (x < 3 || y < 3 || x > m.map.size - 3 || y > m.map.size - 3) continue;
      if (!m.nav.isFree(x, y)) continue;
      if (!raycast(m.map, x, y, threat.x, threat.y)) continue;
      const z = m.zone;
      if (Math.hypot(x - z.cx, y - z.cy) > z.r) continue;
      const score = r + Math.hypot(x - threat.x, y - threat.y) * -0.2;
      if (score < bd) {
        bd = score;
        best = { x, y };
      }
    }
    return best;
  }
  _awayPoint(threat, R) {
    const p = this.p, m = this.m;
    const a0 = Math.atan2(p.y - threat.y, p.x - threat.x);
    for (let i = 0; i < 10; i++) {
      const a = a0 + (Math.random() - 0.5) * 1.6;
      const x = p.x + Math.cos(a) * R, y = p.y + Math.sin(a) * R;
      if (x > 4 && y > 4 && x < m.map.size - 4 && y < m.map.size - 4 && m.nav.isFree(x, y)) return { x, y };
    }
    return null;
  }
};

// server/match.js
var HIT_RADIUS = 0.7;
var COUNTDOWN = 4;
var ZONE_SPEED = Number(process.env.ZONE_SPEED || 1);
var matchCounter = 1;
var Match = class {
  constructor({ mode, entrants, botLevel = "mixed", onEnd, profiles: profiles2 }) {
    this.id = "M" + matchCounter++;
    this.mode = MODES[mode] ? mode : "solo";
    this.modeDef = MODES[this.mode];
    this.map = generateMap();
    this.nav = new NavGrid(this.map);
    this.rng = Math.random;
    this.tick = 0;
    this.time = -COUNTDOWN;
    this.state = "countdown";
    this.players = /* @__PURE__ */ new Map();
    this.loot = /* @__PURE__ */ new Map();
    this.lootId = 1;
    this.projectiles = [];
    this.events = [];
    this.onEnd = onEnd;
    this.profiles = profiles2;
    this.botLevel = botLevel;
    this.nextPlayerId = 1;
    this.teamsAlive = /* @__PURE__ */ new Set();
    this.ended = false;
    this.listeners = { damaged: [], shot: [] };
    this._setupZone();
    this._spawnLoot();
    this._createPlayers(entrants);
    log(`[${this.id}] partida creada modo=${this.mode} jugadores=${this.players.size} humanos=${this.humanCount()}`);
  }
  // ------------------------------------------------------------------ creación
  _createPlayers(entrants) {
    const teamSpawns = [];
    let teamIdx = 0;
    for (const e of entrants) {
      const team = teamIdx++;
      let spawn = null, bestD = -1;
      for (let tries = 0; tries < 60; tries++) {
        const p = this.nav.randomFreeNear(this.rng, this.map.size / 2, this.map.size / 2, this.map.size / 2 - 14, 5);
        if (!p) continue;
        const d = teamSpawns.length ? Math.min(...teamSpawns.map((s) => Math.hypot(s.x - p.x, s.y - p.y))) : 999;
        if (d > bestD) {
          bestD = d;
          spawn = p;
        }
      }
      if (!spawn) spawn = this.nav.randomFreeNear(this.rng, 160, 160, 140, 100) || { x: 160, y: 160 };
      teamSpawns.push(spawn);
      const members = [];
      for (const h of e.humans) members.push(this._addPlayer({ team, name: h.profile.name, outfit: this.profiles.outfitFor(h.profile), conn: h.conn, profileId: h.profile.id, spawn }));
      for (let i = 0; i < e.bots; i++) {
        const level = this._pickBotLevel();
        const name = BotController.randomName(this.usedNames || (this.usedNames = /* @__PURE__ */ new Set()));
        const p = this._addPlayer({ team, name, outfit: randomOutfit(), conn: null, spawn });
        p.bot = new BotController(this, p, level);
        members.push(p);
      }
      this.teamsAlive.add(team);
    }
  }
  _pickBotLevel() {
    if (this.botLevel === "easy" || this.botLevel === "normal" || this.botLevel === "hard") return this.botLevel;
    const r = this.rng();
    return r < 0.4 ? "easy" : r < 0.88 ? "normal" : "hard";
  }
  _addPlayer({ team, name, outfit, conn, profileId = null, spawn }) {
    const id = this.nextPlayerId++;
    let pos = null;
    for (let i = 0; i < 40 && !pos; i++) {
      const c = this.nav.randomFreeNear(this.rng, spawn.x, spawn.y, 2 + i * 0.3, 3);
      if (c && !circleBlocked(this.map, c.x, c.y, PLAYER_RADIUS + 0.1)) pos = c;
    }
    pos = pos || { ...spawn };
    const p = {
      id,
      team,
      name,
      outfit,
      conn,
      profileId,
      bot: null,
      weaponsPicked: 0,
      x: pos.x,
      y: pos.y,
      z: 0,
      vz: 0,
      jh: false,
      angle: this.rng() * Math.PI * 2,
      hp: MAX_HP,
      alive: true,
      weapons: [{ type: "pistol", mag: WEAPONS.pistol.mag }, null],
      slot: 0,
      ammo: { light: 24, medium: 0, shells: 0, heavy: 0 },
      heals: { bandage: 1, medkit: 0 },
      fireCd: 0,
      reloading: 0,
      healing: null,
      prevFire: false,
      input: { mx: 0, my: 0, b: 0, a: 0 },
      inputQueue: [],
      lastSeq: 0,
      actions: [],
      kills: 0,
      damage: 0,
      deathTime: 0,
      placement: 0,
      killedBy: null,
      moving: false,
      lastHitBy: null,
      lastHitTime: -99,
      resultSent: false,
      left: false
    };
    this.players.set(id, p);
    return p;
  }
  _setupZone() {
    const S = this.map.size;
    this.zone = { phase: -1, stage: "wait", timer: 20 / ZONE_SPEED, cx: S / 2, cy: S / 2, r: S * 0.75, tx: S / 2, ty: S / 2, tr: S * 0.75, sx: S / 2, sy: S / 2, sr: S * 0.75, dps: 0 };
  }
  _spawnLoot() {
    const r = this.rng;
    for (const spot of this.map.lootSpots) {
      const chance = [0.55, 0.8, 1, 1][spot.tier] ?? 0.7;
      if (r() > chance) continue;
      this._spawnRandomItem(spot.x, spot.y, spot.tier);
      if (spot.tier >= 2 && r() < 0.6) this._spawnRandomItem(spot.x + (r() - 0.5) * 2, spot.y + (r() - 0.5) * 2, 0);
    }
  }
  _randomWeaponType(tier) {
    const r = this.rng();
    const table = tier >= 3 ? [["sniper", 0.55], ["ar", 0.3], ["shotgun", 0.15]] : tier === 2 ? [["ar", 0.33], ["shotgun", 0.22], ["smg", 0.22], ["sniper", 0.13], ["pistol", 0.1]] : [["pistol", 0.27], ["smg", 0.27], ["shotgun", 0.22], ["ar", 0.18], ["sniper", 0.06]];
    let acc = 0;
    for (const [t, p] of table) {
      acc += p;
      if (r < acc) return t;
    }
    return table[0][0];
  }
  _spawnRandomItem(x, y, tier = 0) {
    const r = this.rng();
    if (r < 0.36) {
      const type = this._randomWeaponType(tier);
      this.addLoot({ kind: "weapon", type, mag: WEAPONS[type].mag, x, y });
      const ammo = WEAPONS[type].ammo;
      this.addLoot({ kind: "ammo", type: ammo, amount: AMMO[ammo].pack, x: x + 0.9, y: y + 0.4 });
    } else if (r < 0.75) {
      const types = Object.keys(AMMO);
      const type = types[Math.floor(this.rng() * types.length)];
      this.addLoot({ kind: "ammo", type, amount: AMMO[type].pack, x, y });
    } else {
      const type = this.rng() < 0.6 ? "bandage" : "medkit";
      this.addLoot({ kind: "heal", type, amount: type === "bandage" ? 3 : 1, x, y });
    }
  }
  addLoot(item, announce = false) {
    if (circleBlocked(this.map, item.x, item.y, 0.3)) {
      for (let i = 0; i < 12; i++) {
        const a = i / 12 * Math.PI * 2;
        const nx = item.x + Math.cos(a) * 1.2, ny = item.y + Math.sin(a) * 1.2;
        if (!circleBlocked(this.map, nx, ny, 0.3)) {
          item.x = nx;
          item.y = ny;
          break;
        }
      }
    }
    item.x = Math.max(2, Math.min(this.map.size - 2, item.x));
    item.y = Math.max(2, Math.min(this.map.size - 2, item.y));
    item.id = this.lootId++;
    this.loot.set(item.id, item);
    if (announce) this.events.push({ t: "la", it: packItem(item) });
    return item;
  }
  removeLoot(id) {
    if (this.loot.delete(id)) this.events.push({ t: "lr", id });
  }
  // ------------------------------------------------------------------ red
  humanCount() {
    let n = 0;
    for (const p of this.players.values()) if (p.conn && !p.left) n++;
    return n;
  }
  startMessageFor(p) {
    return {
      t: "start",
      match: this.id,
      mode: this.mode,
      you: p.id,
      seed: this.map.seed,
      countdown: -this.time,
      players: [...this.players.values()].map((q) => ({ id: q.id, name: q.name, outfit: q.outfit, team: q.team, bot: !!q.bot && !q.wasHuman })),
      loot: [...this.loot.values()].map(packItem),
      crates: this.map.crates.filter((c) => !c.alive).map((c) => c.id),
      zone: this._zoneMsg()
    };
  }
  handleInput(p, msg) {
    if (!p.alive || p.left) return;
    const inp = { s: msg.s | 0, mx: clampNum(msg.mx, -1, 1), my: clampNum(msg.my, -1, 1), b: msg.b | 0, a: clampNum(msg.a, -10, 10) };
    if (inp.s <= p.lastSeq) return;
    p.inputQueue.push(inp);
    if (p.inputQueue.length > 10) p.inputQueue.splice(0, p.inputQueue.length - 10);
  }
  handleAction(p, msg) {
    if (!p.alive || p.left) return;
    if (p.actions.length < 10) p.actions.push({ a: String(msg.a), v: msg.v });
  }
  playerLeft(p) {
    if (p.left) return;
    p.left = true;
    const conn = p.conn;
    p.conn = null;
    if (p.alive && !this.ended) {
      p.wasHuman = true;
      p.bot = new BotController(this, p, "normal");
      p.inputQueue.length = 0;
    }
    if (p.profileId && !p.resultSent) this._recordResult(p, false, true);
    log(`[${this.id}] ${p.name} abandon\xF3 la partida`);
    if (this.humanCount() === 0) this.finish(null, "sin humanos");
    return conn;
  }
  // ------------------------------------------------------------------ bucle
  update() {
    if (this.ended) return;
    const dt = TICK_DT;
    this.tick++;
    this.time += dt;
    if (this.state === "countdown" && this.time >= 0) {
      this.state = "playing";
      this.events.push({ t: "go" });
    }
    const playing = this.state === "playing" || this.state === "ending";
    for (const p of this.players.values()) {
      if (!p.alive) continue;
      if (p.bot) {
        p.inputQueue.length = 0;
        const inp = p.bot.update(dt, playing);
        if (playing) {
          this._move(p, inp, dt);
          p.input = inp;
        }
      } else if (playing) {
        let processed = 0, fired = 0;
        while (p.inputQueue.length && processed < 4) {
          const inp = p.inputQueue.shift();
          this._move(p, inp, dt);
          fired |= inp.b & BTN.FIRE;
          p.lastSeq = inp.s;
          p.input = inp;
          processed++;
        }
        if (fired && !(p.input.b & BTN.FIRE)) p.input = { ...p.input, b: p.input.b | BTN.FIRE };
        if (!processed) p.moving = false;
      } else {
        const last = p.inputQueue.pop();
        if (last) {
          p.lastSeq = last.s;
          p.input = { ...last, mx: 0, my: 0 };
          p.angle = last.a;
        }
        p.inputQueue.length = 0;
      }
      if (playing) this._actionsAndCombat(p, dt);
      else p.actions.length = 0;
    }
    if (playing) {
      this._updateProjectiles(dt);
      this._updateZone(dt);
      this._autoPickup();
    }
    if (this.tick % SNAPSHOT_EVERY === 0) this._broadcast();
  }
  _move(p, inp, dt) {
    p.angle = Number.isFinite(inp.a) ? inp.a : p.angle;
    const ox = p.x, oy = p.y;
    p.moving = applyMovement(p, inp, this.map, dt, { healing: !!p.healing });
    p.sprinting = p.moving && inp.b & BTN.SPRINT && !(inp.b & BTN.ADS);
    p.x = Math.max(0.6, Math.min(this.map.size - 0.6, p.x));
    p.y = Math.max(0.6, Math.min(this.map.size - 0.6, p.y));
    p.vx = (p.x - ox) / dt;
    p.vy = (p.y - oy) / dt;
  }
  _actionsAndCombat(p, dt) {
    for (const act of p.actions) {
      switch (act.a) {
        case "reload":
          this.startReload(p);
          break;
        case "pickup":
          this.tryPickupNearest(p);
          break;
        case "slot":
          this.switchSlot(p, act.v | 0);
          break;
        case "heal":
          this.startHeal(p, act.v === "medkit" ? "medkit" : act.v === "bandage" ? "bandage" : null);
          break;
        case "drop":
          this.dropCurrentWeapon(p);
          break;
      }
    }
    p.actions.length = 0;
    p.fireCd = Math.max(0, p.fireCd - dt);
    if (p.reloading > 0) {
      p.reloading -= dt;
      if (p.reloading <= 0) {
        p.reloading = 0;
        const w2 = p.weapons[p.slot];
        if (w2) {
          const def = WEAPONS[w2.type];
          const need = def.mag - w2.mag;
          const take = Math.min(need, p.ammo[def.ammo]);
          w2.mag += take;
          p.ammo[def.ammo] -= take;
        }
      }
    }
    if (p.healing) {
      p.healing.t -= dt;
      if (p.healing.t <= 0) {
        const h = HEALS[p.healing.type];
        if (p.heals[p.healing.type] > 0) {
          p.heals[p.healing.type]--;
          p.hp = Math.min(Math.max(p.hp, Math.min(h.cap, p.hp + h.heal)), MAX_HP);
          this.events.push({ t: "healed", p: p.id, hp: Math.round(p.hp) });
        }
        p.healing = null;
      }
    }
    const fire = (p.input.b & BTN.FIRE) !== 0;
    const w = p.weapons[p.slot];
    if (fire && w) {
      const def = WEAPONS[w.type];
      const trigger = def.auto || !p.prevFire;
      if (trigger && p.fireCd <= 0) {
        if (p.healing) p.healing = null;
        if (p.reloading > 0) {
          if (w.mag > 0 && def.id === "shotgun") p.reloading = 0;
        }
        if (p.reloading <= 0) {
          if (w.mag > 0) this._shoot(p, w, def);
          else {
            this.startReload(p);
            if (!p.prevFire) this.events.push({ t: "dry", p: p.id });
          }
        }
      }
    }
    p.prevFire = fire;
    if (w && w.mag === 0 && p.reloading <= 0 && p.ammo[WEAPONS[w.type].ammo] > 0 && p.fireCd <= 0 && !p.healing) this.startReload(p);
  }
  _shoot(p, w, def) {
    w.mag--;
    p.fireCd = def.interval;
    let spread = def.spread;
    const b = p.input.b | 0;
    if (b & BTN.ADS) spread *= SPREAD_ADS;
    if (p.z > 0.05) spread *= SPREAD_AIR;
    else if (p.sprinting) spread *= SPREAD_SPRINT;
    else if (p.moving) spread *= SPREAD_MOVING;
    const angles = [];
    const mx = p.x + Math.cos(p.angle) * 0.75, my = p.y + Math.sin(p.angle) * 0.75;
    const blocked = raycast(this.map, p.x, p.y, mx, my);
    const ox = blocked ? p.x : mx, oy = blocked ? p.y : my;
    for (let i = 0; i < def.pellets; i++) {
      const a = p.angle + (this.rng() + this.rng() - 1) * spread;
      angles.push(Math.round(a * 1e3) / 1e3);
      this.projectiles.push({ owner: p.id, team: p.team, x: ox, y: oy, dx: Math.cos(a), dy: Math.sin(a), left: def.range, speed: def.speed, dmg: def.dmg, w: def.id });
    }
    this.events.push({ t: "shot", p: p.id, w: def.id, x: r2(ox), y: r2(oy), as: angles });
    for (const fn of this.listeners.shot) fn(p, def);
  }
  _updateProjectiles(dt) {
    const keep = [];
    for (const pr of this.projectiles) {
      const step = Math.min(pr.speed * dt, pr.left);
      const x1 = pr.x + pr.dx * step, y1 = pr.y + pr.dy * step;
      let bestT = Infinity, hitPlayer = null;
      const wallHit = raycast(this.map, pr.x, pr.y, x1, y1);
      if (wallHit) bestT = wallHit.t;
      for (const q of this.players.values()) {
        if (!q.alive || q.id === pr.owner || q.team === pr.team) continue;
        if (Math.abs(q.x - pr.x) > step + 2 || Math.abs(q.y - pr.y) > step + 2) continue;
        const t = segCircle(pr.x, pr.y, x1 - pr.x, y1 - pr.y, q.x, q.y, HIT_RADIUS);
        if (t < bestT) {
          bestT = t;
          hitPlayer = q;
        }
      }
      if (bestT <= 1) {
        const hx = pr.x + (x1 - pr.x) * bestT, hy = pr.y + (y1 - pr.y) * bestT;
        if (hitPlayer) this.damage(hitPlayer, pr.dmg, this.players.get(pr.owner), pr.w, hx, hy);
        else if (wallHit && wallHit.obj.crate) this._damageCrate(wallHit.obj.crate, pr.dmg, hx, hy);
        continue;
      }
      pr.x = x1;
      pr.y = y1;
      pr.left -= step;
      if (pr.left > 0.01) keep.push(pr);
    }
    this.projectiles = keep;
  }
  _damageCrate(c, dmg, x, y) {
    if (!c.alive) return;
    c.hp -= dmg;
    if (c.hp <= 0) {
      c.alive = false;
      this.nav.updateArea(c.x, c.y, c.w, c.h);
      this.events.push({ t: "cb", id: c.id });
      const cx = c.x + c.w / 2, cy = c.y + c.h / 2;
      const r = this.rng();
      if (r < 0.5) {
        const type = this._randomWeaponType(1);
        this.addLoot({ kind: "weapon", type, mag: WEAPONS[type].mag, x: cx, y: cy }, true);
        const am = WEAPONS[type].ammo;
        this.addLoot({ kind: "ammo", type: am, amount: AMMO[am].pack, x: cx + 0.9, y: cy }, true);
      } else {
        this.addLoot({ kind: "heal", type: this.rng() < 0.5 ? "medkit" : "bandage", amount: 1, x: cx, y: cy }, true);
        const types = Object.keys(AMMO);
        const type = types[Math.floor(this.rng() * types.length)];
        this.addLoot({ kind: "ammo", type, amount: AMMO[type].pack, x: cx + 0.9, y: cy + 0.3 }, true);
      }
    } else this.events.push({ t: "ch", id: c.id, x: r2(x), y: r2(y) });
  }
  damage(target, amount, attacker, weapon, hx, hy) {
    if (!target.alive) return;
    amount = Math.min(amount, target.hp);
    target.hp -= amount;
    target.lastHitBy = attacker ? attacker.id : null;
    target.lastHitTime = this.time;
    if (attacker && attacker !== target) attacker.damage += amount;
    this.events.push({ t: "hit", p: target.id, by: attacker ? attacker.id : 0, d: Math.round(amount), x: r2(hx ?? target.x), y: r2(hy ?? target.y) });
    if (target.healing && weapon !== "zone") target.healing = null;
    for (const fn of this.listeners.damaged) fn(target, attacker, amount);
    if (target.hp <= 1e-3) this.kill(target, attacker, weapon);
  }
  kill(victim, killer, weapon) {
    if (!victim.alive) return;
    victim.alive = false;
    victim.hp = 0;
    victim.deathTime = this.time;
    victim.healing = null;
    victim.reloading = 0;
    if (killer && killer !== victim && killer.team !== victim.team) killer.kills++;
    victim.killedBy = killer && killer !== victim ? killer.id : 0;
    this.events.push({ t: "kill", k: victim.killedBy, v: victim.id, w: weapon });
    this._dropInventory(victim);
    const aliveBefore = this.aliveCount() + 1;
    victim.placement = aliveBefore;
    const teamAlive = [...this.players.values()].some((q) => q.team === victim.team && q.alive);
    if (!teamAlive) {
      this.teamsAlive.delete(victim.team);
      const teamPlacement = this.teamsAlive.size + 1;
      for (const q of this.players.values()) if (q.team === victim.team) q.teamPlacement = teamPlacement;
      this.events.push({ t: "teamout", team: victim.team, place: teamPlacement });
      for (const q of this.players.values()) if (q.team === victim.team && q.profileId && !q.resultSent) this._sendResult(q, false);
    }
    if (this.teamsAlive.size <= 1) {
      const winner = [...this.teamsAlive][0];
      setTimeout(() => this.finish(winner ?? null, "victoria"), 1500);
      this.state = "ending";
    }
  }
  _dropInventory(p) {
    const base = { x: p.x, y: p.y };
    let k = 0;
    const off = () => {
      const a = k++ * 2.1;
      return { x: base.x + Math.cos(a) * (0.6 + k * 0.25), y: base.y + Math.sin(a) * (0.6 + k * 0.25) };
    };
    for (const w of p.weapons) if (w) this.addLoot({ kind: "weapon", type: w.type, mag: w.mag, ...off() }, true);
    for (const [type, n] of Object.entries(p.ammo)) if (n > 0) this.addLoot({ kind: "ammo", type, amount: n, ...off() }, true);
    for (const [type, n] of Object.entries(p.heals)) if (n > 0) this.addLoot({ kind: "heal", type, amount: n, ...off() }, true);
    p.weapons = [null, null];
    p.ammo = { light: 0, medium: 0, shells: 0, heavy: 0 };
    p.heals = { bandage: 0, medkit: 0 };
  }
  aliveCount() {
    let n = 0;
    for (const p of this.players.values()) if (p.alive) n++;
    return n;
  }
  // ------------------------------------------------------------------ acciones
  startReload(p) {
    const w = p.weapons[p.slot];
    if (!w || p.reloading > 0 || p.healing) return false;
    const def = WEAPONS[w.type];
    if (w.mag >= def.mag || p.ammo[def.ammo] <= 0) return false;
    p.reloading = def.reload;
    this.events.push({ t: "rl", p: p.id, w: def.id });
    return true;
  }
  switchSlot(p, i) {
    if (i !== 0 && i !== 1) return;
    if (p.slot === i) return;
    p.slot = i;
    p.reloading = 0;
    p.fireCd = Math.max(p.fireCd, 0.25);
    this.events.push({ t: "sw", p: p.id });
  }
  startHeal(p, type) {
    if (p.healing || p.hp >= MAX_HP) return false;
    if (!type) type = p.hp <= 60 && p.heals.medkit > 0 ? "medkit" : p.heals.bandage > 0 && p.hp < HEALS.bandage.cap ? "bandage" : p.heals.medkit > 0 ? "medkit" : null;
    if (!type || p.heals[type] <= 0) return false;
    if (type === "bandage" && p.hp >= HEALS.bandage.cap) return false;
    p.reloading = 0;
    p.healing = { type, t: HEALS[type].time, total: HEALS[type].time };
    this.events.push({ t: "heal", p: p.id, h: type });
    return true;
  }
  dropCurrentWeapon(p) {
    const w = p.weapons[p.slot];
    if (!w) return;
    p.weapons[p.slot] = null;
    p.reloading = 0;
    this.addLoot({ kind: "weapon", type: w.type, mag: w.mag, x: p.x + Math.cos(p.angle) * 1.2, y: p.y + Math.sin(p.angle) * 1.2 }, true);
  }
  nearestLoot(p, radius = PICKUP_RADIUS, filter = null) {
    let best = null, bd = radius * radius;
    for (const it of this.loot.values()) {
      if (filter && !filter(it)) continue;
      const d = (it.x - p.x) ** 2 + (it.y - p.y) ** 2;
      if (d < bd) {
        bd = d;
        best = it;
      }
    }
    return best;
  }
  tryPickupNearest(p) {
    const it = this.nearestLoot(p, PICKUP_RADIUS, (i) => i.kind === "weapon") || this.nearestLoot(p, PICKUP_RADIUS);
    if (it) return this.pickup(p, it);
    return false;
  }
  pickup(p, it) {
    if (!p.alive || !this.loot.has(it.id)) return false;
    if (Math.hypot(it.x - p.x, it.y - p.y) > PICKUP_RADIUS + 0.3) return false;
    if (it.kind === "weapon") {
      const def = WEAPONS[it.type];
      const same = p.weapons.findIndex((w) => w && w.type === it.type);
      if (same >= 0) {
        const space = AMMO[def.ammo].max - p.ammo[def.ammo];
        if (space <= 0 || it.mag <= 0) return false;
        const take = Math.min(space, it.mag);
        p.ammo[def.ammo] += take;
        it.mag -= take;
        if (it.mag <= 0) this.removeLoot(it.id);
        this.events.push({ t: "pk", p: p.id, k: "ammo", ty: def.ammo });
        return true;
      }
      let slot = p.weapons.findIndex((w) => !w);
      if (slot < 0) {
        slot = p.slot;
        const old = p.weapons[slot];
        this.addLoot({ kind: "weapon", type: old.type, mag: old.mag, x: p.x + (this.rng() - 0.5), y: p.y + (this.rng() - 0.5) }, true);
      }
      p.weapons[slot] = { type: it.type, mag: it.mag };
      p.weaponsPicked++;
      p.slot = slot;
      p.reloading = 0;
      p.fireCd = Math.max(p.fireCd, 0.2);
      this.removeLoot(it.id);
      this.events.push({ t: "pk", p: p.id, k: "weapon", ty: it.type });
      return true;
    }
    if (it.kind === "ammo") {
      const space = AMMO[it.type].max - p.ammo[it.type];
      if (space <= 0) return false;
      const take = Math.min(space, it.amount);
      p.ammo[it.type] += take;
      it.amount -= take;
      if (it.amount <= 0) this.removeLoot(it.id);
      else this.events.push({ t: "lu", id: it.id, amount: it.amount });
      this.events.push({ t: "pk", p: p.id, k: "ammo", ty: it.type });
      return true;
    }
    if (it.kind === "heal") {
      const space = HEALS[it.type].max - p.heals[it.type];
      if (space <= 0) return false;
      const take = Math.min(space, it.amount);
      p.heals[it.type] += take;
      it.amount -= take;
      if (it.amount <= 0) this.removeLoot(it.id);
      else this.events.push({ t: "lu", id: it.id, amount: it.amount });
      this.events.push({ t: "pk", p: p.id, k: "heal", ty: it.type });
      return true;
    }
    return false;
  }
  _autoPickup() {
    if (this.tick % 3) return;
    for (const p of this.players.values()) {
      if (!p.alive) continue;
      const it = this.nearestLoot(p, 1.3, (i) => {
        if (i.kind === "ammo") {
          return p.ammo[i.type] < AMMO[i.type].max && p.weapons.some((w) => w && WEAPONS[w.type].ammo === i.type);
        }
        if (i.kind === "heal") return p.heals[i.type] < HEALS[i.type].max;
        return false;
      });
      if (it) this.pickup(p, it);
    }
  }
  // ------------------------------------------------------------------ zona
  _updateZone(dt) {
    const z = this.zone;
    z.timer -= dt;
    if (z.timer <= 0) {
      if (z.stage === "wait") {
        if (z.phase < 0 || z.phase >= ZONE_PHASES.length) {
          this._nextZonePhase();
        } else {
          z.stage = "shrink";
          z.timer = ZONE_PHASES[z.phase].shrink / ZONE_SPEED;
          z.sx = z.cx;
          z.sy = z.cy;
          z.sr = z.r;
          this.events.push({ t: "zone", s: "shrink" });
        }
      } else if (z.stage === "shrink") {
        z.cx = z.tx;
        z.cy = z.ty;
        z.r = z.tr;
        if (z.phase + 1 < ZONE_PHASES.length) this._nextZonePhase();
        else {
          z.stage = "done";
          z.timer = 99999;
        }
      }
    }
    if (z.stage === "shrink") {
      const total = ZONE_PHASES[z.phase].shrink / ZONE_SPEED;
      const k = 1 - Math.max(0, z.timer) / total;
      z.cx = z.sx + (z.tx - z.sx) * k;
      z.cy = z.sy + (z.ty - z.sy) * k;
      z.r = z.sr + (z.tr - z.sr) * k;
    }
    if (this.tick % TICK_RATE === 0 && z.dps > 0) {
      for (const p of this.players.values()) {
        if (!p.alive) continue;
        if (Math.hypot(p.x - z.cx, p.y - z.cy) > z.r) this.damage(p, z.dps, null, "zone", p.x, p.y);
      }
    }
  }
  _nextZonePhase() {
    const z = this.zone;
    z.phase++;
    const ph = ZONE_PHASES[z.phase];
    z.stage = "wait";
    z.timer = ph.wait / ZONE_SPEED;
    z.dps = ph.dps;
    const maxOff = Math.max(0, z.r - ph.r) * 0.85;
    for (let i = 0; i < 30; i++) {
      const a = this.rng() * Math.PI * 2, d = Math.sqrt(this.rng()) * maxOff;
      const tx = z.cx + Math.cos(a) * d, ty = z.cy + Math.sin(a) * d;
      const margin = Math.min(ph.r, 40) + 10;
      if (tx < margin || ty < margin || tx > this.map.size - margin || ty > this.map.size - margin) continue;
      z.tx = tx;
      z.ty = ty;
      break;
    }
    if (z.phase === 0) {
      z.tx = z.cx + (this.rng() - 0.5) * 60;
      z.ty = z.cy + (this.rng() - 0.5) * 60;
    }
    z.tr = ph.r;
    this.events.push({ t: "zone", s: "new", ph: z.phase });
  }
  _zoneMsg() {
    const z = this.zone;
    return { cx: r2(z.cx), cy: r2(z.cy), r: r2(z.r), tx: r2(z.tx), ty: r2(z.ty), tr: r2(z.tr), st: z.stage, tl: Math.max(0, Math.round(z.timer * 10) / 10), ph: z.phase, dps: z.dps };
  }
  // ------------------------------------------------------------------ difusión
  _broadcast() {
    const list = [];
    for (const p of this.players.values()) {
      const w = p.weapons[p.slot];
      const flags = (p.alive ? 1 : 0) | (p.moving ? 2 : 0) | (p.sprinting ? 4 : 0) | (p.reloading > 0 ? 8 : 0) | (p.healing ? 16 : 0) | (p.input.b & BTN.ADS ? 32 : 0) | (p.input.b & BTN.FIRE ? 64 : 0);
      list.push([p.id, r2(p.x), r2(p.y), r2(p.z), Math.round(p.angle * 100) / 100, Math.ceil(p.hp), flags, w ? WEAPON_IDS.indexOf(w.type) : -1]);
    }
    const common = { t: "s", tk: this.tick, tm: Math.round(this.time * 10) / 10, p: list, z: this._zoneMsg(), al: this.aliveCount(), at: this.teamsAlive.size, ev: this.events };
    this.events = [];
    for (const p of this.players.values()) {
      if (!p.conn || p.left) continue;
      const me = {
        hp: Math.ceil(p.hp),
        sl: p.slot,
        w: p.weapons.map((w) => w ? [w.type, w.mag] : null),
        am: p.ammo,
        he: p.heals,
        rl: Math.round(p.reloading * 100) / 100,
        hl: p.healing ? [p.healing.type, Math.round(p.healing.t * 100) / 100, p.healing.total] : null,
        k: p.kills,
        ack: p.lastSeq,
        x: r2(p.x),
        y: r2(p.y),
        z: Math.round(p.z * 1e3) / 1e3,
        vz: Math.round(p.vz * 1e3) / 1e3
      };
      p.conn.sendJson({ ...common, me });
    }
  }
  // ------------------------------------------------------------------ fin
  _recordResult(p, won, abandoned = false) {
    if (!p.profileId || p.resultSent) return null;
    p.resultSent = true;
    const survived = Math.max(0, p.alive ? this.time : p.deathTime);
    const placement = won ? 1 : p.teamPlacement || this.teamsAlive.size + (abandoned ? 1 : 0) || 2;
    return this.profiles.recordMatch(p.profileId, {
      mode: this.mode,
      won,
      kills: p.kills,
      damage: Math.round(p.damage),
      survived,
      placement,
      abandoned,
      weapons: p.weaponsPicked
    });
  }
  _sendResult(p, won) {
    const res = this._recordResult(p, won);
    if (!res || !p.conn) return;
    const teammates = [...this.players.values()].filter((q) => q.team === p.team).map((q) => ({ name: q.name, kills: q.kills, damage: Math.round(q.damage), alive: q.alive }));
    p.conn.sendJson({
      t: "result",
      won,
      placement: res.placement,
      kills: p.kills,
      damage: Math.round(p.damage),
      survived: Math.round(res.survived),
      xp: res.xp,
      xpBreakdown: res.breakdown,
      profile: res.profile,
      levelUp: res.levelUp,
      levelRewards: res.levelRewards,
      coins: res.coins,
      teammates,
      total: this.players.size,
      mode: this.mode,
      outfit: p.outfit,
      name: p.name,
      leaderboard: this._leaderboard()
    });
  }
  _leaderboard() {
    return [...this.players.values()].sort((a, b) => b.kills - a.kills || b.damage - a.damage).slice(0, 8).map((q) => ({ name: q.name, kills: q.kills, damage: Math.round(q.damage), team: q.team }));
  }
  finish(winnerTeam, reason) {
    if (this.ended) return;
    this._broadcast();
    for (const p of this.players.values()) {
      if (p.profileId && !p.resultSent) this._sendResult(p, winnerTeam !== null && p.team === winnerTeam);
    }
    this.ended = true;
    log(`[${this.id}] fin de partida (${reason}). Equipo ganador: ${winnerTeam}`);
    this.onEnd && this.onEnd(this);
  }
};
function r2(v) {
  return Math.round(v * 100) / 100;
}
function clampNum(v, min, max) {
  v = Number(v);
  if (!Number.isFinite(v)) return 0;
  return Math.max(min, Math.min(max, v));
}
function packItem(it) {
  const o = { id: it.id, k: it.kind, ty: it.type, x: r2(it.x), y: r2(it.y) };
  if (it.kind === "weapon") o.m = it.mag;
  else o.n = it.amount;
  return o;
}

// server/matchmaker.js
var Matchmaker = class {
  constructor({ profiles: profiles2, waitSeconds = 10 }) {
    this.profiles = profiles2;
    this.waitSeconds = waitSeconds;
    this.clients = /* @__PURE__ */ new Set();
    this.parties = /* @__PURE__ */ new Map();
    this.rooms = [];
    this.matches = /* @__PURE__ */ new Set();
  }
  // ---------------------------------------------------------------- clientes
  addClient(c) {
    this.clients.add(c);
    c.state = "lobby";
    c.party = null;
    c.room = null;
    c.match = null;
    c.player = null;
  }
  removeClient(c) {
    this.clients.delete(c);
    this.leaveQueue(c, true);
    this.leaveParty(c);
    if (c.match && c.player) c.match.playerLeft(c.player);
    c.match = null;
    c.player = null;
  }
  stats() {
    let inQueue = 0;
    for (const r of this.rooms) for (const g of r.groups) inQueue += g.members.length;
    return { online: this.clients.size, inQueue, matches: this.matches.size };
  }
  // ---------------------------------------------------------------- grupos
  createParty(c) {
    if (c.party) return c.party;
    let code;
    do {
      code = crypto2.randomBytes(3).toString("hex").toUpperCase().slice(0, 5);
    } while (this.parties.has(code));
    const party = { code, leader: c, members: [c], mode: "duos", private: false };
    this.parties.set(code, party);
    c.party = party;
    this.broadcastParty(party);
    return party;
  }
  joinParty(c, code) {
    code = String(code || "").trim().toUpperCase();
    const party = this.parties.get(code);
    if (!party) return c.sendJson({ t: "error", msg: "No existe ning\xFAn grupo con ese c\xF3digo." });
    if (party === c.party) return;
    if (party.members.length >= 4) return c.sendJson({ t: "error", msg: "El grupo est\xE1 completo (m\xE1ximo 4)." });
    if (c.state !== "lobby") return c.sendJson({ t: "error", msg: "Termina la partida o sal de la cola antes de unirte." });
    if (party.leader.room) return c.sendJson({ t: "error", msg: "El grupo ya est\xE1 buscando partida. Int\xE9ntalo en unos segundos." });
    this.leaveParty(c);
    party.members.push(c);
    c.party = party;
    this.broadcastParty(party);
  }
  leaveParty(c) {
    const party = c.party;
    if (!party) return;
    if (c.room) this.leaveQueue(c);
    party.members = party.members.filter((m) => m !== c);
    c.party = null;
    c.sendJson({ t: "party", party: null });
    if (!party.members.length) {
      this.parties.delete(party.code);
      return;
    }
    if (party.leader === c) party.leader = party.members[0];
    this.broadcastParty(party);
  }
  setPartyMode(c, mode) {
    if (c.party && c.party.leader === c && MODES[mode]) {
      c.party.mode = mode;
      this.broadcastParty(c.party);
    }
  }
  setPartyPrivate(c, v) {
    if (c.party && c.party.leader === c) {
      c.party.private = v;
      this.broadcastParty(c.party);
    }
  }
  broadcastParty(party) {
    const msg = {
      t: "party",
      party: {
        code: party.code,
        mode: party.mode,
        private: !!party.private,
        leader: party.leader.profile.id,
        members: party.members.map((m) => ({ id: m.profile.id, name: m.profile.name, outfit: this.profiles.outfitFor(m.profile), level: this.profiles.level(m.profile), state: m.state }))
      }
    };
    for (const m of party.members) m.sendJson(msg);
  }
  // ---------------------------------------------------------------- cola
  queue(c, mode, botLevel) {
    if (!MODES[mode]) return c.sendJson({ t: "error", msg: "Modo de juego desconocido." });
    if (c.party && c.party.leader !== c) return c.sendJson({ t: "error", msg: "Solo el l\xEDder del grupo puede iniciar la b\xFAsqueda." });
    const members = c.party ? c.party.members.slice() : [c];
    const def = MODES[mode];
    if (members.length > def.teamSize) return c.sendJson({ t: "error", msg: `Tu grupo tiene ${members.length} jugadores y ${def.name} admite equipos de ${def.teamSize}. Elige otro modo.` });
    if (members.some((m) => m.state !== "lobby")) return c.sendJson({ t: "error", msg: "Alg\xFAn miembro del grupo sigue en una partida." });
    const group = { members, botLevel: ["easy", "normal", "hard", "mixed"].includes(botLevel) ? botLevel : "mixed" };
    const teamCount = this.teamSizes(mode).length;
    if (c.party && c.party.private) {
      const room2 = { id: crypto2.randomBytes(3).toString("hex"), mode, groups: [group], deadline: Date.now(), starting: false, private: true };
      for (const m of members) {
        m.state = "queue";
        m.room = room2;
      }
      log(`Sala privada ${mode}: ${members.map((m) => m.profile.name).join(", ")}`);
      this.startRoom(room2);
      return;
    }
    let room = this.rooms.find((r) => r.mode === mode && r.groups.length < teamCount && !r.starting);
    if (!room) {
      room = { id: crypto2.randomBytes(3).toString("hex"), mode, groups: [], deadline: Date.now() + this.waitSeconds * 1e3, starting: false };
      this.rooms.push(room);
    }
    room.groups.push(group);
    for (const m of members) {
      m.state = "queue";
      m.room = room;
    }
    log(`Cola ${mode}: ${members.map((m) => m.profile.name).join(", ")} (sala ${room.id}, grupos ${room.groups.length}/${teamCount})`);
    if (c.party) this.broadcastParty(c.party);
    this.sendRoomStatus(room);
    if (room.groups.length >= teamCount) this.startRoom(room);
  }
  leaveQueue(c, silent = false) {
    const room = c.room;
    if (!room) return;
    const group = room.groups.find((g) => g.members.includes(c));
    if (group) {
      room.groups = room.groups.filter((g) => g !== group);
      for (const m of group.members) {
        m.room = null;
        m.state = "lobby";
        if (m !== c || !silent) m.sendJson({ t: "queue", active: false });
      }
      if (c.party) this.broadcastParty(c.party);
    }
    c.room = null;
    if (c.state === "queue") c.state = "lobby";
    if (!room.groups.length) this.rooms = this.rooms.filter((r) => r !== room);
    else this.sendRoomStatus(room);
  }
  teamSizes(mode) {
    const def = MODES[mode];
    const sizes = [];
    let left = def.capacity;
    while (left > 0) {
      const s = Math.min(def.teamSize, left);
      sizes.push(s);
      left -= s;
    }
    return sizes;
  }
  sendRoomStatus(room) {
    const humans = room.groups.reduce((a, g) => a + g.members.length, 0);
    const msg = { t: "queue", active: true, mode: room.mode, humans, capacity: MODES[room.mode].capacity, seconds: Math.max(0, Math.ceil((room.deadline - Date.now()) / 1e3)) };
    for (const g of room.groups) for (const m of g.members) m.sendJson(msg);
  }
  tick() {
    const now = Date.now();
    for (const room of this.rooms.slice()) {
      if (room.starting) continue;
      if (now >= room.deadline) this.startRoom(room);
      else this.sendRoomStatus(room);
    }
  }
  startRoom(room) {
    if (room.starting) return;
    room.starting = true;
    this.rooms = this.rooms.filter((r) => r !== room);
    const sizes = this.teamSizes(room.mode).sort((a, b) => b - a);
    const groups = room.groups.slice().sort((a, b) => b.members.length - a.members.length);
    const entrants = sizes.map((size, i) => {
      const g = groups[i];
      if (!g) return { humans: [], bots: size };
      return { humans: g.members.map((m) => ({ conn: m, profile: m.profile })), bots: Math.max(0, size - g.members.length) };
    });
    const botLevel = groups[0] ? groups[0].botLevel : "mixed";
    let match;
    try {
      match = new Match({ mode: room.mode, entrants, botLevel, profiles: this.profiles, onEnd: (m) => this.onMatchEnd(m) });
    } catch (e) {
      log("Error creando la partida:", e);
      for (const g of groups) for (const m of g.members) {
        m.state = "lobby";
        m.room = null;
        m.sendJson({ t: "error", msg: "No se pudo crear la partida. Int\xE9ntalo de nuevo." });
        m.sendJson({ t: "queue", active: false });
      }
      return;
    }
    this.matches.add(match);
    for (const p of match.players.values()) {
      if (!p.conn) continue;
      const c = p.conn;
      c.state = "match";
      c.room = null;
      c.match = match;
      c.player = p;
      c.sendJson(match.startMessageFor(p));
    }
    for (const g of groups) for (const m of g.members) if (m.party) this.broadcastParty(m.party);
  }
  onMatchEnd(match) {
    setTimeout(() => {
      this.matches.delete(match);
      for (const c of this.clients) if (c.match === match) {
        c.match = null;
        c.player = null;
        c.state = "lobby";
        if (c.party) this.broadcastParty(c.party);
      }
    }, 4e3);
  }
  leaveMatch(c) {
    if (c.match && c.player) c.match.playerLeft(c.player);
    c.match = null;
    c.player = null;
    c.state = "lobby";
    if (c.party) this.broadcastParty(c.party);
  }
  update() {
    for (const m of this.matches) {
      if (m.ended) continue;
      try {
        m.update();
      } catch (e) {
        log(`[${m.id}] error en la simulaci\xF3n:`, e);
        m.finish(null, "error interno");
      }
    }
  }
};

// server/payments.js
import crypto3 from "crypto";
var KEY = process.env.STRIPE_SECRET_KEY || "";
var WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";
var PUBLIC_URL = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
var paymentsEnabled = () => !!(KEY && WEBHOOK_SECRET && PUBLIC_URL);
async function createCheckout(profile, packId) {
  const pack = COIN_PACKS.find((p) => p.id === packId);
  if (!pack) throw new Error("Paquete no v\xE1lido");
  const form = new URLSearchParams({
    mode: "payment",
    success_url: `${PUBLIC_URL}/?compra=ok`,
    cancel_url: `${PUBLIC_URL}/?compra=cancelada`,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "eur",
    "line_items[0][price_data][unit_amount]": String(pack.price),
    "line_items[0][price_data][product_data][name]": `Isla Royale \xB7 ${pack.label}`,
    "metadata[profile_id]": profile.id,
    "metadata[pack_id]": pack.id,
    client_reference_id: profile.id
  });
  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: form
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Error de Stripe");
  return data.url;
}
function verifyWebhook(rawBody, header, secret = WEBHOOK_SECRET, toleranceSec = 300) {
  if (!secret || !header) return null;
  const parts = Object.fromEntries(String(header).split(",").map((kv) => kv.split("=").map((s) => s.trim())).filter((x) => x.length === 2));
  const t = Number(parts.t);
  const sigs = String(header).split(",").filter((x) => x.trim().startsWith("v1=")).map((x) => x.trim().slice(3));
  if (!t || !sigs.length) return null;
  if (Math.abs(Date.now() / 1e3 - t) > toleranceSec) return null;
  const expected = crypto3.createHmac("sha256", secret).update(`${t}.${rawBody}`).digest("hex");
  const ok = sigs.some((s) => s.length === expected.length && crypto3.timingSafeEqual(Buffer.from(s), Buffer.from(expected)));
  if (!ok) return null;
  try {
    return JSON.parse(rawBody);
  } catch {
    return null;
  }
}

// server/index.js
var __dirname = path2.dirname(fileURLToPath(import.meta.url));
var ROOT = path2.resolve(__dirname, "..");
var PORT = Number(process.env.PORT || process.argv[2] || 3e3);
var WAIT = Number(process.env.MATCH_WAIT || 10);
var ADS_CLIENT = /^ca-pub-\d{10,20}$/.test(process.env.ADSENSE_CLIENT || "") ? process.env.ADSENSE_CLIENT : "";
var ADS_TEST = process.env.ADS_TEST === "1";
var MIME = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".png": "image/png", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".woff2": "font/woff2" };
var FLAT = fs2.existsSync(path2.join(__dirname, "index.html"));
var STATIC = FLAT ? [{ prefix: "/", dir: __dirname }] : [
  { prefix: "/shared/", dir: path2.join(ROOT, "shared") },
  { prefix: "/", dir: path2.join(ROOT, "client") }
];
var DATA_DIR = process.env.DATA_DIR || (FLAT ? path2.join(__dirname, "data") : path2.join(ROOT, "data"));
var fileCache = /* @__PURE__ */ new Map();
function loadStatic(file) {
  const st = fs2.statSync(file);
  const c = fileCache.get(file);
  if (c && c.mtime === st.mtimeMs) return c;
  const buf = fs2.readFileSync(file);
  const type = MIME[path2.extname(file)] || "application/octet-stream";
  const compressible = /text|javascript|json|svg/.test(type);
  const entry = { buf, gz: compressible ? zlib.gzipSync(buf, { level: 9 }) : null, type, mtime: st.mtimeMs, etag: '"' + st.size.toString(36) + "-" + Math.floor(st.mtimeMs).toString(36) + '"' };
  fileCache.set(file, entry);
  return entry;
}
var server = http.createServer((req, res) => {
  try {
    let url = decodeURIComponent((req.url || "/").split("?")[0]);
    if (url === "/") url = "/index.html";
    if (req.method === "OPTIONS") {
      res.writeHead(204, { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET", "Access-Control-Max-Age": "86400" });
      return res.end();
    }
    if (url === "/api/config") {
      res.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" });
      return res.end(JSON.stringify({ adsClient: ADS_CLIENT, adsTest: ADS_TEST, payments: paymentsEnabled() }));
    }
    if (url === "/api/stripe/webhook" && req.method === "POST") {
      let raw = "";
      req.on("data", (d) => {
        raw += d;
        if (raw.length > 1e6) req.destroy();
      });
      req.on("end", () => {
        const ev = verifyWebhook(raw, req.headers["stripe-signature"]);
        if (!ev) {
          res.writeHead(400);
          return res.end("firma no v\xE1lida");
        }
        if (ev.type === "checkout.session.completed" && ev.data?.object?.payment_status === "paid") {
          const s = ev.data.object;
          const r = profiles.creditPurchase(s.metadata?.profile_id, s.metadata?.pack_id, s.id);
          const c = r && online.get(s.metadata.profile_id);
          if (c) {
            c.sendJson({ t: "profile", profile: r.profile });
            c.sendJson({ t: "reward", reward: { title: "\xA1Compra completada!", coins: r.coins } });
          }
        }
        res.writeHead(200);
        res.end("ok");
      });
      return;
    }
    if (url === "/ads.txt") {
      res.writeHead(ADS_CLIENT ? 200 : 404, { "Content-Type": "text/plain" });
      return res.end(ADS_CLIENT ? `google.com, ${ADS_CLIENT.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0
` : "");
    }
    if (url === "/api/status" || url === "/healthz") {
      res.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" });
      return res.end(JSON.stringify({ ok: true, ...mm.stats() }));
    }
    for (const s of STATIC) {
      if (!url.startsWith(s.prefix)) continue;
      const file = path2.resolve(s.dir, "." + url.slice(s.prefix.length - 1));
      if (!file.startsWith(s.dir)) break;
      if (fs2.existsSync(file) && fs2.statSync(file).isFile()) {
        const e = loadStatic(file);
        const headers = { "Content-Type": e.type, ETag: e.etag, "Cache-Control": url.startsWith("/vendor/") ? "public, max-age=604800" : "no-cache", Vary: "Accept-Encoding" };
        if (req.headers["if-none-match"] === e.etag) {
          res.writeHead(304, headers);
          return res.end();
        }
        const gzip = e.gz && /\bgzip\b/.test(req.headers["accept-encoding"] || "");
        if (gzip) headers["Content-Encoding"] = "gzip";
        res.writeHead(200, headers);
        return res.end(gzip ? e.gz : e.buf);
      }
    }
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("No encontrado");
  } catch (e) {
    res.writeHead(500);
    res.end("Error");
  }
});
var profiles = new ProfileStore(DATA_DIR);
var mm = new Matchmaker({ profiles, waitSeconds: WAIT });
var wss = new import_websocket_server.default({ server, maxPayload: 64 * 1024 });
var online = /* @__PURE__ */ new Map();
wss.on("connection", (ws, req) => {
  const c = {
    ws,
    profile: null,
    alive: true,
    ip: req.socket.remoteAddress,
    sendJson(o) {
      if (ws.readyState !== 1) return;
      if (ws.bufferedAmount > 15e5) return;
      ws.send(JSON.stringify(o));
    }
  };
  ws.on("pong", () => {
    c.alive = true;
  });
  let msgCount = 0, msgWindow = Date.now();
  ws.on("message", (raw) => {
    const now = Date.now();
    if (now - msgWindow > 1e3) {
      msgWindow = now;
      msgCount = 0;
    }
    if (++msgCount > 200) return;
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }
    if (!msg || typeof msg.t !== "string") return;
    try {
      handle(c, msg);
    } catch (e) {
      log("Error procesando mensaje", msg.t, e);
    }
  });
  ws.on("close", () => {
    if (c.profile) {
      if (online.get(c.profile.id) === c) online.delete(c.profile.id);
      log(`Desconectado: ${c.profile.name}`);
      mm.removeClient(c);
    }
  });
  ws.on("error", () => {
  });
});
function handle(c, msg) {
  if (msg.t === "ping") return c.sendJson({ t: "pong", c: msg.c });
  if (msg.t === "hello") {
    if (c.profile) return;
    let profile = profiles.get(msg.id);
    const restored = msg.token ? profiles.restore(msg.token) : null;
    if (restored && (!profile || restored.id === msg.id)) profile = restored;
    let duplicate = false;
    if (profile && online.has(profile.id)) {
      duplicate = true;
      profile = null;
    }
    if (!profile) profile = profiles.create(msg.name || "");
    profile.lastSeen = Date.now();
    c.profile = profile;
    online.set(profile.id, c);
    mm.addClient(c);
    log(`Conectado: ${profile.name} (${c.ip})${duplicate ? " [perfil temporal: ya hab\xEDa una sesi\xF3n abierta]" : ""}`);
    return c.sendJson({ t: "welcome", profile: profiles.publicView(profile), duplicate, stats: mm.stats(), wait: WAIT });
  }
  if (!c.profile) return;
  const p = c.profile;
  switch (msg.t) {
    case "i":
      if (c.match && c.player) c.match.handleInput(c.player, msg);
      break;
    case "a":
      if (c.match && c.player) c.match.handleAction(c.player, msg);
      break;
    case "setName":
      profiles.setName(p.id, msg.name);
      c.sendJson({ t: "profile", profile: profiles.publicView(p) });
      if (c.party) mm.broadcastParty(c.party);
      break;
    case "setOutfit":
      econ(c, p, profiles.setOutfit(p.id, msg.outfit), "Apariencia guardada");
      if (c.party) mm.broadcastParty(c.party);
      break;
    case "buy":
      econ(c, p, profiles.buyItem(p.id, String(msg.id)));
      break;
    case "claimMission":
      econ(c, p, profiles.claimMission(p.id, String(msg.id)));
      break;
    case "claimDaily":
      econ(c, p, profiles.claimDaily(p.id));
      break;
    case "adStart": {
      if (!ADS_CLIENT) {
        c.sendJson({ t: "error", msg: "Los anuncios a\xFAn no est\xE1n activados en este servidor." });
        break;
      }
      const r = profiles.startAd(p.id, String(msg.kind), msg.id ? String(msg.id) : null);
      if (r.error) c.sendJson({ t: "error", msg: r.error, ad: true });
      else c.sendJson({ t: "adToken", token: r.token, kind: msg.kind, id: msg.id || null, req: msg.req });
      break;
    }
    case "adDone": {
      const r = profiles.finishAd(p.id, String(msg.token));
      if (r.bonus) c.sendJson({ t: "doubled", bonus: r.bonus, profile: profiles.publicView(p) });
      econ(c, p, r);
      break;
    }
    case "buyPack": {
      if (!paymentsEnabled()) {
        c.sendJson({ t: "error", msg: "Las compras a\xFAn no est\xE1n activadas." });
        break;
      }
      createCheckout(p, String(msg.id)).then((url) => c.sendJson({ t: "checkout", url })).catch((e) => c.sendJson({ t: "error", msg: "No se pudo abrir el pago: " + e.message }));
      break;
    }
    case "profile":
      c.sendJson({ t: "profile", profile: profiles.publicView(p) });
      break;
    case "queue":
      if (c.state === "lobby") mm.queue(c, msg.mode, msg.bots);
      break;
    case "cancel":
      mm.leaveQueue(c);
      break;
    case "partyCreate":
      if (c.state === "lobby") mm.createParty(c);
      break;
    case "partyJoin":
      mm.joinParty(c, msg.code);
      break;
    case "partyLeave":
      mm.leaveParty(c);
      break;
    case "partyMode":
      mm.setPartyMode(c, msg.mode);
      break;
    case "partyPrivate":
      mm.setPartyPrivate(c, !!msg.v);
      break;
    case "leave":
      mm.leaveMatch(c);
      c.sendJson({ t: "profile", profile: profiles.publicView(p) });
      break;
  }
}
function econ(c, p, r, okMsg) {
  if (!r) return;
  if (r.error) return c.sendJson({ t: "error", msg: r.error });
  c.sendJson({ t: "profile", profile: profiles.publicView(p) });
  if (r.reward) c.sendJson({ t: "reward", reward: r.reward });
  else if (okMsg) c.sendJson({ t: "info", msg: okMsg });
}
var stepMs = 1e3 / TICK_RATE;
var next = performance.now();
function loop() {
  const now = performance.now();
  let steps = 0;
  while (now >= next && steps < 5) {
    mm.update();
    next += stepMs;
    steps++;
  }
  if (now - next > 250) next = now;
  setTimeout(loop, Math.max(0, next - performance.now()));
}
loop();
setInterval(() => mm.tick(), 1e3);
setInterval(() => {
  const s = mm.stats();
  for (const c of mm.clients) c.sendJson({ t: "online", ...s });
}, 4e3);
setInterval(() => {
  for (const ws of wss.clients) {
    const c = [...mm.clients].find((x) => x.ws === ws);
    if (c && !c.alive) {
      ws.terminate();
      continue;
    }
    if (c) c.alive = false;
    try {
      ws.ping();
    } catch {
    }
  }
}, 15e3);
server.on("error", (e) => {
  if (e.code === "EADDRINUSE") log(`El puerto ${PORT} ya est\xE1 en uso. \xBFHay otro servidor abierto? Cierra la otra ventana o usa otro puerto: node server/index.js 3001`);
  else log("Error del servidor:", e.message);
  process.exit(1);
});
server.listen(PORT, "0.0.0.0", () => {
  log("=================================================");
  log(`  ISLA ROYALE - servidor en marcha (puerto ${PORT})`);
  log(`  Jugar en este PC:   http://localhost:${PORT}`);
  for (const ifs of Object.values(os.networkInterfaces())) for (const i of ifs || []) {
    if (i.family === "IPv4" && !i.internal) log(`  Amigos en tu red:   http://${i.address}:${PORT}`);
  }
  log("  Cierra esta ventana para apagar el servidor.");
  log("=================================================");
});
var shutdown = () => {
  profiles.flush();
  process.exit(0);
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
