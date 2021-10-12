// 出力処理
function outputResult() {
	const value = window.getSelection();
	const resultAreaValue = document.getElementById("resultArea").value;

    resultForm.resultArea.value =
	`${resultAreaValue}
	2021/mm/dd 所属）名前
	
	${value}
	--------------------------------------------` .replace(/[ \t\r]+/g, "");
}