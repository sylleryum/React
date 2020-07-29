import React from "react";

/*
  firstName: "",
  lastName: "",
  age: 0, number input
  gender: "", radio
  location: "", select
  restriction: "" checkbox
*/
function theForm(props) {
  return (
    <form>
      <input
        type="text"
        value={props.formInfo.firstName}
        name="firstName"
        placeholder="First name"
        onChange={props.onClicking}
      />
      <br />
      <input
        type="text"
        value={props.formInfo.lastName}
        name="lastName"
        placeholder="Last name"
        onChange={props.onClicking}
      />
      <br />
      <input
        type="number"
        value={props.formInfo.age}
        name="age"
        placeholder="age"
        onChange={props.onClicking}
      />
      <br />
      <input
        type="radio"
        value="Male"
        checked={props.formInfo.gender === "Male"}
        name="gender"
        onChange={props.onClicking}
      />
      Male
      <br />
      <input
        type="radio"
        value="Female"
        checked={props.formInfo.gender === "Female"}
        name="gender"
        onChange={props.onClicking}
      />
      Female
      <br />
      <select
        value={props.formInfo.location}
        name="location"
        onChange={props.onClicking}
      >
        <option value="Japan">Japan</option>
        <option value="Italy">Italy</option>
        <option value="Germany">Germany</option>
      </select>
      <br />
      <br />
      Restrictions
      <br />
      <input
        type="checkbox"
        name="vegetarian"
        checked={props.formInfo.vegetarian}
        onChange={props.onClicking}
      />
      Vegetarian
      <input
        type="checkbox"
        name="glutenFree"
        checked={props.formInfo.glutenFree}
        onChange={props.onClicking}
      />
      Gluten free
      <br />
      <br />
      <button
        onClick={() =>
          alert(
            props.formInfo.firstName +
              props.formInfo.lastName +
              props.formInfo.age +
              props.formInfo.gender +
              props.formInfo.location
          )
        }
      />
    </form>
  );
}

export default theForm;
