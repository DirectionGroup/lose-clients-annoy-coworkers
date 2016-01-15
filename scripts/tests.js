// tests
var Test = Test || function() {
	return {
		assert: function(test, description) {
			var status = !!test ? 'PASSED' : 'FAILED';
	
			console[ !!test ? 'info': 'warn' ]('%s : %s', status, description);
		}
		, appHasGetNextFunction: function() {
			var app = new App();
			
			this.assert(typeof app.getNext == 'function', 'app has getNext function');
		}
		, appGetNextFunctionStartsAtZero: function() {
			var app = new App();
			
			this.assert(app.getNext() === 0, 'app.getNext() starts at zero');
		}
		, callingGetNextTwiceReturnsOne: function() {
			var app = new App(), count;
			
			app.getNext();
			count = app.getNext();
			
			this.assert(count === 1, 'calling app.getNext() twice returns 1');
		}
	}
}

if ((window.outerHeight - window.innerHeight) > 100) {
	console.log('** Docked inspector open >> running tests << **');
	
	var test = new Test();
	
	test.assert(true, 'sanity check');
	
	test.appHasGetNextFunction();
	test.appGetNextFunctionStartsAtZero();
	test.callingGetNextTwiceReturnsOne();
}
