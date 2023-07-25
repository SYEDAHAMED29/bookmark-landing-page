// jshint esversion : 6

//Frequently Asked Questions
const accordion = document.querySelectorAll(".accordion");

accordion.forEach(function(accordion) {
  accordion.addEventListener("click", function(){
    accordion.classList.toggle("active");
  });
});


//Tabs
const tabs = document.querySelectorAll(".tab-links ul li");
const tab_wraps = document.querySelectorAll(".tab");

tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})
		tab.classList.add("active");

		tab_wraps.forEach(function(content, content_index){
			if(content_index == tab_index){
				content.style.display = "flex";
			}
			else{
				content.style.display = "none";
			}
      console.log(tab_index);
     console.log(content_index);
		})

	})
})


// Navigation bar


let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
