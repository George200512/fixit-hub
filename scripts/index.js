$(document).ready(function (event) {
				$(".menu-btn").click(function (event){
								$(".mobile-menu").css("display", "flex");
								$(".mobile-menu").css("translate", "0 0");
				});
				
				$(".bi-x").click(function (event){
								$(".mobile-menu").css("translate", "100% 0");
								$(".mobile-menu").css("display", "flex");
				});
				
				
				$(".bottom-to-top").click(function(event) {
								window.scrollTo({
												top: 0,
												behavior: "smooth"
								});
				});
				
				const observer = new IntersectionObserver(function(entries){
								entries.forEach(e=>{
												if (e.isIntersecting){
																e.target.style.translate = "0";
												}
								});
				});
				observer.observe($(".delighted-customers")[0]);
				
});

function open_or_close(id) {
				let icon = $(`#${id}`);
				if (icon.hasClass("bi-plus")){
								icon.removeClass("bi-plus").addClass("bi-dash");
								icon.parent().next().slideDown(600);
				}else{						
								icon.removeClass("bi-dash").addClass("bi-plus");
												icon.parent().next().slideUp(600);
				}
}

