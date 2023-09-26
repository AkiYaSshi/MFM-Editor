$(document).ready(function () {

    $(function () {
        const StartButton = document.getElementById('ColorChoose');
        const Panel = $('#ColorButtonGroup');
        const FG = document.getElementById('applyColor');
        const BG = document.getElementById('bg_applyColor');
        const H1 = document.getElementById('h1');
        const picker = document.getElementById('picker');

        StartButton.addEventListener('click', function () {
            if (Panel.css('display') === 'none' || Panel.css('display') === '') {
                Panel.css('display', 'inline-block'); // 顯示展開的按鈕
                $('#ColorButtonGroup *').each(function () {
                    $(this).prop('disabled', false);
                });
                setTimeout(function () {
                    StartButton.style.backgroundColor = '#AAA';
                    $('#ColorButtonGroup *').each(function () {
                        $(this).css({
                            'opacity': '1',
                            'transform': 'translateX(0)'
                        });
                    });
                }, 10);
            }
            else {
                StartButton.style.backgroundColor = '#f0f0f0';
                $('#ColorButtonGroup *').each(function () {
                    $(this).prop('disabled', true);
                    $(this).css({
                        'opacity': '0',
                    });
                });
                $(FG).css({
                    'transform': 'translateX(-100%)'
                });
                $(BG).css({
                    'transform': 'translateX(-150%)'
                });
                $(H1).css({
                    'transform': 'translateX(-200%)'
                });
                $(picker).css({
                    'transform': 'translateX(-250%)'
                });

                setTimeout(function () {
                    Panel.css('display', 'none');
                }, 500);
            }
        });
    });
        document.getElementById('applyColor').addEventListener('click', function () {
            const textArea = document.getElementById('text-input');
           
            const Hex = document.getElementById('picker').value;
           
            if (textArea.selectionStart !== textArea.selectionEnd) {

                const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

                if (Hex !== null) {

                    // 創建包含MFM彩色效果的文字
                    const coloredText = `$[fg.color=${Hex} ${selectedText}]`;

                    // 將上色後的文字替換選取的文字
                    const newText = textArea.value.substring(0, textArea.selectionStart) + coloredText +   textArea.value.substring(textArea.selectionEnd);

                    // 更新文本輸入區域的內容
                    textArea.value = newText;
                }
	    }
            else {
                // 創建包含MFM彩色效果的文字
                const coloredText = `$[fg.color=${Hex} ${textArea.value}]`;

                // 更新文本輸入區域的內容
                textArea.value = coloredText;

            }
        });
    });