$(document).ready(function (event) {
				$(".menu-btn").click(function (event){
								$(".mobile-menu").css("translate", "0 0");
				});
				
				$(".bi-x").click(function (event){
								$(".mobile-menu").css("translate", "100% 0");
				});
				
				
				$(".bottom-to-top").click(function(event) {
								window.scrollTo({
												top: 0,
												behavior: "smooth"
								});
				});
				
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

