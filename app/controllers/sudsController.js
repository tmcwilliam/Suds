Ext.regController('Suds', {
    store: Suds.models.SudStore,

    list: function() {
    	Suds.views.beerContainer.reveal('beerList');
    },

    filter: function() {
      Suds.views.beerContainer.reveal('filterForm');
    },

		detail: function(params) {
	    var model = this.store.getAt(params.index);
	    Suds.views.beerDetail.update(model.data);    
			Suds.views.beerContainer.reveal('beerDetail');
		},
		
		submit: function(params){
			var abv = params.data.abv;
			var ibu = params.data.ibu;
			var darkness = params.data.darkness;
			
			var beerFilter = new Ext.util.Filter({
				filterFn: function(item) {
					return item.data.darkness >= darkness && item.data.ABV >= abv && item.data.IBU >= ibu;
				}
			});
			
			this.store.clearFilter();
			this.store.filter(beerFilter);
			this.list();
		}

});
