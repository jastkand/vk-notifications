import { listPosts } from './Background'

it('listPosts', () => {
  let posts = [
    { groupId: -123, totalPostsCount: 2, posts: ['1', '2'] },
    { groupId: -321, totalPostsCount: 3, posts: ['3', '4', '5'] },
  ];

  expect(listPosts(posts)).toEqual(['5', '4', '3', '2', '1']);
});
