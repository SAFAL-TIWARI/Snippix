# 🎨 Snippix - CSS Component Library

[![GitHub stars](https://img.shields.io/github/stars/SAFAL-TIWARI/Snippix?style=social)](https://github.com/SAFAL-TIWARI/Snippix/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SAFAL-TIWARI/Snippix?style=social)](https://github.com/SAFAL-TIWARI/Snippix/network/members)
[![GitHub issues](https://img.shields.io/github/issues/SAFAL-TIWARI/Snippix)](https://github.com/SAFAL-TIWARI/Snippix/issues)

> 🚀 A modern, responsive CSS component library with beautiful pre-built components and dark/light theme support.

Snippix is a comprehensive collection of ready-to-use CSS components designed to help developers build beautiful web interfaces quickly and efficiently. With support for both dark and light themes, smooth animations, and modern design patterns, Snippix makes it easy to create stunning user interfaces.

## 🎓 Program Information

**Built under LetsUpgrade SAP Program** - This project was developed as part of the [LetsUpgrade](https://letsupgrade.in/) is India's largest higher education learning community for students enrolled in Indian degree programs. With 1.5 million students and a 45% market share among BTech / BE students in India; LetsUpgrade EdTech offers many upskilling courses in Tech, Design, Management, Business, and Data..

## ✨ Features

- 🎯 **20+ Component Categories** - Buttons, Cards, Navbars, Forms, Loaders, and more
- 🌙 **Dark/Light Theme Support** - Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎨 **Modern Design** - Clean, contemporary aesthetics with smooth animations
- 📋 **Copy-Paste Ready** - HTML and CSS code snippets for each component
- ⚡ **Lightweight** - Pure CSS with minimal JavaScript
- 🔧 **Customizable** - CSS variables for easy theming and customization
- 📖 **Interactive Documentation** - Live preview of all components

## 🎭 Component Categories

| Category | Description | Components |
|----------|-------------|------------|
| 🔘 **Buttons** | Various button styles and states | Primary, Outline, Ghost, Gradient |
| 🃏 **Cards** | Content containers and layouts | Basic, Image, Profile Cards |
| 🧭 **Navbars** | Navigation components | Basic Navbar |
| 📝 **Forms** | Input fields and form elements | Input Fields, Form Controls |
| ⏳ **Loaders** | Loading animations and spinners | Various loading states |
| ⚠️ **Alerts** | Notification and alert messages | Success, Warning, Error alerts |
| 🪟 **Modals** | Dialog boxes and overlays | Modal dialogs |
| 🏷️ **Badges** | Labels and status indicators | Status badges |
| 📊 **Grids** | Layout systems | Grid layouts |
| 🦶 **Footers** | Footer components | Website footers |
| ✨ **Animations** | CSS animations and transitions | Hover effects, transitions |
| 💬 **Tooltips** | Contextual help and information | Tooltip components |
| 📈 **Progress Bars** | Progress indicators | Loading progress |
| 🔄 **Toggles** | Switch and toggle components | Toggle switches |
| 📑 **Tabs** | Tabbed content navigation | Tab components |
| 📋 **Accordions** | Collapsible content sections | Accordion panels |
| 📋 **Dropdowns** | Dropdown menus and selects | Dropdown components |
| 🎚️ **Sliders** | Range and slider inputs | Slider controls |

## 🚀 Quick Start

### Option 1: Clone the Repository

```bash
git clone https://github.com/SAFAL-TIWARI/Snippix.git
cd Snippix
```

### Option 2: Download ZIP

Download the latest release from the [GitHub repository](https://github.com/SAFAL-TIWARI/Snippix).

### Option 3: Use Individual Components

Simply copy the HTML and CSS code for any component directly from the live documentation.

## 📁 Project Structure

```
Snippix/
├── 📄 index.html          # Main documentation page
├── 🎨 styles.css          # All component styles and themes
├── ⚡ script.js           # Theme switching and navigation
├── 📖 README.md           # Project documentation
└── 🔧 .gitignore          # Git ignore rules
```

## 🎯 Usage

### 1. Include the Stylesheet

```html
<link rel="stylesheet" href="styles.css">
```

### 2. Add the JavaScript (Optional - for theme switching)

```html
<script src="script.js"></script>
```

### 3. Use Components

Copy any component's HTML and CSS from the documentation:

```html
<!-- Example: Primary Button -->
<button class="btn btn-primary">Click Me!</button>
```

### 4. Theme Support

The library automatically supports both light and dark themes:

```html
<!-- For dark theme (default) -->
<html class="dark-theme">

<!-- For light theme -->
<html>
```

## 🎨 Customization

Snippix uses CSS custom properties (variables) for easy customization:

```css
:root {
    --primary-color: #667eea;
    --bg-primary: #ffffff;
    --text-color: #1a202c;
    --border-color: #e2e8f0;
    /* ... more variables */
}

.dark-theme {
    --primary-color: #818cf8;
    --bg-primary: #0f172a;
    --text-color: #f1f5f9;
    --border-color: #334155;
    /* ... more variables */
}
```

## 🌟 Key Features

### Theme Switching
- **Automatic Detection**: Respects user's system preference
- **Persistent Storage**: Remembers theme choice using localStorage
- **Smooth Transitions**: Animated theme switching
- **CSS Variables**: Easy customization of colors and styles

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Flexible Layouts**: Adapts to different screen sizes
- **Touch-Friendly**: Appropriate touch targets and interactions

### Modern CSS Features
- **CSS Grid & Flexbox**: Modern layout techniques
- **Custom Properties**: CSS variables for theming
- **Smooth Animations**: CSS transitions and keyframe animations
- **Backdrop Filters**: Modern visual effects

## 🛠️ Development

### Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. Start exploring and customizing components

### File Structure

- **`index.html`**: Main documentation with all components
- **`styles.css`**: Complete stylesheet with all component styles
- **`script.js`**: Theme switching and navigation functionality

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-component`)
3. 💻 Add your component or improvement
4. 📝 Update documentation if needed
5. ✅ Test your changes
6. 🚀 Commit your changes (`git commit -m 'Add amazing component'`)
7. 📤 Push to the branch (`git push origin feature/amazing-component`)
8. 🔄 Open a Pull Request

### Component Guidelines

When adding new components:
- Follow the existing naming conventions
- Include both HTML and CSS code examples
- Ensure responsive design
- Support both light and dark themes
- Add appropriate documentation

## 🙏 Acknowledgments

- **Inter Font**: Modern typography from Google Fonts
- **JetBrains Mono**: Code font for syntax highlighting
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: For theming support

## 🌟 Show Your Support

If you find Snippix helpful, please consider:

- ⭐ Starring the repository
- 🍴 Forking for your own projects
- 📢 Sharing with the community
- 🐛 Reporting issues or bugs
- 💡 Suggesting new features

---

<div align="center">

**Made with ❤️ by [SAFAL TIWARI](https://github.com/SAFAL-TIWARI)**

[⬆ Back to Top](#-snippix---css-component-library)

</div>