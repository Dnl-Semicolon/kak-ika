// Simple animation for menu items appearing as user scrolls
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Initial check for elements in viewport
    menuItems.forEach(item => {
        if (isInViewport(item)) {
            item.style.opacity = '1';
        } else {
            item.style.opacity = '0';
        }
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', function() {
        menuItems.forEach(item => {
            if (isInViewport(item)) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    });
});