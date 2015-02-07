/**
 * 
 */
Ext.define('IplScenario', {
    extend: 'Ext.data.Model',
    fields: [ 'Team', 'Cost', 'Players','RestMoney' ]
    
});




var teamStore = Ext.create('Ext.data.Store', {
    model: 'IplScenario',
    autoLoad: true,
    pageSize: 4,
    groupField: 'Ipl Team Scenario',
    data: [
           
        { Team: 'ChennaiSuperKings', Cost: '$50000', Players: '18',RestMoney: '$1000' },
        { Team: 'Kings11Punjab', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'KolkataKnigt', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'PuneWarrriors', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Banglore', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Hyderabad', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Kochi', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Kings11Punjab', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'ChennaiSuperKings', Cost: '$50000', Players: '18',RestMoney: '$1000' },
        { Team: 'Kings11Punjab', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'KolkataKnigt', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'PuneWarrriors', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Banglore', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Hyderabad', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Kochi', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Kings11Punjab', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'ChennaiSuperKings', Cost: '$50000', Players: '18',RestMoney: '$1000' },
        { Team: 'Kings11Punjab', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'KolkataKnigt', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'PuneWarrriors', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Banglore', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Hyderabad', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Kochi', Cost: '$40000', Players: '16',RestMoney: '$11000' },
        { Team: 'Kings11Punjab', Cost: '$40000', Players: '16',RestMoney: '$11000' }
        
    ]

});

var expander = new Ext.ux.grid.RowExpander({
	  tpl : new Ext.Template(
	 '<p>{history}</p>'
	 )
	});

Ext.create('Ext.grid.Panel', {
    renderTo: Ext.getBody(),
    alias: 'widget.bookslist',
    store: teamStore,
    width: 600,
    height: 700,
    title: 'Ipl Team Scenario',
    features: [{ ftype: 'grouping' }],
    
    
    selType: 'rowmodel',
    
    plugins: [
              Ext.create('Ext.grid.plugin.RowEditing', {
                  clicksToEdit: 1
              })
          ],
    columns: [
        {
            text: 'Team',
            flex: 4,
            sortable: false,
            hideable: false,
            dataIndex: 'Team',
            editor: 'textfield',
            expander:true
        },
        {
            text: 'Cost',
          
            flex: 4,
            dataIndex: 'Cost',
            hidden: false,
            editor: 'textfield'
        },
        {
            text: 'Players',
            flex: 4,
            dataIndex: 'Players',
            editor: 'textfield'
        },
        {
            text: 'RestMoney',
            flex: 4,
            dataIndex: 'RestMoney',
            editor: 'textfield'
        },{
            text: 'Birth Date',
            dataIndex: 'birthDate',
            // format the date using a renderer from the Ext.util.Format class
            renderer: Ext.util.Format.dateRenderer('m/d/Y')
        },
        {
            text: 'Email Address',
            dataIndex: 'email',
            // format the email address using a custom renderer
            renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            }
        }
      
    ],dockedItems: [{
        xtype: 'pagingtoolbar',
        store: teamStore,   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }]
    

});
