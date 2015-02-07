/**
 * 
 */

Ext.define('IplScenario', {
    extend: 'Ext.data.Model',
    fields: [
      {name: 'id', type: 'int'},
      {name: 'Team', type: 'string'},
      {name: 'Cost',  type: 'string'},
      {name: 'Players', type: 'int'},
      {name: 'RestMoney',  type: 'int'}
    ]
  });

Ext.define('IplScenarioData', {
    extend  : 'Ext.data.Store',
    storeId	: 'bookStore',
    model   : 'IplScenario',
    fields  : ['id', 'Team', 'Cost','Players', 'RestMoney'],
    proxy	: {
        type	: 'ajax',
        url		: '/hardi/api/ipl/loadValues',
        reader	: {
            type	: 'json',
            root	: 'books'
        }
    },
    autoLoad: true
  });

var teamStore = Ext.create('Ext.data.Store', {
    model: 'IplScenario',
    autoLoad: true,
    pageSize: 4,
    groupField: 'department',
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
