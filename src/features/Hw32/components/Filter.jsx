import { Label, Input } from "../Styles/Filter";

export const Filter = ({ onChange, value }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <form>
      <Label>
        Search contact by name
        <Input type="text" name="filter" placeholder="Search by name" value={value} onChange={handleChange} />
      </Label>
    </form>
  );
};
