let table = document.getElementById('bagua-table');
let editingEl;
let isEditing = false;
let save, cancel;

table.addEventListener('click', function(event) {

  // 1. identify element.
  let el = event.target;
  el = el.closest('td, .edit-cancel, .edit-save');
  if(!el) return;
  if(!table.contains(el)) return;

  // 2. take action on element based on type (cell/cancel/save)
  if(el.className === 'edit-cancel') {
    finishEdit(editingEl.el, false);
  } else
  if(el.className === 'edit-save') {
    finishEdit(editingEl.el, true);
  } else
  if(el.nodeName === 'TD') {
    if(isEditing) return; // editing in progress already
    makeEditable(el);
  } 
})

function makeEditable(td) {
  editingEl = {
    el: td,
    data: td.innerHTML
  }
  td.classList.add('edit-td');

  let edit = document.createElement('textarea');
  edit.value = td.innerHTML;
  edit.className="edit-area"
  edit.style.height = td.clientHeight + 'px';
  edit.style.width = td.clientWidth + 'px';

  td.innerHTML = ''
  td.appendChild(edit);
  edit.focus();

  // add save and cancel buttons.
  td.insertAdjacentHTML("beforeEnd", '<div class="controls"><button class="edit-save">SAVE</button><button class="edit-cancel">CANCEL</button></div>'
  );
  isEditing = true;
}


// IMP. - wind up editing
function finishEdit(td, confirm) {
  if(confirm) {
    // save
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingEl.data;
  }
  editingEl = null;
  isEditing = false;
  td.classList.remove('edit-td');
}
