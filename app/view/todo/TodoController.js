Ext.define('sandbox.view.todo.TodoController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.todocontroller',
    beforeInit: function() {
        console.log('before todo');
    },
    init: function() {
        console.log('init todo');
    },
    onToggle: function(_container, e) {
        console.log(e);
    },
    onAfterRender: function(e) {
        e.items.items[0].setPressed(true);
    },
    onItemMenuClick: function(xElemento) {
        if (xElemento.itemId === 'itemCerrarSesion') {
            // console.log(this);
            // console.log(this.getView());
            // console.log(this.getParent());
            
            // console.log(this.getView().up());
            // console.log(Ext.ComponentQuery.query('entry'));
            const [parent] = Ext.ComponentQuery.query('entry');
            parent.items.removeAll();
            const loginView = new sandbox.view.login.Login({
                props: {
                    gatico: 'gato mew mew login'
                }
            });
            parent.items.add(loginView);
            parent.update();
            // console.log(this.lookupReference("refentry"));
            
            // this.getView().up().items.removeAll();
        }
    }
});
