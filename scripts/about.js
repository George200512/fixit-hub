$(document).ready(function (event) {
				const observer = new IntersectionObserver(entries =>{
								entries.forEach(e => {
												console.log("Entry:", e);
												if (e.isIntersecting){
																e.target.style.opacity = "1";
																e.target.style.transform = "translateY(0)";			
																observer.unobserve(e.target);
												}
								});
				},
				{threshold: 0.3});
				
				$(".section-1 h2, .div-1 h2, .div-2 h2, .section-3 h2, .section-1 p, .div-2 p, .div-1 p, .section-3 p").each((idx, ele) => {
								observer.observe(ele);
				});
				
				
});

