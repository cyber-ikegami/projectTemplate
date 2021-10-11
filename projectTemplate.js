function getValue(){
	const value = window.getSelection();
	return value;
}

// 出力処理
function outputResult() {
	const value = getValue();
	
    resultForm.resultArea.value =
	`2021/mm/dd 所属）名前
	
	${value}
	--------------------------------------------` .replace(/[ \t\r]+/g, "");
}