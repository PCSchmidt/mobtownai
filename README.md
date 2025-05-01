# MobtownAI Website

This is the website for MobtownAI, designed to be hosted on GitHub Pages.

## Project Structure

```
mobtownai/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Stylesheet
├── js/
│   └── main.js             # Main JavaScript file
├── images/
│   └── custom-hero-bg.js   # Dynamic background generator
└── README.md               # This file
```

## Features

- Responsive design that works on all devices
- Dynamic hero background with interactive particles
- Contact form (requires server-side implementation to be functional)
- Smooth scrolling and animations
- Modern, clean UI based on the landing page template

## GitHub Pages Deployment

To deploy this site to GitHub Pages:

1. **Push the code to your GitHub repository:**
   ```
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub (https://github.com/PCSchmidt/mobtownai)
   - Navigate to Settings > Pages
   - Set the source branch to "main" (or your preferred branch)
   - Save the changes

3. **Access your site:**
   - Your site will be available at `https://pcschmidt.github.io/mobtownai/`

## Local Development

To preview the site locally:

1. Simply open the `index.html` file in a web browser

2. For a more robust development environment, you can use a local server:
   ```
   # Using Python 3
   python -m http.server
   
   # Using Node.js (with http-server installed)
   npx http-server
   ```

3. The site will be available at `http://localhost:8000` or similar

## Git Branches

This project uses a standard Git branching strategy:

- **main**: Production-ready code that is deployed to the live site
- **develop**: Development branch for ongoing work before merging to main

To work with these branches:

```bash
# Create and switch to the develop branch
git checkout -b develop

# Make changes and commit them
git add .
git commit -m "Your commit message"

# Push changes to develop branch
git push origin develop

# When ready to deploy to production
git checkout main
git merge develop
git push origin main
```

## Customization

- Color scheme: Edit the CSS variables in the `:root` section of styles.css
- Content: Update the text in index.html
- Dynamic background: Adjust parameters in custom-hero-bg.js to change the particle effect
- Team information: Update team member details in the "Our Team" section of index.html
