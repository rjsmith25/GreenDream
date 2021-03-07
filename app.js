/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/http.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/adapters/http.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"./node_modules/axios/lib/core/buildFullPath.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar httpFollow = __webpack_require__(/*! follow-redirects */ \"./node_modules/follow-redirects/index.js\").http;\nvar httpsFollow = __webpack_require__(/*! follow-redirects */ \"./node_modules/follow-redirects/index.js\").https;\nvar url = __webpack_require__(/*! url */ \"url\");\nvar zlib = __webpack_require__(/*! zlib */ \"zlib\");\nvar pkg = __webpack_require__(/*! ./../../package.json */ \"./node_modules/axios/package.json\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\nvar enhanceError = __webpack_require__(/*! ../core/enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\nvar isHttps = /https:?/;\n\n/**\n *\n * @param {http.ClientRequestArgs} options\n * @param {AxiosProxyConfig} proxy\n * @param {string} location\n */\nfunction setProxy(options, proxy, location) {\n  options.hostname = proxy.host;\n  options.host = proxy.host;\n  options.port = proxy.port;\n  options.path = location;\n\n  // Basic proxy authorization\n  if (proxy.auth) {\n    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');\n    options.headers['Proxy-Authorization'] = 'Basic ' + base64;\n  }\n\n  // If a proxy is used, any redirects must also pass through the proxy\n  options.beforeRedirect = function beforeRedirect(redirection) {\n    redirection.headers.host = redirection.host;\n    setProxy(redirection, proxy, redirection.href);\n  };\n}\n\n/*eslint consistent-return:0*/\nmodule.exports = function httpAdapter(config) {\n  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {\n    var resolve = function resolve(value) {\n      resolvePromise(value);\n    };\n    var reject = function reject(value) {\n      rejectPromise(value);\n    };\n    var data = config.data;\n    var headers = config.headers;\n\n    // Set User-Agent (required by some servers)\n    // Only set header if it hasn't been set in config\n    // See https://github.com/axios/axios/issues/69\n    if (!headers['User-Agent'] && !headers['user-agent']) {\n      headers['User-Agent'] = 'axios/' + pkg.version;\n    }\n\n    if (data && !utils.isStream(data)) {\n      if (Buffer.isBuffer(data)) {\n        // Nothing to do...\n      } else if (utils.isArrayBuffer(data)) {\n        data = Buffer.from(new Uint8Array(data));\n      } else if (utils.isString(data)) {\n        data = Buffer.from(data, 'utf-8');\n      } else {\n        return reject(createError(\n          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',\n          config\n        ));\n      }\n\n      // Add Content-Length header if data exists\n      headers['Content-Length'] = data.length;\n    }\n\n    // HTTP basic authentication\n    var auth = undefined;\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      auth = username + ':' + password;\n    }\n\n    // Parse url\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    var parsed = url.parse(fullPath);\n    var protocol = parsed.protocol || 'http:';\n\n    if (!auth && parsed.auth) {\n      var urlAuth = parsed.auth.split(':');\n      var urlUsername = urlAuth[0] || '';\n      var urlPassword = urlAuth[1] || '';\n      auth = urlUsername + ':' + urlPassword;\n    }\n\n    if (auth) {\n      delete headers.Authorization;\n    }\n\n    var isHttpsRequest = isHttps.test(protocol);\n    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;\n\n    var options = {\n      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\\?/, ''),\n      method: config.method.toUpperCase(),\n      headers: headers,\n      agent: agent,\n      agents: { http: config.httpAgent, https: config.httpsAgent },\n      auth: auth\n    };\n\n    if (config.socketPath) {\n      options.socketPath = config.socketPath;\n    } else {\n      options.hostname = parsed.hostname;\n      options.port = parsed.port;\n    }\n\n    var proxy = config.proxy;\n    if (!proxy && proxy !== false) {\n      var proxyEnv = protocol.slice(0, -1) + '_proxy';\n      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];\n      if (proxyUrl) {\n        var parsedProxyUrl = url.parse(proxyUrl);\n        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;\n        var shouldProxy = true;\n\n        if (noProxyEnv) {\n          var noProxy = noProxyEnv.split(',').map(function trim(s) {\n            return s.trim();\n          });\n\n          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {\n            if (!proxyElement) {\n              return false;\n            }\n            if (proxyElement === '*') {\n              return true;\n            }\n            if (proxyElement[0] === '.' &&\n                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {\n              return true;\n            }\n\n            return parsed.hostname === proxyElement;\n          });\n        }\n\n        if (shouldProxy) {\n          proxy = {\n            host: parsedProxyUrl.hostname,\n            port: parsedProxyUrl.port,\n            protocol: parsedProxyUrl.protocol\n          };\n\n          if (parsedProxyUrl.auth) {\n            var proxyUrlAuth = parsedProxyUrl.auth.split(':');\n            proxy.auth = {\n              username: proxyUrlAuth[0],\n              password: proxyUrlAuth[1]\n            };\n          }\n        }\n      }\n    }\n\n    if (proxy) {\n      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');\n      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);\n    }\n\n    var transport;\n    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);\n    if (config.transport) {\n      transport = config.transport;\n    } else if (config.maxRedirects === 0) {\n      transport = isHttpsProxy ? https : http;\n    } else {\n      if (config.maxRedirects) {\n        options.maxRedirects = config.maxRedirects;\n      }\n      transport = isHttpsProxy ? httpsFollow : httpFollow;\n    }\n\n    if (config.maxBodyLength > -1) {\n      options.maxBodyLength = config.maxBodyLength;\n    }\n\n    // Create the request\n    var req = transport.request(options, function handleResponse(res) {\n      if (req.aborted) return;\n\n      // uncompress the response body transparently if required\n      var stream = res;\n\n      // return the last request in case of redirects\n      var lastRequest = res.req || req;\n\n\n      // if no content, is HEAD request or decompress disabled we should not decompress\n      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {\n        switch (res.headers['content-encoding']) {\n        /*eslint default-case:0*/\n        case 'gzip':\n        case 'compress':\n        case 'deflate':\n        // add the unzipper to the body stream processing pipeline\n          stream = stream.pipe(zlib.createUnzip());\n\n          // remove the content-encoding in order to not confuse downstream operations\n          delete res.headers['content-encoding'];\n          break;\n        }\n      }\n\n      var response = {\n        status: res.statusCode,\n        statusText: res.statusMessage,\n        headers: res.headers,\n        config: config,\n        request: lastRequest\n      };\n\n      if (config.responseType === 'stream') {\n        response.data = stream;\n        settle(resolve, reject, response);\n      } else {\n        var responseBuffer = [];\n        stream.on('data', function handleStreamData(chunk) {\n          responseBuffer.push(chunk);\n\n          // make sure the content length is not over the maxContentLength if specified\n          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {\n            stream.destroy();\n            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',\n              config, null, lastRequest));\n          }\n        });\n\n        stream.on('error', function handleStreamError(err) {\n          if (req.aborted) return;\n          reject(enhanceError(err, config, null, lastRequest));\n        });\n\n        stream.on('end', function handleStreamEnd() {\n          var responseData = Buffer.concat(responseBuffer);\n          if (config.responseType !== 'arraybuffer') {\n            responseData = responseData.toString(config.responseEncoding);\n            if (!config.responseEncoding || config.responseEncoding === 'utf8') {\n              responseData = utils.stripBOM(responseData);\n            }\n          }\n\n          response.data = responseData;\n          settle(resolve, reject, response);\n        });\n      }\n    });\n\n    // Handle errors\n    req.on('error', function handleRequestError(err) {\n      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;\n      reject(enhanceError(err, config, null, req));\n    });\n\n    // Handle request timeout\n    if (config.timeout) {\n      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.\n      // And timer callback will be fired, and abort() will be invoked before connection, then get \"socket hang up\" and code ECONNRESET.\n      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.\n      // And then these socket which be hang up will devoring CPU little by little.\n      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.\n      req.setTimeout(config.timeout, function handleRequestTimeout() {\n        req.abort();\n        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));\n      });\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (req.aborted) return;\n\n        req.abort();\n        reject(cancel);\n      });\n    }\n\n    // Send the request\n    if (utils.isStream(data)) {\n      data.on('error', function handleStreamError(err) {\n        reject(enhanceError(err, config, null, req));\n      }).pipe(req);\n    } else {\n      req.end(data);\n    }\n  });\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/adapters/http.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"./node_modules/axios/lib/core/buildFullPath.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\n// Expose isAxiosError\naxios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ \"./node_modules/axios/lib/helpers/isAxiosError.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/axios/lib/core/mergeConfig.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: (config || {}).data\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/buildFullPath.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  var valueFromConfig2Keys = ['url', 'method', 'data'];\n  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];\n  var defaultToConfig2Keys = [\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',\n    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',\n    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'\n  ];\n  var directMergeKeys = ['validateStatus'];\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    }\n  });\n\n  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);\n\n  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  utils.forEach(directMergeKeys, function merge(prop) {\n    if (prop in config2) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  var axiosKeys = valueFromConfig2Keys\n    .concat(mergeDeepPropertiesKeys)\n    .concat(defaultToConfig2Keys)\n    .concat(directMergeKeys);\n\n  var otherKeys = Object\n    .keys(config1)\n    .concat(Object.keys(config2))\n    .filter(function filterAxiosKeys(key) {\n      return axiosKeys.indexOf(key) === -1;\n    });\n\n  utils.forEach(otherKeys, mergeDeepProperties);\n\n  return config;\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/http.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Determines whether the payload is an error thrown by Axios\n *\n * @param {*} payload The value to test\n * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false\n */\nmodule.exports = function isAxiosError(payload) {\n  return (typeof payload === 'object') && (payload.isAxiosError === true);\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/isAxiosError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (toString.call(val) !== '[object Object]') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"axios\",\"version\":\"0.21.1\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test && bundlesize\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://github.com/axios/axios\",\"devDependencies\":{\"bundlesize\":\"^0.17.0\",\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.0.2\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^20.1.0\",\"grunt-karma\":\"^2.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^1.0.18\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^1.3.0\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^1.1.1\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-opera-launcher\":\"^1.0.0\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^1.2.0\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-webpack\":\"^1.7.0\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^5.2.0\",\"sinon\":\"^4.5.0\",\"typescript\":\"^2.8.1\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^1.13.1\",\"webpack-dev-server\":\"^1.14.1\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.10.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}]}');\n\n//# sourceURL=webpack://hotelx/./node_modules/axios/package.json?");

