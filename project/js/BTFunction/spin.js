$(document).ready(function() {
    let SpinStandard = null; // �w�q SpinStandard �ܼ�
    let Spindire = null; // �w�q Spindire �ܼ�
    const openpanel = document.getElementById('spin-button');
    const spinpanel = document.getElementById('spinpanel-ctrl');

    openpanel.addEventListener('click', function() {

        if (spinpanel.style.display === 'none' || spinpanel.style.display === '') {

            spinpanel.style.display = 'block';
            openpanel.style.backgroundColor = '#AAA';

        }
        else {
            spinpanel.style.display = 'none';
            openpanel.style.backgroundColor = '#f0f0f0';
        }


    });

    $(document).click(function(e) {
        // �ˬd�I���ƥ�O�_�b InputCoorPanel ��
        if (!$(e.target).closest("#text-input").length && !$(e.target).closest("#spin-button").length && !$(e.target).closest("#spin-option-panel").length) {
            // �p�G���b InputCoorPanel ���A���� InputCoorPanel �ë�_���s�����A
            $("#spinpanel-ctrl").hide();
            $("#spin-button").css("background-color", "#f0f0f0");
        }
    });


    // ������ܪ��A
    $(".Bstandard *").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).css("background-color", "#f0f0f0");
            SpinStandard = null;
        }
        else {
            $(".Bstandard *").removeClass("active"); // ���m��ܪ��A
            $(".Bstandard *").css("background-color", "#f0f0f0");
            $(this).addClass("active"); // �]�w�s���s��ܪ��A
            $(this).css("background-color", "#AAA");
            // �����襤���s
            SpinStandard = $(this).attr("id");
        }
    });


    $(".Bdire *").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).css("background-color", "#f0f0f0");
            Spindire = "";
        }
        else {
            $(".Bdire *").removeClass("active"); // ���m��ܪ��A
            $(".Bdire *").css("background-color", "#f0f0f0");
            $(this).addClass("active"); // �]�w�s���s��ܪ��A
            $(this).css("background-color", "#AAA");
            // �����襤���s
            Spindire = $(this).attr("id");
        }
    });

    $('#ApplySpin').on('click', function () {
        const textArea = document.getElementById('text-input');
        const SPD = document.getElementById('spdInput').value;
        let Spinedtext = "";

        if (SpinStandard === 'Xspin') {
            if (Spindire === 'Rspin') {
                if (SPD !== '') {
                    Spinedtext=`$[spin.x,right,speed=${SPD}`;
                }
                else {
                     Spinedtext = `$[spin.x,right`;
                }
            }
            else if (Spindire === 'Lspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.x,left,speed=${SPD}`;
                }
                else {
                     Spinedtext = `$[spin.x,left`;
                }
            }
            else if (Spindire === 'Altspin') {
                 if (SPD !== '') {
                     Spinedtext = `$[spin.x,alternate,speed=${SPD}`;
                 }
                 else {
                    Spinedtext = `$[spin.x,alternate`;
                 }
            }
            else {
                 if (SPD !== '') {
                    Spinedtext = `$[spin.x,speed=${SPD}`;
                 }
                 else {
                    Spinedtext = `$[spin.x,`;
                 }
            }

        }
        else if (SpinStandard === 'Yspin') {

            if (Spindire === 'Rspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.y,right,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.y,right`;
                }
            }
            else if (Spindire === 'Lspin') {
                    if (SPD !== '') {
                        Spinedtext = `$[spin.y,left,speed=${SPD}`;
                    }
                    else {
                        Spinedtext = `$[spin.y,left`;
                    }
                }
            else if (Spindire === 'Altspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.y,alternate,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.y,alternate`;
                }
            }
            else {
                if (SPD !== '') {
                    Spinedtext = `$[spin.y,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.y`;
                }
            }

            ;
        }
        else if (SpinStandard === 'Zspin') {
            if (Spindire === 'Rspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.z,right,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.z,right`;
                }
            }
            else if (Spindire === 'Lspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.z,left,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.z,left`;
                }
            }
            else if (Spindire === 'Altspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.z,alternate,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.z,alternate`;
                }
            }
            else {
                if (SPD !== '') {
                    Spinedtext = `$[spin.z,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.z`;
                }
            }

            ;
        }
        else {
            if (Spindire === 'Rspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.right,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.right`;
                }
            }
            else if (Spindire === 'Lspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.left,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.left`;
                }
            }
            else if (Spindire === 'Altspin') {
                if (SPD !== '') {
                    Spinedtext = `$[spin.alternate,speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin.alternate`;
                }
            }
            else {
                if (SPD !== '') {
                    Spinedtext = `$[spin.speed=${SPD}`;
                }
                else {
                    Spinedtext = `$[spin`;
                }
            }
        }

        if (textArea.selectionStart !== textArea.selectionEnd) {
            const selectedText = textArea.value.substring(textArea.selectionStart, textArea.selectionEnd);
            const result = `${Spinedtext} ${selectedText}]`;
            const newText = textArea.value.substring(0, textArea.selectionStart) + result + textArea.value.substring(textArea.selectionEnd);
            textArea.value = newText;
        } else {
            const result = `${Spinedtext} ${textArea.value}]`;
            textArea.value = result;
        }
    });
});