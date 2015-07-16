(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    // Slice block
    ext.slice = function(input, first, second) {
        return input.slice(first,second); 
    }; 
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['r', 'slice of %s from %n to %n', 'slice', 'hello', 1, 5] 
        ]
    };

    // Register the extension
    ScratchExtensions.register('Sample extension', descriptor, ext);
})({});
