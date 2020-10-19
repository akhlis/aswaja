// Sticky menu
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("js-header");
var stickyMenu = document.getElementById("nav-menu--js");

window.addEventListener('scroll', function (e) {
    last_scroll_position = window.scrollY;

    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 40) {
        header.classList.remove("is-visible");
        header.classList.add("is-hidden");

        // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
        header.classList.remove("is-hidden");
        header.classList.add("is-visible");
        if (stickyMenu) {
            stickyMenu.classList.add("is-sticky");
        }
    }

    if (last_scroll_position < 1) {
        header.classList.remove("is-visible");

        if (stickyMenu) {
            stickyMenu.classList.remove("is-sticky");
        }
    }

    new_scroll_position = last_scroll_position;
});

// Dropdown menu
(function () {
    var defaultConfig = {

        // selectors
        wrapperSelector: '.nav__menu',
        buttonSelector: '.nav__toggle',
        sidebarSelector: '.docs__nav',
        docsButton: '.nav__docs-button',
        searchButton: '.nav__search-button',
        // CSS classes
        isSubmenu: 'has-submenu',
        submenuWrapperClass: 'nav__submenu-wrapper',
        menuSidebarClass: '.nav__mobile-sidebar',
        searchClass: '.nav__search',
        isDisplayClass: 'is-display',
        isActiveClass: 'is-active',
    };

    var config = {};

    Object.keys(defaultConfig).forEach(function (key) {
        config[key] = defaultConfig[key];
    });

    /**
     * Menu initializer
     */
    function init() {
        if (!document.querySelectorAll(config.wrapperSelector).length) {
            return;
        }

        initMenuSidebar();
        initToggleSubmenu();
    }

    function initMenuSidebar() {
        // Init button events
        var button = document.querySelector(config.buttonSelector);
        var docsButton = document.querySelector(config.docsButton);
        var searchButton = document.querySelector(config.searchButton);
        var sidebarWrapper = document.querySelector(config.sidebarSelector);
        var searchWrapper = document.querySelector(config.searchClass);
        var menuWrapper = document.querySelector(config.menuSidebarClass);

        button.addEventListener('click', function () {
            menuWrapper.classList.toggle(config.isDisplayClass);
            button.classList.toggle(config.isActiveClass);
            button.setAttribute('aria-expanded', button.classList.contains(config.isActiveClass));
        });

        docsButton.addEventListener('click', function () {
            sidebarWrapper.classList.toggle(config.isDisplayClass);
        });

        searchButton.addEventListener('click', function () {
            searchWrapper.classList.toggle(config.isDisplayClass);
        });
    }

    function initToggleSubmenu() {
        // Init parent menu item events
        var menuWrapper = document.querySelector(config.menuSidebarClass);
        var parents = menuWrapper.querySelectorAll('.' + config.isSubmenu);

        for (var i = 0; i < parents.length; i++) {
            // Add toggle events
            parents[i].addEventListener('click', function (e) {
                e.stopPropagation();
                var submenu = this.querySelector('.' + config.submenuWrapperClass);
                var submenuBtn = this.querySelector('.submenu-button');
                var content = submenu.firstElementChild;

                if (submenu.classList.contains(config.isActiveClass)) {
                    var height = content.clientHeight;
                    submenu.style.height = height + 'px';

                    setTimeout(function () {
                        submenu.style.height = '0px';
                    }, 0);

                    setTimeout(function () {
                        submenu.removeAttribute('style');
                        submenu.classList.remove(config.isActiveClass);
                    }, config.animationSpeed);
                } else {
                    var height = content.clientHeight;
                    submenu.classList.add(config.isActiveClass);
                    submenu.style.height = '0px';

                    setTimeout(function () {
                        submenu.style.height = height + 'px';
                    }, 0);

                    setTimeout(function () {
                        submenu.removeAttribute('style');
                    }, config.animationSpeed);
                }

                if (submenuBtn.classList.contains(config.isActiveClass)) {
                    submenuBtn.classList.remove(config.isActiveClass);
                } else {
                    submenuBtn.classList.add(config.isActiveClass);
                }

            });
        }
    }
    init();
}());


(function () {
    function toggleTheme() {
        const htmlTag = document.getElementsByTagName('body')[0]
        if (htmlTag.hasAttribute('data-theme')) {
            htmlTag.removeAttribute('data-theme')
            return window.localStorage.removeItem("site-theme")
        }

        htmlTag.setAttribute('data-theme', 'dark')
        window.localStorage.setItem("site-theme", "dark")
    }

    function applyInitialTheme() {
        const theme = window.localStorage.getItem("site-theme")
        if (theme !== null) {
            const htmlTag = document.getElementsByTagName("body")[0]
            htmlTag.setAttribute("data-theme", theme)
        }
    }

    applyInitialTheme();

    var theme = document.getElementById("theme-toggle")
    theme.addEventListener("click", toggleTheme);
}());

(function () {
    document.addEventListener('DOMContentLoaded', function () {

        // Element: Copy to clipboard
        var clipboard = new ClipboardJS('.example__value,[data-clipboard-target],[data-clipboard-text]');

        Array.prototype.forEach.call(document.querySelectorAll('.example__value,[data-clipboard-target],[data-clipboard-text]'), function ($el) {
            $el.addEventListener('mouseenter', function (e) {
                e.target.classList.remove('is-copied');
            });
        });

        clipboard.on('success', function (e) {
            e.clearSelection();
            e.trigger.classList.add('is-copied');
        });

        // Property: Launch animations
        var $launchButtons = document.querySelectorAll('.property-animation-toggle');

        Array.prototype.forEach.call($launchButtons, function ($launchButton, index) {
            var propertyName = $launchButton.dataset.propertyName;
            var $targets = document.querySelectorAll('#' + propertyName + ' .property__example');

            $launchButton.addEventListener('click', function (event) {
                this.classList.toggle('is-playing');

                Array.prototype.forEach.call($targets, function ($elbis, index) {
                    $elbis.classList.toggle('is-animated');
                });
            });
        });
    })
}());