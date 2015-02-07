/**
 * 
 */


var movieStore = Ext.create("Ext.data.Store", {
fields: ["title", "rent", "buy"],
data: [
{title: "Forrest Gump", rent: 2.99,buy:6.99},
{title: "Cast Away", rent: 3.99,buy:13.46},
{title: "Apollo 13", rent: 3.99,buy:7.99}
]
});

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


var rowEditing = Ext.create('Ext.grid.plugin.CellEditing',  {
    clicksToEdit: 1,
    autoCancel: false,
    listeners: {
        edit: function(editor, context, eOpts) {
            alert("Edited id value : " + e.record.get('id'));
        }
    }
})


Ext.create("Ext.grid.Panel", {
	store: movieStore,
	height : 150,
	title : "Tom Hanks collection",
	selType : "rowmodel",
	 plugins:[rowEditing,{
		 ptype: 'rowexpander',
		 rowBodyTpl : [
		 win
		 ]
		 }],
	columns: [
	{xtype : "rownumberer"},
	{
	text: 'Movie',
	dataIndex: 'title',
	editor:'textfield'
	},
	{
	text: 'Rent',
	dataIndex: 'rent',
	xtype : "numbercolumn",
	format : "0.00"
	},
	{
		text: 'Buy',
		dataIndex: 'buy',
		xtype : "numbercolumn",
		format : "0.00"
		},
		{
		text : "Blue-ray",
		dataIndex : "bluerayFormat",
		xtype : 'booleancolumn',
		trueText : "Available",
		falseText : "Not available"
		},
		{
		text: 'DVD release date',
		dataIndex: 'dvdReleaseDate',
		xtype : "datecolumn",
		format : "M d, Y"
		},
		{
		text : "Wiki",
		xtype : "templatecolumn",
		tpl : "<a href='{wikipedia}' target='_blank'>Read</a>"
		},
		{
			text: 'Add',
			xtype : "actioncolumn",
			items : [
			{
			tooltip:"Edit",
			icon : "edit.jpg",
			handler : function(grid,rowNum,colNum){
			//Edit logic
			}
			},
			{
			tooltip:"Delete",
			icon : "delete.jpg",
			handler : function(grid,rowNum,colNum){
			//Delete logic
			}
			}
		]
			},
			],
			renderTo:Ext.getBody()
			});