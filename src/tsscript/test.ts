//<reference path="jquery.d.ts" /> // Not needed. Already declared in: index.d.ts
//declare var $:JQuery; // Cannot redeclare. Already declared in: index.d.ts

// import $ = require('jquery')

/*
 * GKNavigationClient Component
 *
 * WARNING: NOT YET COMPLETE.
 *
 * TO continue developing and debugging, see below
 * https://code.visualstudio.com/docs/typescript/typescript-tutorial
 * https://code.visualstudio.com/docs/languages/typescript
 *
 * TO DEBUG:
 * npm install -g typescript (if not installed)
 * tsc NavigationClient.ts
 * node NavigationClient.js
 * */

/**
 *
 *
 * @class TestClass
 */
export class TestClass {

  //static NAME: string = 'TestClass'

  public Retries: number = 2

  public RetryWaitSeconds: number = 5

  public DefaultTimeoutSeconds: number = 15

  constructor() {}

  //
  OnRemoteLookupFailure: Function = function() {}
}

/**
 *
 *
 * @class GKNavigationClient

class GKNavigationClient {
	static NAME: string = 'gknavigationclient'
	static VERSION: string = '1.0.0'

} */