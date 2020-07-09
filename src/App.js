import React from "react";

import Profile from "../src/components/Profile/Profile";
import user from "../src/ListJson/user.json";
import Statistics from "../src/components/Statistics/Statistics";
import statisticalData from "../src/ListJson/statistical-data.json";
import FriendList from "../src/components/Friends/FriendList";
import friends from "../src/ListJson/friends.json";
import TransactionHistory from "../src/components/TransactionHistory/TransactionHistory";
import transactions from "../src/ListJson/transactions.json";

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
