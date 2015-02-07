

//Model

Ext.define('PolestarEmpRecord', {
    extend: 'Ext.data.Model',
    fields:  [
              {name: 'teamName', type: 'string'},
              {name: 'teamOwner',  type: 'string'},
              {name: 'iplTitles', type: 'int'},
              {name: 'teamCaptain',  type: 'string'},
              {name: 'teamBudget', type: 'int'},
              {name: 'totalPlayers',  type: 'int'},
              {name: 'winPercentage', type: 'int'},
              {name: 'matchPlayed',  type: 'int'}
            ]
});


//  data store loading data using ajax call to controller




    var teamStore = Ext.create('Ext.data.Store', {
    model: 'PolestarEmpRecord',
    autoLoad: true,
    autoSync: false,
    pageSize: 25,
    proxy	: {
                    type : 'ajax',
                    api:
                    {
                    	read:'/cps/aaaba'
                    }
                    ,
                    actionMethods:{read:'GET'},
        
                  reader	: {
                  type	: 'json',
                  root	: 'books'
                 }
      }


});


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
	
	
	
	Ext.create('Ext.toolbar.Toolbar', {
        renderTo: Ext.getBody(),
        width: 500,
        items: [{
            // xtype: 'button', // default for Toolbars
            text: 'Button'
        }, {
            xtype: 'splitbutton',
            text: 'Split Button'
        },
        // begin using the right-justified button container
        '->', // same as { xtype: 'tbfill' }
        {
            xtype: 'textfield',
            name: 'field1',
            emptyText: 'enter search record'
        },
        
        '-', 
        'text 1', 
        {
            xtype: 'tbspacer'
        }]
    });
	
	
	
	 function change(val){
	        if(val > 0){
	            return '<span style="color:green;">' + val + '</span>';
	        }else if(val < 0){
	            return '<span style="color:red;">' + val + '</span>';
	        }
	        return val;
	    }

	    // example of custom renderer function
	    function pctChange(val){
	        if(val > 1000){
	            return '<span style="color:green;">' + val + '%</span>';
	        }else if(val < 1000){
	            return '<span style="color:red;">' + val + '%</span>';
	        }
	        return val;
	    }
	    function change2(val){
	        if(val > 39000){
	            return '<span style="color:green;">$ ' + val + '</span>';
	        }else if(val < 39000){
	            return '<span style="color:red;">$ ' + val + '</span>';
	        }
	        return val;
	    }

	    
	    var rowEditing = Ext.create('Ext.grid.plugin.CellEditing',  {
	        clicksToEdit: 1,
	        autoCancel: false,
	        listeners: {
	            edit: function(editor, context, eOpts) {
	                alert("Edited id value : " + e.record.get('id'));
	            }
	        }
	    })
    
	    
	    

	    
// View
var view=Ext.create('Ext.grid.Panel', {
    renderTo: Ext.getBody(),
    alias: 'widget.Emplist',
    store: teamStore,
    width: 1200,
    height: 1000,
    title: 'Ipl Team Scenario',
    features: [{ ftype: 'grouping' }],
    selType: 'rowmodel',

    plugins:[rowEditing,{
		 ptype: 'rowexpander',
		 rowBodyTpl : [
		'<p>Audit details will be implemented here'
		 ]
		 }]
             ,
          
                 tbar: [{
                 text    : 'Add New Record',
                 action  : 'add',
                 iconCls : 'emp-add',
                 handler: function () {
                     Ext.Msg.alert('You clicked the button');
                     x.show();
                 }
                 } 
                 
                 ]
,buttons: [

           
           { 
                text: 'Delete',
               itemId: 'btnDelete',
               menu:editMenu
               }
              ] 



             ,
          columns: [
            {
            header: 'Team Name',
            flex: 8,
            dataIndex: 'teamName',
            hidden: false,
            editor: 'textfield',
            
        },
        {
            header: 'Team Owner',
            flex: 8,
            dataIndex: 'teamOwner',
            editor: 'textfield'
        },
        {
            text: 'Ipl Titles',
            flex: 8,
            dataIndex: 'iplTitles',
            editor: 'textfield',
            renderer: change
        },
        {
            text: 'TeamCaptain',
            flex: 8,
            dataIndex: 'teamCaptain',
            editor: 'textfield',
          	hideMode:'visibility'
        },
        {
            header: 'Team Budget',
            flex: 8,
            dataIndex: 'teamBudget',
            editor: 'textfield',
            renderer: change2
        },
        {
            text: 'Win Percentage',
            flex: 8,
            dataIndex: 'winPercentage',
            editor: 'textfield',
            renderer: pctChange
        },
        {
            text: 'Total Players',
            flex: 8,
            dataIndex: 'totalPlayers',
            editor: 'textfield',
          	hideMode:'visibility',
          	renderer: change
        },
        {
            text: 'Total Match Played',
            flex: 8,
            dataIndex: 'matchPlayed',
            editor: 'textfield',
          	hideMode:'visibility',
          	renderer: change
        },
        {
            text: 'Email Address',
            dataIndex: 'teamBudget',
            // format the email address using a custom renderer
            renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            }
        },{
    		text : "Wiki",
    		xtype : "templatecolumn",
    		tpl : "<a href='{wikipedia}' target='_blank'>Read</a>"
    		},
    		{
    			text: 'Action',
    			xtype : "actioncolumn",
    			items : [
    			{
    			tooltip:"Edit",
    			icon : "icon-add",
    			handler : function(grid,rowNum,colNum){
    			//Edit logic
    			}
    			},
    			{
    			tooltip:"Delete",
    			icon : "icon-delete",
    			handler : function(grid,rowNum,colNum){
    			//Delete logic
    			}
    			}
    			]
    		}
      ,
      



   
    ],
    dockedItems: [{
    xtype: 'pagingtoolbar',
    store: teamStore,   // same store GridPanel is using
    dock: 'bottom',
    displayInfo: true,
    displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
    emptyMsg: "No records to display&nbsp;"
},{
    xtype: 'textfield',
    name: 'field1',
    dock:'top',
    emptyText: 'enter search record',
    width: '200'
}
    ]



    

});



/**
 * 
 */


		
		
		
		