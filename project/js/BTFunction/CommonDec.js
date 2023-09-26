$(document).ready(function () {

// 獲取按鈕和展開的按鈕的元素
const commonDecorationButton = document.getElementById('common-decoration');
const BoldButton = document.getElementById('bold-button');
const italicbutton = document.getElementById('italic-button');
const strikethroughbutton  = document.getElementById('strike-through-button');
const decorationButtonsContainer = document.getElementById('decoration-buttons');

// 添加點擊事件監聽器，以顯示或隱藏展開的按鈕
commonDecorationButton.addEventListener('click', function () {
  if (decorationButtonsContainer.style.display === 'none' || decorationButtonsContainer.style.display === '') {
    decorationButtonsContainer.style.display = 'inline-block'; // 顯示展開的按鈕
       BoldButton.disabled = false;
       italicbutton.disabled = false;
       strikethroughbutton.disabled = false;

    // 使用 setTimeout 等待一段時間，等動畫完成
    setTimeout(function () {
      commonDecorationButton.style.backgroundColor = '#AAA';
      BoldButton.style.opacity = '1';
      BoldButton.style.transform = 'translateX(0)';
      italicbutton.style.opacity = '1';
      italicbutton.style.transform = 'translateX(0)';
      strikethroughbutton.style.opacity = '1';
      strikethroughbutton.style.transform = 'translateX(0)';
    }, 10);

  } else {
    // 直接設定透明度和位置
       BoldButton.disabled = true;
       italicbutton.disabled = true;
       strikethroughbutton.disabled = true;
      commonDecorationButton.style.backgroundColor = '#f0f0f0';
    BoldButton.style.opacity = '0';
    BoldButton.style.transform = 'translateX(-100%)';
    italicbutton.style.opacity = '0';
    italicbutton.style.transform = 'translateX(-150%)';
    strikethroughbutton.style.opacity = '0';
    strikethroughbutton.style.transform = 'translateX(-200%)';

    // 使用 setTimeout 等待一段時間，等動畫完成，然後再隱藏按鈕
    setTimeout(function () {
      decorationButtonsContainer.style.display = 'none';
    }, 400);
  }
});

// 監聽 BoldButton 按鈕的點擊事件
    $('#bold-button').on('click', function () {

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
        let finalText = '**' + selectedText + '**';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });


// 監聽 ItalicButton 按鈕的點擊事件
$('#italic-button').on('click', function() {

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
    let finalText = '<i>' + selectedText + '</i>';

    // 取得選取範圍的起始位置和結束位置
    let start = textArea.selectionStart;
    let end = textArea.selectionEnd;

    // 取代選取範圍的文字為 finalText
    textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

    // 設定新的選取範圍
    textArea.setSelectionRange(start, start + finalText.length);
});



// 監聽 strikethroughbutton 按鈕的點擊事件
    $('#strike-through-button').on('click', function () {

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
        let finalText = '~~' + selectedText + '~~';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);
    });

});