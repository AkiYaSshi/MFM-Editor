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
            Panel.style.display = 'inline-block'; // ��ܮi�}�����s
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
        let finalText = '>' + selectedText;

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#SearchBar').on('click', function () {

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
        let finalText = selectedText + ` search`;

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });

    $('#CLI').on('click', function () {

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
        let finalText = '```\n' + selectedText + '\n```';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });
    $('#LineCLI').on('click', function () {

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
        let finalText = '`' + selectedText + '`';

        // ���o����d�򪺰_�l��m�M������m
        let start = textArea.selectionStart;
        let end = textArea.selectionEnd;

        // ���N����d�򪺤�r�� finalText
        textArea.value = textArea.value.substring(0, start) + finalText + textArea.value.substring(end);

        // �]�w�s������d��
        textArea.setSelectionRange(start, start + finalText.length);
    });


});