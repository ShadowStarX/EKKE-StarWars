function StartPage ()
{
    document.getElementById('original').style.display='flex';
    document.getElementById('prequel').style.display='none';
    document.getElementById('sequel').style.display='none';
    document.getElementById('spinoff').style.display='none';
    document.getElementById('mandalorian').style.display='none';
}
function PrevPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'original':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='flex';
            document.getElementById('jump_page').value = 'mandalorian'
        break;
        case 'prequel':
            document.getElementById('original').style.display='flex';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
            document.getElementById('jump_page').value = 'original'
        break;
        case 'sequel':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='flex';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
            document.getElementById('jump_page').value = 'prequel'
        break;
        case 'spinoff':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='flex';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
            document.getElementById('jump_page').value = 'sequel'
        break;
        case 'mandalorian':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='flex';
            document.getElementById('mandalorian').style.display='none';
            document.getElementById('jump_page').value = 'spinoff'
        break;
        default:
            document.getElementById('jump_page').value = 'original'
        break;
      }

}
function NextPage ()
{
    var x = document.getElementById('jump_page').value; 
    switch(x) {
        case 'original':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='flex';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
            document.getElementById('jump_page').value = 'prequel'
        break;
        case 'prequel':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='flex';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
            document.getElementById('jump_page').value = 'sequel'
        break;
        case 'sequel':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='flex';
            document.getElementById('mandalorian').style.display='none';
            document.getElementById('jump_page').value = 'spinoff'
        break;
        case 'spinoff':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='flex';
            document.getElementById('jump_page').value = 'mandalorian'
        break;
        case 'mandalorian':
            document.getElementById('original').style.display='flex';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
            document.getElementById('jump_page').value = 'original'
        break;
        default:
            document.getElementById('jump_page').value = 'original'
        break;
      }

}
function SelectedPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'original':
            document.getElementById('original').style.display='flex';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
        break;
        case 'prequel':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='flex';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
        break;
        case 'sequel':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='flex';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='none';
        break;
        case 'spinoff':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='flex';
            document.getElementById('mandalorian').style.display='none';
        break;
        case 'mandalorian':
            document.getElementById('original').style.display='none';
            document.getElementById('prequel').style.display='none';
            document.getElementById('sequel').style.display='none';
            document.getElementById('spinoff').style.display='none';
            document.getElementById('mandalorian').style.display='flex';
        break;
        default:
            //document.getElementById('jump_page').value = 'original'
        break;
      }
}