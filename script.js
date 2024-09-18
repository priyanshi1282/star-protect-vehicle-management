// ******************** Admin menu items
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
registerBtn.addEventListener('click', () => openTab(registerContent, registerBtn, 'register'));
searchBtn.addEventListener('click', () => openTab(searchContent, searchBtn, 'search'));
updateBtn.addEventListener('click', () => openTab(updateContent, updateBtn, 'update'));
deleteBtn.addEventListener('click', () => openTab(deleteContent, deleteBtn, 'delete'));

// Function to open the clicked tab and hide the others
function openTab(activeContent, activeButton, item) {
    // Hide Admin image
    adminImg.style.display="none";
    // Hide all tabs first
    [registerContent, searchContent, updateContent, deleteContent].forEach(tab => tab.style.display = 'none');

    // Remove active class from all buttons
    [registerBtn, searchBtn, updateBtn, deleteBtn].forEach(tab => tab.classList.remove('btn-active'));
    
    // Show the selected tab
    activeContent.style.display = 'flex';

    // Active button
    activeButton.classList.add('btn-active');

    if(item==='register'){
        defaultField();
    }
    else if(item==='search'){
       console.log(underwriterData, "xxxxxxxx")
    }
}

function defaultField(){
    const size =  underwriterData.length;
        document.getElementById("u-id").value = underwriterData[size-1].id + 1;
        document.getElementById("u-pass").value =  generateRandomPassword();
}

// ****************** Admin menu functions
let underwriterData = [
    {
        id: 1001,
        name: 'user',
        dob: '12-08-2002',
        doj: '22-08-2024',
        password: 'User@123'
    },
]

const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let user = {
        id: parseInt(document.getElementById("u-id").value),
        name: document.getElementById("u-name").value,
        dob: document.getElementById("u-dob").value,
        doj: document.getElementById("u-doj").value,
        password: document.getElementById("u-pass").value
    }
    underwriterData.push(user);
    alert("Registration Successful.\nUser ID: "+underwriterData[underwriterData.length-1].id + "\nPassword: "+underwriterData[underwriterData.length-1].password)
    registrationForm.reset();
    defaultField();
    document.getElementById("u-pass").type="password"
})

function generateRandomPassword() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";

    // Ensure at least one character from each type is included
    const allChars = lowerCase + upperCase + numbers + specialChars;

    // Password length between 4 to 8 characters
    const passwordLength = Math.floor(Math.random() * (8 - 4 + 1)) + 4; // Random length between 4 and 8

    let password = "";

    // Ensuring we have at least one of each type of character
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the remaining length of the password with random characters from all sets
    for (let i = 4; i < passwordLength; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the characters to make the password more random
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    // Check for password already exist in underwriter data
    const result = underwriterData.find(user => user.password === password);
    if(result)
        generateRandomPassword();
    return password;
}


document.getElementById("show-pass").addEventListener('click', handlePassword)

function handlePassword(){
    let passwordField = document.getElementById("u-pass");
    if(passwordField.type==="password")
        passwordField.type="text";
    else
        passwordField.type="password";
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const suID = document.getElementById("su-id");
    const result = underwriterData.find(user => user.id === parseInt(suID.value));
    const searchResult = document.getElementById("search-result");
    if(result){
        searchResult.innerHTML = `<table class="border-collapse w-full">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Date of Joining</th>
                            <th>Default Password</th>
                        </tr>
                        <tr>
                            <td>${result.id}</td>
                            <td>${result.name}</td>
                            <td>${result.dob}</td>
                            <td>${result.doj}</td>
                            <td>${result.password}</td>
                        </tr>
                       </table>`
    }
    else
    searchResult.innerHTML='No underwriter found.'
})