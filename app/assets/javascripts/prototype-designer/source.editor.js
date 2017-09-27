class sourceEditor
{
    constructor()
    {
        this.init();
        this.initDownload();
    }

    init()
    {
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/html");
        editor.on('change', function(){
          var value = editor.getSession().getValue();
          $('#prototypeCanvas').html(value);
        });
        $.get('/public/lib/ace-editor/default.template').done(function(result){
          editor.setValue(result);
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

new sourceEditor();