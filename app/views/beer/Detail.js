Suds.views.BeerDetail = Ext.extend(Ext.Panel, {
	
    initComponent: function(){
      var backButton, titlebar;

			backButton = {
				text: 'Back',
				ui: 'back',
				handler: this.onBackAction
			}

			titlebar = {
				xtype: 'toolbar',
				title: 'Suds',
				items: [ backButton ]
			}
			
			Ext.apply(this, {
          tpl: Suds.views.sudDetailTpl(),
          layout: 'fit',
          dockedItems: [titlebar]
      });

      Suds.views.BeerDetail.superclass.initComponent.call(this);

		},
		
		onBackAction: function(){
			Ext.dispatch({
	      controller: 'Suds',
	      action: 'list'
      });
		}
	
});

Ext.reg('Suds.views.BeerDetail', Suds.views.BeerDetail);
