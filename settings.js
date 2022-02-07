// ==========================================
// Instructions -> https://github.com/limndigital/fxhash-low-code-gap-template
// ==========================================
// ===== ----- Helpful stuff -----
// ===== In Live Mode: keyPress to save Artworks:
// ===== 's' or 'S' to save at current canvas size.
// ===== 'f' or 'F' to save at full size as listed below in 'canvasSize'.
// ===== 't' or 'T' to save at Twitter Tweet size, 1200 x 1200px.
// ==========================================
// ==========================================
// Let's setup some useful Project variables
// Change as needed for each Project

let projectName = "Your Project Name"
let artistName = "Your Name"

// ===== Set Project Download file Name. NO SPACES
// If people want to use the 's', 'f', or 't' keys in Live Mode
// This will be how the downloaded FileName will start.
let dlFile = "Project-Name-with-No-Spaces"

// ===== Default canvas size.
// Your JPG and PNG files should be square. 
// fx(hash) allows only 15MB TOTAL for all files. 
// So if you want a lot of layers and traits in each layer,
// you have to keep your image and file sizes small. 
// I recommend using TinyPNG https://tinypng.com/ to compress your JPGs and PNGs.
let canvasSize = 1200;

// ===== Layer count.
// For example, if you have a background, body, ears mouth, nose, eye, hat
// your project has 7 layers.
// Folders in the 'layers' folder are named with numbers, starting at 0.
// Given these seven layers, the folders in the 'layers' folder will be named:
// 0, 1, 2, 3, 4, 5, 6 
let layerCount = 7

// ===== Trait Counts in each layer folder
// Set the Trait Counts(# of Traits in each of the "layerCount" Layers folders)
// *** This will change for each Project. 
// Let's say you have 
// 7 background JPGs in the '0' folder. 
// 4 bodies in '1' folder. 
// 4 ears in '2' folder. 
// 6 mouths in '3' folder.
// 5 noses in '4' folder.
// 5 eyes in '5' folder.
// And 6 hats in '6' folder. 
// The 'traitCounts' array below needs to reflect those Trait Counts
// {{{ if you forget a comma or mess up the array the project will break }}}
let traitCounts = [7, 4, 4, 6, 5, 5, 6]

// ===== Background (layer '0') file format
// Remember that fx(hash) only allows a total of 15MB for each project. 
// Since the background layer doesn't need to be transparent, all the
// background images can be JPGs because they are WAY smaller in file size than PNGs.
// So by default, make all your background images JPGs and leave 'bgFormat' alone.
// If you MUST, for some reason, have background PNGs, change 'bgFormat' to ".png"
let bgFormat = ".jpg"

// ===== Download Keys
// ===== NO REASON TO CHANGE THESE =====
// When your project is viewed in Live Mode,
// people can press the following keys to automatically download the 
// current contents of the canvas. 
// !!! Would be a good idea to mention these keys in your Project Description
//
// Set download key for [c]urrent window width. 
let dlc = "s" 
// Set download key for [f]ull canvas size set in 'canvasSize' above
let dlf = "f"
// Set download key for [T]witter
let dlt = "t"


// ===== Console.log() Messages
// You can leave "secret" messages for people who know how to view the JavaScript Console Log
// in their browser. 
// To view the console.log() of any web page, in any browser:
// On Mac press “OPTION + COMMAND + J”
// On Win press “CONTROL + SHIFT + J”
// Or right click and choose “Inspect”
// (if these don’t work in your browser, just Google “view console log” for your browser and OS.)
// !!! Just delete the following lines (or comment them out) if you don't want to add your own messages.
console.log("Add your comments here.")
console.log("They will appear at the top of the console.log.")
console.log("You can add info on this Project, links (example below) or contact info like your @Twitter acct.")
console.log("If you add a link like https://www.fxhash.xyz it will be a clickable link.")
// You can even used variables from above like the following to list your Project Name & Artist.
console.log("Project Name: " + projectName)
console.log("Artist: " + artistName)
console.log("Twitter: https://twitter.com/YourTwitter")



