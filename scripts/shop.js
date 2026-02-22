$(document).ready(function(event) {
				let observer = new IntersectionObserver((entries)=>{
								entries.forEach((e)=> {
												if (e.isIntersecting){
																e.target.style.translate = "0 0";
												}
								});
				});
				
				$(".product").each((idx, ele)=>{
								observer.observe(ele);
				});
});

function open_or_close(id){}

