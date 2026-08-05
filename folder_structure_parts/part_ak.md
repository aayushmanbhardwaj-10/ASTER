
### 4.1 Directory Naming
- Use lowercase letters, numbers, and hyphens
- Be descriptive but concise
- Use plural nouns for collections (components, services)
- Use singular for specific entities (auth, payment)
- Avoid abbreviations unless universally understood (img, config)

### 4.2 File Naming
- Use kebab-case for all files (`file-name.js`)
- Use descriptive names that indicate purpose
- Test files: `[name].test.js` or `[name].spec.js`
- Style files: `[name].styles.css` or `[name].module.scss`
- Component files: `[ComponentName].jsx` or `[ComponentName].tsx`
- Constants: `[name].constants.js`
- Hooks: `use[HookName].js`

### 4.3 Image and Asset Naming
- Use descriptive names: `logo-primary.svg`, `icon-user-settings.svg`
- Include states where relevant: `button-primary-hover.svg`
- Use suffixes for variations: `-active`, `-disabled`, `-hover`
- For multilingual: include language code when needed: `button-es.svg`

## 5. Import and Export Guidelines

### 5.1 Absolute Imports
Configured via jsconfig/tsconfig for cleaner imports:
```javascript
// Instead of:
// import Button from '../../../../components/Button';
