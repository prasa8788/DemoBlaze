const totalUsers = 1;
const testUsers = [];

//dynamically generate users
for (let i = 0; i < totalUsers; i++) 
{
    testUsers.push(
    {
        username: `userE${i}`,
        password: `passwordE${i}`
    });
}

//loop through users and perform actions
async function forEachUser(page, actionCallback) 
{
    for (const user of testUsers) 
        {
            await actionCallback(user, page);
        }
}

//get a single user (default: first user)
function getUser(index = 0) 
{
    return testUsers[index];
}

const user = 
[
  {
    uname: "John Doe",
    ucountry: "United Kingdom",
    ucity: "London",
    ucreditCard: "4111111111111111",
    umonth: "12",
    uyear: "2026",
  }
];

module.exports = 
{
    testUsers,
    forEachUser,
    getUser,
    user
};