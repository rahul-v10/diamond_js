let num = 5;
for (let i = 1; i <= num; i++) {
  // spaces
  for (let sp = 1; sp <= num - i; sp++) {
    process.stdout.write(' ')
  }
  // stars
  for (let star = 0; star < 2 * i - 1; star++) {
    process.stdout.write('*')
  }
  console.log();
}

for (let i = 1; i <= num - 1; i++) {
  // printing spaces
  for (let sp = 0; sp < i; sp++) {
     process.stdout.write(' ');
  }
  //star
  for (let star = (num - i) * 2 - 1; star > 0; star--) {
    process.stdout.write('*');
  }
  console.log();
}