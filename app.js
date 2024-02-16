const allBtn = document.getElementsByClassName('add-btn');
for (const btn of allBtn) {
  let count = 0;
  btn.addEventListener('click', function (event) {
    count = count + 1;
    const placeName = event.target.parentNode.childNodes[1].innerText;
    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
    const selectedContainer = document.getElementById('selected-place-container');
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = placeName;
    const p2 = document.createElement('p');
    p2.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    selectedContainer.appendChild(li);


    setInnerText('cart-count', count);
    totalCost('total-cost' ,price);
    grandTotal('grand-total', price);
  })
}
 


function totalCost(id, value) {
  const totalCost = document.getElementById(id);
  const totalCostText = totalCost.innerText;
  const convertedTotalCost = parseInt(totalCostText);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText(id, sum);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
} 

function grandTotal(id){
  const totalCost = document.getElementById('total-cost').innerText;
  const convertedTotalCost = parseInt(totalCost);
  if(id == 'bus'){
    setInnerText('grand-total', convertedTotalCost + 100);
  }else if(id == 'train'){
    setInnerText('grand-total', convertedTotalCost - 200);
  }else if(id == 'flight'){
    setInnerText('grand-total', convertedTotalCost + 500);
  }else{
    setInnerText('grand-total', convertedTotalCost);
  }
  
}