/***/ }),

/***/ "./api/api.routes.js":
/*!***************************!*\
  !*** ./api/api.routes.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst roomRouter = __webpack_require__(/*! ./room */ \"./api/room/index.js\");\n\nconst apiRouter = express.Router();\napiRouter.use(\"/rooms\", roomRouter);\nmodule.exports = apiRouter;\n\n//# sourceURL=webpack://hotelx/./api/api.routes.js?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./api.routes */ \"./api/api.routes.js\");\n\n//# sourceURL=webpack://hotelx/./api/index.js?");

/***/ }),

/***/ "./api/room/index.js":
/*!***************************!*\
  !*** ./api/room/index.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./room.route */ \"./api/room/room.route.js\");\n\n//# sourceURL=webpack://hotelx/./api/room/index.js?");

/***/ }),

/***/ "./api/room/room.controller.js":
/*!*************************************!*\
  !*** ./api/room/room.controller.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Room = __webpack_require__(/*! ./room.model */ \"./api/room/room.model.js\");\n\nasync function getAllRooms(req, res) {\n  try {\n    let rooms = await Room.find();\n    res.status(200).json(rooms);\n  } catch (e) {\n    res.status(500).json({\n      message: \"Unable to get rooms\"\n    });\n  }\n}\n\nasync function getRoomByID(req, res) {\n  const {\n    room_id\n  } = req.params;\n\n  try {\n    if (!room_id) {\n      res.status(400).json({\n        message: \"Missing room id\"\n      });\n    }\n\n    let room = await Room.findById(room_id);\n\n    if (!room) {\n      res.status(404).json({\n        message: \"Unable to find room\"\n      });\n    }\n\n    res.status(200).json(room);\n  } catch (e) {\n    res.status(500).json({\n      message: \"Unable to get room\"\n    });\n  }\n}\n\nmodule.exports = {\n  getAllRooms,\n  getRoomByID\n};\n\n//# sourceURL=webpack://hotelx/./api/room/room.controller.js?");

