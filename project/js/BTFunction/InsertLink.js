$(document).ready(function () {

  $("#Link").click(function (e) {
    e.stopPropagation(); 
    if ($("#link-panel").is(":hidden")) {
      $("#link-panel").show();
      $("#Link").css("background-color", "#AAA");
    } else {
      
      $("#link-panel").hide();
      $("#Link").css("background-color", "#f0f0f0");
    }
  });


  $(document).click(function (e) {
      if (!$(e.target).closest("#text-input").length && !$(e.target).closest("#Link").length && !$(e.target).closest("#link-panel").length) {
      $("#link-panel").hide();
      $("#Link").css("background-color", "#f0f0f0"); 
    }
  });
  // 檢查輸入框是否有內容，並啟用/禁用按鈕
  // 監聽 input 元素的輸入事件
$('#Link-hyper').on('input', function() {
  let inputValue = $(this).val();
  
  // 檢查輸入值是否為空
  if (inputValue.trim() === '') {
    // 如果為空，禁用兩個 button
    $('#Link-show-pre').prop('disabled', true);
    $('#Link-hide-pre').prop('disabled', true);
  } else {
    // 如果不為空，啟用兩個 button
    $('#Link-show-pre').prop('disabled', false);
    $('#Link-hide-pre').prop('disabled', false);
  }
});

// 初始情況下，禁用兩個 button
$('#Link-show-pre').prop('disabled', true);
$('#Link-hide-pre').prop('disabled', true);

document.getElementById('Link-show-pre').addEventListener('click', function () {

    const TheLink = document.getElementById('Link-hyper').value;
    const textArea = document.getElementById('text-input');

    if (textArea.selectionStart !== textArea.selectionEnd) {

        const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
        const LinkedText = `[${selectedText}](${TheLink})`;
        const newText = textArea.value.substring(0, textArea.selectionStart) + LinkedText +   textArea.value.substring(textArea.selectionEnd);
        textArea.value = newText;
    }
    else{
        const LinkedText = `[${textArea.value}](${TheLink})`;
        textArea.value = LinkedText;
    }
});

document.getElementById('Link-hide-pre').addEventListener('click', function () {

    const TheLink = document.getElementById('Link-hyper').value;
    const textArea = document.getElementById('text-input');

    if (textArea.selectionStart !== textArea.selectionEnd) {

        const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
        const LinkedText = `?[${selectedText}](${TheLink})`;
        const newText = textArea.value.substring(0, textArea.selectionStart) + LinkedText +   textArea.value.substring(textArea.selectionEnd);
        textArea.value = newText;
    }
    else{
        const LinkedText = `?[${textArea.value}](${TheLink})`;
        textArea.value = LinkedText;
    }
});

});
