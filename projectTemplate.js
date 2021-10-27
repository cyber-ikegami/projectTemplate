// 選択している箇所
let SELECT_VALUE = "";

// 日付初期値
let DEFAULT_DATE = "";

window.onload = function(){
	resetForm();
}


// リセット処理
function resetForm() {
	const resetButton = document.getElementById("resetButton");
	const resultArea = document.getElementById("resultArea");
	resetButton.disabled = true;
	resultArea.disabled = true;

	// システム日付を初期値に設定
	let today = new Date(); 
	const year = today.getFullYear();
	const month = today.getMonth()+1;
	const day = today.getDate();
	DEFAULT_DATE =`${year}/${month}/${day}`;

	// 日付・所属・名前optionのリセット
	const dateList = document.getElementById("dateList");
	const affiliationList = document.getElementById("affiliationList");
	const nameList = document.getElementById("nameList");
	while(dateList.lastChild){
		dateList.removeChild(dateList.lastChild);
	}
	while(affiliationList.lastChild){
		affiliationList.removeChild(affiliationList.lastChild);
	}
	while(nameList.lastChild){
		nameList.removeChild(nameList.lastChild);
	}
	
	document.getElementById("resultArea").value = "";
}


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
	
	document.getElementById("date").value = DEFAULT_DATE;
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

	// 日付データリストのoption追加
	const dateList = document.getElementById("dateList");
	const dateOption = document.createElement('option');
	let dateOptionList = new Array();
	
	// alert(dateList.children[0].innerHTML);
	for(let x = 0; x < dateList.children.length; x++){
		dateOptionList.push(dateList.children[x].value);
	}
	if(!dateOptionList.includes(date)){
		dateOption.value = date;
		dateOption.textContent = date;
		dateList.appendChild(dateOption);
	}


	// 所属データリストのoption追加
	const affiliationList = document.getElementById("affiliationList");
	const affiliationOption = document.createElement('option');
	affiliationOption.value = affiliation;
	affiliationOption.textContent = affiliation;
	affiliationList.appendChild(affiliationOption);

	// 名前データリストのoption追加
	const nameList = document.getElementById("nameList");
	const nameOption = document.createElement('option');
	nameOption.value = name;
	nameOption.textContent = name;
	nameList.appendChild(nameOption);
	
	resultArea.disabled = false;
	
	if(affiliation != ""){
		affiliation = `${affiliation}）`;
	}

	// 日付初期値に現在入力されている日付を代入
	DEFAULT_DATE = date;
	
    resultForm.resultArea.value = 
	`${resultArea.value}${date} ${affiliation}${name}
	
	${SELECT_VALUE}

	--------------------------------------------
	`.replace(/[\t\r]+/g, "");
	
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
