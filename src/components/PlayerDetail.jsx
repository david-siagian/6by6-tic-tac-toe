import { useState } from "react";

export default function PlayerDetail({ name, symbol, isActive, editName }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevEditingState) => !prevEditingState);
  };

  const handleNameEdit = (symbol, newName) => editName(symbol, newName);

  const editingState = isEditing ? (
    <input
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={(e) => handleNameEdit(symbol, e.target.value)}
    ></input>
  ) : (
    <span className="player-name">{name}</span>
  );

  return (
    <li className={`player${isActive ? " active" : ""}`}>
      {editingState}
      <span className="player-symbol">{symbol}</span>
      <button type="button" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
