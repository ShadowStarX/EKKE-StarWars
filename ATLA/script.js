function StartPage ()
{
    document.getElementById('aang').style.display='flex';
    document.getElementById('korra').style.display='none';
    document.getElementById('books').style.display='none';
    document.getElementById('badmovie').style.display='none';
}
function PrevPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'aang':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='flex';
            document.getElementById('jump_page').value = 'badmovie'
        break;
        case 'korra':
            document.getElementById('aang').style.display='flex';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='none';
            document.getElementById('jump_page').value = 'aang'
        break;
        case 'books':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='flex';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='none';
            document.getElementById('jump_page').value = 'korra'
        break;
        case 'badmovie':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='flex';
            document.getElementById('badmovie').style.display='none';
            document.getElementById('jump_page').value = 'books'
        break;
        default:
            document.getElementById('jump_page').value = 'aang'
        break;
      }

}
function NextPage ()
{
    var x = document.getElementById('jump_page').value; 
    switch(x) {
        case 'aang':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='flex';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='none';
            document.getElementById('jump_page').value = 'korra'
        break;
        case 'korra':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='flex';
            document.getElementById('badmovie').style.display='none';
            document.getElementById('jump_page').value = 'books'
        break;
        case 'books':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='flex';
            document.getElementById('jump_page').value = 'badmovie'
        break;
        case 'badmovie':
            document.getElementById('aang').style.display='flex';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='none';
            document.getElementById('jump_page').value = 'aang'
        break;
        default:
            document.getElementById('jump_page').value = 'aang'
        break;
      }

}
function SelectedPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'aang':
            document.getElementById('aang').style.display='flex';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='none';
        break;
        case 'korra':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='flex';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='none';
        break;
        case 'books':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='flex';
            document.getElementById('badmovie').style.display='none';
        break;
        case 'badmovie':
            document.getElementById('aang').style.display='none';
            document.getElementById('korra').style.display='none';
            document.getElementById('books').style.display='none';
            document.getElementById('badmovie').style.display='flex';
        break;
        default:
            //document.getElementById('jump_page').value = 'aang'
        break;
      }
}