# GitHub Pages Deployment Setup

Your repository is configured for GitHub Pages deployment!

## Configuration Files

✅ **vite.config.ts** - Base path configured for `/selam9x/`
✅ **package.json** - Build script added: `build:pages`

## Next Steps

1. **Create the GitHub Actions Workflow**
   - Go to: `.github/workflows/pages.yml`
   - Copy the content from the setup instructions

2. **Enable GitHub Pages**
   - Go to: Settings → Pages
   - Source: Select "GitHub Actions"
   - Branch: main (if not auto-selected)

3. **Deploy**
   - Push to main branch
   - GitHub Actions will automatically build and deploy

Your site will be available at: **https://tagseara.github.io/selam9x/**

## Build Locally

```bash
# Install dependencies
bun install

# Build for local development
bun run build

# Build for GitHub Pages
GITHUB_PAGES=true bun run build

# Preview
bun run preview
```
