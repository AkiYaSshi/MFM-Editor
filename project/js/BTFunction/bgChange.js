$(document).ready(function () {


        document.getElementById('bg_applyColor').addEventListener('click', function () {
            const textArea = document.getElementById('text-input');
            const Hex = document.getElementById('picker').value;
           
            if (textArea.selectionStart !== textArea.selectionEnd) {

                const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

                if (Hex !== null) {

                    const coloredText = `$[bg.color=${Hex} ${selectedText}]`;

                    const newText = textArea.value.substring(0, textArea.selectionStart) + coloredText +   textArea.value.substring(textArea.selectionEnd);

                    textArea.value = newText;
                }
	    }
            else {
                // 創建包含MFM彩色效果的文字
                const coloredText = `$[bg.color=${Hex} ${textArea.value}]`;

                // 更新文本輸入區域的內容
                textArea.value = coloredText;

            }
        });
    });