// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails

document.addEventListener('DOMContentLoaded', () => {
    console.log('kekw');
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.addEventListener('click', () => {
            const lang = element.dataset.lang;
            const expire = new Date(Number.MAX_SAFE_INTEGER);
            document.cookie = `locale=${lang}; expires=${expire.toGMTString()}`;
            document.location.reload();
            return false;
        });

        Array.from(element.getElementsByTagName('a')).forEach(link => {
            link.style.cursor = 'pointer';
        });
    });
});
