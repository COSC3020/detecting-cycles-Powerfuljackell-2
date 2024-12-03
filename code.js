function hasCycle(adjacencyList) {
    let visited = new Set();
    for(let startNode = 0; startNode < adjacencyList.length; startNode++){
        if(!visited.has(startNode)){
            if(detectCycle(adjacencyList, visited, startNode, -1)){
                return true;
            }
        }
    }
    return false;
}

//using dfs
function detectCycle(adjList, visited, node, traceback){
    visited.add(node);
    for (let adjNode of adjList[node]){
        if((!visited.has(adjNode))){
            if(detectCycle(adjList, visited, adjNode, node)){ //wanted to optimize this section of code further, but couldn't figure out how to pull out the second if
                return true;
            }
        }else if(adjNode !== traceback){
            return true;
        }
    }
    return false;
}

/*
let adjList = [[1,2], [0,3], [0,4],[1],[2]]

console.log(hasCycle(adjList))
*/