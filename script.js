document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nameValue = document.getElementById('name').value;
    
    // Modal mein text change karna
    document.getElementById('modalMsg').innerText = "Shabash " + nameValue + "! Aapka form jama ho gaya hai.";
    
    // Modal show karna
    document.getElementById('successModal').style.display = 'flex';
});

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
    document.getElementById('myForm').reset();
}

// Click outside modal to close
window.onclick = function(event) {
    let modal = document.getElementById('successModal');
    if (event.target == modal) {
        closeModal();
    }
}