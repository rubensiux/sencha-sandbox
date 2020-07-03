Ext.define('sandbox.view.entry.EntryController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.entrycontroller',
    beforeInit: function() {
        console.log('before entry');
    },
    init: function() {
        console.log('init entry');
        console.log(this.getView());
        
    }
});
