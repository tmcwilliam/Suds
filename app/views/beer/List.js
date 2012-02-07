Suds.views.BeerList = Ext.extend(Ext.Panel, {
	fullscreen:true,
	layout:'fit',
		
	initComponent: function(){
		var filterButton, titlebar, list, wrapper;

		filterButton = {
			text: 'Filter',
			ui: 'forward',
			handler: this.onFilterAction
		}

		titlebar = {
			xtype: 'toolbar',
			title: 'Suds',
			items: [ {xtype:'spacer'}, filterButton ]
		}

		list = new Ext.List({
			store: Suds.models.SudStore,
			itemTpl: Suds.views.sudListItemTpl(),
			itemCls: 'sud-listitem',
			grouped:true,
			listeners: {
				scope: this,
				itemtap: this.onItemtapAction
			}
		});

		wrapper = new Ext.Panel({
			fullscreen: true,
			layout:'fit',
			dockedItems:[titlebar],
			items:[list]
		});

		Ext.apply(this, {
			items: [wrapper]
		});

		Suds.views.BeerList.superclass.initComponent.call(this);
	},

  onFilterAction: function() {
	  Ext.dispatch({
	    controller: 'Suds',
	    action: 'filter'
	  });
  },

  onItemtapAction: function(list, index, item, e) {
	  Ext.dispatch({
	    controller: 'Suds',
	    action: 'detail',
	    index: index
	  });
  }

});

Ext.reg('Suds.views.BeerList', Suds.views.BeerList);
		