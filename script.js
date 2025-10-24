const headers = document.querySelectorAll('.extensivel-header');
const items = document.querySelectorAll('.lista');

headers.forEach((header, index) => {
    const content = header.nextElementSibling;

    if (index === 0) {
        content.style.maxHeight = content.scrollHeight + "px";
    }

    header.addEventListener('click', () => {
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


items.forEach(item => {
    item.addEventListener('click', () => {

        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const targetId = item.dataset.target;

        document.querySelectorAll('#main-content > div').forEach(div => {
            div.style.display = 'none';
        });

        const target = document.getElementById(targetId);
        if (target) target.style.display = 'block';
    });
});