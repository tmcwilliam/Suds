Suds.views.FilterForm = Ext.extend(Ext.form.FormPanel, {
		defaultInstructions: 'What do you have a taste for?',
	
    initComponent: function(){
			var backButton, titlebar, submitButton;

			backButton = {
				text: 'Cancel',
				ui: 'back',
				handler: this.onCancelAction
			}
			
			submitButton = {
          text: 'Submit',
          ui: 'confirm',
          handler: this.onSubmitAction,
          scope: this
      }

			titlebar = {
				xtype: 'toolbar',
				title: 'Suds',
				items: [ backButton, {xtype:'spacer'}, submitButton ]
			}
			
			fields = {
          xtype: 'fieldset',
          instructions: this.defaultInstructions,
          defaults: {
              xtype: 'sliderfield',
          },
          items: [
              {
                  name : 'abv',
                  label: 'Alcohol %',
			            value   : 1,
			            minValue: 1,
			            maxValue: 7
              },
							{
								name: 'ibu',
								label: 'Bitterness',
								value: 10,
								minValue: 10,
								maxValue: 55
							},
							{
								name: 'darkness',
								label: 'Darkness',
								value: 1,
								minValue: 1,
								maxValue: 10
							}
          ]
      };
					
			Ext.apply(this, {
          layout: 'fit',
          dockedItems: [titlebar],
					items: [fields]
      });

      Suds.views.FilterForm.superclass.initComponent.call(this);
			
		},
		
		onSubmitAction: function(){      
			Ext.dispatch({
				controller: 'Suds',
				action: 'submit',
				data: this.getValues(),
        form: this
			});
		},
		
		onCancelAction: function() {
			Ext.dispatch({
				controller: 'Suds',
				action: 'list'
			});
    },
	
});

Ext.reg('Suds.views.FilterForm', Suds.views.FilterForm);