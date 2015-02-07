/**
 * 
 */

Ext.onReady(function () {
	
	
	
	
Ext.Msg.alert("Hello World","All set!!!");


Ext.create("Ext.form.Label", {
	text: "Hello World",
	renderTo:Ext.getBody()
}
);

Ext.create("Ext.Button",{
	text : "Hello World",
	renderTo : Ext.getBody()
	});

Ext.create("Ext.form.field.Text",{
	fieldLabel : "Name",
	id:"nametext",
		renderTo:Ext.getBody()
	})
	
	Ext.create("Ext.Button",{
	text : "Click",
	handler : function(){
	Ext.Msg.alert(Ext.getCmp("nametext").getValue()
			
	);
	}
	,
	renderTo:Ext.getBody()
	
	})
	
	
	
	
	
	
	
	
	Ext.define("Aquatic",{
		swim : function(){
		console.log("Swimming");
		}
		});

Ext.define("Terrestrial",{
	walk : function(){
	console.log("Walking");
	}
	});

Ext.define("Reptile",{
	mixins : ["Aquatic","Terrestrial"]
	});

var reptile = Ext.create("Reptile");
reptile.swim();
reptile.walk();







var Book = new Ext.Class({
	config: {
	title: "",
	price: 5
	},
	constructor: function (cfg) {
	this.initConfig(cfg);
	},
	read: function () {
	console.log("Reading " + this.getTitle());
	}
	});
	var ajax = Ext.create("Book", { title: "AJAX",price:12.00 });
	ajax.read();

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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

});