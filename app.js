/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'sandbox.Application',

    name: 'sandbox',

    requires: [
        // This will automatically load all classes in the sandbox namespace
        // so that application classes do not need to require each other.
        'sandbox.*'
    ],

    // The name of the initial view to create.
    // mainView: 'sandbox.view.main.Main'
    mainView: 'sandbox.view.entry.Entry',
    init: function() {
        sessionStorage.setItem(
            'version', `${Ext.manifest.version}_${Ext.manifest.env}`);
    }
});
