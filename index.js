// jshint esversion : 6


import mixpanel from 'mixpanel-browser';
 
mixpanel.init('YOUR_TOKEN', {debug: true, track_pageview: true, persistence: 'localStorage'});
 
// Set this to a unique identifier for the user performing the event.
mixpanel.identify('USER_ID')
 
// Track an event. It can be anything, but in this example, we're tracking a Sign Up event.
mixpanel.track('Sign Up', {
  'Signup Type': 'Referral'
})

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
