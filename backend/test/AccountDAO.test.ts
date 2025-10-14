import { AccountDAODatabase } from '../src/AccountDAO';

test('should persist account', async () => {
  const accountDAO = new AccountDAODatabase();
  const account = {
    accountId: crypto.randomUUID(),
    name: 'John Doe',
    email: 'jhon.doe@email.com',
    document: '123.456.789-09',
    password: 'Abcd1234',
  };
  await accountDAO.saveAccount(account);
  const accountData = await accountDAO.getAccountById(account.accountId);
  expect(accountData.name).toBe(account.name);
  expect(accountData.email).toBe(account.email);
  expect(accountData.document).toBe(account.document);
  expect(accountData.password).toBe(account.password);
});
