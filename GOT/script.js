function SelectedPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'I-IV':
            document.getElementById('I-IV').style.display='flex';
            document.getElementById('V-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';
        break;
        case 'V-VIII':
            document.getElementById('I-IV').style.display='none';
            document.getElementById('V-VIII').style.display='flex';
            document.getElementById('spinoff').style.display='none';
        break;
        case 'spinoff':
            document.getElementById('I-IV').style.display='none';
            document.getElementById('V-VIII').style.display='none';
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
        case 'I-IV':
            document.getElementById('I-IV').style.display='none';
            document.getElementById('V-VIII').style.display='none';
            document.getElementById('spinoff').style.display='flex';
            document.getElementById('jump_page').value = 'spinoff'
        break;
        case 'V-VIII':
            document.getElementById('I-IV').style.display='flex';
            document.getElementById('V-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'I-IV'
        break;
        case 'spinoff':
            document.getElementById('I-IV').style.display='none';
            document.getElementById('V-VIII').style.display='flex';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'V-VIII'
        break;
        default:
            document.getElementById('jump_page').value = 'I-IV'
        break;
      }

}
function NextPage ()
{
    var x = document.getElementById('jump_page').value; 
    switch(x) {
        case 'I-IV':
            document.getElementById('I-IV').style.display='none';
            document.getElementById('V-VIII').style.display='flex';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'V-VIII'
        break;
        case 'V-VIII':
            document.getElementById('I-IV').style.display='none';
            document.getElementById('V-VIII').style.display='none';
            document.getElementById('spinoff').style.display='flex';
            document.getElementById('jump_page').value = 'spinoff'
        break;
        case 'spinoff':
            document.getElementById('I-IV').style.display='flex';
            document.getElementById('V-VIII').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('jump_page').value = 'I-IV'
        break;
        default:
            document.getElementById('jump_page').value = 'I-IV'
        break;
      }

}
