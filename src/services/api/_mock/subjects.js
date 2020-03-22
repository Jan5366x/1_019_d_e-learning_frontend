import nanoid from 'nanoid';

export default [
  {
    _id: nanoid(),
    title: 'Mathe',
    courses: [
      { _id: nanoid(), title: 'Mathe 10d', color: 'orange' },
      { _id: nanoid(), title: 'Mathe 8b', color: 'orange' },
      { _id: nanoid(), title: 'Mathe LK 12', color: 'purple' },
      { _id: nanoid(), title: 'Mathe GK 11', color: 'purple' },
    ],
  },
  {
    _id: nanoid(),
    title: 'Chemie',
    courses: [
      { _id: nanoid(), title: 'Chemie 8b', color: 'blue' },
      { _id: nanoid(), title: 'Chemie LK 12', color: 'green' },
      { _id: nanoid(), title: 'Chemie GK 11', color: 'green' },
    ],
  },
];
