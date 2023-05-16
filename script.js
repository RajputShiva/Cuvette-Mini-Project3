const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const numberOfMembersInput = document.getElementById("number-of-members");
const generateBillButton = document.getElementById("generate-bill");
const resetButton = document.getElementById("reset-button");
const resultsContainer = document.getElementById("results-container");

billAmountInput.addEventListener("input", checkInputs);
tipPercentageInput.addEventListener("change", checkInputs);
numberOfMembersInput.addEventListener("input", checkInputs);
generateBillButton.addEventListener("click", generateBill);
resetButton.addEventListener("click", resetForm);

function checkInputs() {
	// check if all input fields are filled
	if (billAmountInput.value !== "" && tipPercentageInput.value !== "" && numberOfMembersInput.value !== "") {
		// enable the generate bill button
		generateBillButton.disabled = false;
	} else {
		// disable the generate bill button
		generateBillButton.disabled = true;
	}
}

function generateBill() {
	// get the input values
	const billAmount = Number(billAmountInput.value);
	const tipPercentage = Number(tipPercentageInput.value);
	const numberOfMembers = Number(numberOfMembersInput.value);

	// calculate the tip amount and total amount
	const tipAmount = billAmount * (tipPercentage / 100);
	const totalAmount = billAmount + tipAmount;
	const totalPerPerson = totalAmount / numberOfMembers;

	// display the results
	resultsContainer.innerHTML = `
		<h2>Results</h2>
		<table>
			<tr>
				<th>Bill Amount</th>
				<td>₹${billAmount.toFixed(2)}</td>
			</tr>
			<tr>
				<th>Tip Amount (${tipPercentage}%)</th>
				<td>₹${tipAmount.toFixed(2)}</td>
			</tr>
			<tr>
				<th>Total Amount</th>
				<td>₹${totalAmount.toFixed(2)}</td>
			</tr>
			<tr>
				<th>Total per Person (${numberOfMembers} persons)</th>
				<td>₹${totalPerPerson.toFixed(2)}</td>
			</tr>
		</table>
	`;

	// show the results container
	resultsContainer.style.display = "block";

	// disable the generate bill button and enable the reset button
	generateBillButton.disabled = true;
	resetButton.disabled = false;
}

function resetForm() {
	// reset the input fields
	billAmountInput.value = "";
	tipPercentageInput.value = "";
	numberOfMembersInput.value = "";

	// hide the results container
	resultsContainer.style.display = "none";

	// disable the reset button and enable the generate bill button
	resetButton.disabled = true;
	generateBillButton.disabled = true;
}