/***/ }),

/***/ "./api/room/room.model.js":
/*!********************************!*\
  !*** ./api/room/room.model.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const db = __webpack_require__(/*! ../../data/dbConfig */ \"./data/dbConfig.js\");\n\nasync function find() {\n  try {\n    let [rooms, roomsAmenities, roomsPhotos, roomsFacilities] = await Promise.all([db(\"rooms\"), db(\"rooms\").select(\"room_id\", \"amenity\").join(\"amenities\", \"rooms.id\", \"=\", \"amenities.room_id\"), db(\"rooms\").select(\"room_id\", \"image_url\").join(\"photos\", \"rooms.id\", \"=\", \"photos.room_id\"), db(\"rooms\").select(\"room_id\", \"facility\").join(\"facilities\", \"rooms.id\", \"=\", \"facilities.room_id\")]);\n\n    for (let i = 0; i < rooms.length; i++) {\n      let amenities = [];\n      let photos = [];\n      let facilities = []; // link amenities to room\n\n      for (let j = 0; j < roomsAmenities.length; j++) {\n        if (rooms[i].id === roomsAmenities[j].room_id) {\n          amenities.push(roomsAmenities[j].amenity);\n        }\n      } // link photos to room\n\n\n      for (let k = 0; k < roomsPhotos.length; k++) {\n        if (rooms[i].id === roomsPhotos[k].room_id) {\n          photos.push(roomsPhotos[k].image_url);\n        }\n      } // link facilities to room\n\n\n      for (let l = 0; l < roomsFacilities.length; l++) {\n        if (rooms[i].id === roomsFacilities[l].room_id) {\n          facilities.push(roomsFacilities[l].facility);\n        }\n      }\n\n      rooms[i].photos = photos;\n      rooms[i].amenities = amenities;\n      rooms[i].facilities = facilities;\n    }\n\n    return rooms;\n  } catch (e) {\n    return e;\n  }\n}\n\nasync function findById(id) {\n  try {\n    let [room, amenities, photos, facilities] = await Promise.all([db(\"rooms\").where({\n      id: id\n    }).first(), db(\"rooms\").select(\"amenity\").join(\"amenities\", \"rooms.id\", \"=\", \"amenities.room_id\").where(\"room_id\", id), db(\"rooms\").select(\"image_url\").join(\"photos\", \"rooms.id\", \"=\", \"photos.room_id\").where(\"room_id\", id), db(\"rooms\").select(\"facility\").join(\"facilities\", \"rooms.id\", \"=\", \"facilities.room_id\").where(\"room_id\", id)]);\n    amenities = amenities.map(data => {\n      return data.amenity;\n    });\n    photos = photos.map(data => {\n      return data.image_url;\n    });\n    facilities = facilities.map(data => {\n      return data.facility;\n    });\n    room.photos = photos;\n    room.amenities = amenities;\n    room.facilities = facilities;\n    return room;\n  } catch (e) {\n    return e;\n  }\n}\n\nmodule.exports = {\n  find,\n  findById\n};\n\n//# sourceURL=webpack://hotelx/./api/room/room.model.js?");

/***/ }),

/***/ "./api/room/room.route.js":
/*!********************************!*\
  !*** ./api/room/room.route.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst {\n  getAllRooms,\n  getRoomByID\n} = __webpack_require__(/*! ./room.controller */ \"./api/room/room.controller.js\");\n\nconst roomRouter = express.Router();\nroomRouter.get(\"/\", getAllRooms);\nroomRouter.get(\"/:room_id\", getRoomByID);\nmodule.exports = roomRouter;\n\n//# sourceURL=webpack://hotelx/./api/room/room.route.js?");

/***/ }),

/***/ "./app.src.js":
/*!********************!*\
  !*** ./app.src.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server */ \"./server/index.js\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./api/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // express app\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // disable x-powered by\n\napp.disable(\"x-powered-by\"); // set up port to listen on\n\napp.set(\"port\", process.env.PORT || 3000); // view engine setup\n\napp.set(\"views\", path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, \"server\"));\napp.set(\"view engine\", \"pug\"); // serve static files\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().static(\"./public\")); // Parse incoming post request\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json()); // setup server routing\n\napp.use(\"/\", (_server__WEBPACK_IMPORTED_MODULE_2___default()));\napp.use(\"/api\", (_api__WEBPACK_IMPORTED_MODULE_3___default())); // catch 404 and forward to error handler\n\napp.use((req, res, next) => {\n  var err = new Error(\"Not Found\");\n  err.status = 404;\n  next(err);\n}); // log general uncaught promise errors\n\nprocess.on(\"unhandledRejection\", reason => {\n  console.log(\"Unhandled Rejection at:\", reason.stack || reason);\n}); // start server\n\nconst startServer = app.listen(app.get(\"port\"), () => {\n  console.log(`listening on port: ${startServer.address().port}`);\n});\n\n//# sourceURL=webpack://hotelx/./app.src.js?");

/***/ }),

