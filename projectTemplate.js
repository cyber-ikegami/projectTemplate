let SELECT_VALUE = "";

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
	SELECT_VALUE = selectValue.toString();

	// システム日付を初期値に設定
	let today = new Date(); 
	const year = today.getFullYear();
	const month = today.getMonth()+1;
	const day = today.getDate();
	const dateValue =`${year}/${month}/${day}`;
	document.getElementById("date").value = dateValue;
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

	// 出力処理
	outputResult(dateValue, affiliationValue, nameValue);
}


// 出力処理
function outputResult(date, affiliation, name) {
	const resetButton = document.getElementById("resetButton");

	resultArea.disabled = false;

	if(affiliation != ""){
		affiliation = `${affiliation}）`;
	}
	
    resultForm.resultArea.value = 
	`${resultArea.value}${date}　${affiliation}${name}
	
	${SELECT_VALUE}
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
}
