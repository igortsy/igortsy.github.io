function plx(element,distance,speed){
	const item = document.querySelector(element);
	item.style.transform = `translateY(${distance * speed}px) `;


}

window.addEventListener('scroll',function(){
	plx('.top-img',window.scrollY,1);
	// plx('.big-rose',window.scrollY,.3);
	// plx('.small-rose',window.scrollY,.5);
	//plx('header',window.scrollY,1);

})