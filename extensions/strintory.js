/*
Strintory - A ScratchX Experimental Extension dedicated to strings.
Features: Slicing, reversing, transforming into uppercases/lowercases, shuffling, trimming.

Try it on ScratchX:
http://scratchx.org/?url=http://rumanti.github.io/strintory.js
*/

(function (ext) {
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
    
    // Trimming
    ext.trim = function(input) {
        return input.trim();
    }
    
    // Transform
    ext.transform = function(menu, input) {
        if (menu === "reverse") {
            return input.split("").reverse().join("");
        } 
        else if (menu === "uppercase") {
            return input.toUpperCase();
        } 
        else if (menu === "lowercase") {
            return input.toLowerCase();
        } else {
            return "Error; Invalid input.";
        }
    };
    
    // Shuffle
    ext.shuffle = function(input) {
        // Credits to StackOverflow
        return input.split('').sort(function(){return 0.5-Math.random()}).join('');
    };
    
        
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
          ['r', 'slice of %s from %n to %n', 'slice', 'a cake', 2, 6], 
          ['r', '%m.transform of %s', 'transform', 'reverse', 'draw ward'],
          ['r', 'shuffle %s', 'shuffle', 'strings'],
          ['r', 'trim %s', 'trim', '     ahhh       ']
        ],
        menus: {
            transform: ['reverse', 'uppercase', 'lowercase']
        },
        url: "https://github.com/Rumanti/Rumanti.github.io/blob/master/strintory.js"
    };

    // Register the extension
    ScratchExtensions.register('Strintory', descriptor, ext);
})({});
