document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (username === '') {
        alert('Username cannot be empty.');
        return;
    }

    const sanitizedUsername = sanitizeInput(username);
    updateDynamicContent(sanitizedUsername);
    usernameInput.value = ''; 
});

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.innerText = input; 
    return div.innerHTML; 
}

function updateDynamicContent(username) {
    const dynamicContentDiv = document.getElementById('dynamicContent');
    dynamicContentDiv.innerHTML = `<p>Hello, ${username}! Welcome to our interactive webpage.</p>`;
}


document.getElementById('menu').addEventListener('click', function() {
    const dynamicContentDiv = document.getElementById('dynamicContent');
    if (dynamicContentDiv.style.display === 'none' || dynamicContentDiv.style.display === '') {
        dynamicContentDiv.style.display = 'block';
    } else {
        dynamicContentDiv.style.display = 'none';
    }
});