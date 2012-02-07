Suds.views.BeerContainer = Ext.extend(Ext.Panel, {
	fullscreen:true,
	title: 'Home',
	iconCls: 'home',
	layout: 'card',
		
  initComponent: function(){
		var list, detail, filter;

		list = {
			xtype: 'Suds.views.BeerList',
			id: 'beerList'
		}

		detail = {
			xtype: 'Suds.views.BeerDetail',
			id: 'beerDetail'
		}

		filter = {
			xtype: 'Suds.views.FilterForm', 
			id: 'filterForm'
		}

		Ext.apply(this, {
			items: [list,detail,filter]
		});

		Suds.views.BeerContainer.superclass.initComponent.call(this);
  },

  reveal: function(target) {
	  var direction = (target === 'beerList') ? 'right' : 'left'
	  this.setActiveItem(
	    Suds.views[target],
	    { type: 'slide', direction: direction }
	  );
  }

});

Ext.reg('Suds.views.BeerContainer', Suds.views.BeerContainer);
