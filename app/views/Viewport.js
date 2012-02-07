Suds.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
        
    initComponent: function() {
	
        Ext.apply(this, {
						tabBar: {
							dock:'bottom',
							layout:{
								pack:'center'
							}
						},
            items: [
                { xtype: 'Suds.views.BeerContainer', id: 'beerContainer' },
								{ xtype: 'Suds.views.SudgramsList', id: 'sudgramsList'}
            ]
        });

        Suds.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
