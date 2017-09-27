class sourceEditor
{
    constructor()
    {
        this.init();
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

}

new sourceEditor();