const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((priceCell) => {
    const value = parseFloat(priceCell.textContent);
    total += isNaN(value) ? 0 : value;
  });

  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.setAttribute("colspan", "2"); // single cell across both columns
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalRow.appendChild(totalCell);

  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

