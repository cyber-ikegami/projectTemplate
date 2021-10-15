//入力必須チェック
function inputRequiredCheck() {
	const inputAreaValue = document.getElementById("inputArea").value;
	const extractButton = document.getElementById("extractButton");

	extractButton.disabled = (inputAreaValue == "");
}

// リセット処理
function resetForm() {
	const resetButton = document.getElementById("resetButton");
	const resultArea = document.getElementById("resultArea");
	resetButton.disabled = true;
	resultArea.disabled = true;

	document.getElementById("resultArea").value = "";
}

// 出力処理
function outputResult() {
	const selectValue = window.getSelection();
	const resetButton = document.getElementById("resetButton");
	let resultArea = document.getElementById("resultArea");
	resultArea.disabled = false;
	
    resultForm.resultArea.value = 
	`${resultArea.value}2021/mm/dd 所属）名前
	
	${selectValue}
	--------------------------------------------
	` .replace(/[ \t\r]+/g, "");

	resetButton.disabled = (resultArea.value == "");
}