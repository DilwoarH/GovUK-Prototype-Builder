GOVUK.PrototypeDesigner = GOVUK.PrototypeDesigner != null ? GOVUK.PrototypeDesigner : {};
GOVUK.PrototypeDesigner.Elements = class
{
    constructor()
    {
        this.templateEngine = GOVUK.PrototypeDesigner.Templates;
        this.initListeners();
    }

    initListeners()
    {
        this.initFields();
    }

    initFields()
    {
        var fieldTypes = [
            'h1',
            'input',
            'textarea',
            'select',
            'radio',
            'checkbox',
            'upload'
        ];

        for( var i in fieldTypes )
        {
            this.initFieldListener( fieldTypes[i] );
        }
    }

    initFieldListener( fieldType=null )
    {
        if ( fieldType === null) return;

        var template = this.templateEngine.getTemplate(fieldType);
        
        $(`.prototype-elements #add_${fieldType}`).on('click', function(){
            $('.prototype-preview form').append( template );
        });

        return;
    }
}

new GOVUK.PrototypeDesigner.Elements();



