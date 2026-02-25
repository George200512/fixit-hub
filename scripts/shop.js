$(document).ready(function(event) {
				let observer = new IntersectionObserver((entries)=>{
								entries.forEach((e)=> {
												if (e.isIntersecting){
																e.target.style.transform = "translate(0, 0)";
												}
								});
				});
				
				$(".product").each(function(idx, ele){
								observer.observe(ele);
				});
});

function open_or_close2(id){
				let icon = $(`#${id}`);
				if (icon.hasClass("bi-chevron-right")){
								icon.parent().next().slideDown(400);
								icon.removeClass("bi-chevron-right").addClass("bi-chevron-down");
				}else{
								icon.parent().next().slideUp(400);
								icon.removeClass("bi-chevron-down").addClass("bi-chevron-right");
}}