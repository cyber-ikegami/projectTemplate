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
	
	// システム日付を取得
	let today = new Date(); 
	const year = today.getFullYear();
	const month = today.getMonth()+1;
	const day = today.getDate();
	
	resultArea.disabled = false;
	
    resultForm.resultArea.value = 
	`${resultArea.value}${year}/${month}/${day}　所属）名前
	
	${selectValue}
	--------------------------------------------
	` .replace(/[ \t\r]+/g, "");

	resetButton.disabled = (resultArea.value == "");
}

// 右クリックで抽出ボタン押下時と同じ処理をするようにする
document.oncontextmenu = function () {
	const extractButton = document.getElementById("extractButton");
	// 抽出ボタンが活性化状態であれば
	if(extractButton.disabled == false){
		outputResult();
	}

	// コンテキストメニュー無効
	return false;
}