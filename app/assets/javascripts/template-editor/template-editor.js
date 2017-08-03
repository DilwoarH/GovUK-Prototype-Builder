class templateEditor
{
    constructor()
    {
        this.init();
    }

    init()
    {
        $('h1, h2, p, a, button').editable({
            type: 'text',
            title: 'Enter new text',
            mode: 'inline'
        });
    }

}

new templateEditor();