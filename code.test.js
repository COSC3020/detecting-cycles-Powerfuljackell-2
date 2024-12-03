const fs = require('fs');
const JSVerify = require('jsverify');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testset = [
    { graph:[[1], 
        [0,2,3], 
        [1,3], 
        [1,2,4], 
        [3]], expected: true},
    { graph:[[1], 
        [0,2,3], 
        [1], 
        [1,4], 
        [3]], expected: false},
    { graph:[[1,5], 
        [0,2], 
        [1,3], 
        [2,4], 
        [3,5], 
        [4,0]], expected: true},
    { graph:[[1], 
        [0,2], 
        [1,3], 
        [2,4], 
        [3,5], 
        [4]], expected: false},
    { graph:[[1,2], 
        [0,4,5], 
        [0,3], 
        [2], 
        [1], 
        [1]], expected: false},
    { graph:[[1,2], 
        [0,4,5], 
        [0,3], 
        [2], 
        [1,5], 
        [1,4]], expected: true}
]




testset.forEach(({ graph, expected }, index) => {
    let testWorks = (JSON.stringify(hasCycle(graph)) === JSON.stringify(expected));
    console.log("\ntest:",index++, testWorks ? "Success" : "Failed");
    if(!testWorks){ throw console.log("Failed with values:", graph,"\nExpected Result:",expected, "\nGot Result:", JSON.stringify(hasCycle(graph)));}
});