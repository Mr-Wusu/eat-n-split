/* eslint-disable react/prop-types */
import Button from "./Button";
function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>

      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} NGN{Math.abs(friend.balance)}.00
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}
        </p>
      ) : (
        <p>You and {friend.name} are square</p>
      )}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
