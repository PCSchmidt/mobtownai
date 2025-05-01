# MobtownAI Website

This is the website for MobtownAI, designed to be deployed to the domain mobtownai.com or hosted on GitHub Pages.

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

## Deployment Options

### GitHub Pages Deployment

To deploy this site to GitHub Pages:

1. **Push the code to your GitHub repository:**
   ```
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set the source branch to "main" (or your preferred branch)
   - Save the changes

3. **Configure custom domain (optional):**
   - In the GitHub Pages settings, add your custom domain (mobtownai.com)
   - Create a CNAME file in your repository with the domain name
   - Update your domain's DNS settings to point to GitHub Pages

4. **Access your site:**
   - Your site will be available at `https://pcschmidt.github.io/mobtownai/` 
   - Or at your custom domain if configured

### SquareSpace Deployment (Alternative)

To deploy this site to your SquareSpace domain (mobtownai.com), follow these steps:

1. **Log in to your SquareSpace account**

2. **Use the Code Injection option:**
   - In your SquareSpace dashboard, go to Settings > Advanced > Code Injection
   - In the Header section, paste the contents of your CSS file
   - In the Footer section, paste the contents of your JavaScript files

3. **Alternative: Use Developer Mode**
   - If available on your SquareSpace plan, enable Developer Mode
   - This allows you to directly upload and edit your site files
   - Follow SquareSpace's documentation for using Developer Mode

4. **Custom Domain Setup:**
   - Ensure your domain (mobtownai.com) is properly configured in SquareSpace
   - Verify DNS settings are correct

5. **Content Integration:**
   - You may need to recreate some of the sections using SquareSpace's native content blocks
   - For complete control, consider using a "Code Block" in SquareSpace to add custom HTML

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
