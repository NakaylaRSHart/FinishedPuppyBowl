import { useState } from "react";

const NewPlayerForm = ({baseUrl, setNeedsUpdating}) => {

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const postPlayer = async () => {
    try {
      const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          breed: breed,
          imageUrl: imageUrl
        })
      });
      const result = await response.json();
      console.log(result);
      setName("")
      setBreed("");
      setImageUrl("");

      if(result.success){
        setNeedsUpdating(true);
      }

    } catch (err) {
      console.log(err);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    postPlayer();
  }

  return (
    <>
      <h3>Add A Puppy</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Puppy Name:
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Puppy Breed:
          <input type="text" id="breed" value={breed} onChange={(e) => setBreed(e.target.value)}></input>
        </label>
        <label>
          Puppy Picture:
          <input type="text" id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
        </label>
        <button type="submit">Add Puppy</button>
      </form>
    </>
  );
};

export default NewPlayerForm;
