window.addEventListener('contextmenu', (e)=> {
    e.preventDefault();
});
const r = () => {
    return false;
}
document.onkeydown = function(e)
{
    if (e.keyCode == 123)
    {
        r()
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
    {
        r()
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
    {
        r()
    }

    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    {
        r()
    }
}