/***/ "./client/rooms/rooms-dropdown.jsx":
/*!*****************************************!*\
  !*** ./client/rooms/rooms-dropdown.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsDropDown({\n  showDropdown\n}) {\n  const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const caretDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // handles drop down when you click away\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dropdownRef.current = document.querySelector(\".recommended-dropdown\");\n    caretDownRef.current = document.querySelector(\".recommended .fa-caret-down\"); // When the user clicks anywhere thats not the dropdown menu and caret, close it\n\n    function closeModal(e) {\n      if (e.target != dropdownRef.current && e.target != caretDownRef.current) {\n        dropdownRef.current.classList.remove(\"reveal-dropdown\");\n      }\n    }\n\n    window.addEventListener(\"click\", closeModal);\n    return () => {\n      window.removeEventListener(\"click\", closeModal);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: showDropdown ? \"recommended-dropdown reveal-dropdown\" : \"recommended-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Recommended\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Price (low to high)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Price (high to low)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Rate (1 to 5)\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Rate (5 to 1)\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsDropDown);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-dropdown.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-grid-view.jsx":
/*!******************************************!*\
  !*** ./client/rooms/rooms-grid-view.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsGridView({\n  currentRooms\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"grid-view grid\"\n  }, currentRooms.map((room, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"room-card\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"far fa-heart\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-card-pic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"responsive-img\",\n      src: room.photos[0],\n      alt: \"hotel\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-card-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, room.roomtype), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ratings-reviews\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star-half-alt\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"review-count\"\n    }, room.reviewCount, \" Reviews\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"pricing\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"$\", room.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"night\"))));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsGridView);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-grid-view.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-paginate.jsx":
/*!*****************************************!*\
  !*** ./client/rooms/rooms-paginate.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ \"react-paginate\");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction RoomsPaginate({\n  pageCount,\n  handlePageClick\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_paginate__WEBPACK_IMPORTED_MODULE_1___default()), {\n    previousLabel: \"< prev\",\n    containerClassName: \"rooms-pagination\",\n    nextLabel: \"next >\",\n    breakLabel: \"...\",\n    breakClassName: \"break-me\",\n    pageCount: pageCount,\n    pageRangeDisplayed: 3,\n    marginPagesDisplayed: 2,\n    activeClassName: \"active\",\n    onPageChange: handlePageClick\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsPaginate);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-paginate.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-search.jsx":
/*!***************************************!*\
  !*** ./client/rooms/rooms-search.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsSearch() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rooms-search\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    className: \"hotel-search rooms-h flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check in \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Choose date\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Check out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Choose date\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"input-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"\"\n  }, \"Guests\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Choose date\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"submit\"\n  }, \"Update\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSearch);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-search.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-sidebar.jsx":
/*!****************************************!*\
  !*** ./client/rooms/rooms-sidebar.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsSideBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sidebar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"room-type\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Room Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"standard-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"standard-room\",\n    name: \"standard-room\",\n    value: \"Standard Room\"\n  }), \"Standard Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"double-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"double-room\",\n    name: \"double-room\",\n    value: \"Double Room\"\n  }), \"Double Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"queen-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"queen-room\",\n    name: \"queen-room\",\n    value: \"Queen Room\"\n  }), \"Queen Room\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    htmlFor: \"king-room\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"checkbox\",\n    id: \"king-room\",\n    name: \"king-room\",\n    value: \"King Room\"\n  }), \"King Room\")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSideBar);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-sidebar.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-sortby.jsx":
/*!***************************************!*\
  !*** ./client/rooms/rooms-sortby.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rooms_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-dropdown */ \"./client/rooms/rooms-dropdown.jsx\");\n\n\n\nfunction RoomsSortby({\n  perPage,\n  searchCount,\n  clickDropdown,\n  showDropdown,\n  clickDisplay\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"sortby\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"results\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Showing 1-\", perPage, \" of \", searchCount, \" results\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"options\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"recommended\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Recommended\", \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDropdown,\n    className: \"fas fa-caret-down\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"display\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDisplay,\n    \"data-display\": \"grid\",\n    className: \"fas fa-th-large\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    onClick: clickDisplay,\n    \"data-display\": \"stack\",\n    className: \"fas fa-bars\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_dropdown__WEBPACK_IMPORTED_MODULE_1__.default, {\n    showDropdown: showDropdown\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSortby);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-sortby.jsx?");

/***/ }),

/***/ "./client/rooms/rooms-stack-view.jsx":
/*!*******************************************!*\
  !*** ./client/rooms/rooms-stack-view.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction RoomsStackView({\n  currentRooms\n}) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"stack-view\"\n  }, currentRooms.map((room, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: index,\n      className: \"room\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"far fa-heart\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-pic\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      className: \"responsive-img\",\n      src: room.photos[0],\n      alt: \"a hotel room\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-info\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, room.roomtype), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"ratings\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n      className: \"fas fa-star-half-alt fa-star-green\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"review-count\"\n    }, room.reviewCount, \" Reviews\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"bed\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Bed\"), \": \", room.beds), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", null, \"Max\"), \": 4 People\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"room-pricing\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      className: \"price\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      className: \"price-font\"\n    }, \"$\", room.price), \"/night\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", null, \"Choose\")));\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsStackView);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms-stack-view.jsx?");

/***/ }),

/***/ "./client/rooms/rooms.jsx":
/*!********************************!*\
  !*** ./client/rooms/rooms.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rooms_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-paginate */ \"./client/rooms/rooms-paginate.jsx\");\n/* harmony import */ var _rooms_sortby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-sortby */ \"./client/rooms/rooms-sortby.jsx\");\n/* harmony import */ var _rooms_stack_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-stack-view */ \"./client/rooms/rooms-stack-view.jsx\");\n/* harmony import */ var _rooms_grid_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-grid-view */ \"./client/rooms/rooms-grid-view.jsx\");\n/* harmony import */ var _rooms_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rooms-sidebar */ \"./client/rooms/rooms-sidebar.jsx\");\n/* harmony import */ var _rooms_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rooms-search */ \"./client/rooms/rooms-search.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nfunction Rooms() {\n  const [perPage, setPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [searchCount, setSearchCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [showDropdown, setShowDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"stack\");\n\n  function clickDropdown() {\n    setShowDropdown(!showDropdown);\n  }\n\n  function clickDisplay(e) {\n    setDisplay(e.target.dataset.display);\n  } // for intial render get data from database\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    axios__WEBPACK_IMPORTED_MODULE_7___default().get(\"/api/rooms\").then(res => {\n      setSearchCount(res.data.length);\n      setPageCount(Math.ceil(res.data.length / perPage));\n      setData(res.data);\n    }).catch(err => {\n      console.log(err);\n    });\n  }, []);\n\n  function handlePageClick(data) {\n    let selected = data.selected;\n    setCurrentPage(selected + 1);\n  }\n\n  var endIndex = currentPage * perPage;\n  var startIndex = endIndex - perPage;\n  var currentRooms = data.slice(startIndex, endIndex);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_search__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"rooms-main-content grid\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_sidebar__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_sortby__WEBPACK_IMPORTED_MODULE_2__.default, {\n    perPage: perPage,\n    searchCount: searchCount,\n    clickDropdown: clickDropdown,\n    showDropdown: showDropdown,\n    clickDisplay: clickDisplay\n  }), display === \"stack\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_stack_view__WEBPACK_IMPORTED_MODULE_3__.default, {\n    currentRooms: currentRooms\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_grid_view__WEBPACK_IMPORTED_MODULE_4__.default, {\n    currentRooms: currentRooms\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_rooms_paginate__WEBPACK_IMPORTED_MODULE_1__.default, {\n    pageCount: pageCount,\n    handlePageClick: handlePageClick\n  }))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);\n\n//# sourceURL=webpack://hotelx/./client/rooms/rooms.jsx?");

