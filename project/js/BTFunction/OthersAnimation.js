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
    const AllOtherButtons = $('#OthersPanel *');
    Showpanel.addEventListener('click', function () {
        if (Panel.style.display === 'none' || Panel.style.display === '') {
            Panel.style.display = 'inline-block'; // ��ܮi�}�����s
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
            setTimeout(function () {
                Panel.style.display = 'none';
            }, 800);
        }
    });

    $('#jelly').on('click', function () {

        // ��� textArea ����
        let textArea = $('#text-input')[0];

        // ��� textArea ���Q������奻
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �p�G selectedText ���šA�h�ϥξ�� textArea �����e
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �զX���̲ת���r
        let finalText = '$[jelly ' + selectedText + ']';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });

    $('#tada').on('click', function () {

        // ��� textArea ����
        let textArea = $('#text-input')[0];

        // ��� textArea ���Q������奻
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �p�G selectedText ���šA�h�ϥξ�� textArea �����e
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �զX���̲ת���r
        let finalText = '$[tada ' + selectedText + ']';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });

    $('#bounce').on('click', function () {

        // ��� textArea ����
        let textArea = $('#text-input')[0];

        // ��� textArea ���Q������奻
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �p�G selectedText ���šA�h�ϥξ�� textArea �����e
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �զX���̲ת���r
        let finalText = '$[bounce ' + selectedText + ']';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#jump').on('click', function () {

        // ��� textArea ����
        let textArea = $('#text-input')[0];

        // ��� textArea ���Q������奻
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �p�G selectedText ���šA�h�ϥξ�� textArea �����e
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �զX���̲ת���r
        let finalText = '$[jump ' + selectedText + ']';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });

    $('#shake').on('click', function () {

        // ��� textArea ����
        let textArea = $('#text-input')[0];

        // ��� textArea ���Q������奻
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �p�G selectedText ���šA�h�ϥξ�� textArea �����e
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �զX���̲ת���r
        let finalText = '$[shake ' + selectedText + ']';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#twitch').on('click', function () {

        // ��� textArea ����
        let textArea = $('#text-input')[0];

        // ��� textArea ���Q������奻
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �p�G selectedText ���šA�h�ϥξ�� textArea �����e
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �զX���̲ת���r
        let finalText = '$[twitch ' + selectedText + ']';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#sparkle').on('click', function () {

        // ��� textArea ����
        let textArea = $('#text-input')[0];

        // ��� textArea ���Q������奻
        let selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �p�G selectedText ���šA�h�ϥξ�� textArea �����e
        if (!selectedText) {
            textArea.select();
        }

        selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);

        // �զX���̲ת���r
        let finalText = '$[sparkle ' + selectedText + ']';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });


});