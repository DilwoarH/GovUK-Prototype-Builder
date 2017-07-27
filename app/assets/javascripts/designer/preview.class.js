GOVUK.PrototypeDesigner = GOVUK.PrototypeDesigner != null ? GOVUK.PrototypeDesigner : {};
GOVUK.PrototypeDesigner.Preview = class
{
    constructor()
    {
        this.initListeners();
    }

    initListeners()
    {
        this.initSortable();
    }

    initSortable()
    {
        $( ".prototype-preview" ).sortable({
            items: '.sortable',
            placeholder: "ui-sortable-placeholder",
            start: function(e,ui){
                ui.item.addClass('ui-sortable-start');
            },
            stop: function(e,ui){
                ui.item.removeClass('ui-sortable-start').effect('bounce', {times:3}, 200); 

            },
            axis: 'y'
        });
    }
}

new GOVUK.PrototypeDesigner.Preview();
