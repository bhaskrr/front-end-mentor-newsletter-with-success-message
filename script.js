const btn = document.querySelector('button');

const handleEvent = (e) => {
    const email = document.getElementById('email');
    const regex = /[a-z]*@[a-z]*/i;
    if (email.value.match(regex)) {
        localStorage.setItem('storedValue', email.value);
        window.location.href = 'success.html';
        return;
    } else {
        e.preventDefault();
        const span = document.querySelector('.invalid');
        span.classList.add('visible');
        email.classList.add('error');
    }
}

btn.addEventListener('click', handleEvent);