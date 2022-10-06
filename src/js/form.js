export function openProjctForm() {
    const container = document.getElementById('content');

    const formBox = document.createElement('div');
    formBox.id = 'form-box';
    formBox.classList.add('form-popup');
    container.appendChild(formBox);

        const form = document.createElement('form');
        form.id = 'form-conatainer'
        formBox.appendChild(form);

            const title = document.createElement('div');
            title.textContent = 'New Project';  
            form.appendChild(title);

            const projectName = document.createElement('input');
            projectName.setAttribute('type', 'text');
            projectName.setAttribute('name', 'projectName');
            projectName.setAttribute('placeholder', 'Project Name');

            const submit = document.createElement("input");
            submit.setAttribute("type", "submit");
            submit.setAttribute('value', 'Submit');
            form.appendChild(projectName);
            form.appendChild(submit);

            const close = document.createElement('button');
            close.id = 'close-form';
            close.addEventListener('click', function(){
                
            })
            form.appendChild(close);
}
function closeForm() {
    document.getElementById('form-box').style.display = "none";
}