// Let's define some template helpers to display our data.
// Note: using 'src.sencha.io' to resize the image in the cloud
Suds.views.sudListItemTpl = function() {
	return 	"<div class='sud'>" +
					"<img class='sud-image' width='70' height='100' src='http://src.sencha.io/70/{thumbnail_url}' />" +
					"<div class='copy-wrap'><h2 class='sud-name'>{name}</h2>" +
					"<p class='brewery'>{brewery}</p></div>" +
			    "</div>";
};

Suds.views.sudDetailTpl = function() {
	return 	"<div class='sud-detail clearfix'>" +
					"<img class='sud-image' width='120' src='http://src.sencha.io/120/{thumbnail_url}' />" +
					"<div class='sud-info'><p><b>{name}</b></p>" +
					"<p class='brewery'>{brewery}</p>" +
					"<p>Alcohol by Volume: <b>{ABV}%</b></p>" +
					"<p>International Bitterness Units: <b>{IBU}</b></p></div>" +
					"</div>"
};

Suds.views.innerListItemTpl = function () {
    return 	"<div class='item-wrap'> " +
							"<div class='user-wrap clearfix'> " +
								"<img class='profile' width='35' src='http://src.sencha.io/35/{profile_picture}' />" +
								"<span class='username'>{username}</span>" +
							"</div>" +
	    				"<img class='sudgram-image' width='295' src='http://src.sencha.io/295/{standard_res_url}' />" +
							"<p class='caption'>{caption}</p>" +
				    "</div>";
};