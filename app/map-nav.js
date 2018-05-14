let navButtons = document.querySelectorAll('.location__content__details__navigation__tab'),
	currentTab = document.querySelector('.location__content__details__navigation__tab--active');
	currentContent = document.querySelector('.location__content__details__properties--active');

function showContent(event, tab) {
	// If clicked on a tab that was not previously active
	if (!event.currentTarget.classList.contains('location__content__details__navigation__tab--active')) {
		// Adding the styles for an active button
		event.currentTarget.classList.add('location__content__details__navigation__tab--active');
		// Removing them from the previously active button
		currentTab.classList.remove('location__content__details__navigation__tab--active');
		// Changing the currentTab in memory
		currentTab = event.currentTarget;

		// Removing the previously shown content
		currentContent.classList.remove('location__content__details__properties--active');
		// Displaying the target tab's content
		document.getElementById(tab).classList.add('location__content__details__properties--active'); 
		// Changing the currentContent in memory
		currentContent = document.getElementById(tab);
	}
}