// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');
    const mobileThemeSwitch = document.getElementById('mobile-theme-switch');
    const html = document.documentElement;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';

    function updateTheme(isLight) {
        if (isLight) {
            html.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        }
        
        // Sync both toggles
        if (themeSwitch) themeSwitch.checked = isLight;
        if (mobileThemeSwitch) mobileThemeSwitch.checked = isLight;
    }

    // Initialize theme
    updateTheme(savedTheme === 'light');

    // Desktop theme switch event listener
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function () {
            updateTheme(this.checked);
        });
    }

    // Mobile theme switch event listener
    if (mobileThemeSwitch) {
        mobileThemeSwitch.addEventListener('change', function () {
            updateTheme(this.checked);
        });
    }

    // Style Navigation Functionality
    const styleLinks = document.querySelectorAll('.style-link');
    const styleSections = document.querySelectorAll('.style-section');
    const substylesList = document.getElementById('substyles-list');

    // Sub-styles data for each main style
    const substyles = {
        buttons: [
            { id: 'primary-button', name: 'Primary' },
            { id: 'outline-button', name: 'Outline' },
            { id: 'ghost-button', name: 'Ghost' },
            { id: 'gradient-button', name: 'Gradient' }
        ],
        cards: [
            { id: 'basic-card', name: 'Basic Card' },
            { id: 'image-card', name: 'Image Card' },
            { id: 'profile-card', name: 'Profile Card' }
        ],
        navbars: [
            { id: 'basic-navbar', name: 'Basic Navbar' }
        ],
        forms: [
            { id: 'input-field', name: 'Input Field' }
        ],
        loaders: [
            { id: 'spinner-loader', name: 'Spinner' },
            { id: 'dots-loader', name: 'Dots' }
        ],
        alerts: [
            { id: 'success-alert', name: 'Success' },
            { id: 'error-alert', name: 'Error' }
        ],
        modals: [
            { id: 'basic-modal', name: 'Basic Modal' }
        ],
        badges: [
            { id: 'basic-badge', name: 'Basic Badge' }
        ],
        grids: [
            { id: 'css-grid', name: 'CSS Grid' }
        ],
        footers: [
            { id: 'simple-footer', name: 'Simple Footer' }
        ],
        animations: [
            { id: 'bounce-animation', name: 'Bounce' },
            { id: 'pulse-animation', name: 'Pulse' },
            { id: 'rotate-animation', name: 'Rotate' }
        ],
        tooltips: [
            { id: 'basic-tooltip', name: 'Basic Tooltip' }
        ],
        progress: [
            { id: 'linear-progress', name: 'Linear Progress' },
            { id: 'circular-progress', name: 'Circular Progress' }
        ],
        toggles: [
            { id: 'basic-toggle', name: 'Basic Toggle' }
        ],
        tabs: [
            { id: 'basic-tabs', name: 'Basic Tabs' }
        ],
        accordions: [
            { id: 'basic-accordion', name: 'Basic Accordion' }
        ],
        dropdowns: [
            { id: 'basic-dropdown', name: 'Basic Dropdown' }
        ],
        sliders: [
            { id: 'basic-slider', name: 'Basic Slider' }
        ]
    };

    // Function to update substyles list
    function updateSubstyles(styleKey) {
        const currentSubstyles = substyles[styleKey] || [];
        substylesList.innerHTML = '';

        currentSubstyles.forEach((substyle, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${substyle.id}`;
            a.className = `substyle-link ${index === 0 ? 'active' : ''}`;
            a.textContent = substyle.name;
            a.addEventListener('click', handleSubstyleClick);
            li.appendChild(a);
            substylesList.appendChild(li);
        });
    }

    // Handle style link clicks
    function handleStyleClick(e) {
        e.preventDefault();

        // Remove active class from all style links
        styleLinks.forEach(link => link.classList.remove('active'));

        // Add active class to clicked link
        this.classList.add('active');

        // Hide all style sections
        styleSections.forEach(section => section.classList.remove('active'));

        // Show selected style section
        const targetStyle = this.getAttribute('data-style');
        const targetSection = document.getElementById(targetStyle);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update substyles list
        updateSubstyles(targetStyle);

        // Scroll to top of content
        document.querySelector('.center-content').scrollTop = 0;
    }

    // Handle substyle link clicks
    function handleSubstyleClick(e) {
        e.preventDefault();

        // Remove active class from all substyle links
        document.querySelectorAll('.substyle-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // Scroll to target element
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Add event listeners to style links
    styleLinks.forEach(link => {
        link.addEventListener('click', handleStyleClick);
    });

    // Initialize with buttons section
    updateSubstyles('buttons');

    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('backToTop');
    const centerContent = document.querySelector('.center-content');

    // Show/hide back to top button based on scroll position
    centerContent.addEventListener('scroll', function () {
        if (this.scrollTop > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Back to top button click handler
    backToTopButton.addEventListener('click', function () {
        centerContent.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll Spy for Right Sidebar
    function updateActiveSubstyle() {
        const componentCards = document.querySelectorAll('.component-card');
        const substyleLinks = document.querySelectorAll('.substyle-link');
        const scrollTop = centerContent.scrollTop;
        const offset = 150;

        let activeCard = null;

        componentCards.forEach(card => {
            const cardTop = card.offsetTop - offset;
            const cardBottom = cardTop + card.offsetHeight;

            if (scrollTop >= cardTop && scrollTop < cardBottom) {
                activeCard = card;
            }
        });

        if (activeCard) {
            const activeId = activeCard.id;

            substyleLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    // Add scroll spy listener
    centerContent.addEventListener('scroll', updateActiveSubstyle);

    // Mobile Menu Toggle Functionality
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    
    if (mobileMenuToggle && mobileNavMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            // Toggle menu visibility
            mobileNavMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.mobile-nav-controls') && !e.target.closest('.mobile-nav-menu')) {
                mobileNavMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });

        // Close mobile menu on window resize if screen becomes larger
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                mobileNavMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // Mobile Sidebar Toggle Functionality
    const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
    const mobileSidebarOverlay = document.getElementById('mobileSidebarOverlay');
    const rightSidebar = document.querySelector('.right-sidebar');

    if (mobileSidebarToggle && mobileSidebarOverlay && rightSidebar) {
        // Toggle sidebar when button is clicked
        mobileSidebarToggle.addEventListener('click', function () {
            rightSidebar.classList.toggle('active');
            mobileSidebarOverlay.classList.toggle('active');
        });

        // Close sidebar when overlay is clicked
        mobileSidebarOverlay.addEventListener('click', function () {
            rightSidebar.classList.remove('active');
            mobileSidebarOverlay.classList.remove('active');
        });

        // Close sidebar when a substyle link is clicked (for better UX)
        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('substyle-link') && window.innerWidth <= 768) {
                rightSidebar.classList.remove('active');
                mobileSidebarOverlay.classList.remove('active');
            }
        });

        // Close sidebar on window resize if screen becomes larger
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                rightSidebar.classList.remove('active');
                mobileSidebarOverlay.classList.remove('active');
            }
        });
    }

    // Copy Code Functionality (for future implementation)
    function addCopyButtons() {
        const codeBlocks = document.querySelectorAll('.code-block');

        codeBlocks.forEach(block => {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerHTML = '📋';
            copyButton.title = 'Copy code';

            copyButton.addEventListener('click', function () {
                const code = block.textContent;
                navigator.clipboard.writeText(code).then(() => {
                    copyButton.innerHTML = '✅';
                    setTimeout(() => {
                        copyButton.innerHTML = '📋';
                    }, 2000);
                });
            });

            // Position the copy button
            const container = block.parentElement;
            container.style.position = 'relative';
            copyButton.style.position = 'absolute';
            copyButton.style.top = '10px';
            copyButton.style.right = '10px';
            copyButton.style.background = 'var(--primary-color)';
            copyButton.style.color = 'white';
            copyButton.style.border = 'none';
            copyButton.style.borderRadius = '4px';
            copyButton.style.padding = '4px 8px';
            copyButton.style.cursor = 'pointer';
            copyButton.style.fontSize = '12px';
            copyButton.style.opacity = '0.7';
            copyButton.style.transition = 'opacity 0.3s ease';

            copyButton.addEventListener('mouseenter', () => {
                copyButton.style.opacity = '1';
            });

            copyButton.addEventListener('mouseleave', () => {
                copyButton.style.opacity = '0.7';
            });

            container.appendChild(copyButton);
        });
    }

    // Initialize copy buttons
    addCopyButtons();

    // Smooth animations for component cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all component cards for animation
    document.querySelectorAll('.component-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function (e) {
        // Press 'T' to toggle theme
        if (e.key === 't' || e.key === 'T') {
            if (!e.target.matches('input, textarea')) {
                const currentTheme = localStorage.getItem('theme') || 'dark';
                updateTheme(currentTheme === 'dark');
            }
        }

        // Press 'Escape' to close any open modals (for future modal implementation)
        if (e.key === 'Escape') {
            // Close modal functionality can be added here
        }
    });

    // Add loading states for better UX
    function showLoading(element) {
        element.classList.add('loading');
    }

    function hideLoading(element) {
        element.classList.remove('loading');
    }

    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScrollSpy = debounce(updateActiveSubstyle, 100);
    centerContent.removeEventListener('scroll', updateActiveSubstyle);
    centerContent.addEventListener('scroll', debouncedScrollSpy);

    // Add search functionality (basic implementation)
    function initializeSearch() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search components...';
        searchInput.className = 'search-input';

        // Style the search input
        searchInput.style.cssText = `
            width: 200px;
            padding: 8px 12px;
            border: 1px solid var(--border-color);
            border-radius: 6px;
            background: var(--bg-secondary);
            color: var(--text-color);
            font-size: 14px;
            margin-right: 16px;
        `;

        // Add search input to navbar (optional)
        // const navLinks = document.querySelector('.nav-links');
        // navLinks.insertBefore(searchInput, navLinks.firstChild);

        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            const componentCards = document.querySelectorAll('.component-card');

            componentCards.forEach(card => {
                const title = card.querySelector('.component-title').textContent.toLowerCase();
                const content = card.textContent.toLowerCase();

                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = searchTerm ? 'none' : 'block';
                }
            });
        });
    }

    // Initialize search (uncomment to enable)
    // initializeSearch();

    // Initialize circular progress bars
    function initializeCircularProgress() {
        const circularProgressBars = document.querySelectorAll('.circular-progress[data-percentage]');
        
        circularProgressBars.forEach(progressBar => {
            const percentage = progressBar.getAttribute('data-percentage') || 0;
            const progressText = progressBar.querySelector('.progress-text');
            
            // Set CSS custom property for the progress value
            progressBar.style.setProperty('--progress-value', percentage);
            
            // Update text content if it exists
            if (progressText) {
                progressText.textContent = percentage + '%';
            }
            
            // Add animation effect
            progressBar.style.setProperty('--progress-value', 0);
            setTimeout(() => {
                progressBar.style.transition = 'all 0.8s ease-in-out';
                progressBar.style.setProperty('--progress-value', percentage);
            }, 100);
        });
    }

    initializeCircularProgress();

    console.log('Snippix initialized successfully! 🎉');
});

// Modal Functions
function openModal() {
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('modalOverlay');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Tab Functions
function showTab(evt, tabName) {
    const tabPanes = document.querySelectorAll('.tab-pane');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Hide all tab panes
    tabPanes.forEach(pane => pane.classList.remove('active'));

    // Remove active class from all buttons
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show selected tab pane
    const selectedPane = document.getElementById(tabName);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }

    // Add active class to clicked button
    evt.currentTarget.classList.add('active');
}

// Accordion Functions
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.accordion-icon');

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other accordions
        const allContents = document.querySelectorAll('.accordion-content');
        const allIcons = document.querySelectorAll('.accordion-icon');

        allContents.forEach(c => c.classList.remove('active'));
        allIcons.forEach(i => {
            i.textContent = '+';
            i.style.transform = 'rotate(0deg)';
        });

        // Open clicked accordion
        content.classList.add('active');
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
    }
}

// Dropdown Functions
function toggleDropdown(element) {
    const dropdown = element.parentElement;
    const menu = dropdown.querySelector('.dropdown-menu');
    const arrow = element.querySelector('.dropdown-arrow');

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        // Close all other dropdowns
        const allMenus = document.querySelectorAll('.dropdown-menu');
        const allArrows = document.querySelectorAll('.dropdown-arrow');

        allMenus.forEach(m => m.classList.remove('active'));
        allArrows.forEach(a => a.style.transform = 'rotate(0deg)');

        // Open clicked dropdown
        menu.classList.add('active');
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
        const allMenus = document.querySelectorAll('.dropdown-menu');
        const allArrows = document.querySelectorAll('.dropdown-arrow');

        allMenus.forEach(m => m.classList.remove('active'));
        allArrows.forEach(a => a.style.transform = 'rotate(0deg)');
    }
});

// Slider Functions
function updateSliderValue(slider) {
    const valueSpan = document.getElementById('sliderValue');
    if (valueSpan) {
        valueSpan.textContent = slider.value;
    }
}