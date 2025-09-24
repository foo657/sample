$('h1').hide().fadeIn(3000);

let toggle = $('#gnav_toggle');
let toggle_content = $('#gnav_content')

toggle.on('click',()=>{
	toggle.toggleClass('active');
	toggle_content.toggleClass('active');
});
