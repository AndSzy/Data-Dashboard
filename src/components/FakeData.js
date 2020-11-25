
  function generateData(n) {
    let currentDate = new Date();
    const arr = [];
    for(let i = n; i--; i>0) {
      let newObj = {};
      newObj.x = currentDate.setDate(-i);
      newObj.y = Math.floor(Math.random() * 25);
      arr.push(newObj);
    }
    return arr;
  }

  const dataset1 = generateData(50);
  const dataset2 = generateData(50);
 


  export { dataset1, dataset2 };