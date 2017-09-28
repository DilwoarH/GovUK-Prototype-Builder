class elementsSelector
{
    constructor()
    {
        this._navId = "#mySidenav";
        this._mainContentId = "#prototype-designer";
        this._openCloseNavBtn = ".toggleSideNavigation";
        this._addElementsClass = ".add-element";
        this._templates = new ElementTemplates();
        this.init();
    }

    init()
    {
        this.initNavBtnListener();
        this.initAddElementsListener();
    }

    /* SIDE BAR */

    initNavBtnListener()
    { 
        var _this = this;

        $(this._openCloseNavBtn).on('click', function(){
            var width = $(_this._navId).width();
            if ( width === 0 ) _this.openNav();
            else _this.closeNav();
        });
    }

    openNav()
    {
        $(this._navId).css('width', "250px");
        $(this._mainContentId).css('margin-left', "250px");
    }

    closeNav()
    {
        $(this._navId).css('width', "0");
        $(this._mainContentId).css('margin-left', "0");
    }

    /* ADD ELEMENTS */

    initAddElementsListener()
    {
        var _this = this;
        $(this._addElementsClass).on('click', function(e){
            var template = $(e.target).attr('data-template');
            var html = _this._templates[template]();

            _sourceEditor.editor.session.insert(_sourceEditor.editor.getCursorPosition(), html);
        });
    }


}

new elementsSelector();