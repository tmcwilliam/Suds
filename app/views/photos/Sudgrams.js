// This is the list item inside in the main list.  It is created for every record in the model, or simply
// each item in the array returned from the Instagram API.
Suds.views.SudsInnerList = Ext.extend(Ext.List, {

    itemTpl: Suds.views.innerListItemTpl(),
    itemCls: 'sudgram',

    // Here's where we add the pull to refresh plugin.  Yep, that's all you need to do. =)
    plugins: [{ptype: 'pullrefresh'}]

});


Suds.views.SudgramsList = Ext.extend(Ext.Panel, {
		title: 'Sudgrams',
		iconCls: 'star',
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Sudgrams'        
    }],
    items: [
        new Suds.views.SudsInnerList({
            store: Suds.models.PhotoStore
        })
    ]
});


Ext.reg('Suds.views.SudgramsList', Suds.views.SudgramsList);