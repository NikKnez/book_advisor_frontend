// prepends the API_ENDPOINT variable to the url and fetches it
// mostly copied from https://stackoverflow.com/a/61797794

export default function fetchEndpoint(url, ...params) {
  return fetch(`${'https://bookadvisor-m4pm.onrender.com'}${url}`, ...params);
}
