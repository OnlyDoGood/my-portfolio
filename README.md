# Desmond Odogwu Portfolio

## Add project links

Open `src/App.jsx` and find the `projects` array near the top. Add a deployed demo and repository URL to the matching project object:

```js
{
  name: 'FitFlow',
  url: 'https://your-live-project.example',
  sourceUrl: 'https://github.com/your-name/your-project'
}
```

The project card displays "Live preview" and "Source code" links when those fields have values. Leave either field empty until you have a real link. Use the deployed website URL, not a local `localhost` address. The current FitFlow, Workout+, and ModeHouse entries are concepts; replace their descriptions and labels with accurate details from your completed work before presenting them as shipped projects.

## Add social profiles

In `src/App.jsx`, set `socialProfiles.linkedin` and `socialProfiles.github` to your actual profile URLs. The buttons stay hidden until you add a URL, so visitors are not sent to generic profile homepages.

## Receive contact messages

The contact form uses [FormSubmit](https://formsubmit.co/) to deliver messages to `desmondodogwu306@gmail.com`; this static portfolio does not need its own server.

1. Deploy the portfolio, or run it locally and submit a test message from the contact form.
2. FormSubmit sends a one-time activation email to `desmondodogwu306@gmail.com`. Open it and confirm the activation link. Until this is done, form submissions will not be delivered.
3. Submit another test message and check the inbox and spam folder.

The email address and endpoint are in the `fetch` call inside `handleSubmit` in `src/App.jsx`. If you change the receiving address, update the endpoint and activate that address through FormSubmit as well. Form messages pass through FormSubmit, so review its privacy terms before publishing the form. The visible email link remains available as a fallback.

## Scripts

- `npm install` installs dependencies
- `npm run dev` starts the development server
- `npm run build` creates a production build

## Preview

Run the site locally from the workspace root with `npm run dev`.

## Deploy to GitHub Pages

The GitHub Actions workflow deploys the site automatically when changes are pushed to `main`.

1. In the GitHub repository, open **Settings > Pages**.
2. Set **Build and deployment > Source** to **GitHub Actions**.
3. Push your changes to `main`, then follow the deployment in the repository's **Actions** tab.

The published site will be available at <https://onlydogood.github.io/my-portfolio/>.
