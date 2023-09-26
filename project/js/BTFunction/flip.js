$(function () {

	const FlipButton = document.getElementById('filp-button');
	const FlipPanel = document.getElementById('flip-panel');
	const Vflip = document.getElementById('Vflip');
	const Hflip = document.getElementById('Hflip');

// 添加點擊事件監聽器，以顯示或隱藏展開的按鈕
FlipButton.addEventListener('click', function () {

     if (FlipPanel.style.display !== 'none') {
        Vflip.disabled = true;
        Hflip.disabled = true;

    // 直接設定透明度和位置
    FlipButton.style.backgroundColor = '#f0f0f0';
    Vflip.style.opacity = '0';
    Vflip.style.transform = 'translateX(-100%)';
    Hflip.style.opacity = '0';
    Hflip.style.transform = 'translateX(-150%)';

    // 使用 setTimeout 等待一段時間，等動畫完成，然後再隱藏按鈕
         setTimeout(function () {
             FlipPanel.style.display = 'none';
         }, 300);
    }
  else{
      FlipPanel.style.display = 'inline-block';
        Vflip.disabled = false;
        Hflip.disabled = false;

     // 顯示展開的按鈕

    // 使用 setTimeout 等待一段時間，等動畫完成
    setTimeout(function () {
      FlipButton.style.backgroundColor = '#AAA';
      Vflip.style.opacity = '1';
      Vflip.style.transform = 'translateX(0)';
      Hflip.style.opacity = '1';
      Hflip.style.transform = 'translateX(0)';
       }, 10);
  }

});

Vflip.addEventListener('click', function () {
    const textArea = document.getElementById('text-input');

    if (textArea.selectionStart !== textArea.selectionEnd) { 

        const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
        const Vfliptext = `$[flip.v ${selectedText}]`
        const newText = textArea.value.substring(0, textArea.selectionStart) + Vfliptext +   textArea.value.substring(textArea.selectionEnd);
        textArea.value = newText;
    }
    else{
        const Vfliptext = `$[flip ${textArea.value}]`
        textArea.value = Vfliptext;
    }

});

Hflip.addEventListener('click', function () {
    const textArea = document.getElementById('text-input');

    if (textArea.selectionStart !== textArea.selectionEnd) { 
        const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
        const Hfliptext = `$[flip.h ${selectedText}]`
        const newText = textArea.value.substring(0, textArea.selectionStart) + Hfliptext +   textArea.value.substring(textArea.selectionEnd);
        textArea.value = newText;
    }
    else{
        const Hfliptext = `$[flip.h ${textArea.value}]`
        textArea.value = Hfliptext;
    }

});

});