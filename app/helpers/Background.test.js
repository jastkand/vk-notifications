import { listPosts } from './Background'

it('listPosts', () => {
  let posts = [
    {
      groupId: -123,
      totalPostsCount: 2,
      posts: [
        { text: '1', date: 1 },
        { text: '2', date: 2 },
      ],
    },
    {
      groupId: -321,
      totalPostsCount: 3,
      posts: [
        { text: '3', date: 3 },
        { text: '4', date: 4 },
        { text: '5', date: 5 },
      ],
    },
  ];

  expect(listPosts(posts).map((p) => p.text)).toEqual(['5', '4', '3', '2', '1']);
});
