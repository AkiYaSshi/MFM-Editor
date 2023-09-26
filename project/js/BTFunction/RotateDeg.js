$(document).ready(function () {
    $('#rotate-degree').on('input', function () {
        let inputValue = $(this).val();

        // 檢查輸入值是否為空
        if (inputValue.trim() === '') {
            // 如果為空，禁用兩個 button
            $('#rotate-button').prop('disabled', true);
        } else {
            // 如果不為空，啟用兩個 button
            $('#rotate-button').prop('disabled', false);
        }
    });

    // 初始情況下，禁用兩個 button
    $('#rotate-button').prop('disabled', true);
        document.getElementById('rotate-button').addEventListener('click', function () {
            const textArea = document.getElementById('text-input');
            // 獲取旋轉角度
            const rotateDegree = document.getElementById('rotate-degree').value;

            // 檢查是否有選取的文字
            if (textArea.selectionStart !== textArea.selectionEnd) {

                const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

                if (rotateDegree !== null) {

                    // 創建包含MFM旋轉效果的文字
                    const rotatedText = `$[rotate.deg=${rotateDegree} ${selectedText}]`;

                    // 將旋轉後的文字替換選取的文字
                    const newText = textArea.value.substring(0, textArea.selectionStart) + rotatedText +   textArea.value.substring(textArea.selectionEnd);

                    // 更新文本輸入區域的內容
                    textArea.value = newText;
                }

            } else {
                // 創建包含MFM旋轉效果的文字
                const rotatedText = `$[rotate.deg=${rotateDegree} ${textArea.value}]`;

                // 更新文本輸入區域的內容
                textArea.value = rotatedText;

            }
        });
    });