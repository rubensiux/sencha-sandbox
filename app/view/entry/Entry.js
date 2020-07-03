Ext.define("sandbox.view.entry.Entry", {
    xtype: "entry",
    controller: "entrycontroller",
    viewModel: "entryviewmodel",
    requires: ['Ext.Responsive'],
    extend: "Ext.Container",
    userCls: "componenteEntry",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    items: [{
        xtype: 'login'
    }]
});
