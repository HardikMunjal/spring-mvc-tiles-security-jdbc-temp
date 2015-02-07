/**
 * 
 */

var win = Ext.create("Ext.window.Window", {
		title: "Find and Replace",
		modal: true,
		items: [
		{
		xtype: "textfield",
		fieldLabel: "Find what"
		}
		],
		buttons: [
		{
		text: "Find next"
		},
		{
		text: "Cancel"
		}
		]
		});
		win.show();
		
		var editMenu = Ext.create('Ext.menu.Menu', {
			items: [
			{
			text: 'Undo'
			},
			{
			text: 'Cut'
			},
			{
			text: 'Copy'
			},
			{
			text: "Paste"
			}
			]
			});
			//editMenu.show();
		
		Ext.create("Ext.button.Button",{
			text : "Edit",
			menu : editMenu,
			renderTo:Ext.getBody()
			});
		
		Ext.create("Ext.form.field.Text",{
			fieldLabel: 'Task:',
	        name: 'task',
	        itemId: 'taskTextfield',
	        autofocus: true,
	        enableKeyEvents: true,
	        labelAlign: 'left',
	        labelWidth: 50,
	        labelStyle: 'font-size: 16px;',
	        width: 500
			});
		
		Ext.create("Ext.Grid.Panel",{
			layout : "fit",
			height:200,width:200,
			title : "Fit layout panel",
			items : [
			{
			xtype : "textfield",
			fieldLabel : "Email"
			}
			],
			renderTo:Ext.getBody()
			});
		