/***/ }),

/***/ "./data/dbConfig.js":
/*!**************************!*\
  !*** ./data/dbConfig.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const knex = __webpack_require__(/*! knex */ \"knex\");\n\nconst config = __webpack_require__(/*! ../knexfile.js */ \"./knexfile.js\");\n\nconst environment = process.env.DB_ENV || \"development\";\nmodule.exports = knex(config[environment]);\n\n//# sourceURL=webpack://hotelx/./data/dbConfig.js?");

/***/ }),

/***/ "./knexfile.js":
/*!*********************!*\
  !*** ./knexfile.js ***!
  \*********************/
/***/ ((module) => {

eval("// Update with your config settings.\nconst pgConnection = process.env.DATABASE_URL || \"postgres://postgres:Kingdomcome1025&102592@localhost:5432/hotelx\";\nmodule.exports = {\n  development: {\n    client: \"pg\",\n    connection: pgConnection,\n    pool: {\n      min: 2,\n      max: 10\n    },\n    migrations: {\n      directory: \"./data/migrations\"\n    },\n    seeds: {\n      directory: \"./data/seeds\"\n    }\n  }\n};\n\n//# sourceURL=webpack://hotelx/./knexfile.js?");

/***/ }),

/***/ "./server/About/about.controller.js":
/*!******************************************!*\
  !*** ./server/About/about.controller.js ***!
  \******************************************/
/***/ ((module) => {

eval("function About(req, res) {\n  res.render(\"About/about.pug\");\n}\n\nmodule.exports = About;\n\n//# sourceURL=webpack://hotelx/./server/About/about.controller.js?");

/***/ }),

/***/ "./server/About/about.route.js":
/*!*************************************!*\
  !*** ./server/About/about.route.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst aboutController = __webpack_require__(/*! ./about.controller */ \"./server/About/about.controller.js\");\n\nconst aboutRouter = express.Router();\naboutRouter.get(\"/\", aboutController);\nmodule.exports = aboutRouter;\n\n//# sourceURL=webpack://hotelx/./server/About/about.route.js?");

/***/ }),

/***/ "./server/About/index.js":
/*!*******************************!*\
  !*** ./server/About/index.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./about.route */ \"./server/About/about.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/About/index.js?");

/***/ }),

/***/ "./server/Contact/contact.controller.js":
/*!**********************************************!*\
  !*** ./server/Contact/contact.controller.js ***!
  \**********************************************/
/***/ ((module) => {

eval("function Contact(req, res) {\n  res.render(\"Contact/contact.pug\");\n}\n\nmodule.exports = Contact;\n\n//# sourceURL=webpack://hotelx/./server/Contact/contact.controller.js?");

/***/ }),

/***/ "./server/Contact/contact.route.js":
/*!*****************************************!*\
  !*** ./server/Contact/contact.route.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst contactController = __webpack_require__(/*! ./contact.controller */ \"./server/Contact/contact.controller.js\");\n\nconst contactRouter = express.Router();\ncontactRouter.get(\"/\", contactController);\nmodule.exports = contactRouter;\n\n//# sourceURL=webpack://hotelx/./server/Contact/contact.route.js?");

/***/ }),

/***/ "./server/Contact/index.js":
/*!*********************************!*\
  !*** ./server/Contact/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./contact.route */ \"./server/Contact/contact.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/Contact/index.js?");

/***/ }),

/***/ "./server/Home/home.controller.js":
/*!****************************************!*\
  !*** ./server/Home/home.controller.js ***!
  \****************************************/
/***/ ((module) => {

eval("function Home(req, res) {\n  res.render(\"Home/home.pug\");\n}\n\nmodule.exports = Home;\n\n//# sourceURL=webpack://hotelx/./server/Home/home.controller.js?");

/***/ }),

/***/ "./server/Home/home.route.js":
/*!***********************************!*\
  !*** ./server/Home/home.route.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst homeController = __webpack_require__(/*! ./home.controller */ \"./server/Home/home.controller.js\");\n\nconst homeRouter = express.Router();\nhomeRouter.get(\"/\", homeController);\nmodule.exports = homeRouter;\n\n//# sourceURL=webpack://hotelx/./server/Home/home.route.js?");

/***/ }),

/***/ "./server/Home/index.js":
/*!******************************!*\
  !*** ./server/Home/index.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./home.route */ \"./server/Home/home.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/Home/index.js?");

/***/ }),

/***/ "./server/Rooms/index.js":
/*!*******************************!*\
  !*** ./server/Rooms/index.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./rooms.route */ \"./server/Rooms/rooms.route.js\");\n\n//# sourceURL=webpack://hotelx/./server/Rooms/index.js?");

/***/ }),

/***/ "./server/Rooms/rooms.controller.js":
/*!******************************************!*\
  !*** ./server/Rooms/rooms.controller.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client_rooms_rooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/rooms/rooms */ \"./client/rooms/rooms.jsx\");\n\n\n\n\nfunction Rooms(req, res) {\n  const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_rooms_rooms__WEBPACK_IMPORTED_MODULE_2__.default, null));\n  res.render(\"Rooms/rooms.pug\", {\n    content\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rooms);\n\n//# sourceURL=webpack://hotelx/./server/Rooms/rooms.controller.js?");

/***/ }),

/***/ "./server/Rooms/rooms.route.js":
/*!*************************************!*\
  !*** ./server/Rooms/rooms.route.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst roomsController = __webpack_require__(/*! ./rooms.controller */ \"./server/Rooms/rooms.controller.js\").default;\n\nconst roomsRouter = express.Router();\nroomsRouter.get(\"/\", roomsController);\nmodule.exports = roomsRouter;\n\n//# sourceURL=webpack://hotelx/./server/Rooms/rooms.route.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./server.routes */ \"./server/server.routes.js\");\n\n//# sourceURL=webpack://hotelx/./server/index.js?");

/***/ }),

