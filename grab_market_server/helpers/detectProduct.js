const tf = require("@tensorflow/tfjs-node");
const mobilenet = require("@tensorflow-models/mobilenet");
const fs = require("fs");
const path = require("path");


function detectProduct(url){
    const image = fs.readFileSync(url);
 
    const input = tf.node.decodeImage(image, 3);

    mobilenet.load().then((model) => {
        model.classify(input).then((result) => {
            console.log(result);
        });
    });
}



detectProduct(path.join(__dirname,"../uploads/dumbell2.jpeg"));