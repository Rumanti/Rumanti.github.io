(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    // Slice 
    ext.slice = function(input, first, second) {
        return input.slice(first, second); 
    }; 
    
    // Reverse
    ext.reverse = function(input) {
        return input.reverse();
    };
    
    // Upper
    ext.upper = function(input) {
        return input.toUpperCase();
    };
    
    // Lower
    ext.lower = function(input) {
        return input.toLowerCase();
    }
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['r', 'slice of %s from %n to %n', 'slice', 'hello', 1, 5],
          ['r', 'reverse %s', 'reverse', 'rotator'],
          ['r' 'upper %s', 'upper', 'sCrAtCh'],
          ['r' 'lower %s', 'lower', 'ScRaTcH']
        ]
    };

    // Register the extension
    ScratchExtensions.register('Reporter Dump', descriptor, ext);
})({});
