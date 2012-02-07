// Let's register the name of our application.
// Creates a new Application class
Suds = new Ext.Application({
    name: 'Suds',

    launch: function() {	
    	this.views.viewport = new this.views.Viewport();
			
			this.views.beerContainer = this.views.viewport.down('#beerContainer');
      this.views.beerList = this.views.viewport.down('#beerList');
			this.views.beerDetail = this.views.viewport.down('#beerDetail');
			this.views.filterForm = this.views.viewport.down('#filterForm');
			
      this.views.sudgramsList = this.views.viewport.down('#sudgramsList');
    }
});