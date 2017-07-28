GOVUK.PrototypeDesigner = GOVUK.PrototypeDesigner != null ? GOVUK.PrototypeDesigner : {};
GOVUK.PrototypeDesigner.Templates = class
{
    constructor(){ }


    static getTemplate(template_name)
    {
        this.group_class = 'govuk-designer-element sortable';
        return this.getTemplateByType( template_name );
    }

    static getTemplateByType( type )
    {
        var template = `
            <div class="form-group ${this.group_class}" data-type="${type}">
                ${this[type]()}
                <a class="btn link delete-feild">
                    <i class="fa fa-times" aria-hidden="true"></i> 
                    Delete
                </a>
            </div>
        `;

        return template;
    }


    static h1()
    {
        return `
            <h1 class="heading-medium">
                Do you already have a personal user account?
            </h1>
        `;
    }

    static input()
    {
        return `
            <label class="form-label" for="full-name-f1">Full name</label>
            <input class="form-control" id="full-name-f1" type="text" name="full-name-f1">
        `;
    }

    static textarea()
    {
        return `
            <label class="form-label" for="textarea">
                Why can't you provide a National Insurance number?
            </label>
            <textarea class="form-control form-control-3-4" name="textarea" id="textarea" rows="5"></textarea>
        `;
    }

    static select()
    {
        return `
            <label class="form-label" for="select-box">This is the label text</label>
            <select class="form-control" id="select-box" name="select-box">
                <option>GOV.UK elements option 1</option>
                <option>GOV.UK elements option 2</option>
                <option>GOV.UK elements option 3</option>
            </select>
        `;
    }
    
    static radio()
    {
        return `
            <label class="form-label" for="full-name-f1">Do you already have a personal user account?</label>
            
            <fieldset class="inline">

                <legend class="visually-hidden">Do you already have a personal user account?</legend>

                <div class="multiple-choice">
                    <input id="radio-inline-1" type="radio" name="radio-inline-group" value="Yes">
                    <label for="radio-inline-1">Yes</label>
                </div>
                <div class="multiple-choice">
                    <input id="radio-inline-2" type="radio" name="radio-inline-group" value="No">
                    <label for="radio-inline-2">No</label>
                </div>

            </fieldset>
        `;
    }

    static checkbox()
    {
        return `
            <label class="form-label" for="full-name-f1">What is your nationality?</label>
            <fieldset>

                <legend class="visually-hidden">What is your nationality?</legend>

                <div class="multiple-choice">
                <input id="nationalities-british" name="nationalities" type="checkbox" value="British">
                <label for="nationalities-british">British (including English, Scottish, Welsh and Northern Irish)</label>
                </div>
                <div class="multiple-choice">
                <input id="nationalities-irish" name="nationalities" type="checkbox" value="Irish">
                <label for="nationalities-irish">Irish</label>
                </div>
                <div class="multiple-choice" data-target="example-different-country">
                <input id="nationalities-other" name="nationalities" type="checkbox" value="Citizen of a different country" aria-controls="example-different-country" aria-expanded="false">
                <label for="nationalities-other">Citizen of a different country</label>
                </div>
                <div class="panel panel-border-narrow js-hidden" id="example-different-country" aria-hidden="true">
                <label class="form-label" for="nationalities-other-country">Country name</label>
                <input class="form-control" type="text" id="nationalities-other-country" name="nationalities-other-country">
                </div>

            </fieldset>
        `;
    }

    static upload()
    {
        return `
            <label class="form-label" for="file-input">
                Upload a file
            </label>
            <input type="file" id="file-input">
        `;
    }
}