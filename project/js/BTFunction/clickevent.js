$(document).ready(function () {

const freescale = document.getElementById('freescale')
const scalecontainer = document.getElementById('scalecontainer')
const sumit = document.getElementById('applybutton')

freescale.addEventListener('click', function () {

  if (scalecontainer.style.display === 'none' || scalecontainer.style.display === '') {
    freescale.style.backgroundColor = '#AAA';
    scalecontainer.style.display = 'flex';
  }
  else{
      scalecontainer.style.display = 'none'
      freescale.style.backgroundColor = '#f0f0f0';
  }
});

        document.getElementById('applybutton').addEventListener('click', function () {
            const textArea = document.getElementById('text-input');
            // 獲取變形倍率
            let X = document.getElementById('inputX').value;
            let Y = document.getElementById('inputY').value;
                if (Y === "") {
                    Y = 1;
                }
                if (X === "") {
                    X = 1;
                }
            // 檢查是否有選取的文字
            if (textArea.selectionStart !== textArea.selectionEnd) {


                const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);


                    // 創建自由變形MFM語法
                    const scaledText = `$[scale.x=${X},y=${Y} ${selectedText}]`;

                    const newText = textArea.value.substring(0, textArea.selectionStart) + scaledText +   textArea.value.substring(textArea.selectionEnd);

                    // 更新文本輸入區域的內容
                    textArea.value = newText;

            } 
            else {
                    // 創建包含MFM旋轉效果的文字
                    const scaledText = `$[scale.x=${X},y=${Y} ${textArea.value}]`;

                    textArea.value = scaledText
            }
        });
});