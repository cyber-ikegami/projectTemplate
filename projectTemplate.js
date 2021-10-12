//入力必須チェック
function inputRequiredCheck() {
	// const selectValue = window.getSelection();
	const inputAreaValue = document.getElementById("inputArea").value;
	const extractButton = document.getElementById("extractButton");
	const resultArea = document.getElementById("resultArea");
	
	extractButton.disabled = (inputAreaValue == "");
	resultArea.disabled = (inputAreaValue == "");
}

// 出力処理
function outputResult() {
	const selectValue = window.getSelection();
	let resultArea = document.getElementById("resultArea");

    resultForm.resultArea.value = 
	`${resultArea.value}2021/mm/dd 所属）名前
	
	${selectValue}
	--------------------------------------------
	` .replace(/[ \t\r]+/g, "");
}