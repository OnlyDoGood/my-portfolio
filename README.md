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

The contact form submits directly to [Formspree](https://formspree.io/) using the endpoint configured in the form action in `src/App.jsx`. This static portfolio does not need its own server.

1. Confirm the Formspree form is configured to deliver to your intended email address.
2. Deploy the portfolio, then submit a test message and follow any verification or activation prompt from Formspree.
3. Check the destination inbox and spam folder for the test message.

The visible email link remains available as a fallback.

## Scripts

- `npm install` installs dependencies
- `npm run dev` starts the development server
- `npm run build` creates a production build

## Preview

Run the site locally from the workspace root with `npm run dev`.

## Deploy to GitHub Pages

Publish the production build to the `gh-pages` branch:

1. In the GitHub repository, open **Settings > Pages**.
2. Set **Build and deployment > Source** to **Deploy from a branch**.
3. Select the `gh-pages` branch and the `/(root)` folder, then save.
4. Run `npm run deploy` from the project folder whenever you want to publish an update.

The published site will be available at <https://onlydogood.github.io/my-portfolio/>.
