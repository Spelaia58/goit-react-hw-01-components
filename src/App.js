import React from "react";

import Profile from "../src/components/Profile/Profile";
import user from "../src/components/Profile/user.json";
import Statistics from "../src/components/Statistics/Statistics";
import statisticalData from "../src/components/Statistics/statistical-data.json";
import FriendList from "../src/components/FriendList/FriendList";
import friends from "../src/components/FriendList/friends.json";
import TransactionHistory from "../src/components/TransactionHistory/TransactionHistory";
import transactions from "../src/components/TransactionHistory/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
