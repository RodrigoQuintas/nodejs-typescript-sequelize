import { User } from '@models/User';

it('should be a jest test', () => {
  const user = new User();
  user.name = 'Rodrigo';

  expect(user.name).toEqual('Rodrigo');
});