/***/ "./server/server.routes.js":
/*!*********************************!*\
  !*** ./server/server.routes.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// setup all server routes\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst serverRouter = express.Router();\n\nconst homeRoute = __webpack_require__(/*! ./Home */ \"./server/Home/index.js\");\n\nconst aboutRoute = __webpack_require__(/*! ./About */ \"./server/About/index.js\");\n\nconst contactRoute = __webpack_require__(/*! ./Contact */ \"./server/Contact/index.js\");\n\nconst roomsRoute = __webpack_require__(/*! ./Rooms */ \"./server/Rooms/index.js\");\n\nserverRouter.use(\"/\", homeRoute);\nserverRouter.use(\"/about\", aboutRoute);\nserverRouter.use(\"/contact\", contactRoute);\nserverRouter.use(\"/rooms\", roomsRoute);\nmodule.exports = serverRouter;\n\n//# sourceURL=webpack://hotelx/./server/server.routes.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/debug.js":
/*!************************************************!*\
  !*** ./node_modules/follow-redirects/debug.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var debug;\n\nmodule.exports = function () {\n  if (!debug) {\n    try {\n      /* eslint global-require: off */\n      debug = __webpack_require__(/*! debug */ \"debug\")(\"follow-redirects\");\n    }\n    catch (error) {\n      debug = function () { /* */ };\n    }\n  }\n  debug.apply(null, arguments);\n};\n\n\n//# sourceURL=webpack://hotelx/./node_modules/follow-redirects/debug.js?");

/***/ }),

