export function timeSince(date) {

  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  let agoText = "ago"

  if (interval >= 1) {
    const text = interval === 1 ? " year " : " years "
    return interval + text + agoText;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    const text = interval === 1 ? " month " : " months "
    return interval + text + agoText;
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    const text = interval === 1 ? " day " : " days "
    return interval + text + agoText;
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    const text = interval === 1 ? " year " : " years "
    return interval + text + agoText;
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    const text = interval === 1 ? " minute " : " minutes "
    return interval + text + agoText;
  }
  return Math.floor(seconds) + " seconds";
}

export function removeYoutubeFromUrl(url) {
  return url
    .replace('https://www.youtube.com', '')
    .replace('https://youtube.com', '')
    .replace('http://www.youtube.com')
    .replace('http://youtube.com', '')
}

export function getAuthorThumbnails(url) {
  const id = url.replace(/=s.*-c-k-c0xffffffff-no-rj-mo/i, '')
  return [
    {
      'url': id + '=s32-c-k-c0xffffffff-no-rj-mo',
      'width': 32,
      'height': 32
    },
    {
      'url': id + '=s48-c-k-c0xffffffff-no-rj-mo',
      'width': 48,
      'height': 48
    },
    {
      'url': id + '=s76-c-k-c0xffffffff-no-rj-mo',
      'width': 76,
      'height': 76
    },
    {
      'url': id + '=s100-c-k-c0xffffffff-no-rj-mo',
      'width': 100,
      'height': 100
    },
    {
      'url': id + '=s176-c-k-c0xffffffff-no-rj-mo',
      'width': 176,
      'height': 176
    },
    {
      'url': id + '=s512-c-k-c0xffffffff-no-rj-mo',
      'width': 512,
      'height': 512
    }
  ]
}