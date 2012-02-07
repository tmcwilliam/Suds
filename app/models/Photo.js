// We use the "mapping" method in order to drill down to nested objects in the JSON from the Instagram response.
Suds.models.Photo = Ext.regModel("Suds.models.Photo", {
    fields: [
        {name: "filter", type: "string"},
        {name: "link", type: "string"},
        {name: "username", type: "string", mapping: "user.username"},
        {name: "thumbnail_url", type: "string", mapping: "images.thumbnail.url"},
        {name: "low_res_url", type: "string", mapping: "images.low_resolution.url"},
        {name: "standard_res_url", type: "string", mapping: "images.standard_resolution.url"},
				{name: "profile_picture", type: "string", mapping: "user.profile_picture"}
				// {name: "caption", type: "string", mapping: "caption.text"}
    ]
});

Suds.models.PhotoStore = new Ext.data.Store({
    // Ext.getStore('suds_photo_store');
    id: 'suds_photo_store',

    model: 'Suds.models.Photo',

    // Fire off a request when the page loads.  Here is why we don't *need* a controller for this simple view.
    autoLoad: true,

    proxy: {
       // JSON-P FTW
       type: 'scripttag',
       // If you're offline, uncomment the two lines below and comment the line above and the line with the Instagram URL.
       // type: 'ajax',
       // url: 'app/models/data_from_instagram_api.json',
       url: 'https://api.instagram.com/v1/tags/beer/media/recent?access_token=2260821.f59def8.7fe0d31e791e4e62a00fc8f44b831140',
       reader: {
         type: 'json',
         // The root of the JSON response from which we will iterate over is called "data".
         root: 'data'
       }
    }
});