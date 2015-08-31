/*
Intermeow - Intergrate your Scratchy stuff on your Scratchy projects using a ScratchX experimental extension.
Features: 
Try it on ScratchX:
http://scratchx.org/?url=http://rumanti.github.io/extensions/intermeow.js
*/

(function (ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.follow = function(menu, input) {
        var reallyFollow = confirm("This project wants to make you " + menu + " " + input + " . Are you sure you want to do this?");
    }
        
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', '%m.follow %s', 'follow', 'username']
        ],
        menus: {
            follow: ['follow', 'unfollow'];
        },
        url: "https://github.com/Rumanti/Rumanti.github.io/blob/master/intermeow.js"
    };

    // Register the extension
    ScratchExtensions.register('Intermeow', descriptor, ext);
})({});
