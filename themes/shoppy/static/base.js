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
(function (menuConfig) {
    /**
     * Merge default config with the theme overrided ones
     */
    var defaultConfig = {
        // behaviour
        mobileMenuMode: 'sidebar',
        animationSpeed: 300,
        submenuWidth: 300,
        doubleClickTime: 500,
        // selectors
        wrapperSelector: '.nav-menu',
        buttonSelector: '.nav-toggle',
        menuSelector: '.menu',
        submenuSelector: '.submenu',
        mobileMenuSidebarLogoSelector: null,
        relatedContainerForOverlayMenuSelector: null,
        // CSS classes
        separatorItemClass: 'is-separator',
        parentItemClass: 'has-submenu',
        submenuLeftPositionClass: 'is-left-submenu',
        submenuRightPositionClass: 'is-right-submenu',
        mobileMenuOverlayClass: 'nav-mobile__overlay',
        mobileMenuSubmenuWrapperClass: 'nav-submenu__wrapper',
        mobileMenuSidebarClass: 'nav-mobile__sidebar',
        displayElementClass: 'is-display',
        openedMenuClass: 'is-active',
        noScrollClass: 'no-scroll',
        relatedContainerForOverlayMenuClass: 'is-visible'
    };

    var config = {};

    Object.keys(defaultConfig).forEach(function (key) {
        config[key] = defaultConfig[key];
    });

    if (typeof menuConfig === 'object') {
        Object.keys(menuConfig).forEach(function (key) {
            config[key] = menuConfig[key];
        });
    }

    /**
     * Menu initializer
     */
    function init() {
        if (!document.querySelectorAll(config.wrapperSelector).length) {
            return;
        }

        initSubmenuPositions();

        /* JavaScript Media Queries */
        if (matchMedia) {
            var mq = window.matchMedia("(max-width: 56.1875em)");
            mq.addListener(widthChange);
            widthChange(mq);
        }
    }

    // media query change
    function widthChange(mq) {
        mq.matches ? initMobileMenuSidebar() : removeSidebar();
    }

    /**
     * Function responsible for the submenu positions
     */
    function initSubmenuPositions() {
        var submenuParents = document.querySelectorAll(config.wrapperSelector + ' .' + config.parentItemClass);

        for (var i = 0; i < submenuParents.length; i++) {
            submenuParents[i].addEventListener('mouseenter', function () {
                var submenu = this.querySelector(config.submenuSelector);
                var itemPosition = this.getBoundingClientRect().left;
                var widthMultiplier = 2;

                if (this.parentNode === document.querySelector(config.menuSelector)) {
                    widthMultiplier = 1;
                }

                if (config.submenuWidth !== 'auto') {
                    var submenuPotentialPosition = itemPosition + (config.submenuWidth * widthMultiplier);

                    if (window.innerWidth < submenuPotentialPosition) {
                        submenu.classList.add(config.submenuRightPositionClass);
                    } else {
                        submenu.classList.add(config.submenuLeftPositionClass);
                    }
                } else {
                    var submenuPotentialPosition = 0;
                    var submenuPosition = 0;

                    if (widthMultiplier === 1) {
                        submenuPotentialPosition = itemPosition + submenu.clientWidth;
                    } else {
                        submenuPotentialPosition = itemPosition + this.clientWidth + submenu.clientWidth;
                    }

                    if (window.innerWidth < submenuPotentialPosition) {
                        submenu.classList.add(config.submenuRightPositionClass);
                        submenuPosition = -1 * submenu.clientWidth;

                        if (widthMultiplier === 1) {
                            submenuPosition = 0;
                        }

                        submenu.style.left = submenuPosition + 'px';
                        submenu.style.right = this.clientWidth + 'px';
                    } else {
                        submenu.classList.add(config.submenuLeftPositionClass);
                        submenuPosition = this.clientWidth;

                        if (widthMultiplier === 1) {
                            submenuPosition = 0;
                        }

                        submenu.style.left = submenuPosition + 'px';
                    }
                }

                submenu.setAttribute('aria-hidden', false);
            });

            submenuParents[i].addEventListener('mouseleave', function () {
                var submenu = this.querySelector(config.submenuSelector);
                submenu.removeAttribute('style');
                submenu.setAttribute('aria-hidden', true);
            });
        }

        if (matchMedia) {
            var mq = window.matchMedia("(max-width: 56.1875em)"); //max-width 899px
            mq.addListener(dropdownBtn);
            dropdownBtn(mq);
        }
    }

    // media query change
    function dropdownBtn(mq) {
        mq.matches ? addDropdownBtn() : removeDropdownBtn();
    }

    function addDropdownBtn() {
        var submenuButtons = document.querySelectorAll(config.submenuSelector)
        
        if (submenuButtons) {
            submenuButtons.forEach(function (submenuBtn) {
                submenuBtn.insertAdjacentHTML('beforebegin', '<span class="submenu-button"></span>')
            });
        }
    }

    function removeDropdownBtn() {
        var submenuButtons = document.querySelectorAll('.submenu-button')
        if (submenuButtons) {
            submenuButtons.forEach(function (submenuBtn) {
                submenuBtn.remove()
            });
        }
    }

    /**
     * Function used to init mobile menu - sidebar mode
     */
    function initMobileMenuSidebar() {
        // Create menu structure
        var menuWrapper = document.createElement('div');
        menuWrapper.classList.add(config.mobileMenuSidebarClass);
        var menuContentHTML = '';

        if (config.mobileMenuSidebarLogoSelector !== null) {
            menuContentHTML = document.querySelector(config.mobileMenuSidebarLogoSelector).outerHTML;
        }

        menuContentHTML += document.querySelector(config.menuSelector).outerHTML;
        menuWrapper.innerHTML = menuContentHTML;

        document.body.appendChild(menuWrapper);

        // Init toggle submenus
        wrapSubmenusIntoContainer(menuWrapper);
        initToggleSubmenu(menuWrapper);

        // Menu events
        menuWrapper.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        // Init button events
        var button = document.querySelector(config.buttonSelector);

        button.addEventListener('click', function () {
            menuWrapper.classList.toggle(config.displayElementClass);
            button.classList.toggle(config.openedMenuClass);
            button.setAttribute('aria-expanded', button.classList.contains(config.openedMenuClass));
            document.documentElement.classList.add(config.noScrollClass);
        });
    }

    function removeSidebar() {
        var sidebar = document.querySelector('.' + config.mobileMenuSidebarClass)
        if (sidebar) {
            sidebar.parentNode.removeChild(sidebar);
        }
    }

    /**
     * Wrap all submenus into div wrappers
     */
    function wrapSubmenusIntoContainer(menuWrapper) {
        var submenus = menuWrapper.querySelectorAll(config.submenuSelector);

        for (var i = 0; i < submenus.length; i++) {
            var submenuWrapper = document.createElement('div');
            submenuWrapper.classList.add(config.mobileMenuSubmenuWrapperClass);
            submenus[i].parentNode.insertBefore(submenuWrapper, submenus[i]);
            submenuWrapper.appendChild(submenus[i]);
        }
    }

    /**
     * Initialize submenu toggle events
     */
    function initToggleSubmenu(menuWrapper) {
        // Init parent menu item events
        var parents = menuWrapper.querySelectorAll('.' + config.parentItemClass);

        for (var i = 0; i < parents.length; i++) {
            // Add toggle events
            parents[i].addEventListener('click', function (e) {
                e.stopPropagation();
                var submenu = this.querySelector('.' + config.mobileMenuSubmenuWrapperClass);
                var submenuBtn = this.querySelector('.submenu-button');
                var content = submenu.firstElementChild;  

                if (submenu.classList.contains(config.openedMenuClass)) {
                    var height = content.clientHeight;
                    submenu.style.height = height + 'px';

                    setTimeout(function () {
                        submenu.style.height = '0px';
                    }, 0);

                    setTimeout(function () {
                        submenu.removeAttribute('style');
                        submenu.classList.remove(config.openedMenuClass);
                    }, config.animationSpeed);
                } else {
                    var height = content.clientHeight;
                    submenu.classList.add(config.openedMenuClass);
                    submenu.style.height = '0px';

                    setTimeout(function () {
                        submenu.style.height = height + 'px';
                    }, 0);

                    setTimeout(function () {
                        submenu.removeAttribute('style');
                    }, config.animationSpeed);
                }
                
                if (submenuBtn.classList.contains(config.openedMenuClass)) {
                    submenuBtn.classList.remove(config.openedMenuClass);
                } else {
                    submenuBtn.classList.add(config.openedMenuClass);
                }
                
            });
        }
    }

    /**
     * Run menu scripts 
     */
    init();
})(window.publiiThemeMenuConfig);

window.publiiThemeMenuConfig = {
    animationSpeed: 300,
    submenuWidth: 'auto',
    doubleClickTime: 500,
    relatedContainerForOverlayMenuSelector: '.top',
};