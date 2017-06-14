function handleOnlineStatus() {
	if (navigator.onLine) {
		document.getElementById('offline-status-container').style.display = "none";
	} else {
		document.getElementById('offline-status-container').style.display = "block";
	}
}

(function(){
	fetch('https://www.reddit.com/.json', {
		method: 'get'
	}).then(function(res) {
		if (res.ok) {
			return res.json();
		} else {
			throw new Error("API Error : " + res.status + " " + res.statusText);
		}
	}).then(function(res) {
		var redditPosts = {
			'posts': res.data.children
		};
		var source   = document.getElementById('posts-template').innerHTML;
		var template = Handlebars.compile(source);
		var html = template(redditPosts);
		document.getElementById('post-content').innerHTML = html;
	}).catch(function(err) {
		console.log(err);
	});

	//Handle offline
	window.addEventListener('load', function(){
		window.addEventListener('online',  handleOnlineStatus);
		window.addEventListener('offline', handleOnlineStatus);
	});
	handleOnlineStatus();
})();

