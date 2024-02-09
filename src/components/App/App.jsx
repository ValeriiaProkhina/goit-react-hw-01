import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";
import { Profile } from "../Profile/Profile";
import { FriendList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

// src/components/App.jsx

// import { UserMenu } from './UserMenu';

// export default function App ()  {
//   return (
//     <>
//       <UserMenu name='Mango' />
//     </>
//   );
// }

// import { Alert } from './Alert'
/* <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert> */

// import { Mailbox } from "./Mailbox";
// import { Product } from "./Product";
// import {BookList} from "./BookList"
// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" }
// ];

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//       <Mailbox
//         name='Mango'
//         unreadMessages={[1, 2, 3]}
//       />
//         <>
// 			<h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//     </div>
//   );
// }
