// Register our Sud model with our application and to the models object associated with Suds
Suds.models.Sud = Ext.regModel('Suds.models.Sud', {
		fields: [
			{name: 'name', type: 'string'},
			{name: 'brewery', type: 'string'},
			{name: 'ABV', type: 'float'},
			{name: 'IBU', type: 'int'},
			{name: 'darkness', type: 'int'},
			{name: 'thumbnail_url', type: 'string'}
		]
});

Suds.models.SudStore = new Ext.data.Store({
    id: 'sud_store',
    model: 'Suds.models.Sud',
    autoLoad: true,
		sorters: 'name',
    proxy: {
       type: 'ajax',
       url: 'app/models/sud_data.json',
       reader: {
         type: 'json',
         root: 'data'
       }
    },
		getGroupString : function(record) {
        return record.get('name')[0];
    }
});