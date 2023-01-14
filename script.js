function PrevPage ()
{
    console.log('Vissza');
}
function NextPage ()
{
    console.log('Előre');
}
function SelectedPage ()
{
    var x = document.getElementById('jump_page').value;
    switch(x) {
        case 'original':
            console.log(x);
        break;
        case 'prequel':
            console.log(x);
        break;
        case 'sequel':
            console.log(x);
        break;
        case 'spinoff':
            console.log(x);
        break;
        case 'mandalorian':
            console.log(x);
        break;
      }
}