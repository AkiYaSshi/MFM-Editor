// JavaScript source code
$(function () {
    const Showpanel = this.getElementById('WindowsAndQuote');
    const Panel = this.getElementById('WindowsPanel');
    const Quote = this.getElementById('Quote');
    const SearchBar = this.getElementById('SearchBar');
    const CLI = this.getElementById('CLI');
    const LineCLI = this.getElementById('Line-CLI');
    const All = $('#WindowsPanel *');
    Showpanel.addEventListener('click', function () {
        if (Panel.style.display === 'none' || Panel.style.display === '') {
            Panel.style.display = 'inline-block'; // 顯示展開的按鈕
            All.each(function () {
                $(this).prop('disabled', false);
            });

            setTimeout(function () {
                Showpanel.style.backgroundColor = '#AAA';
                All.each(function () {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
                });
            }, 10);
        }
        else {
            Showpanel.style.backgroundColor = '#f0f0f0';
            All.prop('disabled', true);
            All.each(function () {
                $(this).css({
                    'opacity': '0',
                });
            });
            $(Quote).css({
                'transform': 'translateX(-100%)'
            });
            $(SearchBar).css({
                'transform': 'translateX(-150%)'
            });
            $(CLI).css({
                'transform': 'translateX(-200%)'
            });
            $(LineCLI).css({
                'transform': 'translateX(-250%)'
            });
            setTimeout(function () {
                Panel.style.display = 'none';
            }, 500);
        }
    });

    $('#Quote').on('click', function () {

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
        let finalText = '>' + selectedText;

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#SearchBar').on('click', function () {

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
        let finalText = selectedText + ` search`;

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });

    $('#CLI').on('click', function () {

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
        let finalText = '```\n' + selectedText + '\n```';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#LineCLI').on('click', function () {

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
        let finalText = '`' + selectedText + '`';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });


});