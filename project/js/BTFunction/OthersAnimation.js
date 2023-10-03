$(function () {
    const Showpanel = this.getElementById('Others');
    const Panel = this.getElementById('OthersPanel');
    const Jelly = this.getElementById('jelly');
    const Tada = this.getElementById('tada');
    const Bounce = this.getElementById('bounce');
    const Jump = this.getElementById('jump');
    const Shake = this.getElementById('shake');
    const Twitch = this.getElementById('twitch');
    const sparkle = this.getElementById('sparkle');
    const blur = this.getElementById('blur');
    const AllOtherButtons = $('#OthersPanel *');
    Showpanel.addEventListener('click', function () {
        if (Panel.style.display === 'none' || Panel.style.display === '') {
            Panel.style.display = 'inline-block'; // 顯示展開的按鈕
            AllOtherButtons.each(function () {
                $(this).prop('disabled', false);
            });

            setTimeout(function () {
                Showpanel.style.backgroundColor = '#AAA';
                AllOtherButtons.each(function() {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
                });
            }, 10);
        }
        else {
            Showpanel.style.backgroundColor = '#f0f0f0';
            AllOtherButtons.prop('disabled', true);
            AllOtherButtons.each(function () {
                $(this).css({
                    'opacity': '0',
                });
            });
            $(Jelly).css({
                'transform': 'translateX(-100%)'
            });
            $(Tada).css({
                'transform': 'translateX(-150%)'
            });
            $(Bounce).css({
                'transform': 'translateX(-200%)'
            });
            $(Jump).css({
                'transform': 'translateX(-250%)'
            });
            $(Shake).css({
                'transform': 'translateX(-300%)'
            });
            $(Twitch).css({
                'transform': 'translateX(-350%)'
            });
            $(sparkle).css({
                'transform': 'translateX(-400%)'
            });
            $(blur).css({
                'transform': 'translateX(-450%)'
            });

            setTimeout(function () {
                Panel.style.display = 'none';
            }, 900);
        }
    });

    $('#jelly').on('click', function () {

        // 獲取 textArea 元素
        let textArea = $('#text-input')[0];

        // 獲取 textArea 中被選取的文本
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 如果 selectedText 為空，則使用整個 textArea 的內容
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 組合成最終的文字
        let finalText = '$[jelly ' + selectedText + ']';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });

    $('#tada').on('click', function () {

        // 獲取 textArea 元素
        let textArea = $('#text-input')[0];

        // 獲取 textArea 中被選取的文本
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 如果 selectedText 為空，則使用整個 textArea 的內容
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 組合成最終的文字
        let finalText = '$[tada ' + selectedText + ']';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });

    $('#bounce').on('click', function () {

        // 獲取 textArea 元素
        let textArea = $('#text-input')[0];

        // 獲取 textArea 中被選取的文本
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 如果 selectedText 為空，則使用整個 textArea 的內容
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 組合成最終的文字
        let finalText = '$[bounce ' + selectedText + ']';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#jump').on('click', function () {

        // 獲取 textArea 元素
        let textArea = $('#text-input')[0];

        // 獲取 textArea 中被選取的文本
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 如果 selectedText 為空，則使用整個 textArea 的內容
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 組合成最終的文字
        let finalText = '$[jump ' + selectedText + ']';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });

    $('#shake').on('click', function () {

        // 獲取 textArea 元素
        let textArea = $('#text-input')[0];

        // 獲取 textArea 中被選取的文本
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 如果 selectedText 為空，則使用整個 textArea 的內容
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 組合成最終的文字
        let finalText = '$[shake ' + selectedText + ']';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#twitch').on('click', function () {

        // 獲取 textArea 元素
        let textArea = $('#text-input')[0];

        // 獲取 textArea 中被選取的文本
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 如果 selectedText 為空，則使用整個 textArea 的內容
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 組合成最終的文字
        let finalText = '$[twitch ' + selectedText + ']';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#sparkle').on('click', function () {

        // 獲取 textArea 元素
        let textArea = $('#text-input')[0];

        // 獲取 textArea 中被選取的文本
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 如果 selectedText 為空，則使用整個 textArea 的內容
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 組合成最終的文字
        let finalText = '$[sparkle ' + selectedText + ']';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#blur').on('click', function () {

        // 獲取 textArea 元素
        let textArea = $('#text-input')[0];

        // 獲取 textArea 中被選取的文本
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 如果 selectedText 為空，則使用整個 textArea 的內容
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // 組合成最終的文字
        let finalText = '$[blur ' + selectedText + ']';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });


});
