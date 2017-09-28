class sourceEditor
{
    constructor()
    {
        this.editor = null;
        this.init();
        this.initDownload();
    }

    init()
    {
        var _this = this;
        _this.editor = ace.edit("editor");
        _this.editor.setTheme("ace/theme/monokai");
        _this.editor.session.setMode("ace/mode/html");
        _this.editor.on('change', function(){
            var value = _this.editor.getSession().getValue();
            $('#prototypeCanvas').html(value);
        });
        $.get('/public/lib/ace-editor/default.template').done(function(result){
            _this.editor.setValue(result);
        })
    }

    initDownload()
    {
        $('#downloadSourceBtn').on('click', function(){
            var data = $('#prototypeCanvas').html();
            var filename = $('#downloadSourceName').val() || "prototype-template";
            download(data, filename + ".html", "text/html");
        });
    }

}

var _sourceEditor = new sourceEditor();