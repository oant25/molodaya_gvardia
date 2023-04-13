window.onscroll = function showheader () {

	var header = document.querySelector('header');

	if(window.pageYOffset > 200){
		header.classlist.remove('header_fixed');
	}
}