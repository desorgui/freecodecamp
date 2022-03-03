let amountArr = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
};

function checkCashRegister(price, cash, cid) {
let change = (cash  - price) * 100;
change = change.toFixed(2);
let changeCheck = change/100;
let temp = [];
let reverseCid = cid.filter(elem => elem[1] !==0).reverse();
var resultShow = {
    status: '',
    change: []
  }
let totalCid = 0;
  for(let i = 0; i<cid.length; i++){
    totalCid += cid[i][1];
  }
 let iter = 9;
  totalCid = Math.ceil(totalCid * 100)/100;
  reverseCid.forEach(elem => {
   iter--;
    let bill = cid[iter][1]/elem[1];
  let amount = 0;
  let currName = elem[0];
  let currUnit = elem [1] * 100;
  while(change >= amountArr[currName] && currUnit > 0 && bill >= 0){
      
      amount += amountArr[currName];
      change -= amountArr[currName];
      currUnit -= amountArr[currName];
    }
    amount = amount /100;
    if(amount !== 0){
      temp.push([elem[0],amount]);
    }
  }, []);
   if ( totalCid < change) {
    resultShow.status = "INSUFFICIENT_FUNDS";
    temp = [];
    resultShow.change = temp;
    } else if (changeCheck == totalCid ) {      
    resultShow.status = "CLOSED";
    temp = cid;
    resultShow.change = temp;   
    }else if (temp.length < 1 || change > 0) {
    resultShow.status = "INSUFFICIENT_FUNDS";
    resultShow.change = [];
    }else{
      resultShow.status = "OPEN";
      resultShow.change = temp; 
    }
  return resultShow;
}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
