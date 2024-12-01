document.getElementById('submit-post').addEventListener('click', function() {
    const postContent = document.getElementById('post-content').value;
    const postElement = document.createElement('div');
    postElement.className = 'post';
    
    const postText = document.createElement('span');
    postText.textContent = postContent;
    postElement.appendChild(postText);
    
    const editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = '수정';
    postElement.appendChild(editButton);
    
    document.getElementById('posts').appendChild(postElement);
    
    document.getElementById('post-content').value = ''; // 텍스트 영역 초기화
    
    editButton.addEventListener('click', function() {
        const newContent = prompt('새로운 글 내용을 입력하세요:', postText.textContent);
        if (newContent !== null) {
            postText.textContent = newContent;
        }
    });
});
