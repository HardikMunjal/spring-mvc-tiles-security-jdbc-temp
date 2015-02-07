Ext.application({
    name   : 'MyApp',

    launch : function() {



Ext.define('KitchenSink.model.Restaurant', {
    extend: 'KitchenSink.model.Base',
    fields: ['name', 'cuisine']
});


Ext.define('KitchenSink.store.Restaurants', {
    extend: 'Ext.data.Store',
    storeId: 'restaraunts',
    model: 'KitchenSink.model.Restaurant',
    groupField: 'cuisine',
    sorters: ['cuisine','name'],
    data: [{
        name: 'Cheesecake Factory',
        cuisine: 'American'
    },{
        name: 'University Cafe',
        cuisine: 'American'
    },{
        name: 'Slider Bar',
        cuisine: 'American'
    },{
        name: 'Shokolaat',
        cuisine: 'American'
    },{
        name: 'Gordon Biersch',
        cuisine: 'American'
    },{
        name: 'Crepevine',
        cuisine: 'American'
    },{
        name: 'Creamery',
        cuisine: 'American'
    },{
        name: 'Old Pro',
        cuisine: 'American'
    },{
        name: 'Nola\'s',
        cuisine: 'Cajun'
    },{
        name: 'House of Bagels',
        cuisine: 'Bagels'
    },{
        name: 'The Prolific Oven',
        cuisine: 'Sandwiches'
    },{
        name: 'La Strada',
        cuisine: 'Italian'
    },{
        name: 'Buca di Beppo',
        cuisine: 'Italian'
    },{
        name: 'Pasta?',
        cuisine: 'Italian'
    },{
        name: 'Madame Tam',
        cuisine: 'Asian'
    },{
        name: 'Sprout Cafe',
        cuisine: 'Salad'
    },{
        name: 'Pluto\'s',
        cuisine: 'Salad'
    },{
        name: 'Junoon',
        cuisine: 'Indian'
    },{
        name: 'Bistro Maxine',
        cuisine: 'French'
    },{
        name: 'Three Seasons',
        cuisine: 'Vietnamese'
    },{
        name: 'Sancho\'s Taquira',
        cuisine: 'Mexican'
    },{
        name: 'Reposado',
        cuisine: 'Mexican'
    },{
        name: 'Siam Royal',
        cuisine: 'Thai'
    },{
        name: 'Krung Siam',
        cuisine: 'Thai'
    },{
        name: 'Thaiphoon',
        cuisine: 'Thai'
    },{
        name: 'Tamarine',
        cuisine: 'Vietnamese'
    },{
        name: 'Joya',
        cuisine: 'Tapas'
    },{
        name: 'Jing Jing',
        cuisine: 'Chinese'
    },{
        name: 'Patxi\'s Pizza',
        cuisine: 'Pizza'
    },{
        name: 'Evvia Estiatorio',
        cuisine: 'Mediterranean'
    },{
        name: 'Cafe 220',
        cuisine: 'Mediterranean'
    },{
        name: 'Cafe Renaissance',
        cuisine: 'Mediterranean'
    },{
        name: 'Kan Zeman',
        cuisine: 'Mediterranean'
    },{
        name: 'Gyros-Gyros',
        cuisine: 'Mediterranean'
    },{
        name: 'Mango Caribbean Cafe',
        cuisine: 'Caribbean'
    },{
        name: 'Coconuts Caribbean Restaurant & Bar',
        cuisine: 'Caribbean'
    },{
        name: 'Rose & Crown',
        cuisine: 'English'
    },{
        name: 'Baklava',
        cuisine: 'Mediterranean'
    },{
        name: 'Mandarin Gourmet',
        cuisine: 'Chinese'
    },{
        name: 'Bangkok Cuisine',
        cuisine: 'Thai'
    },{
        name: 'Darbar Indian Cuisine',
        cuisine: 'Indian'
    },{
        name: 'Mantra',
        cuisine: 'Indian'
    },{
        name: 'Janta',
        cuisine: 'Indian'
    },{
        name: 'Hyderabad House',
        cuisine: 'Indian'
    },{
        name: 'Starbucks',
        cuisine: 'Coffee'
    },{
        name: 'Peet\'s Coffee',
        cuisine: 'Coffee'
    },{
        name: 'Coupa Cafe',
        cuisine: 'Coffee'
    },{
        name: 'Lytton Coffee Company',
        cuisine: 'Coffee'
    },{
        name: 'Il Fornaio',
        cuisine: 'Italian'
    },{
        name: 'Lavanda',
        cuisine: 'Mediterranean'
    },{
        name: 'MacArthur Park',
        cuisine: 'American'
    },{
        name: 'St Michael\'s Alley',
        cuisine: 'Californian'
    },{
        name: 'Osteria',
        cuisine: 'Italian'
    },{
        name: 'Vero',
        cuisine: 'Italian'
    },{
        name: 'Cafe Renzo',
        cuisine: 'Italian'
    },{
        name: 'Miyake',
        cuisine: 'Sushi'
    },{
        name: 'Sushi Tomo',
        cuisine: 'Sushi'
    },{
        name: 'Kanpai',
        cuisine: 'Sushi'
    },{
        name: 'Pizza My Heart',
        cuisine: 'Pizza'
    },{
        name: 'New York Pizza',
        cuisine: 'Pizza'
    },{
        name: 'California Pizza Kitchen',
        cuisine: 'Pizza'
    },{
        name: 'Round Table',
        cuisine: 'Pizza'
    },{
        name: 'Loving Hut',
        cuisine: 'Vegan'
    },{
        name: 'Garden Fresh',
        cuisine: 'Vegan'
    },{
        name: 'Cafe Epi',
        cuisine: 'French'
    },{
        name: 'Tai Pan',
        cuisine: 'Chinese'
    }]
});


Ext.define('KitchenSink.view.grid.GroupedGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'grouped-grid',
    requires: [
        'Ext.grid.feature.Grouping'
    ],
    collapsible: true,
    iconCls: 'icon-grid',
    frame: true,
    width: 600,
    height: 400,

    // Need a minHeight. Neptune resizable framed panels are overflow:visible so as to
    // enable resizing handles to be embedded in the border lines.
    minHeight: 200,
    title: 'Restaurants',
    resizable: true,

    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
        hideGroupedHeader: true,
        startCollapsed: true,
        id: 'restaurantGrouping'
    }],

    initComponent: function() {
        this.store = new KitchenSink.store.Restaurants();
        this.columns = [{
            text: 'Name',
            flex: 1,
            dataIndex: 'name'
        },{
            text: 'Cuisine',
            flex: 1,
            dataIndex: 'cuisine'
        }];

        this.callParent();

        var store = this.getStore(),
            toggleMenu = [];

        this.groupingFeature = this.view.getFeature('restaurantGrouping');

        // Create checkbox menu items to toggle associated group
        store.getGroups().each(function(group) {
            toggleMenu.push({
                xtype: 'menucheckitem',
                text: group.getGroupKey(),
                handler: this.toggleGroup,
                scope: this
            });
        }, this);

        this.addDocked([{
            xtype: 'toolbar',
            items: ['->', {
                text: 'Toggle groups...',
                destroyMenu: true,
                menu: toggleMenu
            }]
        }, {
            xtype: 'toolbar',
            ui: 'footer',
            dock: 'bottom',
            items: ['->', {
                text:'Clear Grouping',
                iconCls: 'icon-clear-group',
                scope: this,
                handler: this.onClearGroupingClick
            }]
        }]);

        this.mon(this.store, 'groupchange', this.onGroupChange, this);
        this.mon(this.view, {
            groupcollapse: this.onGroupCollapse,
            groupexpand: this.onGroupExpand,
            scope: this
        });
    },

    onClearGroupingClick: function(){
        this.groupingFeature.disable();
    },

    toggleGroup: function(item) {
        var groupName = item.text;
        if (item.checked) {
            this.groupingFeature.expand(groupName, true);
        } else {
            this.groupingFeature.collapse(groupName, true);
        }
    },

    onGroupChange: function(store, grouper) {
        var grouped = store.isGrouped(),
            groupBy = grouper ? grouper.getProperty() : '',
            toggleMenuItems, len, i = 0;

        // Clear grouping button only valid if the store is grouped
        this.down('[text=Clear Grouping]').setDisabled(!grouped);

        // Sync state of group toggle checkboxes
        if (grouped && groupBy === 'cuisine') {
            toggleMenuItems = this.down('button[text=Toggle groups...]').menu.items.items;
            for (len = toggleMenuItems.length; i < len; i++) {
                toggleMenuItems[i].setChecked(
                    this.groupingFeature.isExpanded(toggleMenuItems[i].text)
                );
            }
            this.down('[text=Toggle groups...]').enable();
        } else {
            this.down('[text=Toggle groups...]').disable();
        }
    },

    onGroupCollapse: function(v, n, groupName) {
        if (!this.down('[text=Toggle groups...]').disabled) {
            this.down('menucheckitem[text=' + groupName + ']').setChecked(false, true);
        }
    },

    onGroupExpand: function(v, n, groupName) {
        if (!this.down('[text=Toggle groups...]').disabled) {
            this.down('menucheckitem[text=' + groupName + ']').setChecked(true, true);
        }
    }
})
    }
});
