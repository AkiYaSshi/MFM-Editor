$(function () {

	const BReposition = document.getElementById('Reposition');
	const InputCoorPanel = document.getElementById('InputCoorPanel');
	const BfreeRepo = document.getElementById('coordinate-Repo');
	const listReposition = document.getElementById('list-Reposition');
	const BCenter = document.getElementById('Incenter');

	BReposition.addEventListener('click', function () {

		if (listReposition.style.display === 'none' || listReposition.style.display === '') {
		BfreeRepo.disabled = false;
		BCenter.disabled = false;
		listReposition.style.display = 'inline-block';
		    setTimeout(function () {
			BReposition.style.backgroundColor = '#AAA';
			BfreeRepo.style.opacity = '1';
			BfreeRepo.style.transform = 'translateX(0)';
			BCenter.style.opacity = '1';
			BCenter.style.transform = 'translateX(0)';

			}, 10);
		}
		else{
			BfreeRepo.disabled = true;
			BCenter.disabled = true;
			BReposition.style.backgroundColor = '#f0f0f0';
			BfreeRepo.style.opacity = '0';
			BfreeRepo.style.transform = 'translateX(-100%)';
			BCenter.style.opacity = '0';
			BCenter.style.transform = 'translateX(-150%)';		    
			setTimeout(function () {
			listReposition.style.display = 'none';

			}, 300);
		}

	});

  //   ť document    I   ƥ 
  $(document).click(function (e) {
    //  ˬd I   ƥ O _ b InputCoorPanel   
	  if (!$(e.target).closest("#text-input").length && !$(e.target).closest("#coordinate-Repo").length && !$(e.target).closest("#InputCoorPanel").length) {
      //  p G   b InputCoorPanel    A     InputCoorPanel  ë _   s     A
      $("#InputCoorPanel").hide();
      $("#coordinate-Repo").css("background-color", "#f0f0f0");
	}
  });


	BfreeRepo.addEventListener('click', function () {
		if (InputCoorPanel.style.display === 'none' || InputCoorPanel.style.display === '') {
				InputCoorPanel.style.display ='block';
				BfreeRepo.style.backgroundColor = '#AAA';
		}
		else{
				InputCoorPanel.style.display ='none';
				BfreeRepo.style.backgroundColor = '#f0f0f0';

		}
	});

	const sumit = document.getElementById('applyCor');
	const textArea = document.getElementById('text-input');

	sumit.addEventListener('click', function () {
		let X = document.getElementById('posivalue-X').value;
		let Y = document.getElementById('posivalue-Y').value;

		if ( X === "" ){
			X = 0;
		}
		if ( Y === "" ){
			Y = 0;
		}        
		if (textArea.selectionStart !== textArea.selectionEnd) {
			const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
			const movedText = `$[position.x=${X},y=${Y} ${selectedText}]`;
			const newText = textArea.value.substring(0, textArea.selectionStart) + movedText +   textArea.value.substring(textArea.selectionEnd);
			textArea.value = newText;
		}
		else{
			const movedText = `$[position.x=${X},y=${Y} ${textArea.value}]`;
			textArea.value = movedText;
		}
	});

	BCenter.addEventListener('click', function () {
		if (textArea.selectionStart !== textArea.selectionEnd) {
			const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
			const movedText = `<center>${selectedText}</center>`;
			const newText = textArea.value.substring(0, textArea.selectionStart) + movedText +   textArea.value.substring(textArea.selectionEnd);
			textArea.value = newText;		
		}
		else{
			const movedText = `<center>${textArea.value}</center>`;
			textArea.value = movedText;
		}
	});

});
