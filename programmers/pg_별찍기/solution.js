process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = `${'*'.repeat(a)}\n`; // *이 a번 반복
    console.log(row.repeat(b)) // row를 b번 반복
});