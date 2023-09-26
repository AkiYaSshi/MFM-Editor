$(document).ready(function () {

// 獲取按鈕和展開的按鈕的元素
const textscaleButton = document.getElementById('Textscale');
const scaleButtonsContainer = document.getElementById('scalebuttons');
const freescale = document.getElementById('freescale');
const smalltext = document.getElementById('small-text');
const Percisescale = document.getElementById('scalecontainer');
const applyButton = document.getElementById('applybutton');


// 添加點擊事件監聽器，以顯示或隱藏展開的按鈕
textscaleButton.addEventListener('click', function () {

  if (scaleButtonsContainer.style.display === 'none' || scaleButtonsContainer.style.display === '') {
    scaleButtonsContainer.style.display = 'inline-block';
    freescale.disabled = false;
    smalltext.disabled = false;
     // 顯示展開的按鈕

    // 使用 setTimeout 等待一段時間，等動畫完成
    setTimeout(function () {
      textscaleButton.style.backgroundColor = '#AAA';
      freescale.style.opacity = '1';
      freescale.style.transform = 'translateX(0)';
      smalltext.style.opacity = '1';
      smalltext.style.transform = 'translateX(0)';
       }, 10);
	
  } else {
    // 直接設定透明度和位置
    freescale.disabled = true;
    smalltext.disabled = true;
    textscaleButton.style.backgroundColor = '#f0f0f0';
    freescale.style.opacity = '0';
    freescale.style.transform = 'translateX(-100%)';
    smalltext.style.opacity = '0';
    smalltext.style.transform = 'translateX(-150%)';

    // 使用 setTimeout 等待一段時間，等動畫完成，然後再隱藏按鈕
    setTimeout(function () {
      scaleButtonsContainer.style.display = 'none';
    }, 300);
  }
});

  // 監聽 document 的點擊事件
  $(document).click(function (e) {
    // 檢查點擊事件是否在 InputCoorPanel 內
      if (!$(e.target).closest("#text-input").length && !$(e.target).closest("#freescale").length && !$(e.target).closest("#scalecontainer").length) {
      // 如果不在 InputCoorPanel 內，隱藏 InputCoorPanel 並恢復按鈕的狀態
      $("#scalecontainer").hide();
      $("#freescale").css("background-color", "#f0f0f0");
	}
  });

// 監聽 smalltext 按鈕的點擊事件
    $('#small-text ').on('click', function () {

        // 監聽 BoldButton 按鈕的點擊事件


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
        let finalText = '<small>' + selectedText + '</small>';

        // 取得選取範圍的起始位置和結束位置
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // 取代選取範圍的文字為 finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // 設定新的選取範圍
        textArea.setSelectionRange(start, start + finalText.length);

    });

});