$(document).ready(function(event) {
				const observer = new IntersectionObserver(
				entries =>{
								entries.forEach(e=>{
												if(e.isIntersecting){
																				e.target.style.transform = "translateX(0)";			
												}
								});
				}
				);
				
				$(".testimony").each((idx, ele)=>{
								observer.observe(ele);
				});
});

