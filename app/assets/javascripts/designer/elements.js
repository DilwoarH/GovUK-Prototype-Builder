(function(){


    function PrototypeDesignerElements() 
    {
        this.initListeners();
    }

    function initListeners()
    {
        this.inputFieldListener();
    }

    function inputFieldListener()
    {
        $('.prototype-elements #addInputField').on('click', function(){

        });
    }

    GOVUK.PrototypeDesigner = GOVUK.PrototypeDesigner != null ? GOVUK.PrototypeDesigner : {};
    GOVUK.PrototypeDesigner.Elements = new PrototypeDesignerElements();
})();





