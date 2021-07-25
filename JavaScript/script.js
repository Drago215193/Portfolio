// slider functions
document.querySelector('.right').addEventListener('click', function() {

	rightSlider()

});
document.querySelector('.left').addEventListener('click', function() {

	leftSlider()

});


function rightSlider() {

	document.querySelector('.welcome-part').classList.add('forward');
	document.querySelector('.welcome-part').classList.remove('back');
	document.querySelector('.about').classList.remove('not-visible');
	document.querySelector('.about').classList.add('back');
	document.querySelector('.about').classList.remove('forward');

	document.querySelector('.right').classList.add('colored');
	document.querySelector('.left').classList.remove('colored');

}

function leftSlider() {

	document.querySelector('.welcome-part').classList.toggle('forward');
	document.querySelector('.welcome-part').classList.toggle('back');


	document.querySelector('.about').classList.toggle('forward');
	document.querySelector('.about').classList.toggle('back');


	document.querySelector('.right').classList.toggle('colored');
	document.querySelector('.left').classList.toggle('colored');


}

//add function to showMore btn

if (window.matchMedia("(max-width: 500px)").matches) {

	$(".show-link").click(function() {


//	$(".project-2").css("margin-left", "0px");

	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";


			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";
//			document.querySelector(".project-2").style.marginRight = "90px";


			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");


		}

}
	});

	} else {

		$(".show-link").click(function() {


	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";


			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";


			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");

		}




	}
});

}

//light to dark mode
const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
