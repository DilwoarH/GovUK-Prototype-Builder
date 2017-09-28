class ElementTemplates
{
  h1Title()
  {
    return `<h1 class="heading-xlarge">Service Title</h1>`;
  }

  paragraph()
  {
    return `
    <p>
      A 19px body copy paragraph, maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
    </p>`;
  }

  inputField()
  {
    return `
    <div class="form-control">
        <label class="form-label" for="full-name-f1">Full name</label>
        <input class="form-control" id="full-name-f1" type="text" name="full-name-f1">
    </div>`;
  }
}