/***/ "./node_modules/follow-redirects/index.js":
/*!************************************************!*\
  !*** ./node_modules/follow-redirects/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var url = __webpack_require__(/*! url */ \"url\");\nvar URL = url.URL;\nvar http = __webpack_require__(/*! http */ \"http\");\nvar https = __webpack_require__(/*! https */ \"https\");\nvar Writable = __webpack_require__(/*! stream */ \"stream\").Writable;\nvar assert = __webpack_require__(/*! assert */ \"assert\");\nvar debug = __webpack_require__(/*! ./debug */ \"./node_modules/follow-redirects/debug.js\");\n\n// Create handlers that pass events from native requests\nvar eventHandlers = Object.create(null);\n[\"abort\", \"aborted\", \"connect\", \"error\", \"socket\", \"timeout\"].forEach(function (event) {\n  eventHandlers[event] = function (arg1, arg2, arg3) {\n    this._redirectable.emit(event, arg1, arg2, arg3);\n  };\n});\n\n// Error types with codes\nvar RedirectionError = createErrorType(\n  \"ERR_FR_REDIRECTION_FAILURE\",\n  \"\"\n);\nvar TooManyRedirectsError = createErrorType(\n  \"ERR_FR_TOO_MANY_REDIRECTS\",\n  \"Maximum number of redirects exceeded\"\n);\nvar MaxBodyLengthExceededError = createErrorType(\n  \"ERR_FR_MAX_BODY_LENGTH_EXCEEDED\",\n  \"Request body larger than maxBodyLength limit\"\n);\nvar WriteAfterEndError = createErrorType(\n  \"ERR_STREAM_WRITE_AFTER_END\",\n  \"write after end\"\n);\n\n// An HTTP(S) request that can be redirected\nfunction RedirectableRequest(options, responseCallback) {\n  // Initialize the request\n  Writable.call(this);\n  this._sanitizeOptions(options);\n  this._options = options;\n  this._ended = false;\n  this._ending = false;\n  this._redirectCount = 0;\n  this._redirects = [];\n  this._requestBodyLength = 0;\n  this._requestBodyBuffers = [];\n\n  // Attach a callback if passed\n  if (responseCallback) {\n    this.on(\"response\", responseCallback);\n  }\n\n  // React to responses of native requests\n  var self = this;\n  this._onNativeResponse = function (response) {\n    self._processResponse(response);\n  };\n\n  // Perform the first request\n  this._performRequest();\n}\nRedirectableRequest.prototype = Object.create(Writable.prototype);\n\nRedirectableRequest.prototype.abort = function () {\n  // Abort the internal request\n  this._currentRequest.removeAllListeners();\n  this._currentRequest.on(\"error\", noop);\n  this._currentRequest.abort();\n\n  // Abort this request\n  this.emit(\"abort\");\n  this.removeAllListeners();\n};\n\n// Writes buffered data to the current native request\nRedirectableRequest.prototype.write = function (data, encoding, callback) {\n  // Writing is not allowed if end has been called\n  if (this._ending) {\n    throw new WriteAfterEndError();\n  }\n\n  // Validate input and shift parameters if necessary\n  if (!(typeof data === \"string\" || typeof data === \"object\" && (\"length\" in data))) {\n    throw new TypeError(\"data should be a string, Buffer or Uint8Array\");\n  }\n  if (typeof encoding === \"function\") {\n    callback = encoding;\n    encoding = null;\n  }\n\n  // Ignore empty buffers, since writing them doesn't invoke the callback\n  // https://github.com/nodejs/node/issues/22066\n  if (data.length === 0) {\n    if (callback) {\n      callback();\n    }\n    return;\n  }\n  // Only write when we don't exceed the maximum body length\n  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {\n    this._requestBodyLength += data.length;\n    this._requestBodyBuffers.push({ data: data, encoding: encoding });\n    this._currentRequest.write(data, encoding, callback);\n  }\n  // Error when we exceed the maximum body length\n  else {\n    this.emit(\"error\", new MaxBodyLengthExceededError());\n    this.abort();\n  }\n};\n\n// Ends the current native request\nRedirectableRequest.prototype.end = function (data, encoding, callback) {\n  // Shift parameters if necessary\n  if (typeof data === \"function\") {\n    callback = data;\n    data = encoding = null;\n  }\n  else if (typeof encoding === \"function\") {\n    callback = encoding;\n    encoding = null;\n  }\n\n  // Write data if needed and end\n  if (!data) {\n    this._ended = this._ending = true;\n    this._currentRequest.end(null, null, callback);\n  }\n  else {\n    var self = this;\n    var currentRequest = this._currentRequest;\n    this.write(data, encoding, function () {\n      self._ended = true;\n      currentRequest.end(null, null, callback);\n    });\n    this._ending = true;\n  }\n};\n\n// Sets a header value on the current native request\nRedirectableRequest.prototype.setHeader = function (name, value) {\n  this._options.headers[name] = value;\n  this._currentRequest.setHeader(name, value);\n};\n\n// Clears a header value on the current native request\nRedirectableRequest.prototype.removeHeader = function (name) {\n  delete this._options.headers[name];\n  this._currentRequest.removeHeader(name);\n};\n\n// Global timeout for all underlying requests\nRedirectableRequest.prototype.setTimeout = function (msecs, callback) {\n  var self = this;\n  if (callback) {\n    this.on(\"timeout\", callback);\n  }\n\n  // Sets up a timer to trigger a timeout event\n  function startTimer() {\n    if (self._timeout) {\n      clearTimeout(self._timeout);\n    }\n    self._timeout = setTimeout(function () {\n      self.emit(\"timeout\");\n      clearTimer();\n    }, msecs);\n  }\n\n  // Prevent a timeout from triggering\n  function clearTimer() {\n    clearTimeout(this._timeout);\n    if (callback) {\n      self.removeListener(\"timeout\", callback);\n    }\n    if (!this.socket) {\n      self._currentRequest.removeListener(\"socket\", startTimer);\n    }\n  }\n\n  // Start the timer when the socket is opened\n  if (this.socket) {\n    startTimer();\n  }\n  else {\n    this._currentRequest.once(\"socket\", startTimer);\n  }\n\n  this.once(\"response\", clearTimer);\n  this.once(\"error\", clearTimer);\n\n  return this;\n};\n\n// Proxy all other public ClientRequest methods\n[\n  \"flushHeaders\", \"getHeader\",\n  \"setNoDelay\", \"setSocketKeepAlive\",\n].forEach(function (method) {\n  RedirectableRequest.prototype[method] = function (a, b) {\n    return this._currentRequest[method](a, b);\n  };\n});\n\n// Proxy all public ClientRequest properties\n[\"aborted\", \"connection\", \"socket\"].forEach(function (property) {\n  Object.defineProperty(RedirectableRequest.prototype, property, {\n    get: function () { return this._currentRequest[property]; },\n  });\n});\n\nRedirectableRequest.prototype._sanitizeOptions = function (options) {\n  // Ensure headers are always present\n  if (!options.headers) {\n    options.headers = {};\n  }\n\n  // Since http.request treats host as an alias of hostname,\n  // but the url module interprets host as hostname plus port,\n  // eliminate the host property to avoid confusion.\n  if (options.host) {\n    // Use hostname if set, because it has precedence\n    if (!options.hostname) {\n      options.hostname = options.host;\n    }\n    delete options.host;\n  }\n\n  // Complete the URL object when necessary\n  if (!options.pathname && options.path) {\n    var searchPos = options.path.indexOf(\"?\");\n    if (searchPos < 0) {\n      options.pathname = options.path;\n    }\n    else {\n      options.pathname = options.path.substring(0, searchPos);\n      options.search = options.path.substring(searchPos);\n    }\n  }\n};\n\n\n// Executes the next native request (initial or redirect)\nRedirectableRequest.prototype._performRequest = function () {\n  // Load the native protocol\n  var protocol = this._options.protocol;\n  var nativeProtocol = this._options.nativeProtocols[protocol];\n  if (!nativeProtocol) {\n    this.emit(\"error\", new TypeError(\"Unsupported protocol \" + protocol));\n    return;\n  }\n\n  // If specified, use the agent corresponding to the protocol\n  // (HTTP and HTTPS use different types of agents)\n  if (this._options.agents) {\n    var scheme = protocol.substr(0, protocol.length - 1);\n    this._options.agent = this._options.agents[scheme];\n  }\n\n  // Create the native request\n  var request = this._currentRequest =\n        nativeProtocol.request(this._options, this._onNativeResponse);\n  this._currentUrl = url.format(this._options);\n\n  // Set up event handlers\n  request._redirectable = this;\n  for (var event in eventHandlers) {\n    /* istanbul ignore else */\n    if (event) {\n      request.on(event, eventHandlers[event]);\n    }\n  }\n\n  // End a redirected request\n  // (The first request must be ended explicitly with RedirectableRequest#end)\n  if (this._isRedirect) {\n    // Write the request entity and end.\n    var i = 0;\n    var self = this;\n    var buffers = this._requestBodyBuffers;\n    (function writeNext(error) {\n      // Only write if this request has not been redirected yet\n      /* istanbul ignore else */\n      if (request === self._currentRequest) {\n        // Report any write errors\n        /* istanbul ignore if */\n        if (error) {\n          self.emit(\"error\", error);\n        }\n        // Write the next buffer if there are still left\n        else if (i < buffers.length) {\n          var buffer = buffers[i++];\n          /* istanbul ignore else */\n          if (!request.finished) {\n            request.write(buffer.data, buffer.encoding, writeNext);\n          }\n        }\n        // End the request if `end` has been called on us\n        else if (self._ended) {\n          request.end();\n        }\n      }\n    }());\n  }\n};\n\n// Processes a response from the current native request\nRedirectableRequest.prototype._processResponse = function (response) {\n  // Store the redirected response\n  var statusCode = response.statusCode;\n  if (this._options.trackRedirects) {\n    this._redirects.push({\n      url: this._currentUrl,\n      headers: response.headers,\n      statusCode: statusCode,\n    });\n  }\n\n  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates\n  // that further action needs to be taken by the user agent in order to\n  // fulfill the request. If a Location header field is provided,\n  // the user agent MAY automatically redirect its request to the URI\n  // referenced by the Location field value,\n  // even if the specific status code is not understood.\n  var location = response.headers.location;\n  if (location && this._options.followRedirects !== false &&\n      statusCode >= 300 && statusCode < 400) {\n    // Abort the current request\n    this._currentRequest.removeAllListeners();\n    this._currentRequest.on(\"error\", noop);\n    this._currentRequest.abort();\n    // Discard the remainder of the response to avoid waiting for data\n    response.destroy();\n\n    // RFC7231§6.4: A client SHOULD detect and intervene\n    // in cyclical redirections (i.e., \"infinite\" redirection loops).\n    if (++this._redirectCount > this._options.maxRedirects) {\n      this.emit(\"error\", new TooManyRedirectsError());\n      return;\n    }\n\n    // RFC7231§6.4: Automatic redirection needs to done with\n    // care for methods not known to be safe, […]\n    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change\n    // the request method from POST to GET for the subsequent request.\n    if ((statusCode === 301 || statusCode === 302) && this._options.method === \"POST\" ||\n        // RFC7231§6.4.4: The 303 (See Other) status code indicates that\n        // the server is redirecting the user agent to a different resource […]\n        // A user agent can perform a retrieval request targeting that URI\n        // (a GET or HEAD request if using HTTP) […]\n        (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {\n      this._options.method = \"GET\";\n      // Drop a possible entity and headers related to it\n      this._requestBodyBuffers = [];\n      removeMatchingHeaders(/^content-/i, this._options.headers);\n    }\n\n    // Drop the Host header, as the redirect might lead to a different host\n    var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) ||\n      url.parse(this._currentUrl).hostname;\n\n    // Create the redirected request\n    var redirectUrl = url.resolve(this._currentUrl, location);\n    debug(\"redirecting to\", redirectUrl);\n    this._isRedirect = true;\n    var redirectUrlParts = url.parse(redirectUrl);\n    Object.assign(this._options, redirectUrlParts);\n\n    // Drop the Authorization header if redirecting to another host\n    if (redirectUrlParts.hostname !== previousHostName) {\n      removeMatchingHeaders(/^authorization$/i, this._options.headers);\n    }\n\n    // Evaluate the beforeRedirect callback\n    if (typeof this._options.beforeRedirect === \"function\") {\n      var responseDetails = { headers: response.headers };\n      try {\n        this._options.beforeRedirect.call(null, this._options, responseDetails);\n      }\n      catch (err) {\n        this.emit(\"error\", err);\n        return;\n      }\n      this._sanitizeOptions(this._options);\n    }\n\n    // Perform the redirected request\n    try {\n      this._performRequest();\n    }\n    catch (cause) {\n      var error = new RedirectionError(\"Redirected request failed: \" + cause.message);\n      error.cause = cause;\n      this.emit(\"error\", error);\n    }\n  }\n  else {\n    // The response is not a redirect; return it as-is\n    response.responseUrl = this._currentUrl;\n    response.redirects = this._redirects;\n    this.emit(\"response\", response);\n\n    // Clean up\n    this._requestBodyBuffers = [];\n  }\n};\n\n// Wraps the key/value object of protocols with redirect functionality\nfunction wrap(protocols) {\n  // Default settings\n  var exports = {\n    maxRedirects: 21,\n    maxBodyLength: 10 * 1024 * 1024,\n  };\n\n  // Wrap each protocol\n  var nativeProtocols = {};\n  Object.keys(protocols).forEach(function (scheme) {\n    var protocol = scheme + \":\";\n    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];\n    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);\n\n    // Executes a request, following redirects\n    function request(input, options, callback) {\n      // Parse parameters\n      if (typeof input === \"string\") {\n        var urlStr = input;\n        try {\n          input = urlToOptions(new URL(urlStr));\n        }\n        catch (err) {\n          /* istanbul ignore next */\n          input = url.parse(urlStr);\n        }\n      }\n      else if (URL && (input instanceof URL)) {\n        input = urlToOptions(input);\n      }\n      else {\n        callback = options;\n        options = input;\n        input = { protocol: protocol };\n      }\n      if (typeof options === \"function\") {\n        callback = options;\n        options = null;\n      }\n\n      // Set defaults\n      options = Object.assign({\n        maxRedirects: exports.maxRedirects,\n        maxBodyLength: exports.maxBodyLength,\n      }, input, options);\n      options.nativeProtocols = nativeProtocols;\n\n      assert.equal(options.protocol, protocol, \"protocol mismatch\");\n      debug(\"options\", options);\n      return new RedirectableRequest(options, callback);\n    }\n\n    // Executes a GET request, following redirects\n    function get(input, options, callback) {\n      var wrappedRequest = wrappedProtocol.request(input, options, callback);\n      wrappedRequest.end();\n      return wrappedRequest;\n    }\n\n    // Expose the properties on the wrapped protocol\n    Object.defineProperties(wrappedProtocol, {\n      request: { value: request, configurable: true, enumerable: true, writable: true },\n      get: { value: get, configurable: true, enumerable: true, writable: true },\n    });\n  });\n  return exports;\n}\n\n/* istanbul ignore next */\nfunction noop() { /* empty */ }\n\n// from https://github.com/nodejs/node/blob/master/lib/internal/url.js\nfunction urlToOptions(urlObject) {\n  var options = {\n    protocol: urlObject.protocol,\n    hostname: urlObject.hostname.startsWith(\"[\") ?\n      /* istanbul ignore next */\n      urlObject.hostname.slice(1, -1) :\n      urlObject.hostname,\n    hash: urlObject.hash,\n    search: urlObject.search,\n    pathname: urlObject.pathname,\n    path: urlObject.pathname + urlObject.search,\n    href: urlObject.href,\n  };\n  if (urlObject.port !== \"\") {\n    options.port = Number(urlObject.port);\n  }\n  return options;\n}\n\nfunction removeMatchingHeaders(regex, headers) {\n  var lastValue;\n  for (var header in headers) {\n    if (regex.test(header)) {\n      lastValue = headers[header];\n      delete headers[header];\n    }\n  }\n  return lastValue;\n}\n\nfunction createErrorType(code, defaultMessage) {\n  function CustomError(message) {\n    Error.captureStackTrace(this, this.constructor);\n    this.message = message || defaultMessage;\n  }\n  CustomError.prototype = new Error();\n  CustomError.prototype.constructor = CustomError;\n  CustomError.prototype.name = \"Error [\" + code + \"]\";\n  CustomError.prototype.code = code;\n  return CustomError;\n}\n\n// Exports\nmodule.exports = wrap({ http: http, https: https });\nmodule.exports.wrap = wrap;\n\n\n//# sourceURL=webpack://hotelx/./node_modules/follow-redirects/index.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");;

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("debug");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("knex");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-paginate":
/*!*********************************!*\
  !*** external "react-paginate" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-paginate");;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.src.js");
/******/ 	
/******/ })()
;