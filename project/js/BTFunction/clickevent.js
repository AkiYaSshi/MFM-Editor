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
            // ����ܧέ��v
            let X = document.getElementById('inputX').value;
            let Y = document.getElementById('inputY').value;
                if (Y === "") {
                    Y = 1;
                }
                if (X === "") {
                    X = 1;
                }
            // �ˬd�O�_���������r
            if (textArea.selectionStart !== textArea.selectionEnd) {


                const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);


                    // �Ыئۥ��ܧ�MFM�y�k
                    const scaledText = `$[scale.x=${X},y=${Y} ${selectedText}]`;

                    const newText = textArea.value.substring(0, textArea.selectionStart) + scaledText +   textArea.value.substring(textArea.selectionEnd);

                    // ��s�奻��J�ϰ쪺���e
                    textArea.value = newText;

            } 
            else {
                    // �Ыإ]�tMFM����ĪG����r
                    const scaledText = `$[scale.x=${X},y=${Y} ${textArea.value}]`;

                    textArea.value = scaledText
            }
        });
});