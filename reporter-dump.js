(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    // Slicing
    ext.slice = function(input, first, second) {
        return input.slice(first, second); 
    }; 
    
    // Transform
    ext.transform = function(input, menu) {
        if (menu === "reverse") {
            return input.reverse();
        } 
        else if (menu === "uppercase") {
            return input.toUpperCase();
        } 
        else if (menu === "lowercase") {
            return input.toLowerCase();
        } else {
            return "Error; Invalid input.";
        }
    }
    ;
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['r', 'slice of %s from %n to %n', 'slice', 'hello', 1, 5], 
          ['r', 'transform %s by %m.transform', 'transform', 'Imagine, Program, Share', 'reverse'],
        ],
        menus: {
            transform: ['reverse', 'uppercase', 'lowercase']
        }
    };

    // Register the extension
    ScratchExtensions.register('Reporter Dump', descriptor, ext);
})({});
