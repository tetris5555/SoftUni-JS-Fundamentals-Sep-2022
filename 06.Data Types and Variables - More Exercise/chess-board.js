function solve(n) {
    const color = {0: 'black', 1: 'white'};
    let off = 0; // offset
    let output = '<div class="chessboard">\n';

    for (let i = 0; i < n; i++) {      // div tags
        output += '  <div>\n';

        for (let j = 0; j < n; j++) {  // span tags
            output += `    <span class="${color[(j + off) % 2]}"></span>\n`;
        }
        off++;
        output += '  </div>\n';
    }
    output += '</div>'

    console.log(output);
}

solve(6);