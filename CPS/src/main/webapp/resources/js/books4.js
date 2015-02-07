

//Model

Ext.define('PolestarEmpRecord', {
    extend: 'Ext.data.Model',
    fields:  [
              {name: 'name', type: 'string'},
              {name: 'email',  type: 'string'},
              {name: 'address', type: 'string'},
              {name: 'telephone',  type: 'string'}
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
                    	read:'/cps/aaab'
                    }
                    ,
                    actionMethods:{read:'GET'},
        
                  reader	: {
                  type	: 'json',
                  root	: 'books'
                 }
      }


});


// View
var view=Ext.create('Ext.grid.Panel', {
    renderTo: Ext.getBody(),
    frame:true,
    stripeRows:true,
    alias: 'widget.Emplist',
    store: teamStore,
    width: 1200,
    height: 1000,
    title: 'Polestar Employee records',
    features: [{ ftype: 'grouping' }],
    selType: 'rowmodel',

    plugins: [
                  Ext.create('Ext.grid.plugin.RowEditing', {
                  clicksToEdit: 2
              })
              ,
                 {
                  ptype: 'rowexpander',
                  rowBodyTpl : 
                	  [
                                '<b>Audit Summary:</b><br> hardik &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; draka@gmail.com &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 9717060569 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <br>',
                                 'munjal &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; demok@gmail.com &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; 971708888 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;'
                      ],
                  clicksToEdit: 1
               }
              
                    ]
             ,
          
                 tbar: [{
                 text    : 'Add New Record',
                 action  : 'add',
                 iconCls : 'emp-add',
                 handler: function () {
                     Ext.Msg.alert('You clicked the button');
                 }
                 },
                 {
                	 text:'select record',
                	 handler:function(){
                		 
                		 //var grid = Ext.ComponentQuery.query('Emplist')[0];
                   		 //if (grid) {
                         
                		 var sm=grid.getSelectionModel();
                		 var sel= sm.getSelected();
                		 if(sel.hasSelection())
                			 {
                		 Ext.Msg.alert('you have selected something');
                		 
                			// }
                		 
                	 }}
                         
                 }
                	 
                 
                 ]



             ,
          columns: [
            {
            header: 'name',
            flex: 4,
            dataIndex: 'name',
            hidden: false,
            editor: 'textfield',
            
        },
        {
            header: 'email',
            flex: 4,
            dataIndex: 'email',
            editor: 'textfield'
        },
        {
            text: 'address',
            flex: 4,
            dataIndex: 'address',
            editor: 'textfield'
        },
        {
            text: 'telephone',
            flex: 4,
            dataIndex: 'telephone',
            editor: 'textfield',
          	hideMode:'visibility'
        },
        {
            text: 'Email Address',
            dataIndex: 'email',
            // format the email address using a custom renderer
            renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            }
        }
      ,
      



   
    ],buttons: [

                    
                     { 
	                      text: 'Delete',
                         itemId: 'btnDelete',
                        listener: {
                        afterrender: function (me) { 
                         me.getEl().on('click', function() {
                          	
                          	
                         var grid = Ext.ComponentQuery.query('Emplist')[0];
                                     
                                     
                                     if (grid) {
                                     var sm = grid.getSelectionModel();
                                     var rs = sm.getSelection();
                                             if (!rs.length) {
                                             Ext.Msg.alert('Info', 'No Employee Selected');
                                             return;
                                                      }
                              
                              
                                     
                                     
                                     
                                    Ext.Msg.confirm('Remove Book', 
                                    'Are you sure you want to delete?', 
                                    function (button) {
                                  	  
                                    if (button == 'yes') {
                                    //grid.store.remove(rs[0]);
                                  	  
                                    var emp = rs[0].getData();
                                    
                                    
                                    Ext.Ajax.request({
                                  	                 url : '/cps/DEL',
                                  	                 method  : 'PUT',
                                  	                 jsonData: emp,	
                                  	                 success: function(response)
                                  	                 {
                                  	    	         var grid = Ext.ComponentQuery.query('emplist')[0];
                                  	                 grid.getStore().load();
                                  	                 }
                                  	    
                                  	              });
                                                           }
                                                       }
                                                );
                                    
                                    
                                     }
                                    
                               });
                        }
                      }
                     },
                     { text: 'Reset',
                         itemId: 'btnReset'
                     },
                     { text: 'Clear',
                         itemId: 'btnClear'
                     }] 
   



, dockedItems: [{
    xtype: 'pagingtoolbar',
    store: teamStore,   // same store GridPanel is using
    dock: 'bottom',
    displayInfo: true,
    displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
    emptyMsg: "No records to display&nbsp;"
},{
        xtype: 'toolbar',
        items: [
                {
            text: 'Delete',
            iconCls: 'icon - delete ',
            listeners: {
                click: {
                    scope: this,
                    fn: function () {
                        var selection = this.getView().getSelectionModel().getSelection()[0];
                        if (selection) {
                            store.remove(selection);
                        }
                    }
                }
            }
        }, ' - ', {
            text: 'Export to Excel',
            iconCls: 'icon - save',
          
        }]
    }]
    

});















