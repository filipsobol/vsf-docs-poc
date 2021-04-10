export default async function({ store, params, redirect }) {
  if (!store.state.settings.settings) {
    await store.dispatch('settings/fetch');
  }

  const version = params.version || store.state.settings.settings.defaultVersion;

  if (!store.state.versions.versions[version]) {
    await store.dispatch('versions/fetch', { version });
  }

  const versionSettings = store.state.versions.versions[version];
  const slug = params.pathMatch || versionSettings.categories?.[0]?.items?.[0]?.path || 'index';

  if (!params.version || !params.pathMatch) {
    return redirect(`/docs/${version}${slug}`);
  }

  await store.dispatch('document/fetch', {
    version,
    slug
  });
}
