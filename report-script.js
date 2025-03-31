document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('http://localhost:5000/report', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Report submitted successfully!');
        } else {
            alert('Failed to submit report. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit report. Please try again.');
    });
});
