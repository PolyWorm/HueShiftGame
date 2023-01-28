export default function solvedState(edges) {

    for (let i = 0; i < edges.length; i ++) {
        if (i % 3 != edges[i] % 3) {
            return false
        }
    }
    return true
  }