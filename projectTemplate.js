//入力必須チェック
function inputRequiredCheck() {
	const inputAreaValue = document.getElementById("inputArea").value;
	const extractButton = document.getElementById("extractButton");
	
	extractButton.disabled = (inputAreaValue == "");
}

// 抽出ボタン押下時
function clickExtract() {
	document.getElementById('blind').style.display = 'block';
	
	const selectValue = window.getSelection();

	return selectValue;
}

// 右クリックで抽出ボタン押下時と同じ処理をするようにする
document.oncontextmenu = function () {
	const extractButton = document.getElementById("extractButton");
	// 抽出ボタンが活性化状態であれば
	if(extractButton.disabled == false){
		clickExtract();
	}

	// コンテキストメニュー無効
	return false;
}


// リセット処理
function resetForm() {
	const resetButton = document.getElementById("resetButton");
	const resultArea = document.getElementById("resultArea");
	resetButton.disabled = true;
	resultArea.disabled = true;
	
	document.getElementById("resultArea").value = "";
}


// 入力内容(日付/所属/氏名)の取得
function getInputValue(){
	let dateValue = document.getElementById("date").value;
	const affiliationValue = document.getElementById("affiliation").value;
	const nameValue = document.getElementById("name").value;

	// 日付が空白であれば、初期値としてシステム日付を設定
	if(dateValue == ""){
		let today = new Date(); 
		const year = today.getFullYear();
		const month = today.getMonth()+1;
		const day = today.getDate();
		dateValue =`${year}/${month}/${day}`;
	}

	// 出力処理
	outputResult(dateValue, affiliationValue, nameValue);
}


// 出力処理
function outputResult(date, affiliation, name) {
	// const selectValue = window.getSelection();
	const resetButton = document.getElementById("resetButton");

	resultArea.disabled = false;
	
    resultForm.resultArea.value = 
	`${resultArea.value}${date}　${affiliation}）${name}
	
	${selectValue}
	--------------------------------------------
	` .replace(/[ \t\r]+/g, "");
	
	resetButton.disabled = (resultArea.value == "");
	// ダイアログ初期化
	resetDialog();
}


// ダイアログ初期化
function resetDialog() {
	document.getElementById("date").value = "";
	document.getElementById("affiliation").value = "";
	document.getElementById("name").value = "";
	document.getElementById('blind').style.display = 'none';
	// SELECT_VALUE = "";
}
