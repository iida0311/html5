window.addEventListener('DOMContentLoaded', 
  function() {
    let subject = document.getElementById('subject');
    let memo = document.getElementById('memo');
    let save = document.getElementById('save');
    let cancel = document.getElementById('cancel');
    
    cancel.addEventListener('click', 
      function (e) {
        e.preventDefault();
        if (subject.validity.valid === false || memo.validity.valid === false) {
          window.alert('必須項目を入力してください');
          return;
        }
      }, false
    );
    
    cancel.addEventListener('click',
      location.href = 'index.html';
    );
  }, false
);