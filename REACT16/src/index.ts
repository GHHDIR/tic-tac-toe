let title = document.querySelector( '.title')!;
let turn = 'x';
let squares:any = [];


function winnner(){
 
    for (let i = 1; i<10; i++)
    
    {
     squares[i]  = document.getElementById('item' + i )?.innerHTML;
    }

    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
    {
        title.innerHTML = '${squares[1]}winner';
        document. getElementById('item'+1)!.style.background = '#001';
        document. getElementById('item'+2)!.style.background = '#001';
        document .getElementById('item'+3)!.style.background = '#001';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
        
        
    }

    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '')
    {
        title.innerHTML = '${squares[1]}winner';
        document. getElementById('item'+4)!.style.background = '#001';
        document. getElementById('item'+5)!.style.background = '#001';
        document .getElementById('item'+6)!.style.background = '#001';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }

    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '')
    {
        title.innerHTML = '${squares[1]}winner';
        document. getElementById('item'+7)!.style.background = '#001';
        document. getElementById('item'+8)!.style.background = '#001';
        document .getElementById('item'+9)!.style.background = '#001';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
      
    }


///////////////////////////////////////////////////////////////////////////////

    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '')
    {
        title.innerHTML = '${squares[1]}winner';
        document. getElementById('item'+1)!.style.background = '#001';
        document. getElementById('item'+4)!.style.background = '#001';
        document .getElementById('item'+7)!.style.background = '#001';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }

    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '')
    {
        title.innerHTML = '${squares[1]}winner';
        document. getElementById('item'+2)!.style.background = '#001';
        document. getElementById('item'+5)!.style.background = '#001';
        document .getElementById('item'+8)!.style.background = '#001';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }

    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')
    {
        title.innerHTML = '${squares[1]}winner';
        document. getElementById('item'+3)!.style.background = '#001';
        document. getElementById('item'+6)!.style.background = '#001';
        document .getElementById('item'+9)!.style.background = '#001';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }
    
    ////////////////////////////////////////////////////////////////////////////////

    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '')
    {
        title.innerHTML = '${squares[1]}winner';
        document. getElementById('item'+1)!.style.background = '#001';
        document. getElementById('item'+5)!.style.background = '#001';
        document .getElementById('item'+9)!.style.background = '#001';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }

    if(squares[3] == squares[6] && squares[6] == squares[7] && squares[7] != '')
    {
        title.innerHTML = '${squares[1]}winner';
        document. getElementById('item'+3)!.style.background = '#001';
        document. getElementById('item'+6)!.style.background = '#001';
        document .getElementById('item'+7)!.style.background = '#001';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }
}

function game(id:any)
{
    let element: HTMLElement | null = document.getElementById(id)!;
        if(turn === 'x' && element.innerHTML == '')
        
        {
            element.innerHTML = 'x';

            turn ='o';

            title.innerHTML = 'o'; 
        }
        else if( turn === 'o' && element.innerHTML == ''){ 

        element.innerHTML = 'o'; 

        turn ='x';

        title.innerHTML = 'x'; 
        }
        winnner()  
}
