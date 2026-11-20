let v = true;

const test = new Promise((resolve, reject) => {
  if (v) setTimeout(()=>resolve(3),2000)
  else return reject(10);
});

console.log(test);

test.then((val) => console.log(val)).catch((val) => console.log(val));
