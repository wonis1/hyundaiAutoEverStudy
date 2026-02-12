let input = require('fs').readFileSync(0, 'utf8').trim();

input = input.split('\r\n');
let n = Number(input[0]);
input.shift()
let cannes = [];

//2중배열 만들기
for (let i = 0; i < n; i++) {
    let nursery = input[i].split(' ').map(e => Number(e));
    cannes.push(nursery);
}

// 상어위치찾기
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (cannes[i][j] == 9) {
            [x, y] = [i, j];
            cannes[i][j] = 0;
        }
    }
}
console.log(x, y);
console.log(cannes);

// 차근차근 먹기
let shark = 2;
let candidate = [];
let count = 0;
while (true) {
    let visited = Array.from(Array(n), () => new Array(n).fill(0));
    console.log(visited);
    visited[x][y] = true;
    let [nx, ny, dist] = [x, y, 1];
    while (true) {
        if (0 != nx && 0 != ny && nx != n - 1 && ny != n - 1) {
            candidate.push([nx - 1, ny, dist], [nx, ny - 1, dist], [nx - 1, ny - 1, dist], [nx + 1, ny + 1, dist]);
        } else if (0 == nx) {
            candidate.push(9, [nx, ny - 1, dist], 9, [nx + 1, ny + 1, dist]);//nx가 0이면 -1할 수 없으므로 9를 넣어서 먹지 못하는 것으로 간주한다.
        } else if (0 == ny) {
            candidate.push([nx - 1, ny, dist], 9, 9, [nx + 1, ny + 1, dist]); //ny가 0이면, -1할 수 없으므로 9를 넣어서 먹지 못하는 것으로 간주한다.
        } else if (nx == n - 1) {
            candidate.push(9, [nx, ny - 1, dist], [nx - 1, ny - 1, dist], 9); //nx가 n-1이면, +1할 수 없으므로 9를 넣어서 먹지 못하는 것으로 간주한다.
        } else if (ny == n - 1) {
            candidate.push([nx - 1, ny, dist], [nx, ny - 1, dist], 9, 9); //ny가 n-1이면, +1할 수 없으므로 9를 넣어서 먹지 못하는 것으로 간주한다.
        } else {
            break;
        }
    }
    candidate.sort((a, b) => {
        a[2] == b[2] ? a[x][y] - b[x][y] : '';
    });
    console.log(candidate);
    return
}
