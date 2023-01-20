function StartPage ()
{
    document.getElementById('I-III').style.display='flex';
    document.getElementById('IV-VI').style.display='none';
    document.getElementById('VII-VIII').style.display='none';
    document.getElementById('spinoff').style.display='none';
}
function SelectedPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'I-III':
            document.getElementById('I-III').style.display='flex';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';
        break;
        case 'IV-VI':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='flex';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';
        break;
        case 'VII-VIII':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='flex';
            document.getElementById('spinoff').style.display='none';    
        break;
        case 'spinoff':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='flex';
        break;
        default:
            //document.getElementById('jump_page').value = 'I-IV'
        break;
      }
}

function PrevPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'I-III':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='flex';
            document.getElementById('jump_page').value = 'spinoff'
        break;
        case 'IV-VI':
            document.getElementById('I-III').style.display='flex';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'I-III'
        break;
        case 'VII-VIII':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='flex';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';    
            document.getElementById('jump_page').value = 'IV-VI'
        break;
        case 'spinoff':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='flex';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'VII-VIII'
        break;
        default:
            document.getElementById('jump_page').value = 'I-III'
        break;
      }
}

function NextPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'I-III':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='flex';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'IV-VI'
        break;
        case 'IV-VI':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='flex';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'VII-VIII'
        break;
        case 'VII-VIII':
            document.getElementById('I-III').style.display='none';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='flex';    
            document.getElementById('jump_page').value = 'spinoff'
        break;
        case 'spinoff':
            document.getElementById('I-III').style.display='flex';
            document.getElementById('IV-VI').style.display='none';
            document.getElementById('VII-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'I-III'
        break;
        default:
            document.getElementById('jump_page').value = 'I-III'
        break;
      }
}