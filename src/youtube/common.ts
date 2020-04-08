export class Common {
  public static readonly youtubeVideoUrl: string =
    'https://youtube.com/watch?v=';

  public static timeSince(date: Date) {
    const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

    let interval = Math.floor(seconds / 31536000);

    const agoText = 'ago';

    if (interval >= 1) {
      const text = interval === 1 ? ' year ' : ' years ';
      return interval + text + agoText;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      const text = interval === 1 ? ' month ' : ' months ';
      return interval + text + agoText;
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      const text = interval === 1 ? ' day ' : ' days ';
      return interval + text + agoText;
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      const text = interval === 1 ? ' year ' : ' years ';
      return interval + text + agoText;
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      const text = interval === 1 ? ' minute ' : ' minutes ';
      return interval + text + agoText;
    }
    return Math.floor(seconds) + ' seconds';
  }

  public static removeYoutubeFromUrl(url: string): string {
    if (url) {
      return url
        .replace('https://www.youtube.com', '')
        .replace('https://youtube.com', '')
        .replace('http://www.youtube.com', '')
        .replace('http://youtube.com', '');
    } else {
      return '#';
    }
  }

  public static getVideoThumbnails(id: string): Array<object> {
    return [
      {
        quality: 'maxres',
        url: `https://invidio.us/vi/${id}/maxres.jpg`,
        width: 1280,
        height: 720,
      },
      {
        quality: 'maxresdefault',
        url: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
        width: 1280,
        height: 720,
      },
      {
        quality: 'sddefault',
        url: `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
        width: 640,
        height: 480,
      },
      {
        quality: 'high',
        url: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        width: 480,
        height: 360,
      },
      {
        quality: 'medium',
        url: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
        width: 320,
        height: 180,
      },
      {
        quality: 'default',
        url: `https://i.ytimg.com/vi/${id}/default.jpg`,
        width: 120,
        height: 90,
      },
      {
        quality: 'start',
        url: `https://i.ytimg.com/vi/${id}/1.jpg`,
        width: 120,
        height: 90,
      },
      {
        quality: 'middle',
        url: `https://i.ytimg.com/vi/${id}/2.jpg`,
        width: 120,
        height: 90,
      },
      {
        quality: 'end',
        url: `https://i.ytimg.com/vi/${id}/3.jpg`,
        width: 120,
        height: 90,
      },
    ];
  }

  public static getAuthorThumbnails(url: string): Array<object> {
    if (url) {
      const id = url.replace(/=s.*-c-k-c0xffffffff-no-rj-mo/i, '');
      return [
        {
          url: id + '=s32-c-k-c0xffffffff-no-rj-mo',
          width: 32,
          height: 32,
        },
        {
          url: id + '=s48-c-k-c0xffffffff-no-rj-mo',
          width: 48,
          height: 48,
        },
        {
          url: id + '=s76-c-k-c0xffffffff-no-rj-mo',
          width: 76,
          height: 76,
        },
        {
          url: id + '=s100-c-k-c0xffffffff-no-rj-mo',
          width: 100,
          height: 100,
        },
        {
          url: id + '=s176-c-k-c0xffffffff-no-rj-mo',
          width: 176,
          height: 176,
        },
        {
          url: id + '=s512-c-k-c0xffffffff-no-rj-mo',
          width: 512,
          height: 512,
        },
      ];
    } else {
      return [];
    }
  }

  public static getAuthorThumbnailsForRecommended(url: string): Array<object> {
    if (url) {
      const id = url.replace(/s.*-c-k-no-mo-rj-c0xffffff\/photo.jpg/i, '');
      return [
        {
          url: id + '/s32-c-k-no-mo-rj-c0xffffff/photo.jpg',
          width: 32,
          height: 32,
        },
        {
          url: id + '/s48-c-k-no-mo-rj-c0xffffff/photo.jpg',
          width: 48,
          height: 48,
        },
        {
          url: id + '/s76-c-k-no-mo-rj-c0xffffff/photo.jpg',
          width: 76,
          height: 76,
        },
        {
          url: id + '/s100-c-k-no-mo-rj-c0xffffff/photo.jpg',
          width: 100,
          height: 100,
        },
        {
          url: id + '/s176-c-k-no-mo-rj-c0xffffff/photo.jpg',
          width: 176,
          height: 176,
        },
        {
          url: id + '/s512-c-k-no-mo-rj-c0xffffff/photo.jpg',
          width: 512,
          height: 512,
        },
      ];
    } else {
      return [];
    }
  }
}
