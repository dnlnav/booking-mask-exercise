const language = document.documentElement.lang || 'en';

interface tagsType {
  [key: string]: {
    [key: string]: string;
  };
}

const tags: tagsType = {
  en: {
    CLOSE_BUTTON: 'Close',
  },
};

export const getTag = (tagName: string) => tags[language][tagName];
