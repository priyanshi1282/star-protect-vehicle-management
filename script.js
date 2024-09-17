// Get all buttons and tab contents
const registerBtn = document.getElementById('register');
const searchBtn = document.getElementById('search');
const updateBtn = document.getElementById('update');
const deleteBtn = document.getElementById('delete');

const registerContent = document.getElementById('register-content');
const searchContent = document.getElementById('search-content');
const updateContent = document.getElementById('update-content');
const deleteContent = document.getElementById('delete-content');
const adminImg =  document.getElementById("admin-img");

// Add event listeners to each button
registerBtn.addEventListener('click', () => openTab(registerContent, registerBtn));
searchBtn.addEventListener('click', () => openTab(searchContent, searchBtn));
updateBtn.addEventListener('click', () => openTab(updateContent, updateBtn));
deleteBtn.addEventListener('click', () => openTab(deleteContent, deleteBtn));

// Function to open the clicked tab and hide the others
function openTab(activeContent, activeButton) {
    // Hide Admin image
    adminImg.style.display="none";
    // Hide all tabs first
    [registerContent, searchContent, updateContent, deleteContent].forEach(tab => tab.style.display = 'none');

    // Remove active class from all buttons
    [registerBtn, searchBtn, updateBtn, deleteBtn].forEach(tab => tab.classList.remove('btn-active'));
    
    // Show the selected tab
    activeContent.style.display = 'block';

    // Active button
    activeButton.classList.add('btn-active');
}
