// discover box toggle
document.getElementById('discover-Box').addEventListener('click', function(event){
    event.preventDefault;

    handelToggle('1st-main-section', 'none');
    handelToggle('2nd-main-section', 'block');
})
// back-to-desk toggle
document.getElementById('back-to-desk').addEventListener('click', function(event){
    event.preventDefault;

    handelToggle('1st-main-section', 'block');
    handelToggle('2nd-main-section', 'none');
})